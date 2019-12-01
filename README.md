# define-env-plugin

Enable client code to get node variables

## Installation
```
yarn add define-env-plugin -D
```

## Usage
```js
// webpack.config.js

const DefineEnvPlugin = require('define-env-plugin');

module.exports = {
  plugins: [
    // 
    new DefineEnvPlugin(['APP_VERSION', 'AUTHOR'])
  ]
};
```

In client code use it
```js
// main.js
// process.env can get the fields in the scripts of package.js

console.log(process.env);
```


## Options

NODE_ENV and SERVICE_URL are built in by default, You can pass in other fields

```js
  DefineEnvPlugin(['APP_VERSION', 'AUTHOR'])
```

Available options are:

NODE_ENV (string): environment for browser.

SERVICE_URL (string): url for api.