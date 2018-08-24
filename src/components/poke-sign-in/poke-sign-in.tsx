import { Component,  Event, EventEmitter, Method, Prop, State, Watch } from "@stencil/core";
import { RouterHistory } from '@stencil/router';

import { PokeConf } from '../../utils/interfaces';

@Component({
  tag: "poke-sign-in",
  styleUrl: "poke-sign-in.scss"
})
export class PokeSignIn {

  @Prop() history: RouterHistory;
  @Prop() pokeConf: PokeConf;

  @State() message: string = '';
  @State() signupEmail: string = '';
  @State() signupPassword: string = '';
  @State() signinEmail: string = '';
  @State() signinPassword: string = '';
  @State() loading: boolean = false;

  @State() signinDisabled: boolean = true;
  @State() signupDisabled: boolean = true;
  @State() pokeApiEndpoint: string;

  @Event({eventName: 'sign-in-succesful'}) signinSuccesful: EventEmitter;


  @Watch('pokeConf')
  handleConf() {
    console.log('[poke-uptime] handleConf', this.pokeConf);
    this.pokeApiEndpoint = (this.pokeConf && this.pokeConf.pokeApiEndpoint) ?
      this.pokeConf.pokeApiEndpoint :
      'https://warp-poke-scheduler.cleverapps.io';
  }

  @Method()
  singupQuery(event?: UIEvent) {
    console.log('Signing-up', event);

    let url: string = `${this.pokeApiEndpoint}/register`;
    let options: RequestInit = {
      headers: {
        'content-type': 'application/json'
      },
      mode: 'cors',
      redirect: 'follow',  
      method: 'POST',   
      body: JSON.stringify({email: this.signupEmail, password: this.signupPassword})
    };    

    this.loading = true;
    fetch(url, options).then( response => {
      if (!response.ok) {
        throw new Error(`Response: ${response.status} - ${response.statusText}`);
      }
      return;
    }).then( () => {
      this.gotSignUpSuccesful();
    }).catch( (error) => {
      console.error('[poke-sign-up] handleClick - There has been a problem with your fetch operation:',
          error.message);
      this.message = error.message;
      this.loading = false;
    });
  }

  @Method()
  singinQuery(event?: UIEvent) {
    console.log('Signing-in', event);

    let url: string = `${this.pokeApiEndpoint}/login`;
    let options: RequestInit = {
      headers: {
        'content-type': 'application/json'
      },
      mode: 'cors',
      redirect: 'follow',  
      method: 'POST',   
      body: JSON.stringify({email: this.signinEmail, password: this.signinPassword})
    };    

    this.loading = true;
    fetch(url, options).then( response => {
      if (!response.ok) {
        throw new Error(`Response: ${response.status} - ${response.statusText}`);
      }
      return response.json();
    }).then( (data) => {
      if (!data.token) {
        throw new Error('No token found in response');
      }
      this.gotSigninSuccesful(data.token);
    }).catch( (error) => {
      console.error('[poke-sign-in] handleClick - There has been a problem with your fetch operation:',
          error.message);
      this.message = error.message;    
      this.loading = false;
    });
  }


  gotSignUpSuccesful() {
    console.log("[forge-search] gotSignUpSuccesful");
    this.loading = false;
    this.message = 'Sign-up sucessful';
  }

  gotSigninSuccesful(authToken: string) {
    console.log("[forge-search] gotSigninSuccesful, authToken", authToken);
    this.loading = false;
    window.localStorage.setItem('authToken', authToken);
    this.signinSuccesful.emit();
    this.history.push(`/uptime`, {});
  }

  handleSignupEmailChange(event) {
    this.signupEmail = event.target.value;
  }

  handleSignupPasswordChange(event) {
    this.signupPassword = event.target.value;
  }

  handleSigninEmailChange(event) {
    console.log('handleSigninEmailChange');
    this.signinEmail = event.target.value;
  }

  handleSigninPasswordChange(event) {
    console.log('handleSigninPasswordChange');
    this.signinPassword = event.target.value;
  }

  @Watch('signinEmail')
  @Watch('signinPassword')
  checkSigninDisabled() {

    if (this.signinEmail.length > 0 && this.signinPassword.length > 0) {
      this.signinDisabled = false;
      return;
    }
    this.signinDisabled = true;
  }

  @Watch('signupEmail')
  @Watch('signupPassword')
  checkSignUpDisabled() {

    if (this.signupEmail.length > 0 && this.signupPassword.length > 0) {
      this.signupDisabled = false;
      return;
    }
    this.signupDisabled = true;
  }

  render() {
    return ( 
      <div class="sign-up-and-in">
        <div class=" columns">
          <div class="sign-in col-6 col-sm-12">
            <h3>Sign-in</h3>
            <div class="input-group">
              <div class="col-3 col-sm-12">
                <label 
                    class="form-label" 
                    htmlFor="input-email">Email</label>
              </div>
            </div>
            <div class="input-group">
              <div class="col-9 col-sm-12">
                <input
                    class="form-input"
                    id="input-email"
                    type="text"
                    placeholder="Email"
                    onInput={(event) => this.handleSigninEmailChange(event)} />
              </div>
            </div>
            <div class="input-group">
              <div class="col-3 col-sm-12">
                <label 
                    class="form-label" 
                    htmlFor="signin-input-password">Password</label>
              </div>
            </div>
            <div class="input-group">
              <div class="col-9 col-sm-12">
                <input
                    class="form-input"
                    id="signin-input-password"
                    type="password"
                    placeholder="Password"
                    onInput={(event) => this.handleSigninPasswordChange(event)} />
              </div>
            </div>
            <div class="input-group">
              <div class="col-9 col-sm-12">       
                {this.loading ?
                  <button
                    class="btn btn-primary input-group-btn loading">Sign-in</button>
                  :              
                  <button
                      class="btn btn-primary input-group-btn"
                      disabled={this.signinDisabled}
                      onClick={(event: UIEvent) => this.singinQuery(event)}>Sign-in</button>
                }   
              </div>
            </div>
          </div>
          <div class="signup col-6 col-sm-12">
            <h3>Sign-up</h3>
            <div class="input-group">
              <div class="col-3 col-sm-12">
                <label 
                    class="form-label" 
                    htmlFor="signup-input-email">Email</label>
              </div>
            </div>
            <div class="input-group">
              <div class="col-9 col-sm-12">
                <input
                    class="form-input"
                    id="signup-input-email"
                    type="text"
                    placeholder="Email"
                    onInput={(event) => this.handleSignupEmailChange(event)} />
              </div>
            </div>
            <div class="input-group">
              <div class="col-3 col-sm-12">
                <label 
                    class="form-label" 
                    htmlFor="signup-input-password">Password</label>
              </div>
            </div>
            <div class="input-group">
              <div class="col-9 col-sm-12">
                <input
                    class="form-input"
                    id="signup-input-password"
                    type="password"
                    placeholder="Password"
                    onInput={(event) => this.handleSignupPasswordChange(event)} />
              </div>
            </div>
            <div class="input-group">
              <div class="col-9 col-sm-12">       
                {this.loading ?
                  <button
                    class="btn btn-primary input-group-btn loading">Sign-up</button>
                  :              
                  <button
                      class="btn btn-primary input-group-btn"
                      disabled={this.signupDisabled}
                      onClick={(event: UIEvent) => this.singupQuery(event)}>Sign-up</button>
                }   
              </div>
            </div>
          </div>        
        </div>
        { this.message 
          ? <div class="message"> {this.message} </div>
          : ''
        }
      </div>
    );
  }
}