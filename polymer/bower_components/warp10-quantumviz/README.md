# Quantumviz

The **Quantumviz** widget is a [Polymer webcomponent](https://www.polymer-project.org/) to visualize data from the [Warp 10](http://www.warp10.io) platform.


## Utilisation of the widget ##

To use the widget in an HTML page you need:

1. Import the `webcomponents.js` polyfill from the Polymer CDN:

   `<script src="https://cdn.cityzendata.net/quantumviz/latest/webcomponentsjs/webcomponents-lite.js"></script>`

1. Import the `warp10-quantumviz.html` widget from Cityzen Data website:

   `<link rel="import" href="https://cdn.cityzendata.net/quantumviz/latest/warp10-quantumviz/warp10-quantumviz.html">`

1. Use the `<warp10-quantumviz>` tag in your HTML

   `<warp10-quantumviz>YOUR_WARPSCRIPT_CODE_HERE</warp10-quantumviz>`


## Input parameters ##

The **Quantumviz** widget puts onto the stack a series of variables to allow you to interact with them into your WarpScript
script. These variables are:

* `width`: the width in pixels of the widget. It allows you to do a `BUCKETIZE` to limit the number of points in each series
  according to your visualization capabilities.

* `host`: if you aren't using a Cityzen Data entry point in the same domain from which you're serving the widget,
  you must configure the `host` parameter with the base URL (protocol and domain or IP address) of the
  platform version you want to use.


   <warp10-quantumviz host='https://example.org'>YOUR_WARPSCRIPT_CODE_HERE</warp10-quantumviz>


## Expected output format ###

The **Quantumviz** widget expects to find in only one item in the Eintein stack, a MAP with the following properties:

* `gts`: a LIST of GTS to plot
* `params`: a LIST of visualisation parameters for each GTS to plot
* `globalParams` (optional): a MAP of global visualisations parameters

The two list must have the same size.

Each item in `param` is a MAP of (mostly optional) parameters to apply to the corresponding item in `gts` LIST.
Available parameters are:

* `key`: the legend to associate to the GTS
* `color` (optional): the color of the line, as an CSS compliant color STRING (e.g.: `#cc0505`)
* `interpolate`: the interpolating function for the GTS.  Default mode is `linear`, other
   usual modes are `step`  and `cardinal`. 
* `strokeWidth`: the width in pixels of the GTS representation

`globalParams` is an optional MAP of parameters to apply to the whole chart.
Available parameters are:

* `interpolate`: the default interpolating function used.  Default mode is `linear`, other
  usual modes are `step`  and `cardinal`. 

* `strokeWidth`: the defaault global width in pixels of the GTS representation. If no set, it will be fixed by the element.

* `timestamps`: if the value of this parameter is `true`, the time will be shown as timestaps (in microseconds) instead 
  of as UTC dates  

* `tickList`: this parameter allows to generate custom-placed tick marks on x-axis instead of using default tick marks.
  It can be:

    * a list of ticks
    * a map where keys are the ticks and the values are the label associated to the tick


## Example of use ##
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>warp10-quantumviz</title>
  <script src="https://cdn.cityzendata.net/quantumviz/latest/webcomponentsjs/webcomponents-lite.js"></script>
  <link rel="import" href="https://cdn.cityzendata.net/quantumviz/latest/warp10-quantumviz/warp10-quantumviz.html">
</head>
<body>
   <warp10-quantumviz width="500" height="400">
     'TOKEN'
     'com.cityzendata.tutorial.sensors.temperature'
     0 ->MAP
     '2013-12-30T00:00:00.000Z'
     '2014-01-05T23:59:59.999Z'
     5 ->LIST
     FETCH
     bucketizer.mean       // bucketizer
     0                     // lastbucket
     0                     // bucketspan
     $width                // bucketcount
     5 ->LIST BUCKETIZE    // BUCKETIZE
     'fetch' STORE
     $fetch 0 GET $fetch 1 GET
     2 ->LIST
     'gts' STORE

     'color' '#ff1010'
     'key' 'Temperature A'
     4 ->MAP
     'color' '#1010ff'
     'key' 'Temperature B'
     4 ->MAP
     2 ->LIST
     'params' STORE

     'interpolate' 'cardinal'
     2 ->MAP
     'globalParams' STORE

     'gts' $gts
     'params' $params
     'globalParams' $globalParams
     6 ->MAP
</warp10-quantumviz>
</body>
</html>
```

## Another example using the `host` parameter ##

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>warp10-quantumviz</title>
  <script src="https://cdn.cityzendata.net/quantumviz/latest/webcomponentsjs/webcomponents-lite.js"></script>
  <link rel="import" href="https://cdn.cityzendata.net/quantumviz/latest/warp10-quantumviz/warp10-quantumviz.html">
</head>
<body>
  <warp10-quantumviz width="500" height="200" host="https://foo.bar">
  NEWGTS
  100000000 NaN NaN NaN 110 ADDVALUE
  200000000 NaN NaN NaN 120 ADDVALUE
  300000000 NaN NaN NaN 130 ADDVALUE
  400000000 NaN NaN NaN 140 ADDVALUE
  500000000 NaN NaN NaN 140 ADDVALUE
  600000000 NaN NaN NaN 140 ADDVALUE


  NEWGTS
  100000000 NaN NaN NaN 10 ADDVALUE
  200000000 NaN NaN NaN 9 ADDVALUE
  300000000 NaN NaN NaN 8 ADDVALUE
  400000000 NaN NaN NaN 7 ADDVALUE
  500000000 NaN NaN NaN 6 ADDVALUE
  600000000 NaN NaN NaN 8 ADDVALUE
  
  2 ->LIST
  'gts' STORE

  'color' '#ff1010'
  'key' 'Heartrate'
  4 ->MAP
  'color' '#1010ff'
  'key' 'Speed'
  4 ->MAP
  2 ->LIST
  'params' STORE

  'interpolate' 'cardinal'
  2 ->MAP
  'globalParams' STORE

  'gts' $gts
  'params' $params
  'globalParams' $globalParams
  6 ->MAP
 </warp10-quantumviz>
</body>
</html>
```


## Launching Quantumviz from a local server

In order to follow this instructions, you need to have a recent version of [NodeJS](https://nodejs.org) on your computer.

You also need to have Bower and Polyserve programs installed:

```
npm install -g bower polyserve
```


**Instructions**

1.  Checkout Quantumviz project from https://github.com/cityzendata/warp10-quantumviz

1. From your local Quantumviz project root, install the dependencies

  ```
  bower install
  ```

1. From your local Quantumviz project root, launch Polyserve on the `PORT` you want to use:

  ```
  polyserve -p PORT
  ```

1. Components are then available on `localhost:PORT/components/COMPONENT_NAME/COMPONENT.html`

  Examples (on port 8000):

  - http://localhost:8000/components/webcomponentsjs/webcomponents.js
  - http://localhost:8000/components/polymer/polymer.html
  - http://localhost:8000/components/warp10-quantumviz/warp10-display-chart.html
