import { Component,  Event, EventEmitter, Method, Prop, State, Watch } from "@stencil/core";
import { RouterHistory } from '@stencil/router';


@Component({
  tag: "poke-sign-in",
  styleUrl: "poke-sign-in.scss"
})
export class PokeSignIn {

  @Prop() history: RouterHistory;

  @State() email: string = '';
  @State() password: string = '';
  @State() loading: boolean = false;
  @State() signInDisabled: boolean = true;


  @Event({eventName: 'sign-in-succesful'}) signInSuccesful: EventEmitter;

  @Method()
  queryServer(event?: UIEvent) {
    console.log('Signing-in', event);

    let url: string = `https://warp-poke-scheduler.cleverapps.io/login`;
    let options: RequestInit = {
      headers: {
        'content-type': 'application/json'
      },
      mode: 'cors',
      redirect: 'follow',  
      method: 'POST',   
      body: JSON.stringify({email: this.email, password: this.password})
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
      this.gotSignInSuccesful(data.token);
    }).catch( (error) => {
      console.error('[poke-sign-in] handleClick - There has been a problem with your fetch operation:',
          error.message);
      this.loading = false;
    });;

  }

  gotSignInSuccesful(authToken: string) {
    console.log("[forge-search] gotSignInSuccesful, authToken", authToken);
    this.loading = false;
    window.localStorage.setItem('authToken', authToken);
    this.signInSuccesful.emit();
    this.history.push(`/uptime`, {});
  }

  handleEmailChange(event) {
    this.email = event.target.value;
  }

  handlePasswordChange(event) {
    this.password = event.target.value;
  }

  @Watch('email')
  @Watch('password')
  checkSignInDisabled() {

    if (this.email.length > 0 && this.password.length > 0) {
      this.signInDisabled = false;
      return;
    }
    this.signInDisabled = true;
  }

  render() {
    return (
      <div class="sign-in">
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
                onInput={(event) => this.handleEmailChange(event)} />
          </div>
        </div>
        <div class="input-group">
          <div class="col-3 col-sm-12">
            <label 
                class="form-label" 
                htmlFor="input-password">Password</label>
          </div>
        </div>
        <div class="input-group">
          <div class="col-9 col-sm-12">
            <input
                class="form-input"
                id="input-password"
                type="password"
                placeholder="Password"
                onInput={(event) => this.handlePasswordChange(event)} />
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
                  disabled={this.signInDisabled}
                  onClick={(event: UIEvent) => this.queryServer(event)}>Sign-in</button>
            }   
          </div>
        </div>
      </div>
    );
  }
}