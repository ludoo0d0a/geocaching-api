## TODO
Adapt the doc

------


# Geocaching Javascript API Client 
[![Geocaching](http://geocaching-a.akamaihd.net/webpages/geocaching-logo-github.png)](http://www.geocaching.com)
[![codecov](https://codecov.io/gh/Geocaching/geocaching-api/branch/develop/graph/badge.svg?token=XNzQalljOE)](https://codecov.io/gh/Geocaching/geocaching-api)
[![npm version](https://badge.fury.io/js/geocaching-api.svg)](https://badge.fury.io/js/geocaching-api)
[![Build Status](https://travis-ci.org/Geocaching/geocaching-api.svg?branch=develop)](https://travis-ci.org/Geocaching/geocaching-api)

Javascript-API-Client which enables you to seamlessly integrate the [Geocaching API](https://api.groundspeak.com/documentation) into your projects.
Using this API client requires an active account.

[Sign up for a Geocaching Account!](https://www.geocaching.com/account/join)

The full API reference can be found [here](https://api.groundspeak.com/documentation).

Installation 
------------

``` bash
npm install geocaching-api
```
or with yarnpkg
``` bash
yarn add geocaching-api
```

Initialization
----------

### Node

Using ES6 `import`
```es6
import Geocaching from 'geocaching-api';
const Geocaching = Geocaching({'apiKey': '<YOUR_API_KEY>'});
```

With `require`
```js
const Geocaching = require('geocaching-api').default;
const Geocaching = Geocaching({'apiKey': '<YOUR_API_KEY>'});
```

### Browser

Use `geocaching-api/dist/geocaching.browser.js` or `geocaching.browser.min.js` for the minified version.

### ES5 with Modules (CommonJS)

Import `geocaching-api/dist/index.js`.

### Types

- Typescript (`geocaching-api/dist/index.d.ts`)

Usage
-----------

The Geocaching-Javascript API Client is closely modeled after our Geocaching API Reference [Geocaching API](https://api.groundspeak.com/documentation).
Each resource in the API Reference has a 1:1 mapping in our API Client.

All methods return a `Promise` Object that will return the fetched result values from the API.

So for example the list all inputs call is defined as `GET v1/encoding/inputs` in our API-Reference and simply corresponds to:

```js
const limit = 100;
const offset = 0;
Geocaching.encoding.inputs.list(limit, offset).then(result => {
  const {items} = result;
  items.forEach(input => {
    console.log(input.name);
  });
});
```

Examples
-----------

An sample DASH & HLS encoding sample can be found in [examples/encoding/01_simple_encoding_dash_manifest.js](https://github.com/Geocaching/geocaching-api/blob/develop/examples/encoding/01_simple_encoding_dash_manifest.js)

For more examples visit our [example page](https://github.com/Geocaching/geocaching-api/tree/develop/examples/encoding).

Contributing
-----------

If you want to contribute feel free to send pull requests. Code quality is ensured through [lint-staged](https://github.com/okonet/lint-staged), please make sure all tests are passing with `yarn test`.

License
-----------
MIT
