import { Component, Element, Prop } from "@stencil/core";

import { PokeCheck, Gts } from '../../utils/interfaces';

@Component({
  tag: "poke-uptime-check",
  styleUrl: "poke-uptime-check.scss"
})
export class PokeUptimeCheck {

  @Element() el: HTMLElement;

  @Prop() domain: string;
  @Prop() check: PokeCheck;

  @Prop() status: string | number | boolean;

  @Prop() gts: Gts;


  render() {
    console.log(`[poke-uptime-check] render called`, this.gts);
    return(
      <div class="poke-check">
        {
          this.status ?
            (typeof this.status == 'string' && (this.status as string).match(/2..|up/)) ||
            (typeof this.status == 'number' &&
              (this.status as number) >= 200 &&
              (this.status as number) < 300 ) ?
            <div class="poke-check-status up">{this.status}</div> :
            <div class="poke-check-status down">{this.status}</div>
          :
          <div class="poke-check-status col-1">{this.status}</div>

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

        <div class="poke-check-history col-6">
          <warp10-display-chart
              data={ this.gts }
              debug></warp10-display-chart>
        </div>
      </div>
    );
  }
}
