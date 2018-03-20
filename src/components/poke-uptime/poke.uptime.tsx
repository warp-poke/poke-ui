import { Component, Method, Prop, State } from "@stencil/core";
import { RouterHistory } from '@stencil/router';

import { PokeService } from '../../utils/interfaces';



@Component({
  tag: "poke-uptime",
  styleUrl: "poke-uptime.scss"
})
export class PokeUptime {

  @Prop() history: RouterHistory;

  @State() authToken: String = window.localStorage.getItem('authToken'); 
  @State() loading: boolean = false;
  @State() services: Array<PokeService>;

  componentWillUpdate() {
    console.log('[poke-uptime] componentWillUpdate', this.services);
  }

  componentDidUpdate() {
    console.log('[poke-uptime] componentDidUpdate', this.services);
  }
  componentWillLoad() {
    console.log('[poke-uptime] componentWillLoad', this.services);
  }
  componentDidUnload() {
    console.log('[poke-uptime] componentDidUnload', this.services);
  }



  componentDidLoad() {
    console.log('[poke-uptime] componentDidUpdate ');
    if (!this.authToken) {
      console.log('[poke-uptime] componentDidUpdate - token not found');
      this.history.push(`/signin`, {});
    }
    if (!this.services) {
      this.loadServices();
    }
  }  

  @Method()
  loadServices() {
    let url: string = `https://warp-poke-scheduler.cleverapps.io/services`;
    let options: RequestInit = {
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${this.authToken}`,
      },
      mode: 'cors',
      redirect: 'follow',  
      method: 'GET',   
    };    

    this.loading = true;    

    fetch(url, options).then( response => {
      if (!response.ok) {
        throw new Error(`Response: ${response.status} - ${response.statusText}`);
      }
      return response.json();
    }).then( (data) => {
      console.log('[poke-uptime] componentDidUpdate - Got services', data);
      let services = [];
      data.items.map( (item) => {
        let service: PokeService = item.service;
        service.checks = item.checks;
        services.push(service);
      })
      this.services = services;
    }).catch( (error) => {
      console.error('[poke-sign-in] handleClick - There has been a problem with your fetch operation:',
          error.message);
      this.loading = false;
    });;
  }

  render() {
    return(
      <div class="services">
        {
          (this.services && this.services.length > 0) ? 
          this.services.map( (service) =>  
            <poke-uptime-service service={service}></poke-uptime-service> 
          ) : 
          '' 
        }

      </div>
    );
  }

}