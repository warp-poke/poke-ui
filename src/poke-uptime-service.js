import { LitElement, html } from '@polymer/lit-element';
import spectreCSS from './css/granite-lit-spectre-min';

import './poke-uptime-check';


class PokeUptimeService extends LitElement {

  /**
   * Non rendering triggering properties
   *  warpscript: { type: String },
   *  options: { type: Object },
   */

  static get properties() {
    return {
      service: { type: Object },
      checks: { type: Array },
      warpEndpoint: { type: String },
      warp10Token: { type: String },
      debug: { type: Boolean },
    };
  }

  connectedCallback() {
    super.connectedCallback();

    this.instance = Math.random().toString(36).substring(7);
    this.getChecks();
  }

  getChecks() {
    if (! this.service.checks) {
      return;
    }
    this.checks = [ ...this.service.checks ];
    if (this.debug) {
      console.log(`[poke-uptime-service] getChecks`, this.checks);
    }

    this.getWarpscript();
    this.queryServer();
  }

  getWarpscript() {
    if (this.debug) {
      console.log('[poke-uptime-service] getWarpscript', this.warpscript);
    }
    this.warpscript = `
      [
        '${this.warp10Token}'
        'http.response.time' { 'service_id'  '${this.service.service_id}' }
        NOW 6 h
        FETCH
        bucketizer.mean
        NOW
        0
        150
      ] BUCKETIZE

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
    this.prepareQuery();
  }

  prepareQuery() {
    this.options = {
      headers: {},
      mode: 'cors',
      redirect: 'follow',
      method: 'POST',
      body: this.warpscript,
    };
  }

  async queryServer() {
    if (this.warpscript) {
      try {
        let response = await fetch(`${this.warpEndpoint}`, this.options);
        if (!response.ok) {
          throw new Error(`Response: ${response.status} - ${response.statusText}`);
        }

        let data = await response.json();
        if (this.debug) {
          console.log('[poke-uptime-service] queryServer - Got Warp 10 response', data);
        }
        this.gotResponse(data);
      } catch (error) {
        console.error(
            '[poke-uptime-service] queryServer - There has been a problem with your fetch operation:',
            error.message);
      } 
    }
    window.setTimeout(() => this.queryServer(), 60000);
  }

  gotResponse(stack) {
    if (stack.length != 2) {
      throw(`Warp 10 response doens't fit expected format`);
    }
    let httpResponseStatus = stack[0];
    let httpResponseTime = stack[1];

    httpResponseStatus.map( (item) => {
      this.checks.forEach( (check, index) => {
        if (this.debug) {
          console.log(`[poke-uptime-service] httpResponseStatus ${check.check_id}`);
        }
        if (check.check_id == item.l.check_id) {
          let zone = item.l.zone || '';
          if (!this.checks[index].zones) {
            this.checks[index].zones = {};
          } 
          if (!this.checks[index].zones[zone]) {
            this.checks[index].zones[zone] = {};
          }
          this.checks[index].zones[zone].status  = item.v[0][item.v[0].length-1];
          if (this.debug) {
            console.log(`[poke-uptime-service] httpResponseStatus ${item.v[0][item.v[0].length-1]} for service ${check.service_id}, zone ${zone} and check ${check.check_id}`, this.checks[index]);
          }
        }
      });
    });

    httpResponseTime.map( (item) => {
      this.checks.forEach( (check, index) => {
        if (this.debug) {
          console.log(`[poke-uptime-service] httpResponseTime ${check.check_id}`);
        }
        if (check.check_id == item.l.check_id) {
          let zone = item.l.zone || '';
          if (!this.checks[index].zones) {
            this.checks[index].zones = {};
          }
          if (!this.checks[index].zones[zone]) {
            this.checks[index].zones[zone] = {};
          }
          this.checks[index].zones[zone].gts = item;
        }
      });
    });
    this.checks = [ ...this.checks ];
  }


  render() {
    return html`
      ${spectreCSS}
      <style>
        :host {
          display: block;
          padding: 1rem !important;
        }
        .poke-service {
          background: #fff;
          border: .05rem solid #e7e9ed;
          border-radius: .1rem;
          margin: .8rem;
          padding: .8rem;
          display: flex;
          flex-flow: column;
        }
        .poke-service-domain {
          align-self: flex-start;
        }
      </style>
      <div class="poke-service">
        <h5 class="poke-service-domain">${this.service.domain}</h5>
        <div class="poke-checks">
          ${
            this.checks.map( (check) => html`
              <poke-uptime-check
                  domain='${this.service.domain}'
                  .zones='${check.zones}'
                  .check='${check}'
                  warp10Token='${this.warp10Token}'
                  ?debug='${this.debug}'></poke-uptime-check>
            `)
          }
        </div>
      </div>
    `;    
  }
}

window.customElements.define('poke-uptime-service', PokeUptimeService);