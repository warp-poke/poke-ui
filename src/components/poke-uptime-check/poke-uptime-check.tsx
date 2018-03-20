import { Component, Element, Prop, State, Watch } from "@stencil/core";

import { PokeCheck } from '../../utils/interfaces';


@Component({
  tag: "poke-uptime-check",
  styleUrl: "poke-uptime-check.scss"
})
export class PokeUptimeCheck {

  @Element() el: HTMLElement;

  @Prop() domain: string;
  @Prop() check: PokeCheck;
  @Prop() warp10Token: string;

  @State() status: string;
  @State() warpscript: string;

  @State() url: string = `https://gra1-poke.metrics.ovh.net/api/v0/exec`;
  @State() options: RequestInit;

  @Watch('warp10Token')
  getWarpscript() {
    console.log('[poke-uptime-check] getWarpscript', this.warpscript);
    this.warpscript = `
      '${this.warp10Token}'  
      'http.response.time' { 'service_id'  '${this.check.service_id}' }
      NOW 6 h 
      FETCH
      '${this.warp10Token}'  
      'http.response.status' { 'service_id'  '${this.check.service_id}' }
      NOW -1 
      FETCH
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
      }).catch( (error) => {
        console.error('[poke-uptime] loadWarp10Token - There has been a problem with your fetch operation:',
            error.message);
      });
    }
    window.setTimeout(() => this.queryServer(), 60000);
  }

  componentDidLoad() {
    this.getWarpscript();
    this.queryServer();

  }

  render() {
    return(
      <div class="poke-check">
        { 
          this.status ?
            this.status=='up' ?
            <div class="poke-check-status up"></div> :
            <div class="poke-check-status down"></div>
          :
          <div class="poke-check-status col-1"></div>

        }
        <div class="poke-check-description col-4 ">
          <div class="poke-check-name">
            { this.check.name ? this.check.name : this.domain }
          </div>
          <div class="poke-check-url">
            {this.check.path}
          </div>
        </div>

        <div class="poke-check-type col-1">
          { this.check.secure ? 'HTTPS' : 'HTTP' }
        </div>
      </div>
    );
  }
}