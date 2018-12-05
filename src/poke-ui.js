/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/paper-icon-button/paper-icon-button.js';

import './poke-logo';

import './my-icons.js';

// Gesture events like tap and track generated from touch will not be
// preventable, allowing for better scrolling performance.
setPassiveTouchGestures(true);

// Set Polymer's root path to the same value we passed to our service worker
// in `index.html`.
setRootPath(PokeUiGlobals.rootPath);

class PokeUi extends PolymerElement {
  static get template() {
    return html`
      <style>

        :host {
          --app-primary-color: #ff0066;
          --app-secondary-color: #800033;

          display: block;
        }

        app-drawer-layout:not([narrow]) [drawer-toggle] {
          display: none;
        }

        app-header {
          color: #fff;
          background-color: var(--app-primary-color);
        }

        app-header paper-icon-button {
          --paper-icon-button-ink-color: white;
        }

        .drawer-list {
          margin: 0 20px;
        }

        .drawer-list a {
          display: block;
          padding: 0 16px;
          text-decoration: none;
          color: var(--app-secondary-color);
          line-height: 40px;
        }

        .drawer-list a.iron-selected {
          color: black;
          font-weight: bold;
        }

        #drawer-toolbar {
          background-color: var(--app-secondary-color);
        }

      </style>

      <app-location route="{{route}}" url-space-regex="^[[rootPath]]" use-hash-as-path>
      </app-location>

      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
      </app-route>

      <app-drawer-layout fullbleed="" narrow="{{narrow}}" force-narrow>
        <!-- Drawer content -->
        <app-drawer id="drawer" slot="drawer" swipe-open="[[narrow]]">
          <app-toolbar id='drawer-toolbar'>
            <poke-logo></poke-logo>
          </app-toolbar>
          <iron-selector selected="[[page]]" attr-for-selected="name" class="drawer-list" role="navigation">
            <a name="uptime" href="/uptime">Uptime</a>
            <a name="auth" href="/auth">Sign in / sign up</a>
          </iron-selector>
        </app-drawer>

        <!-- Main content -->
        <app-header-layout has-scrolling-region="">

          <app-header slot="header" condenses="" reveals="" effects="waterfall">
            <app-toolbar>
              <paper-icon-button icon="my-icons:menu" drawer-toggle=""></paper-icon-button>
              <div main-title="">
                <poke-logo></poke-logo>
              </div>
            </app-toolbar>
          </app-header>

          <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
            <poke-uptime 
                name="uptime"
                active="[[page]]"
                conf="[[conf]]"
                on-token-not-found="onTokenNotFound"></poke-uptime>
            <poke-auth 
                name="auth" 
                active="[[page]]"
                conf="[[conf]]"
                on-signin-succesful="onSigninSuccesful"></poke-auth>
            <poke-view404 name="view404" conf="[[conf]]"></poke-view404>
          </iron-pages>
        </app-header-layout>
      </app-drawer-layout>
    `;
  }

  static get properties() {
    return {
      conf: {
        type: Object,
      },
      page: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged'
      },
      routeData: Object,
      subroute: Object
    };
  }

  static get observers() {
    return [
      '_routePageChanged(routeData.page)'
    ];
  }

  _routePageChanged(page) {
     // Show the corresponding page according to the route.
     //
     // If no page was found in the route data, page will be an empty string.
     // Show 'uptime' in that case. And if the page doesn't exist, show 'view404'.
    if (!page) {
      this.page = 'uptime';
    } else if (['uptime', 'auth'].indexOf(page) !== -1) {
      this.page = page;
    } else {
      this.page = 'view404';
    }

    // Close a non-persistent drawer when the page & route are changed.
    if (!this.$.drawer.persistent) {
      this.$.drawer.close();
    }
  }

  _pageChanged(page) {
    // Import the page component on demand.
    //
    // Note: `polymer build` doesn't like string concatenation in the import
    // statement, so break it up.
    switch (page) {
      case 'uptime':
        import('./poke-uptime.js');
        break;
      case 'auth':
          import('./poke-auth.js');
          break;
      case 'view404':
        import('./poke-view404.js');
        break;
    }
  }

  constructor() {
    super();
    this.fetchConf();
  }

  async fetchConf() {
    this.conf = {
      'warpEndpoint': 'https://gra1-poke.metrics.ovh.net/api/v0',
      'pokeApiEndpoint': 'https://warp-poke-scheduler.cleverapps.io',
    }
    try {
      let response = await fetch('/etc/conf.json');
      this.conf = await response.json();
      console.log('[poke-ui] got json conf', this.conf);
    } catch(err) {
      console.error('[poke-ui] error while retrieving conf, using default:', this.conf);
    }
  }

  onSigninSuccesful() {
    console.log('[poke-ui] onSigninSuccesful');
    location.hash = `/uptime`;
  }

  onTokenNotFound() {
    console.log('[poke-ui] onTokenNotFound');
    location.hash = '/auth';
  }
}

window.customElements.define('poke-ui', PokeUi);
