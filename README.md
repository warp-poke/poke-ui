# Poke UI 

A simple UI for [Poke](https://github.com/warp-poke).

![Poke](./assets/poke.png)


## Building Poke UI from source

To start, clone this repo :

```bash
git clone https://github.com/warp-poke/poke-ui.git 
cd poke-ui
```

and run:

```bash
npm install
```

To build the app for production, run:

```bash
npm run build
```

The building process will create a `www` folder, that you will serve from your HTTP server.

> ### Polymer elements in the Stencil app
>
> Even if Poke UI is built with Stencil, it includes some Polymer components.
>
> Currently Polymer isn't `npm` based, it still uses `bower` as dependencies manager. Next version on Polymer, 3.x, will migrate to `npm`, but for the moment we need to do some ugly hacks to make them work with Stencil. 
>
> To make things simple, I've committed to the repo the dependencies and the bundlered result of building the Polymer elements, and modified `stencil.config.js` to use them.
>
> A detailed doc on the building process of Polymer 2.x elements in a stencil app will be added soon.


## Serving Poke UI

To serve Poke UI you can use any static web server. The only subtility is that you need to redirect all
the extension-less URLs inside root path to the root path ( e.g. for an install with document root `/poke` you should redirect paths like `/poke/uptime` or `/poke/signin` to `/poke`).

An example of `.htaccess` file for Apache-like servers is included in `src/.htaccess`.

```
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
```




