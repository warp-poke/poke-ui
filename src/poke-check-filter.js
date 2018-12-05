import { LitElement, html } from '@polymer/lit-element';
import spectreCSS from './css/granite-lit-spectre-min';

class PokeCheckFilter extends LitElement {
  constructor() {
    super();
  }

  static get properties() {
    return {
      value: { type: String },
      filter: { type: String },
    };
  }

  firstUpdated() {
    this.focus();

    this.renderRoot.querySelector('#check-filter-input').focus();
    console.log('[poke-check-filter] firstUpdated', 
      this.renderRoot.querySelector('#check-filter-input'));
  }

  handleChange() {  
    let value = this.renderRoot.querySelector('#check-filter-input').value;
    console.log('[poke-check-filter] handleChange', value);

    this.dispatchEvent(new CustomEvent('filter-change', { detail: { filter: value}}));
  }

  render() {
    return html`
      ${spectreCSS}
      <style>
        :host {
          display: block;
          padding: 1rem !important;
        }
      </style>
      <form id='check-filter-form' class='search'>
        <div class='input-group'>
          <input
              id='check-filter-input'
              class='form-input'
              type='text'
              placeholder='filter...''
              value='${this.filter}'
              @input='${this.handleChange}' />
        </div>
      </form>
    `;
  }
}

window.customElements.define('poke-check-filter', PokeCheckFilter);