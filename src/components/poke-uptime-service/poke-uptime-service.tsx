import { Component, Prop, State, Watch } from "@stencil/core";

import { PokeService, Gts, PokeCheck } from '../../utils/interfaces';


@Component({
  tag: "poke-uptime-service",
  styleUrl: "poke-uptime-service.scss"
})
export class PokeUptimeService {

    @Prop() service: PokeService; 
    @Prop() warp10Token: string;

    @State() warpscript: string;
  
    @State() url: string = `https://gra1-poke.metrics.ovh.net/api/v0/exec`;
    @State() options: RequestInit;

    @State() checks: Array<PokeCheck> = [];

    @Watch('service')
    getChecks() {
      if (! this.service.checks) {
        return;
      }
      this.checks = [ ...this.service.checks ];
      console.log(`[poke-uptime-check] getChecks`, this.checks);
    }

    @Watch('warp10Token')
    getWarpscript() {
      console.log('[poke-uptime-check] getWarpscript', this.warpscript);
      this.warpscript = `
        '${this.warp10Token}'  
        'http.response.time' { 'service_id'  '${this.service.service_id}' }
        NOW 6 h 
        FETCH
        [
          '${this.warp10Token}'  
          'http.response.status' { 'service_id'  '${this.service.service_id}' }
          NOW 6 h
          FETCH
          bucketizer.last
          NOW
          0
          1
        ] BUCKETIZE

      `;
    }
  
    @Watch('warpscript')  
    prepareQuery() {
      console.log('[poke-uptime-check] prepareQuery', this.warpscript);
      this.options = {
        headers: {},
        mode: 'cors',
        redirect: 'follow',  
        method: 'POST',   
        body: this.warpscript,
      };   
    }

    queryServer() {
      if (this.warpscript) {
        fetch(this.url, this.options).then( response => {
          if (!response.ok) {
            throw new Error(`Response: ${response.status} - ${response.statusText}`);
          }
          return response.json();
        }).then( (data) => {
          console.log('[poke-uptime-check] queryServer - Got Warp 10 response', data);
          this.gotResponse(data);
        }).catch( (error) => {
          console.error('[poke-uptime] loadWarp10Token - There has been a problem with your fetch operation:',
              error.message);
        });
      }
      window.setTimeout(() => this.queryServer(), 60000);
    }

    componentDidLoad() {
      this.getChecks();
      this.getWarpscript();
      this.queryServer();
  
    }


    gotResponse(stack: Array<Array<Gts>>) {
      if (stack.length != 2) {
        throw(`Warp 10 response doens't fit expected format`);
      }
      let httpResponseStatus = stack[0];

      console.log(`[poke-uptime] httpResponseStatus`,httpResponseStatus);

      httpResponseStatus.map( (item) => {
        this.checks.forEach( (check, index) => {       
          console.log(`[poke-uptime] httpResponseStatus ${check.check_id}`);

          if (check.check_id == item.l.check_id) {
            this.checks[index].status  = item.v[0][item.v[0].length-1];
            console.log(`[poke-uptime-service] httpResponseStatus ${item.v[0][item.v[0].length-1]} for service ${check.service_id} and check ${check.check_id}`, this.checks[index]);
          }
        });
        this.checks = [ ...this.checks ]; 
      });
    }

    render() {
      console.log('[poke-uptime-service] render called', this.checks);
      return(
        <div class="poke-service">
          <h5 class="poke-service-domain">{this.service.domain}</h5>
          <div class="poke-checks">
            {
              this.checks.map( (check) =>
                <poke-uptime-check 
                    domain={this.service.domain} 
                    status={check.status}
                    check={check}
                    warp10-token={this.warp10Token}></poke-uptime-check>
              )
            }
          </div>
        </div>
      );
    }
}