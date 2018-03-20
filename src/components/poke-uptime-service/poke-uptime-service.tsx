import { Component, Prop } from "@stencil/core";

import { PokeService } from '../../utils/interfaces';


@Component({
  tag: "poke-uptime-service",
  styleUrl: "poke-uptime-service.scss"
})
export class PokeUptimeService {

    @Prop() service: PokeService; 
    @Prop() warp10Token: string;


    render() {
      return(
        <div class="poke-service">
          <h5 class="poke-service-domain">{this.service.domain}</h5>
          <div class="poke-checks">
            {
              this.service.checks.map( (check) =>
                <poke-uptime-check 
                    domain={this.service.domain} 
                    check={check}
                    warp10-token={this.warp10Token}></poke-uptime-check>
              )
            }
          </div>
        </div>
      );
    }
}