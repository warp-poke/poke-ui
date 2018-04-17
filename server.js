/**
 * Static HTTP Server
 *
 * Create a static file server instance to serve files
 * and folder in the './public' folder
 */

// modules
var static = require( 'node-static' ),
    port = process.env.PORT || 8080,
    http = require( 'http' );

// config
var file = new static.Server( './www', {
    cache: 3600,
    gzip: true
} );

// serve
http.createServer( function ( request, response ) {
    request.addListener( 'end', function () {
        file.serve( request, response );
    } ).resume();
} ).listen( port );