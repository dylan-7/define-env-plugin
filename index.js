/**
 * @author dylan
 */

var webpack = require('webpack');

function crossFields(keys) {
  var definitions = {};

  if (!Array.isArray(keys)) {
    console.log('❌ define-env-plugin must pass in an array');
    return definitions;
  }

  var keys = ['NODE_ENV', 'SERVICE_URL'].concat(keys);

  if (keys.length !== 0) {
    keys.forEach(function(item, index) {
      if (process.env[item]) {
        definitions[key] = JSON.stringify(process.env[item]);
      } else {
        console.log('⚠️ ' + item + ' is undefined in scripts');
      }
    });
  }
  return definitions;
}

// keys: array ['a', 'b']
function DefineEnvPlugin(keys) {
  return new webpack.DefinePlugin(crossFields(keys));
}

module.exports = DefineEnvPlugin;