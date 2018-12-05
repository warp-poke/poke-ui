import { LitElement, html } from '@polymer/lit-element';
import spectreCSS from './css/granite-lit-spectre-min';

import timeseriesTools from '@photon-elements/photon-tools/photon-timeseries-tools';
import '@granite-elements/granite-c3/granite-c3';

class PokeUptimeCheck extends LitElement {

  static get properties() {
    return {
      domain: { type: String },
      zones: { type: Object },
      check: { type: Object },
      debug: { type: Boolean },
    };
  }

  convertToC3Data(gts) {
    return timeseriesTools.timeseriesToC3([gts]);
  }

  _point() {
    return {
      r: 1,
      focus: {
        expand: {
          enabled: true,
          r: 4,
        },
      },
    };
  }

  _options() {
    return {
      padding: {
        bottom: 0
      }
    };
  }

  _axis() {
    return  {
      x: {
        show: true,
        centered: true,
        type: 'timeseries',
        tick: {
          centered: true,
          count: 6,
          outer: false,
          culling: { max: 4 },
          fit: true,
          multiline: true,
          format: (x) => {
              return x.toISOString().replace('T', ' ').replace(/\.[0-9]+Z/, '');
          },
        },
      },
      y: {
        show: true,
        tick: {
          centered: true,
          outer: false,
          fit: true,
          count: 2,
          format: (y) => {
            let value = y.toFixed(2);
            let splittedValue = value.split('.');
            let formattedIntPart = splittedValue[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
            let formattedDecimalPart = splittedValue[1].replace(/0+$/g, '');
            if (formattedDecimalPart.length === 0) {
              return formattedIntPart;
            }
            return formattedIntPart + '.' + formattedDecimalPart;
          },
        },
      },
    }; 
  }

  render() {
    return html`
      ${spectreCSS}
      ${this.getStyles()}
      <style>
        :host {
          display: block;
          padding: 1rem !important;
        }
      </style>
      <div class="poke-check">
        <div class="poke-check-description col-2">
          <div class='poke-check-dot'></div>
          <div class="poke-check-name">
            ${ this.check.name ? this.check.name : '' }
          </div>
          <div class="poke-check-url">
            ${this.check.path}
          </div>    
          <div class="poke-check-type">
            ${ this.check.secure ? '(HTTPS)' : '(HTTP)' }
          </div>
        </div>
        ${ 
          this.zones 
          ? html`
            <div class="poke-check-zones col-9">
              ${Object.keys(this.zones).map(zone => this.renderZone(zone))}
            </div>
          `
          : '' 
        }     
      </div>
    `;
  }

  renderZone(zone) {
    console.log('renderZone', this.zones, zone);
    return html`
      <div class="poke-check-zone">
        
        <div class="poke-check-zone-name  col-2">
          ${zone}
        </div>
        ${
          this.zones[zone].status  
          ? ( typeof this.zones[zone].status == 'string' && this.zones[zone].status.toString().match(/2..|up/)) ||
            ( typeof this.zones[zone].status == 'number' &&
              this.zones[zone].status >= 200 &&
              this.zones[zone].status < 300 
            ) 
            ? html`<div class="poke-check-status up col-1">${this.zones[zone].status}</div>` 
            : html`<div class="poke-check-status down col-1">${this.zones[zone].status}</div>`
          : html`<div class="poke-check-status col-1">${this.zones[zone].status}</div>`
        }    

        <div class="poke-check-history col-9">
          ${ 
            this.zones[zone].gts 
            ? html`
              <granite-c3 
                  .data='${ this.convertToC3Data(this.zones[zone].gts) }'
                  .axis='${ this._axis() }'
                  .point='${ this._point() }'
                  .options='${ this._options() }'
                  .legend='${ {show: false} }'
                  .tooltip='${ {show: false} }'
                  debug></granite-c3>
            `
            :''
          }
        </div>
      </div>
    `;
  }

  getStyles() {
    return html`
      <style>
        .poke-check {
          display: flex;
          flex-flow: row;
          align-items: top;
        }
        .poke-check>div {
          padding: 0.4rem;
        }    
        .poke-check-status {
          font-size: 0.7rem;
          color: #ffffff;
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          background-color: #aaaaaa;
          margin-right: 1rem;
          display: flex;
          flex-flow: column;
          justify-content: center;
          align-items: center;
        }
        .poke-check-status.up {
          background-color: #036d03;
        }
        .poke-check-status.down {
          background-color: #8b0909;
        }
        .poke-check-description {
          display: flex;
          align-items: baseline;
        }
        .poke-check-dot {
          width: 10px;
          height: 10px;
          margin-top: 4px;
          margin-right: 16px;
          border-radius: 5px;
          background-color: #ff0066;
        }
        .poke-check-name {
          font-weight: bold;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .poke-check-url {
          margin-right: 16px;
        }
        .poke-check-type {
           font-size: 0.8em;
        }
        .poke-check-zones {
          display: flex;
          flex-flow: column nowrap;
        }
        .poke-check-zone {
          display: flex;
          flex-flow: row;
          align-items: center;
          padding-top: 16px;
          padding-bottom: 16px;
        }
        .poke-check-history {
          height: 100px;
        }
        granite-c3 {
          height: 100px;
        }
      </style>
    `;
  }
}

window.customElements.define('poke-uptime-check', PokeUptimeCheck);
