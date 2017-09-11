# geocaching-api
Geocaching API client library for node.js

## Dependencies

  * [geocaching-api](https://github.com/ludoo0d0a/geocaching-api)

## Setup

To setup API, replace your API keys values in config-api file (copied from template) :
> cp default-config-api.js config-api.js  

## Tests

Mocha tests require OAuth token produced after OAUth authorization.
Since it requires UI, token should be retrieved in exemple app (in /account page) and copied into config-tokens.
> cp default-config-tokens.js config-tokens.js

## Examples

For a complete, working example, refer to the [login example](https://github.com/ludoo0d0a/geocaching-api/tree/master/examples/login).

    > cd examples/login
    > npm install
    > npm start

## Tests

    > npm run test

## Todo
    
    Complete implementation of GC API following official doc: https://api.groundspeak.com/LiveV6/geocaching.svc/help

## Credits

  - [Ludovic Valente](http://github.com/ludoo0d0a)

## License

[The ISC License](http://opensource.org/licenses/ISC)

Copyright (c) 2017 Ludovic Valente <[http://www.geoking.fr/](http://www.geoking.fr)>
