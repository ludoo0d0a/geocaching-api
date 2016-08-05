# geocaching-api
Geocaching API client library for node.js

## Dependencies

  * [geocaching-api](https://github.com/ludoo0d0a/geocaching-api)

## Setup

To setup API, replace your API keys values in config files :
> cp default-config-api.js config-api.js  

Mocha tests require OAuth token produced after OAUth authorization.
Since it requires UI, token should be retrieved in exemple app (in /account page) and copied into config-tokens.
> cp default-config-tokens.js config-tokens.js

## Examples

For a complete, working example, refer to the [login example](https://github.com/ludoo0d0a/geocaching-api/tree/master/examples/login).

> npm install express express-session body-parser cookie-parser method-override ejs express-ejs-layouts morgan passport
> npm start

## Tests

    $ npm install --dev
    $ make test


## Credits

  - [Ludovic Valente](http://github.com/ludoo0d0a)

## License

[The ISC License](http://opensource.org/licenses/ISC)

Copyright (c) 2015 Ludovic Valente <[http://www.pitaso.com/](http://www.pitaso.com)>
