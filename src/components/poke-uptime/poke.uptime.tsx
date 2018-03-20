import { Component, Method, Prop, State } from "@stencil/core";
import { RouterHistory } from '@stencil/router';

import { PokeService } from '../../utils/interfaces';



@Component({
  tag: "poke-uptime",
  styleUrl: "poke-uptime.scss"
})
export class PokeUptime {

  @Prop() history: RouterHistory;

  @State() authToken: string = window.localStorage.getItem('authToken'); 
  @State() warp10Token: string;
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
      console.log('[poke-uptime] componentDidUpdate - auth token not found');
      this.history.push(`/signin`, {});
    }
    if (!this.warp10Token) {
      this.loadWarp10Token();
    }
    if (!this.services) {
      this.loadServices();
    }
  }  

  @Method()
  loadWarp10Token() {
    let url: string = `https://warp-poke-scheduler.cleverapps.io/token`;
    let options: RequestInit = {
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${this.authToken}`,
      },
      mode: 'cors',
      redirect: 'follow',  
      method: 'GET',   
    };   

    fetch(url, options).then( response => {
      if (!response.ok) {
        throw new Error(`Response: ${response.status} - ${response.statusText}`);
      }
      return response.json();
    }).then( (data) => {
      if (!data.token) {
        throw new Error('No token found in response');
      }
      console.log('[poke-uptime] loadWarp10Token - Got Warp 10 token', data.token);
      this.warp10Token = data.token;
    }).catch( (error) => {
      console.error('[poke-uptime] loadWarp10Token - There has been a problem with your fetch operation:',
          error.message);
      this.loading = false;
    });; 
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
      console.log('[poke-uptime] loadServices - Got services', data);
      let services = [];
      data.items.map( (item) => {
        let service: PokeService = item.service;
        service.checks = item.checks;
        services.push(service);
      })
      this.services = services;
    }).catch( (error) => {
      console.error('[poke-uptime] loadServices - There has been a problem with your fetch operation:',
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
            <poke-uptime-service service={service} warp10-token={this.warp10Token}></poke-uptime-service> 
          ) : 
          '' 
        }

      </div>
    );
  }

}