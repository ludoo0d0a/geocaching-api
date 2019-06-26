# geocaching-api
Geocaching API client library for node.js

## Dependencies

  * [passport-geocaching](https://github.com/ludoo0d0a/passport-geocaching)

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

== Favorite
AddFavoritePointToCache
GetCacheIdsFavoritedByUser
GetCachesFavoritedByUser
GetUsersFavoritePoints
GetUsersWhoFavoritedCache
RemoveFavoritePointFromCache

== Bookmark
AddGeocachesToBookmarkList
GetBookmarkListByGuid
GetBookmarkListsByUserID
GetBookmarkListsForUser

== Trackable
CreateTrackableLog
GetOwnedTrackables
GetTrackableLogsByTBCode
GetTrackablesByTBCode
GetTrackablesByTrackingNumber
GetTrackablesInCache
GetTrackableTravelList
GetUsersTrackables
UploadImageToTrackableLog

== Profile
GetAnotherUsersProfile
GetAPILimits
GetMembershipTypes
GetYourUserProfile
Ping
RegisterWP7DeviceTile
WindowsPhoneTileSearch
GetUserCredentials
GetUsersCacheCounts

== Note
CreateFieldNoteAndPublish
DeleteCacheNote
UpdateCacheNote
GetUsersCacheNotes

== Waypoint
DeleteUserWaypoint
SaveUserWaypoint
GetUserWaypoints

== Logs
GetGeocacheLogsByCacheCode
GetUsersGeocacheLogs
GetWptLogTypes ??
UploadImageToGeocacheLog

== Souvenirs
SearchForSouvenirsByPublicGuid

== caches
SearchForGeocaches
GetMoreGeocaches
GetCacheByTileGuid
GetGeocacheDataTypes
GetGeocacheStatus
GetGeocacheTypes
GetAttributeTypesData

== images
GetImagesForGeocache
GetUserGallery

== PQ
GetPocketQueryData
GetPocketQueryList
GetPocketQueryZippedFile
GetFullPocketQueryData

== Others...
GeocodeString
GetSiteStats
GetStatusMessages