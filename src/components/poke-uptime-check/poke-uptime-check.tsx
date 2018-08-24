import { Component, Element, Prop, Watch, State } from "@stencil/core";

import { PokeCheck, Gts, c3Gts } from '../../utils/interfaces';

import timeseriesTools from '@photon-elements/photon-tools/photon-timeseries-tools';

import '@granite-elements/granite-c3/granite-c3-without-importmeta';


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

  @State() c3Data: c3Gts;

  @Watch('gts')
  getC3Data() {
    console.log('[poke-uptime-check] getC3Data', this.gts, this.c3Data);
    this.c3Data = { 
      ...timeseriesTools.timeseriesToC3([this.gts]), 
      unload:true 
    };
  }

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
          { 
            this.gts ? 
            <granite-c3 
            data={ {
              ...timeseriesTools.timeseriesToC3([this.gts]), 
              unload:true,
            } }
            axis={
               {
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
                      let value = y.toFixed(5);
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
              }             
            }
            point={{
              r: 1,
              focus: {
                expand: {
                  enabled: true,
                  r: 4,
                },
              },
            }}
            options= {{
              padding: {
                bottom: 0
              }
            }}
            legend={{show: false}}
            tooltip={{show: false}}
            debug></granite-c3>
            : ''
          }
        </div>
      </div>
    );
  }
}
