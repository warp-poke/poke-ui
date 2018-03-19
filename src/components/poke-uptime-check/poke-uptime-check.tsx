import { Component, Prop } from "@stencil/core";

import { PokeCheck } from '../../utils/interfaces';


@Component({
  tag: "poke-uptime-check",
  styleUrl: "poke-uptime-check.scss"
})
export class PokeUptimeCheck {

  @Prop() domain: string;
  @Prop() check: PokeCheck;

  render() {
    return(
      <div class="poke-check">
        <h5 class="poke-check-url">
          {`http${this.check.secure?'s':''}://${this.domain}${this.check.path}`}
        </h5>
      </div>
    );
  }
}