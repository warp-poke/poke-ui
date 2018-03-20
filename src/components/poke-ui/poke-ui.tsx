import { Component, Prop } from "@stencil/core";
import '@stencil/router';

@Component({
  tag: "poke-ui",
  styleUrl: "poke-ui.scss"
})
export class PokeUi {
  @Prop() baseUrl: string;

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
                exact={true}
              />

              <stencil-route
                url={['/', '/uptime']}
                component="poke-uptime"
                exact={true}
              />
            </div>
          </main>
        </stencil-router>
      </div>
    );
  }
}
