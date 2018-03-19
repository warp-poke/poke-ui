import { Component, Prop } from "@stencil/core";

import { PokeService } from '../../utils/interfaces';


@Component({
  tag: "poke-uptime-service",
  styleUrl: "poke-uptime-service.scss"
})
export class PokeUptimeService {

    @Prop() service: PokeService; 


    render() {
      return(
        <div class="poke-service">
          <h4 class="poke-service-domain">{this.service.domain}</h4>
          <div class="poke-checks">
            {
              this.service.checks.map( (check) =>
                <poke-uptime-check domain={this.service.domain} check={check}></poke-uptime-check>
              )
            }
          </div>
        </div>
      );
    }
}