let fs = require('fs');
let someFile = './node_modules/spectre.css/src/_variables.scss';

fs.readFile(someFile, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace(/\$primary-color: #5755d9 !default;/g, '$primary-color: #ff0066;');
  var result = data.replace(/\$dark-color: #303742 !default;/g, '$dark-color: #800033;');

  fs.writeFile(someFile, result, 'utf8', function (err) {
     if (err) return console.log(err);
  });
});





