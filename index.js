/**
 * @author dylan
 */

var webpack = require('webpack');

function crossFields(keys) {
  var definitions = {};

  if (keys && !Array.isArray(keys)) {
    console.log('❌ define-env-plugin must pass in an array');
    return definitions;
  }

  var keys = ['NODE_ENV', 'SERVICE_URL'].concat(keys);

  keys.forEach(function(item, index) {
    if (process.env[item]) {
      definitions[item] = JSON.stringify(process.env[item]);
    } else if (item !== undefined) {
      console.log('⚠️ ' + item + ' is undefined in scripts');
    }
  });
  return definitions;
}

// keys: array ['a', 'b']
function DefineEnvPlugin(keys) {
  return new webpack.DefinePlugin({
    'process.env': crossFields(keys)
  });
}

module.exports = DefineEnvPlugin;
