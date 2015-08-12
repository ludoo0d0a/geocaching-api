/* global describe, it, beforeEach */
var assert = require('assert')
  , GeocachingApi = require('../lib/geocaching-api')
  , config1 = require('../config2')
  , DATA = require('./data.js');

describe('methods', function () {
  this.timeout(6*10000); //10s
  
  var api;
  beforeEach(function () {
    api = new GeocachingApi(config1)
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
  
// GetUsersWhoFavoritedCache
    it('should GetUsersWhoFavoritedCache', function (done) {
      api.getUsersWhoFavoritedCache({
        cacheCode: DATA.code
      },function (err, o) {
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