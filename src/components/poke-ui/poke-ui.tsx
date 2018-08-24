import { Component, Prop, State } from "@stencil/core";
import '@stencil/router';

import { PokeConf } from '../../utils/interfaces';

@Component({
  tag: "poke-ui",
  styleUrl: "poke-ui.scss"
})
export class PokeUi {
  @Prop() baseUrl: string;

  @State() pokeConf: PokeConf;

  async componentWillLoad() {
    let response = await fetch('/assets/conf.json');
    this.pokeConf = await response.json();
    console.log('[poke-ui] got json conf', this.pokeConf);
  }

  render() {
    return (
      <div>

        <stencil-router>
          <header class="navbar bg-primary container">
            <section class="navbar-section">
              <poke-logo></poke-logo>
            </section>
          </header>

          <main class="container">
            <div class="m-1 p-1">
              <stencil-route
                url="/signin"
                component="poke-sign-in"
                componentProps={{pokeConf:this.pokeConf}}
                exact={true}
              />

              <stencil-route
                url={['/', '/uptime']}
                component="poke-uptime"
                componentProps={{pokeConf:this.pokeConf}}
                exact={true}
              />
            </div>
          </main>
        </stencil-router>
      </div>
    );
  }
}
