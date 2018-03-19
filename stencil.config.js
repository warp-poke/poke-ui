const sass = require('@stencil/sass');

exports.config = {
  plugins: [
    sass()
  ],
  copy: [
    { src: "../polymer/build/bundled",  dest: "polymer_elements"  },
    { src: ".htaccess",  dest: ".htaccess"  }
  ],
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
