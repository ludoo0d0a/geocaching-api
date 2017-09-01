/* global describe, it, beforeEach */
var assert = require('chai').assert
  , GeocachingApi = require('../lib/geocaching-api')
  , _ = require('lodash')
  , config = require('../config-api')
  , tokens = require('../config-tokens')
  , DATA = require('./data.js');

describe('methods', function () {
  this.timeout(6*10000); //10s
  
  var api;
  before(function () {
    api = new GeocachingApi(config)
    api.setAuth(tokens.token, tokens.tokensecret);
  })
  
  //Map from methods from API https://staging.api.groundspeak.com/Live/V6Beta/geocaching.svc/help
  describe('search', function(){

    // // GeocodeString
    // it('should GeocodeString', function (done) {
    //   api.geocodeString({
    //     GeocodeString: DATA.address
    // }, function (err, o) {
    //     assert.isNull(err, err);
    //     assert.isNull(o, 'No response');
    //     assert(o.cache.Latitude===DATA.address_result.lat);
    //     assert(o.cache.Longitude===DATA.address_result.lng);
    //     done();
    //   })
    // })
    
    // // GetCacheByTileGuid
    // it('should GetCacheByTileGuid', function (done) {
    //   api.getCacheByTileGuid({
    //     tileGuid: DATA.UserID
    //   },function (err, o) {
    //     assert.isNull(err, err);
    //     assert.isNull(o, 'No response');
    //     assert.isAbove(o.Geocaches && o.Geocaches.length, 0, 'No Geocaches');
    //     done();
    //   })
    // })
    
    // SearchForGeocaches
    it('should SearchForGeocaches', function (done) {
      api.searchForGeocaches(DATA.search,function (err, o) {
        assert.isNull(err, (err && err.msg) || 'Undefined error');
        assert.isNotNull(o, 'No response');
        assert.isNotNull(o.Geocaches, 'No Geocaches');
        assert.isAbove(o.Geocaches.length, 0, 'No Geocaches');
        console.log('Found '+ o.Geocaches.length + ' geocaches' );
        assert(o.Geocaches[0].Name);
        assert(o.Geocaches[0].ID);
        done();
      });
    })
    
    // GetMoreGeocaches
    it('should GetMoreGeocaches', function (done) {
      api.getMoreGeocaches(DATA.more,function (err, o) {
        assert.isNull(err, (err && err.msg) || 'Undefined error');
        assert.isNotNull(o, 'No response');
        assert.isNotNull(o.Geocaches, 'No Geocaches');
        assert.isAbove(o.Geocaches.length, 0, 'No Geocaches');
        console.log('More = '+ o.Geocaches.length + ' geocaches' );
        assert(o.Geocaches[0].Name);
        assert(o.Geocaches[0].ID);
        done();
      })
    });

  });

});