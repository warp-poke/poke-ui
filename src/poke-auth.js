import { LitElement, html } from '@polymer/lit-element';
import spectreCSS from './css/granite-lit-spectre-min';

console.log(spectreCSS)
class PokeAuth extends LitElement {

  constructor() {
    super();
    this.message = '';
    
    this.loading = false;
    this.signupDisabled = true;
    this.signinDisabled = true;

    this.pokeApiEndpoint = 'https://warp-poke-scheduler.cleverapps.io';
    this.signupEmail = '';
    this.signupPassword = '';
    this.signinEmail = '';
    this.signinPassword = '';
  }

  /**
   * Non rendering triggering properties
   *  signupEmail: { type: String },
   *  signupPassword: { type: String },
   *  signinEmail: { type: String },
   *  signinPassword: { type: String },
   *  pokeApiEndpoint: { type: String },
   */

  static set conf(conf) {
    this.pokeApiEndpoint = (conf && conf.pokeApiEndpoint) 
        ? this.conf.pokeApiEndpoint : 'https://warp-poke-scheduler.cleverapps.io';
  }

  static get properties() {
    return {
      message: { type: String },      
      loading: { type: Boolean },    
      signinDisabled: { type: Boolean },
      signupDisabled: { type: Boolean },
    };
  }

  async singupQuery() {
    console.log('[poke-auth] Signing-up');

    let url = `${this.pokeApiEndpoint}/register`;
    let options = {
      headers: {
        'content-type': 'application/json'
      },
      mode: 'cors',
      redirect: 'follow',  
      method: 'POST',   
      body: JSON.stringify({email: this.signupEmail, password: this.signupPassword}),
    };    

    this.loading = true;

    try {
      let response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Response: ${response.status} - ${response.statusText}`);
      }
      console.log('[poke-auth] Signing-up succesful');
      this.message = 'Sign-up sucessful';
    } catch(error) {
      console.error(
        '[poke-auth] Signing-up - There has been a problem with your fetch operation:',
        error.message
      );
      this.message = error.message;
    };
    this.loading = false;
  }

  async singinQuery() {
    console.log('[poke-auth] Signing-in');

    let url = `${this.pokeApiEndpoint}/login`;
    let options = {
      headers: {
        'content-type': 'application/json'
      },
      mode: 'cors',
      redirect: 'follow',  
      method: 'POST',   
      body: JSON.stringify({email: this.signinEmail, password: this.signinPassword})
    };    

    this.loading = true;

    try {
      let response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Response: ${response.status} - ${response.statusText}`);
      }

      let data = await response.json();
      if (!data.token) {
        throw new Error('No token found in response');
      }

