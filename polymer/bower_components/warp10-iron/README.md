# Warp 10 Iron Elements

Inspired by Polymer Iron Elements, Warp 10 Iron Elements is a set of visual and
non-visual utility elements for Warp 10 applications.

Includes elements for working with Geo-Time Series<sup>TM</sup> (GTS), including
elements for creating, validating and plotting GTS, and other utility elements.

## Included elements

* `bootstrap.html`: an element grouping [Bootstrap](http://getbootstrap.com/) and
[jQuery](https://jquery.com/) declarations

* `warp10-backend-validator`: a custom input validator implementing
[Polymer.IronValidatorBehavior](https://elements.polymer-project.org/elements/iron-validator-behavior)

* `warp10-gts-plotting-tools`: an element defining functions to read, transform
and format GTS for displaying them in Quantum and QuantumViz elements.

* `warp10-get-tools`: an element defining functions to modelize, read, validate
and extract information from JSON-serialized GTS

* `warp10-looseJSON`: an element defining a loose JSON parser and serializer that accepts `NaN`, `null`,
`Infinity` and `-Infinity` values, i.e. all the values allowed in JavaScript.

* `warp10-simple-overlay`: an element implementing
[Polymer.IronOverlayBehavior](https://elements.polymer-project.org/elements/iron-overlay-behavior)
defining a simple overlay to be used with Warp 10's data-visualisation elements.

* `warp10-warpscript-caller`:  an element calling WarpScript endpoints, sending the script and dealing
with the GTS stack in the response.
