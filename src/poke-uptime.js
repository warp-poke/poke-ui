import { LitElement, html } from '@polymer/lit-element';
import spectreCSS from './css/granite-lit-spectre-min';
import spectreCSSIcons from './css/granite-lit-spectre-icons-min';

import './poke-check-filter';
import './poke-uptime-service';

class PokeUptime extends LitElement {

  constructor() {
    super();
    this.warpEndpoint = `https://gra1-poke.metrics.ovh.net/api/v0`;
    this.filter = '';
  }

  set conf(conf) {
    console.log('[poke-uptime] conf', conf);
    this.warpEndpoint = (conf && conf.warpEndpoint) ? 
        conf.warpEndpoint : 
        `https://gra1-poke.metrics.ovh.net/api/v0`;
    this.pokeApiEndpoint = (conf && conf.pokeApiEndpoint) 
        ? conf.pokeApiEndpoint : 'https://warp-poke-scheduler.cleverapps.io';
  }

  static get properties() {
    return {
      active: { type: String },
      name: { type: String },
      services: { type: Array },
      filter: { type: String },
      conf: {type: Object},
    };
  }

  connectedCallback() {
    super.connectedCallback();
    console.log('[poke-uptime] connectedCallback ');
    this.verifyAuth();
    if (!this.warpEndpoint || !this.pokeApiEndpoint) {
      this.conf = {};
    }
  }  


  shouldUpdate() {
    console.log('[poke-uptime] shouldUpdate ');

    if (!this.verifyAuth()) {
      return false;
    }
    if (!this.warp10Token) {
      this.loadWarp10Token();
    }
    if (!this.services) {
      this.loadServices();
    }
    return true;
  }

  verifyAuth() {
    this.authToken = window.localStorage.getItem('authToken');

    if (!this.authToken) {
      this.dispatchEvent(new CustomEvent('token-not-found'));
      return false;
    }
    return true;
  }

  async loadWarp10Token() {
    let url = `${this.pokeApiEndpoint}/token`;
    console.log('loadWarp10Token URL', url);
    let options = {
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${this.authToken}`,
      },
      mode: 'cors',
      redirect: 'follow',  
      method: 'GET',   
    };   

    try {
      let response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Response: ${response.status} - ${response.statusText}`);
      }

      let data = await response.json();
      if (!data.token) {
        throw new Error('No token found in response');
      }
      this.warp10Token = data.token;

    } catch(error) {
      console.error('[poke-uptime] loadWarp10Token - There has been a problem with your fetch operation:',
          error.message);
    }    
  }

  async loadServices() {
    let url = `${this.pokeApiEndpoint}/services`;
    console.log('loadServices URL', url);
    let options = {
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${this.authToken}`,
      },
      mode: 'cors',
      redirect: 'follow',  
      method: 'GET',   
    };   

    try {
      let response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Response: ${response.status} - ${response.statusText}`);
      }

      let data = await response.json();
      console.log('[poke-uptime] loadServices - Got services', data);

      let services = [];
      data.items.map( (item) => {
        let service = item.service;
        service.checks = item.checks;
        services.push(service);
      })
      this.services = services;

    } catch(error) {
      console.error('[poke-uptime] loadServices - There has been a problem with your fetch operation:',
          error.message);
    }    
  }

  filterServices() {
    if (!this.services) {
      return [];
    }
    if (!this.filter) {
      return this.services;
    } 
    let pattern =  new RegExp(this.filter);
    return this.services.filter((service) => {
      return ( !!service.domain && service.domain.match(pattern)) 
          || (!!service.name && service.name.match(pattern));
    });
  }


  onFilterChange(evt) {
    console.log('[poke-ui] onFilterChange', evt);
    this.filter = evt.detail.filter;
    this.saveFilter();
  }

  saveFilter() {    
    location.hash = `/${this.name}/${this.filter}`;
    localStorage.setItem('poke.preferences.filter', this.filter);
  }

  addService() {
    console.log('[poke-uptime] addService');
  }

  render() {
    if (this.active != this.name) {
      return '';
    }

    let filteredServices = this.filterServices();
    console.log('[poke-ui] render - filteredServices', filteredServices);

    if (!this.services || this.services.length == 0) {
      console.log('[poke-ui] rendering empty', this.services);  
      return html`
        ${spectreCSS}
        ${spectreCSSIcons}
        <style>
          :host {
            display: block;
            padding: 1rem !important;
          }
          .services {
            display: flex;
            justify-content: center;
          }
          .fab {
            float:right;
            margin: .8rem;
          }
          .btn-fab {
            width: 40px !important;
            height: 32px !important;
          }
        </style>

        <div class="fab">
          <button 
              class="btn btn-primary btn-action btn-lg s-circle btn-fab"
              @click="${this.addService}">
            <i class="icon icon-plus"></i>
          </button>
        </div>
        <div class="services"><h2>No services found...</h2></div>

      `;
    }

    return html`
      ${spectreCSS}
      ${spectreCSSIcons}
      <style>
        :host {
          display: block;
          padding: 1rem !important;
        }
        .poke-check-filter {
          margin: .8rem;
        }
        .fab {
          float:right;
          margin: .8rem;
        }
        .btn-fab {
          width: 40px !important;
          height: 32px !important;
        }
      </style>
      
      <div class="services">
        <div class="fab">
          <button 
              class="btn btn-primary btn-action btn-lg s-circle btn-fab"
              @click="${this.addService}">
            <i class="icon icon-plus"></i>
          </button>
        </div>
        <div class="poke-check-filter">
          <poke-check-filter 
              filter='${this.filter}'
              @filter-change='${this.onFilterChange}'></poke-check-filter>
        </div>
      </div>
      ${filteredServices.map( (service, index) =>
        (index < 100) 
        ? html`
            <poke-uptime-service 
              .service='${service}' 
              warp10Token='${this.warp10Token}' 
              warpEndpoint='${this.warpEndpoint}'></poke-uptime-service>
          `
        : ''
      )}
    `;
  }
}

window.customElements.define('poke-uptime', PokeUptime);