const sass = require('@stencil/sass').sass;

exports.config = {
  plugins: [
    sass()
  ],
  copy: [
    { src: ".htaccess",  dest: ".htaccess"  },
    { src: "../node_modules/@webcomponents/webcomponentsjs/**/*.js", dest: "node_modules/@webcomponents/webcomponentsjs"},
    { src: "../node_modules/d3/**/*.js", dest: "node_modules/d3"},
    { src: "../node_modules/c3/*", dest: "node_modules/c3"}
  ],
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
