/**
 * @author dylan
 * @description Pass in the params, and the setting params in scripts will take effect
 */

var webpack = require('webpack');

function crossFields(keys) {
  var definitions = {};

  if (keys && !Array.isArray(keys)) {
    console.log('❌ define-env-plugin must pass in an array');
    return definitions;
  }

  var keys = ['NODE_ENV', 'SERVICE_URL', 'SOCKET_URL'].concat(keys);

  keys.forEach(function(item, index) {
    if (process.env[item]) {
      definitions[item] = JSON.stringify(process.env[item]);
    } else if ((item !== 'NODE_ENV' && item !== 'SERVICE_URL' && item !== 'SOCKET_URL') && item !== undefined) {
      // item is required
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
