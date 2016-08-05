/* global describe, it, beforeEach */
var assert = require('assert')
  , GeocachingApi = require('../lib/geocaching-api')
  , _ = require('lodash')
  , config = require('../config-api')
  , tokens = require('../config-tokens')
  , DATA = require('./data.js');

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

      done()
    })
  })
});

describe('methods', function () {
  this.timeout(6*10000); //10s
  
  var api;
  before(function () {
    api = new GeocachingApi(config)
    api.setAuth(tokens.token, tokens.tokensecret);
  })
  
  //Map from methods from API https://staging.api.groundspeak.com/Live/V6Beta/geocaching.svc/help
  describe('enumerations', function () {
    // GetGeocacheStatus
    it('should get cache status', function (done) {
      var codes = _.pluck(DATA.caches, 'code');
      api.getGeocacheStatus({
        CacheCodes: codes, 
     }, function (err, o) {
        assert(!err, err);
        assert(o.length>0);
        if (o.length>0){
          assert(o[0].name === DATA.caches[0].name);
          assert(o[0].owner === DATA.username);
          assert(o[1].name ===  DATA.caches[1].name);
          assert(o[1].owner === DATA.username);
        }
        done();
      })
    })
  
    // GetGeocacheTypes
    it('should getGeocacheTypes', function (done) {
      api.getGeocacheTypes(function (err, o) {
        assert(!err, err);
        assert(o);
        assert(o.GeocacheTypes.length>0);
        assert(o.GeocacheTypes[0].GeocacheTypeId);
        assert(o.GeocacheTypes[0].IsContainer);
        assert(o.GeocacheTypes[0].Description);
        done();
      })
    })
    
    // GetAttributeTypesData
    it('should GetAttributeTypesData', function (done) {
      api.getAttributeTypesData(function (err, o) {
        assert(!err, err);
        assert(o);
        assert(o.AttributeTypes.length>0);
        done();
      })
    })
    
    // GetGeocacheDataTypes
    it('should get cache dataTypes', function (done) {
      api.getGeocacheDataTypes({
        geocacheTypes: true,
        logTypes: true,
        attributeTypes: true
     }, function (err, ack) {
        assert(!err, err);
        assert(ack);
        done();
      })
    })
    
    // GetMembershipTypes
    it('should getMembershipTypes', function (done) {
      api.getMembershipTypes(function (err, o) {
        assert(!err, err);
        assert(o);
        assert(o.Memberships.length>0);
        assert(o.Memberships[0].MemberTypeId===0);
        assert(o.Memberships[0].MemberTypeName==='Guest');
        done();
      })
    })
    
    // GetStatusMessages
    it('should getStatusMessages', function (done) {
      api.getStatusMessages(function (err, o) {
        assert(!err, err);
        assert(o);
        assert(o.StatusMessages.length>0);
        if (o.StatusMessages.length>0){
          var m = o.StatusMessages[0];
          assert(m.StatusCode===0);
          assert(o.StatusMessage==='OK');
          assert(o.ExceptionDetails);
          assert(o.Warnings);
        }
        done();
      })
    })
    // GetWptLogTypes
    it('should getWptLogTypes', function (done) {
      api.getWptLogTypes(function (err, o) {
        assert(!err, err);
        assert(o);
        assert(o.getWptLogTypes.length>0);
        if (o.getWptLogTypes.length>0){
           var m = o.getWptLogTypes[0];
           assert(m.AdminActionable);
           assert(m.ImageName);
           assert(m.ImageURL);
           assert(m.OwnerActionable);
           assert(m.WptLogTypeId);
           assert(m.WptLogTypeName);
        }
        assert(o.TrackableLogTypeIdsinCache);
        assert(o.TrackableLogTypeIdswithPerson);
        assert(o.GeocacheLogTypeIds);
        assert(o.EventLogTypeIds);
        done();
      })
    })
  
  });
  
  describe('api settings', function () {

    // GetAPILimits
    it('should get GC API limits', function (done) {
      api.getAPILimits(function (err, o) {
        assert(!err, err);
        assert(o);
        assert(o.Limits.LicenseKey);
        assert(o.MaxPerPage.Geocaches);
        done();
      })
    });
    
    // GetSiteStats
    it('should getSiteStats', function (done) {
      api.getSiteStats(function (err, o) {
        assert(!err, err);
        assert(o);
        assert(o.AccountsLogged);
        assert(o.ActiveCaches);
        assert(o.ActiveCountries);
        assert(o.NewLogs);
        done();
      })
    })
    
    // Ping
    //TODO: failed service ?
    it('should ping GC API', function (done) {
      api.ping({}, function (err, ack) {
        assert(!err, err);
        assert(ack);
        done();
      })
    })
    
  });
  
  describe('bookmarks', function () {
    // GetBookmarkListByGuid
    it('should GetBookmarkListByGuid', function (done) {
        api.getBookmarkListByGuid({
          BookmarkListGuid: DATA.bookmarkListGuid
        },function (err, o) {
          assert(!err, err);
          assert(o);
          assert(o.BookmarkLists.length>0);
          if (o.BookmarkLists.length>0){
            assert(o.BookmarkLists[0].ListID);
            assert(o.BookmarkLists[0].ListName);
            assert(o.BookmarkLists[0].NumberOfItems);
          }
          done();
      });
    });
    // GetBookmarkListsByUserID
    it('should GetBookmarkListsByUserID', function (done) {
        api.getBookmarkListsByUserID({
          userID: DATA.UserID
        },function (err, o) {
          assert(!err, err);
          assert(o);
          assert(o.BookmarkLists.length>0);
          if (o.BookmarkLists.length>0){
            assert(o.BookmarkLists[0].ListID);
            assert(o.BookmarkLists[0].ListName);
            assert(o.BookmarkLists[0].NumberOfItems);
          }
          done();
      });
    });
    // GetBookmarkListsForUser
      it('should GetBookmarkListsForUser', function (done) {
        api.getBookmarkListsForUser(function (err, o) {
          assert(!err, err);
          assert(o);
          assert(o.BookmarkLists.length>0);
          if (o.BookmarkLists.length>0){
            assert(o.BookmarkLists[0].ListID);
            assert(o.BookmarkLists[0].ListName);
            assert(o.BookmarkLists[0].NumberOfItems);
          }
          done();
        });
      });
      
      // AddGeocachesToBookmarkList
      it('should AddGeocachesToBookmarkList', function (done) {
        var codes = _.pluck(DATA.caches, 'code');
        
        api.addGeocachesToBookmarkList({
          BookmarkListGuid: DATA.bookmarkListGuid,
	        CacheCodes: codes
        },function (err, o) {
          assert(!err, err);
          assert(o);
          assert(o.BookmarkLists.length>0);
          if (o.BookmarkLists.length>0){
            assert(o.BookmarkLists[0].ListID);
            assert(o.BookmarkLists[0].ListName);
            assert(o.BookmarkLists[0].NumberOfItems);
          }
          done();
        });
      });
  });
  
  describe('pocketQuery', function () {
    
    // GetFullPocketQueryData
  it('should GetFullPocketQueryData', function (done) {
    api.getFullPocketQueryData({
      pocketQueryGuid: 'xxx',
      startItem: 0,
      maxItems: 10
    },function (err, o) {
      assert(!err, err);
      assert(o);
      assert(o.Geocaches.length>0);
      if (o.Geocaches.length>0){
        assert(o.Geocaches[0].AccountID);
        assert(o.Geocaches[0].Code);
      }
      done();
    })
  });
  
  // GetPocketQueryData
  // GetPocketQueryList
    it('should getPocketQueryList', function (done) {
      api.getPocketQueryList(function (err, o) {
        assert(!err, err);
        assert(o);
        assert(o.PocketQueryList.length>0);
        done();
      })
    })
  // GetPocketQueryZippedFile
    
  });
  
  describe('favorites', function () {
    
  // GetCacheIdsFavoritedByUser
    it('should GetCacheIdsFavoritedByUser', function (done) {
      api.getCacheIdsFavoritedByUser(function (err, o) {
        assert(!err, err);
        assert(o);
        assert(o.CacheCodes.length>0);
        done();
      })
    });
  // GetCachesFavoritedByUser
    it('should GetCachesFavoritedByUser', function (done) {
      api.getCachesFavoritedByUser(function (err, o) {
        assert(!err, err);
        assert(o);
        assert(o.Geocaches.length>0);
        if (o.Geocaches.length>0){
          assert(o.Geocaches[0].CacheCode);
          assert(o.Geocaches[0].CacheTitle);
          assert(o.Geocaches[0].CacheType);
        }
        done();
      })
    });
    
    // GetUsersFavoritePoints
    it('should getUsersFavoritePoints', function (done) {
      api.getUsersFavoritePoints(function (err, o) {
        assert(!err, err);
        assert(o);
        assert(o.FavoritePoints);
        done();
      })
    })
  
    // AddFavoritePointToCache
    // RemoveFavoritePointFromCache
    // GetUsersWhoFavoritedCache
    

// ***************
//TODO: **** STOPPED HERE *****
// ***************
    
    it('should GetUsersWhoFavoritedCache', function (done) {
      api.getUsersWhoFavoritedCache({
        cacheCode: DATA.code        
      },function (err, o) {
        assert(!err, err);
        assert(o);
        assert(o.FavoritePoints);
        done();
      })
    })
    
  });
  
  describe('profile', function () {
    
    // // GetUserCredentials
    // it('should GetUserCredentials', function (done) {
    //   api.getUserCredentials({
    //     consumerKey: '',
    //     licenseGuid: '',
    //     username: '',
    //     password: ''
    // }, function (err, o) {
    //     assert(!err, err);
    //     assert(o);
    //     done();
    //   })
    // })
    
    // GetAnotherUsersProfile
    it('should get another user\'s profile', function (done) {
      api.getAnotherUsersProfile({
      	UserID: DATA.UserID,
      	ProfileOptions:{
      		ChallengesData:true,
      		FavoritePointsData:true,
      		GeocacheData:true,
      		PublicProfileData:true,
      		SouvenirData:true,
      		TrackableData:true
      	}
      }, function (err, user) {
        assert(!err, err);
        assert(user);
        assert(user.Profile.User.UserName === DATA.username);
        done();
      })
    })
    
    // GetYourUserProfile
    it('should get the user\'s profile', function (done) {
      api.getYourUserProfile({}, function (err, user) {
        assert(!err, err);
        assert(user);
        done();
      })
    })

    // GetUsersCacheCounts
    it('should GetUsersCacheCounts', function (done) {
      api.getUsersCacheCounts({
        Usernames: []
     }, function (err, o) {
        assert(!err, err);
        assert(o.UserCacheCounts);
        assert(o.UserCacheCounts.CacheFinds>0);
        assert(o.UserCacheCounts.Username===DATA.username);
        done();
      })
    })
    
    // GetUsersGeocacheLogs
    it('should GetUsersGeocacheLogs', function (done) {
      api.getUsersGeocacheLogs({
      	Username: DATA.username,
        Range:{
      		StartDate: 928174800000,
      		EndDate: "\/Date(928174800000-0700)\/"
      	},
      	LogTypes: [9223372036854775807],
      	ExcludeArchived: true,
      	StartIndex: 0,
      	MaxPerPage: 10
     }, function (err, cache) {
        assert(!err, err);
        assert(cache);
        assert(cache.type==='multi');
        done();
      })
    })
    
    
  });
  
  describe('trackable', function(){
    
    // CreateTrackableLog
    // GetOwnedTrackables
    // GetTrackableLogsByTBCode
    // GetTrackablesByTBCode
    // GetTrackablesByTrackingNumber
    // GetTrackablesInCache
    // GetTrackableTravelList
    // GetUsersTrackables
    // UploadImageToTrackableLog
    
  });
  
  describe('note', function(){
      
    // UpdateCacheNote
    // CreateFieldNoteAndPublish
    // DeleteCacheNote
    // GetUsersCacheNotes
    
  });
  
  describe('waypoint', function(){
      
    // DeleteUserWaypoint
    // GetUserWaypoints
    // SaveUserWaypoint

  });

  describe('search', function(){

    // GeocodeString
    it('should GeocodeString', function (done) {
      api.geocodeString({
        GeocodeString: DATA.address
     }, function (err, cache) {
        assert(!err, err);
        assert(cache);
        assert(cache.Latitude===DATA.address_result.lat);
        assert(cache.Longitude===DATA.address_result.lng);
        done();
      })
    })
    
    // GetCacheByTileGuid
    it('should GetCacheByTileGuid', function (done) {
      api.getCacheByTileGuid({
        tileGuid: DATA.UserID
      },function (err, o) {
        assert(!err, err);
        assert(o);
        assert(o.BookmarkLists.length>0);
        if (o.BookmarkLists.length>0){
          assert(o.BookmarkLists[0].ListID);
          assert(o.BookmarkLists[0].ListName);
          assert(o.BookmarkLists[0].NumberOfItems);
        }
        done();
      })
    })
    
    // SearchForGeocaches
    it('should SearchForGeocaches', function (done) {
      api.SearchForGeocaches(DATA.search,function (err, o) {
        assert(!err, err);
        assert(o);
        assert(o.Geocaches.length>0);
        if (o.Geocaches.length>0){
          assert(o.Geocaches[0].ListID);
          assert(o.Geocaches[0].ListName);
          assert(o.Geocaches[0].NumberOfItems);
        }
        done();
      })
    })
    
    // GetMoreGeocaches
    it('should GetMoreGeocaches', function (done) {
      api.GetMoreGeocaches({
        tileGuid: DATA.UserID
      },function (err, o) {
        assert(!err, err);
        assert(o);
        assert(o.Geocaches.length>0);
        if (o.Geocaches.length>0){
          assert(o.Geocaches[0].ListID);
          assert(o.Geocaches[0].ListName);
          assert(o.Geocaches[0].NumberOfItems);
        }
        done();
      })
    })
  });
  
  describe('log', function(){
    // GetGeocacheLogsByCacheCode
    it('should get cache dataTypes', function (done) {
      api.getGeocacheLogsByCacheCode({
        cacheCode: 'GC45QCA',
        maxPerPage: 10,
        startIndex: 0
     }, function (err, cache) {
        assert(!err, err);
        assert(cache);
        assert(cache.type==='multi');
        done();
      })
    })
    
  });
  
  describe('image', function(){
    // GetImagesForGeocache
    // UploadImageToGeocacheLog
    // GetUserGallery
  });
  
  describe('souvenir', function(){
    // SearchForSouvenirsByPublicGuid
  });
  
  describe('windows specific', function(){
    // RegisterWP7DeviceTile
    // WindowsPhoneTileSearch
  });

  
});