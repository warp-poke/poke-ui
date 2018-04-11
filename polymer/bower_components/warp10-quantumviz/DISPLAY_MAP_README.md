# display-map syntax 

The `display-map` widget expects to find in only one item in the its data attribute, a map with the following properties:

- `gts`: a list of GTS and or markers to plot
- `params`: a list of visualisation parameters for each GTS to plot
- `globalParams` (optional): a map of global visualisations parameters

The two lists (`gts` and `params` must have the same size).

Each item in `gts` is an object to plot. It can be:

- a GTS with the standard GTS JSON syntax, where the datapoint have a position
  example: `{"gts":[{"c":"","l":{},"a":{},"v":[[1460540141224657,51.45877850241959,-0.01000002957880497,1000,8.090169943749475],[1460540131224657,51.49510562885553,-0.02000005915760994,1000,3.0901699437494745]}`
- a positions list, a map with a `positions` key and a list of positions and values. The item in that list can be:
  - positions only, lat:lon 
    example `{"positions":[[51.5,-0.22],[51.46,-0.3],[51.42,-0.2]]}` 
  - positions and one value (useful, for example, for the `weightedDots` rendering)
    example `{"positions":[[51.2,-0.12,42],[51.36,-0.0,21],[51.32,-0.2,84]]}`    
  - positions and two values (useful, for example, for the `coloredWeightedDots` rendering, first value for the dot size, second for the dot color)
    example   `{"positions":[[51.1,-0.52,42,10],[51.56,-0.4,21,30],[51.42,-0.6,84,40],[51.3,-0.82,42,1],[51.76,-0.7,21,20],[51.62,-0.9,84,45]]}`
  

Each item in `param` is a map of (mostly optional) parameters to apply to the corresponding item in `gts` list.
Available parameters are:

- `key`: the legend to associate to the GTS
- `render`: the type of marker, currently one of
  - `dots`: plain color dots that can customize with additional parameters:
    - `color` (optional): the color of the  dot
    - `borderColor`  (optional): the color of the border of the dot
    - `baseRadius` (optional): the radius of the dot 
  - `weightedDots`: plain color dots with variable radius, that you can customize with additional parameters: 
    - `color` (optional): the color of the  dot
    - `borderColor`  (optional): the color of the border of the dot
    - `baseRadius` (optional): the base radius of the dot 
    - `numSteps` (optional): the number of different dot sizes, the smallest is `1 * baseRadius`, then `2 * baseRadius`, then `3 * baseRadius`...
    - `minValue` and `maxValue`(optional): values lesser than `minValue` will be considered `minValue`, values greater than  `maxValue` will be considered  `maxValue`, values between them will be bucketized into `numSteps` steps and assigned a size
  - `coloredWeightedDots`: same thing that `weightedDots` but with colors that change. Can be custiomized with:
    - `baseRadius` (optional): the base radius of the dot 
    - `numSteps` (optional): the number of different dot sizes, the smallest is `1 * baseRadius`, then `2 * baseRadius`, then `3 * baseRadius`...
    - `minValue` and `maxValue`(optional): values lesser than `minValue` will be considered `minValue`, values greater than  `maxValue` will be considered  `maxValue`, values between them will be bucketized into `numSteps` steps and assigned a size
    - `startColor` and `endColor`
    - `maxColorValue`, `minColorValue` and `numColorSteps`:  
  - `marker`: a marker, to choose from a marker library. Currently uses the [Maki Markers](https://github.com/jseppi/Leaflet.MakiMarkers) icon library. You need an additional parameter:
    - `marker`: the name of the Maki Marker icon to use (for example ` fuel`) 

`globalParams` is an optional MAP of parameters to apply to the whole chart, not really useful here.



