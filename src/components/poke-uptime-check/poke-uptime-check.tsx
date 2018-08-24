import { Component, Element, Prop } from "@stencil/core";

import { PokeCheck, PokeCheckResultByZone } from '../../utils/interfaces';

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
  @Prop() zones: { [dynamic:string] : PokeCheckResultByZone }


  render() {
    console.log(`[poke-uptime-check] render called`, this.zones);
    return(
      <div class="poke-check">
        <div class="poke-check-description col-3 ">
          <div class="poke-check-name">
            { this.check.name ? this.check.name : '' }
          </div>
          <div class="poke-check-url">
            Path: {this.check.path}
          </div>
        </div>

        <div class="poke-check-type col-1">
          { this.check.secure ? 'HTTPS' : 'HTTP' }
        </div>  

        <div class="poke-check-zones col-8">
          { 
            Object.keys(this.zones).map(zone => {
              <div class="poke-check-zone">
                {
                  this.zones[zone].status  
                  ? (typeof this.zones[zone].status == 'string' && (this.zones[zone].status as string).match(/2..|up/)) ||
                    (typeof this.zones[zone].status == 'number' &&
                    (this.zones[zone].status as number) >= 200 &&
                    (this.zones[zone].status as number) < 300 ) 
                      ? <div class="poke-check-status up">{this.zones[zone].status}</div> 
                      : <div class="poke-check-status down">{this.zones[zone].status}</div>
                  : <div class="poke-check-status col-1">{this.zones[zone].status}</div>
                }    
                <div class="poke-check-history col-6">
                  { 
                    this.zones[zone].gts ? 
                    <granite-c3 
                    data={ {
                      ...timeseriesTools.timeseriesToC3([this.zones[zone].gts]), 
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
            })
          }
        </div>
      </div>
    );
  }
}