      console.log("[poke-auth] Signing-in succesful, authToken", authToken);
      window.localStorage.setItem('authToken', authToken);
      window.dispatchEvent(new Event('sign-in-succesful'));
    } catch(error) {
      console.error('[poke-sign-in] Signing-in error - There has been a problem with your fetch operation:',
          error.message);
      this.message = error.message;   
    }
    this.loading = false;
  }

  handleSigninEmailChange(evt) {
    this.signinEmail = this.renderRoot.querySelector('#signin-input-email').value;
    console.log("[poke-auth] handleSigninEmailChange", this.signinEmail);
    this.checkSigninDisabled();
  }
  handleSigninPasswordChange(evt) {
    this.signinPassword = this.renderRoot.querySelector('#signin-input-password').value;
    console.log("[poke-auth] handleSigninPasswordChange", this.signinPassword);
    this.checkSigninDisabled();
  }

  handleSignupEmailChange(evt) {
    this.signupEmail = this.renderRoot.querySelector('#signup-input-email').value;
    console.log("[poke-auth] handleSignupEmailChange", this.signupEmail);
    this.checkSignupDisabled();
  }
  handleSignupPasswordChange(evt) {
    this.signupPassword = this.renderRoot.querySelector('#signup-input-password').value;
    console.log("[poke-auth] handleSignupPasswordChange", this.signupPassword);
    this.checkSignupDisabled();
  }


  checkSigninDisabled() {
    if (this.signinEmail.length > 0 && this.signinPassword.length > 0) {
      console.log("[poke-auth] checkSigninDisabled", this.signinEmail, this.signinPassword);
      this.signinDisabled = false;
      return;
    }
    this.signinDisabled = true;
  }
  checkSignupDisabled() {
    if (this.signupEmail.length > 0 && this.signupPassword.length > 0) {
      console.log("[poke-auth] checkSignupDisabled", this.signupEmail, this.signupPassword);
      this.signupDisabled = false;
      return;
    }
    this.signupDisabled = true;
  }

  render() {
    console.log('[poke-auth] rendering', this.signinDisabled)
    return html`
      ${spectreCSS}
      <style>
        :host {
          display: block;
          padding: 1rem !important;
        }
        .input-group {
            margin-bottom: 1rem;
        }
        .input-group .form-input {
            width: 100% !important;
        }
        .message {
            display: flex;
            justify-content: center;
            border-radius: 5px;
            background-color: #ffd5e5;
            padding: 0.5rem 1rem;
        }
      </style>
      <div class='sign-up-and-in'>
        <div class=' columns'>
          <div class='sign-in col-6 col-sm-12'>
            <h3>Sign-in</h3>
            <div class='input-group'>
              <div class='col-3 col-sm-12'>
                <label 
                    class='form-label' 
                    htmlFor='input-email'>Email</label>
              </div>
            </div>
            <div class='input-group'>
              <div class='col-9 col-sm-12'>
                <input
                    class='form-input'
                    id='signin-input-email'
                    type='text'
                    placeholder='Email'
                    @input='${this.handleSigninEmailChange}' />
              </div>
            </div>
            <div class='input-group'>
              <div class='col-3 col-sm-12'>
                <label 
                    class='form-label' 
                    htmlFor='signin-input-password'>Password</label>
              </div>
            </div>
            <div class='input-group'>
              <div class='col-9 col-sm-12'>
                <input
                    class='form-input'
                    id='signin-input-password'
                    type='password'
                    placeholder='Password'
                    @input='${this.handleSigninPasswordChange}' />
              </div>
            </div>
            <div class='input-group'>
              <div class='col-9 col-sm-12'>       
                ${this.loading ?
                  html`<button
                    class='btn btn-primary input-group-btn loading'>Sign-in</button>`
                  :              
                  html`<button
                      class='btn btn-primary input-group-btn'
                      ?disabled='${this.signinDisabled}'
                      @click='${this.singinQuery}'>Sign-in</button>`
                }   
              </div>
            </div>
          </div>
          <div class='signup col-6 col-sm-12'>
            <h3>Sign-up</h3>
            <div class='input-group'>
              <div class='col-3 col-sm-12'>
                <label 
                    class='form-label' 
                    htmlFor='signup-input-email'>Email</label>
              </div>
            </div>
            <div class='input-group'>
              <div class='col-9 col-sm-12'>
                <input
                    class='form-input'
                    id='signup-input-email'
                    type='text'
                    placeholder='Email'
                    @input='${this.handleSignupEmailChange}' />
              </div>
            </div>
            <div class='input-group'>
              <div class='col-3 col-sm-12'>
                <label 
                    class='form-label' 
                    htmlFor='signup-input-password'>Password</label>
              </div>
            </div>
            <div class='input-group'>
              <div class='col-9 col-sm-12'>
                <input
                    class='form-input'
                    id='signup-input-password'
                    type='password'
                    placeholder='Password'
                    @input='${this.handleSignupPasswordChange}' />
              </div>
            </div>
            <div class='input-group'>
              <div class='col-9 col-sm-12'>       
                ${this.loading ?
                  html`<button
                    class='btn btn-primary input-group-btn loading'>Sign-up</button>`
                  :              
                  html`<button
                      class='btn btn-primary input-group-btn'
                      ?disabled='${this.signupDisabled}'
                      @click='${this.singupQuery}'>Sign-up</button>`
                }   
              </div>
            </div>
          </div>        
        </div>
        ${ this.message 
          ? html`<div class='message'> ${this.message} </div>`
          : ''
        }
      </div>    
    `;
  }
}

window.customElements.define('poke-auth', PokeAuth);