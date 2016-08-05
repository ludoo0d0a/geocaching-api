/* global describe, it, beforeEach */
var assert = require('assert')
  , GeocachingApi = require('../lib/geocaching-api')
  , config = require('../config-api')
  , DATA = require('./data.js');

describe('methods', function () {
  this.timeout(2*60*1000); //2*60s
  
  var api;
  before(function () {
    api = new GeocachingApi(config)
    api.setAuth(config.oauth_token, config.oauth_token_secret);
  })
  
  //Map from methods from API https://staging.api.groundspeak.com/Live/V6Beta/geocaching.svc/help

// // Ping
//   it('should ping GC API', function (done) {
//     api.ping(function (err, ack) {
//       assert(!err, err);
//       assert(ack);
//       done();
//     })
//   })
  
    // it('should GetUsersWhoFavoritedCache', function (done) {
    //   api.getUsersWhoFavoritedCache({
    //     cacheCode: DATA.code
    //   },function (err, o) {
    //     assert(!err, err);
    //     assert(o);
    //     console.log(o);
    //     done();
    //   })
    // })
    
    it('should searchForGeocaches', function (done) {
      api.searchForGeocaches(DATA.search,function (err, o) {
        assert(!err, err);
        assert(o);
        console.log(o);
        done();
      })
    })

  
// var gets= ['ping','getAPILimits','getAttributeTypesData','getBookmarkListsForUser','getCacheIdsFavoritedByUser',
// 'getCachesFavoritedByUser','getGeocacheTypes','getMembershipTypes','getPocketQueryList','getSiteStats','getStatusMessages',
// 'getUsersFavoritePoints','getWptLogTypes'];

//   gets.forEach(function(g){
//     it('should get '+g, function (done) {
//       api[g](function (err, o) {
//         assert(!err, err);
//         console.log(g, o);
//         assert(o);
//         done();
//       })
//     })
//   })
  
});