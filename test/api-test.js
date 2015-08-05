/* global describe, it, beforeEach */
var assert = require('assert')
  , GeocachingApi = require('../lib/geocaching-api')
  , config1 = require('../config1');

describe('api', function () {
  describe('config', function () {
    it('throws when passing empty config', function (done) {
      assert.throws(function () {
        var api = new GeocachingApi({})
      }, Error)

      done()
    })

    it('throws when config is missing a required key', function (done) {
      assert.throws(function () {
        var api = new GeocachingApi({
            consumer_key: 'a'
        })
      }, Error)

      done()
    })
  })

  describe('setAuth()', function () {
    var api;

    beforeEach(function () {
      api = new GeocachingApi({
        consumer_key: 'a',
        consumer_secret: 'b'
      })
    })

    it('should update the client\'s auth config', function (done) {
      // partial update
      api.setAuth({
        consumer_key: 'x',
        consumer_secret: 'y'
      })

      assert(api.config.consumer_key === 'x')
      assert(api.config.consumer_secret === 'y')

      // full update
      api.setAuth(config1)

      assert(api.config.consumer_key === config1.consumer_key)
      assert(api.config.consumer_secret === config1.consumer_secret)

      api.getYourUserProfile({}, function (err, reply, response) {
        assert(!err, err);
        assert(response.headers['x-rate-limit-limit'])
        done()
      })
    })
  })
});
