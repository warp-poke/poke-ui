import { Component, Element, Prop, State } from "@stencil/core";

import { PokeCheck } from '../../utils/interfaces';


@Component({
  tag: "poke-uptime-check",
  styleUrl: "poke-uptime-check.scss"
})
export class PokeUptimeCheck {

  @Element() el: HTMLElement;

  @Prop() domain: string;
  @Prop() check: PokeCheck;

  @State() status: string;

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