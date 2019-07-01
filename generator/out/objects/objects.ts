

//
// geocache : Geocache
//
export interface Geocache {

  // uniquely identifies the geocache -  
  referenceCode: String;
  // name of the geocache -  
  name: String;
  // difficulty rating of the geocache between 1.0 and 5.0 -  
  difficulty: Number;
  // terrain rating of the geocache between 1.0 and 5.0 -  
  terrain: Number;
  // number of favorite points awarded to the geocache -  
  favoritePoints: Integer;
  // number of trackables currently in the geocache -  
  trackableCount: Integer;
  // date when the cache was placed (if an event, this is the date of the event) in the timezone of the geocache -  
  placedDate: Date;
  // date when the cache was published in the timezone of the geocache -  
  publishedDate: Date;
  // date and time of when an event will end (in the timezone of the geocache). null if an end date doesn&#39;t exist or if geocache is not event type. -  Nullable 
  eventEndDate: Date;
  // type of the geocache (see Geocache Types for more info) -   Deprecated
  type: GeocacheTypes;
  // type of the geocache (see Geocache Types for more info) -  
  geocacheType: Type;
  // size of the geocache container (see Geocache Sizes for more info) -   Deprecated
  size: GeocacheSizes;
  // size of the geocache (see Geocache Sizes for more info) -  
  geocacheSize: GeocacheSize;
  // user specific information about the geocache -  
  userData: UserData;
  // current status of the geocache (see Geocache Statuses for more info) -  
  status: GeocacheStates;
  // country and state information about the geocache -  
  location: LocationData;
  // latitude and longitude of the geocache -  
  postedCoordinates: Coordinates;
  // datetime of last logged visit to geocache in the timezone of the geocache -  Nullable 
  lastVisitedDate: Date;
  // owner identifier of the geocache -  
  ownerCode: String;
  // display name of owner for geocache -  
  ownerAlias: String;
  // whether the geocache can only be viewed by premium members -  
  isPremiumOnly: Boolean;
  // summary about the geocache -  
  shortDescription: String;
  // details about the geocache -  
  longDescription: String;
  // hints/spoilers to help to find the geocache -  
  hints: String;
  // attributes of the geocache -  
  attributes: Attribute[];
  // timezone of the geocache -  
  ianaTimezoneId: String;
  // external web page associated with geocache -  
  relatedWebPage: String;
  // geocaching.com web page associated with geocache -  
  url: String;
  // user supplied image url used as background image on geocaching.com (will be null if none supplied) -  
  backgroundImageUrl: String;
  // flag for if the short or long description contains html -  
  containsHtml: Boolean;
  // number of Found It logs on the geocache -  
  findCount: Integer;
  // information about the owner of the geocache -  
  owner: User;
  // other reference waypoints associated with the geocache -  
  additionalWaypoints: AdditionalWaypoint[];
}



//
// liteGeocache : Lite Geocache
//
export interface LiteGeocache {

  // uniquely identifies the geocache -  
  referenceCode: String;
  // name of the geocache -  
  name: String;
  // difficulty rating of the geocache between 1.0 and 5.0 -  
  difficulty: Number;
  // terrain rating of the geocache between 1.0 and 5.0 -  
  terrain: Number;
  // number of favorite points awarded to the geocache -  
  favoritePoints: Integer;
  // number of trackables currently in the geocache -  
  trackableCount: Integer;
  // date when the cache was placed (if an event, this is the date of the event) in the timezone of the geocache -  
  placedDate: Date;
  // date when the cache was published in the timezone of the geocache -  
  publishedDate: Date;
  // date and time of when an event will end (in the timezone of the geocache). null if an end date doesn&#39;t exist or if geocache is not event type. -  Nullable 
  eventEndDate: Date;
  // type of the geocache (see Geocache Types for more info) -   Deprecated
  type: GeocacheTypes;
  // type of the geocache (see Geocache Types for more info) -  
  geocacheType: Type;
  // size of the geocache container (see Geocache Sizes for more info) -   Deprecated
  size: GeocacheSizes;
  // size of the geocache (see Geocache Sizes for more info) -  
  geocacheSize: GeocacheSize;
  // user specific information about the geocache -  
  userData: UserData;
  // current status of the geocache (see Geocache Statuses for more info) -  
  status: GeocacheStates;
  // country and state information about the geocache -  
  location: LocationData;
  // latitude and longitude of the geocache -  
  postedCoordinates: Coordinates;
  // datetime of last logged visit to geocache in the timezone of the geocache -  Nullable 
  lastVisitedDate: Date;
  // owner identifier of the geocache -  
  ownerCode: String;
  // display name of owner for geocache -  
  ownerAlias: String;
  // whether the geocache can only be viewed by premium members -  
  isPremiumOnly: Boolean;
  // timezone of the geocache -  
  ianaTimezoneId: String;
  // external web page associated with geocache -  
  relatedWebPage: String;
  // geocaching.com web page associated with geocache -  
  url: String;
  // user supplied image url used as background image on geocaching.com (will be null if none supplied) -  
  backgroundImageUrl: String;
  // flag for if the short or long description contains html -  
  containsHtml: Boolean;
  // information about the owner of the geocache -  
  owner: User;
}



//
// geocacheLog : GeocacheLog
//
export interface GeocacheLog {

  // uniquely identifies the geocache log -  
  referenceCode: String;
  // identifier of the log owner -  
  ownerCode: String;
  // number of images associated with geocache log -  
  imageCount: Integer;
  // date and time of when user logged the geocache in the timezone of the geocache -  
  loggedDate: Date;
  // display text of the geocache log -  
  text: String;
  // name of the geocache log type (see Geocache Log Types for more info) -   Deprecated
  type: String;
  // type of the geocache log (see Geocache Log Types for more info) -  
  geocacheLogType: Type;
  // latitude and longitude of the geocache (only used with log type 47 - Update Coordinates) -  
  updatedCoordinates: Coordinates;
  // identifier of the associated geocache -  
  geocacheCode: String;
  // name of the associated geocache -  
  geocacheName: String;
  // timezone of the associated geocache -  
  ianaTimezoneId: String;
  // if a favorite point was awarded from this log -  
  usedFavoritePoint: Boolean;
  // if log was encrypted using ROT13. This field is grandfathered to logs already set to true. New logs cannot be encoded. -  
  isEncoded: Boolean;
  // if the log has been deleted -  
  isArchived: Boolean;
  // geocaching.com web page associated with geocache log -  
  url: String;
  // information about the owner of the geocache log -  
  owner: User;
}



//
// trackable : Trackable
//
export interface Trackable {

  // uniquely identifies the trackable -  
  referenceCode: String;
  // link to image for trackable icon -  
  iconUrl: String;
  // display name of the trackable -  
  name: String;
  // how many owner images on the trackable -  
  imageCount: Int;
  // the owner&#39;s goal for the trackable -  
  goal: String;
  // text about the trackable -  
  description: String;
  // when the trackable was activated -  
  releasedDate: Date;
  // where the trackable originated from -  
  originCountry: String;
  // identifier about the owner -  
  ownerCode: String;
  // user identifier about the current holder (null if not currently in someone&#39;s inventory) -  
  holderCode: String;
  // if the trackable is in the holder&#39;s collection -  
  inHolderCollection: Boolean;
  // identifier of the geocache if the trackable is currently in one -  
  currentGeocacheCode: String;
  // name of the geocache if the trackable is currently in one -  
  currentGeocacheName: String;
  // flag is trackable is marked as missing -  
  isMissing: Boolean;
  // unique number used to prove discovery of trackable. only returned if user matches the holderCode -  
  trackingNumber: String;
  // type of the trackable -  
  trackableType: Type;
  // geocaching.com web page associated with trackable -  
  url: String;
  // information about the owner of the trackable -  
  owner: User;
  // information about the holder of the trackable -  
  holder: User;
}



//
// trackableLog : TrackableLog
//
export interface TrackableLog {

  // uniquely identifies the trackable log -  
  referenceCode: String;
  // reference code of the owner -  
  ownerCode: String;
  // identifier of the related trackable -  
  trackableCode: String;
  // identifier of the related geocache -  
  geocacheCode: String;
  // name of the related geocache if there is one -  
  geocacheName: String;
  // when the user logged the trackable -  
  loggedDate: Date;
  // display text of the log -  
  text: String;
  // how many images are associated with the log -  
  imageCount: Int;
  // flag for if the text is ROT13 encoded -  
  isRot13Encoded: Boolean;
  // type of the trackable log (see Trackable Log Types for more info) -   Deprecated
  typeId: Integer;
  // type of the trackable log (see Trackable Log Types for more info) -  
  trackableLogType: Type;
  // latitude and longitude of the trackable log -  
  coordinates: Coordinates;
  // code only found on the trackable itself (only needed for creating a log, this will not be returned with any GET methods) -  
  trackingNumber: String;
  // geocaching.com web page associated with trackable log -  
  url: String;
  // information about the owner of the trackable log -  
  owner: User;
}



//
// logDraft : LogDraft
//
export interface LogDraft {

  // uniquely identifies the log draft -  
  referenceCode: String;
  // identifer of the geocache -  
  geocacheCode: String;
  // name of the geocache -  
  geocacheName: String;
  // name of the geocache log type (see Geocache Log Types for more info) -   Deprecated
  logType: String;
  // type of the geocache log (see Geocache Log Types for more info) -  
  geocacheLogType: Type;
  // display text of the log draft -  
  note: String;
  // when the user logged the geocache in UTC -   Deprecated
  loggedDateUtc: Date;
  // when the user logged the geocache in the geocache&#39;s local timezone -  
  loggedDate: Date;
  // number of images associated with draft -  
  imageCount: Integer;
  // whether to award favorite point when  -  
  useFavoritePoint: Boolean;
}



//
// promotedLogDraft : PromotedLogDraft
//
export interface PromotedLogDraft {

  // geocache log created from log draft -  
  geocacheLog: GeocacheLog;
  // successfully transferred images -  
  successfulImages: Image[];
  // failed transferred images -  
  failedImages: Image[];
  // if a favorite point was applied to log -  
  favoritePointApplied: Boolean;
  // if the draft was successfully deleted -  
  draftDeleted: Boolean;
}



//
// userWaypoint : UserWaypoint
//
export interface UserWaypoint {

  // uniquely identifies the user waypoint -  
  referenceCode: String;
  // text about the waypoint -  
  description: String;
  // whether the user waypoint are corrected coordinates -  
  isCorrectedCoordinates: Boolean;
  // latitude and longitude of the waypoint -  
  coordinates: Coordinates;
  // identifier of the related geocache -  
  geocacheCode: String;
}



//
// additionalWaypoint : AdditionalWaypoint
//
export interface AdditionalWaypoint {

  // display name of the waypoint -  
  name: String;
  // text about the waypoint -  
  description: String;
  // type of the waypoint (see Waypoint Types for more info) -  
  typeId: Integer;
  // display name of the type -  
  typeName: String;
  // short category prefix of the waypoint type -  
  prefix: String;
  // geocaching.com web page associated with the waypoint -  
  url: String;
  // latitude and longitude of the waypoint -  
  coordinates: Coordinates;
}



//
// attribute : Attribute
//
export interface Attribute {

  // identifier of the attribute -  
  id: Integer;
  // display name of the attribute -  
  name: String;
  // flag for if the attribute is a positive or negative (e.g. available 24/7 vs not available 24/7) -  
  isOn: Boolean;
  // link to the image for the attribute -  
  imageUrl: String;
}



//
// attributetype : Attribute Type
//
export interface Attributetype {

  // identifier of the attribute -  
  id: Integer;
  // display name of the attribute -  
  name: String;
  // flag for if the attribute can be set to isOn = true -  
  hasYesOption: Boolean;
  // flag for if the attribute can be set to isOn = false -  
  hasNoOption: Boolean;
  // image url for the attribute if isOn = true -  
  yesIconUrl: String;
  // image url for the attribute if isOn = false -  
  noIconUrl: String;
  // image url for the attribute if not chosen -  
  notChosenIconUrl: String;
}



//
// locationData : Location
//
export interface LocationData {

  // id of country -  
  countryId: Integer;
  // display name of country -  
  country: String;
  // id of state -  
  stateId: Integer;
  // display name of state -  
  state: String;
}



//
// geocacheSize : Size
//
export interface GeocacheSize {

  // id of size -  
  id: Integer;
  // display name of size -  
  name: String;
}



//
// list : List
//
export interface List {

  // uniquely identifies the list -  
  referenceCode: String;
  // when the list was created in UTC -  
  createdDateUtc: Date;
  // when the list was last updated in UTC. for pocket queries, this represents the last time the query was generated -  
  lastUpdatedDateUtc: Date;
  // display name of the list -  
  name: String;
  // how many geocaches are in the list -  
  count: Integer;
  // how many of the geocaches in list are found -  
  findCount: Integer;
  // identifier of the user who owns the list -  
  ownerCode: String;
  // text about the list -  
  description: String;
  // type of the list (see List Types for more info) -  
  typeId: Integer;
  // if the list is accessible through a direct link -  
  isShared: Boolean;
  // if the list is accessible to everyone without a direct link -  
  isPublic: Boolean;
  // geocaching.com web page associated with list (no url returned for pocket query types) -  
  url: String;
}



//
// listGeocache : List Geocache
//
export interface ListGeocache {

  // uniquely identifies the geocache -  
  referenceCode: String;
  // user generated name of list item -  
  listItemName: String;
  // name of the geocache -  
  name: String;
  // difficulty rating of the geocache between 1.0 and 5.0 -  
  difficulty: Number;
  // terrain rating of the geocache between 1.0 and 5.0 -  
  terrain: Number;
  // number of favorite points awarded to the geocache -  
  favoritePoints: Integer;
  // number of trackables currently in the geocache -  
  trackableCount: Integer;
  // date when the cache was placed (if an event, this is the date of the event) in the timezone of the geocache -  
  placedDate: Date;
  // date when the cache was published in the timezone of the geocache -  
  publishedDate: Date;
  // type of the geocache (see Geocache Types for more info) -   Deprecated
  type: GeocacheTypes;
  // type of the geocache (see Geocache Types for more info) -  
  geocacheType: Type;
  // size of the geocache container (see Geocache Sizes for more info) -   Deprecated
  size: GeocacheSizes;
  // size of the geocache (see Geocache Sizes for more info) -  
  geocacheSize: GeocacheSize;
  // user specific information about the geocache -  
  userData: UserData;
  // current status of the geocache (see Geocache Statuses for more info) -  
  status: GeocacheStates;
  // country and state information about the geocache -  
  location: LocationData;
  // latitude and longitude of the geocache -  
  postedCoordinates: Coordinates;
  // datetime of last logged visit to geocache in the timezone of the geocache -  Nullable 
  lastVisitedDate: Date;
  // owner identifier of the geocache -  
  ownerCode: String;
  // display name of owner for geocache -  
  ownerAlias: String;
  // whether the geocache can only be viewed by premium members -  
  isPremiumOnly: Boolean;
  // summary about the geocache -  
  shortDescription: String;
  // details about the geocache -  
  longDescription: String;
  // hints/spoilers to help to find the geocache -  
  hints: String;
  // attributes of the geocache -  
  attributes: Attribute[];
  // timezone of the geocache -  
  ianaTimezoneId: String;
  // external web page associated with geocache -  
  relatedWebPage: String;
  // geocaching.com web page associated with geocache -  
  url: String;
  // flag for if the short or long description contains html -  
  containsHtml: Boolean;
  // information about the owner of the geocache -  
  owner: User;
  // other reference waypoints associated with the geocache -  
  additionalWaypoints: AdditionalWaypoint[];
}



//
// listItem : List Item
//
export interface ListItem {

  // uniquely identifies the geocache -  
  referenceCode: String;
  // name of the geocache -  
  name: String;
}



//
// bulkResponse : BulkResponse
//
export interface BulkResponse {

  // array of identifiers for which the bulk operation was successful -  
  successes: String array;
  // array of identifiers and reasons for which the bulk operation was unsuccessful -  
  failures: BulkFailure;
}



//
// bulkFailure : BulkFailure
//
export interface BulkFailure {

  // identifier for which bulk request item was unsuccessful -  
  referenceCode: String;
  // reason for why the bulk operation was unsuccessful -  
  message: String;
  // HTTP status code for why the bulk operation was unsuccessful -  
  statusCode: Int;
}



//
// user : User
//
export interface User {

  // uniquely identifies the user -  
  referenceCode: String;
  // how many geocache finds the user has -  
  findCount: Integer;
  // how many geocache hides the user has -  
  hideCount: Integer;
  // how many favorite points the user has avaiable -  
  favoritePoints: Integer;
  // the display username -  
  username: String;
  // type of the membership (see Membership Types for more info) -  
  membershipLevelId: Integer;
  // datetime indicating when the user account was created -  Nullable 
  joinedDateUtc: Date;
  // link to image of the user&#39;s profile avatar -  
  avatarUrl: String;
  // link to image of the user&#39;s banner image -  
  bannerUrl: String;
  // geocaching.com web page associated with user profile -  
  url: String;
  // text from Profile Information section on user profile page -  
  profileText: String;
  // latitude and longitude of the user&#39;s home location -  
  homeCoordinates: Coordinates;
  // find counts per geocache type for user -  
  geocacheFindCounts: GeocacheCount;
  // hide counts per geocache type for user -  
  geocacheHideCounts: GeocacheCount;
  // find counts per trackable type for user -  
  trackableFindCounts: TrackableCount;
  // owned counts per trackable type for user -  
  trackableOwnedCounts: TrackableCount;
  // how many geocaches/lite geocaches the user has remaining and time to live until limit is refreshed -  
  geocacheLimits: Geocachelimits;
}



//
// friendrequest : FriendRequest
//
export interface Friendrequest {

  // uniquely identifies the friend request -  
  id: Integer;
  // identifier of the user that initiated the friend request -  
  requestorUserCode: String;
  // user information about the requestor -  
  requestor: UserReference;
  // identifier of the user that received the friend request -  
  requestedUserCode: String;
  // user information about the requested user -  
  requested: UserReference;
  // requestor custom text to go along with the request -  
  message: String;
  // flags requests as true if calling user is the requestor -  
  isOutgoing: Boolean;
  // the date the request was made in UTC -  
  requestDateUtc: Date;
}



//
// geocachelimits : GeocacheLimit
//
export interface Geocachelimits {

  // number of lite geocaches the user can fetch during the current limit -  
  liteCallsRemaining: Integer;
  // number of seconds until lite geocache limit will be refreshed. if null, no limit has been started yet (limit begins at first lite geocache call) -  Nullable 
  liteCallsSecondsToLive: Integer;
  // number of non-lite geocaches the user can fetch during the current limit -  
  fullCallsRemaining: Integer;
  // number of seconds until non-lite geocache limit will be refreshed. if null, no limit has been started yet (limit begins at first non-lite geocache call) -  Nullable 
  fullCallsSecondsToLive: Integer;
}



//
// geocacheCount : GeocacheCount
//
export interface GeocacheCount {

  // type information of the geocache -  
  GeocacheType: Type;
  // total count of geocache type -  
  Count: Integer;
}



//
// trackableCount : TrackableCount
//
export interface TrackableCount {

  // type information of the trackable -  
  TrackableType: Type;
  // total count of trackable type -  
  Count: Integer;
}



//
// souvenir : Souvenir
//
export interface Souvenir {

  // unique id of the souvenir -  
  id: Integer;
  // display name of the souvenir -  
  title: String;
  // text about the souvenir -  
  description: String;
  // link url to the image of the souvenir -  
  imagePath: String;
  // link url to the thumbnail image of the souvenir -  
  thumbImagePath: String;
  // when the souvenir was awarded in UTC -  
  foundDateUtc: Date;
  // link to souvenir details on www.geocaching.com website -  
  url: String;
}



//
// image : Image
//
export interface Image {

  // text about the image -  
  description: String;
  // link url to the image -  
  url: String;
  // link url to the image with a height of 75px -  
  thumbnailUrl: String;
  // link url to the image with a larger height -  
  largeUrl: String;
  // identifier of the related entity (geocache log, trackable log, etc.) -  
  referenceCode: String;
  // date image was uploaded in UTC -  
  createdDate: DateTime;
}



//
// postImage : ImageToUpload
//
export interface PostImage {

  // text about the image -  
  description: String;
  // image data -  
  base64ImageData: String;
  // optional unique identifier to prevent duplicate uploads -  
  guid: Guid;
}



//
// userData : UserData
//
export interface UserData {

  // personal geocache note only visible to user -  
  note: String;
  // if the user has awarded this geocache a favorite point -  
  isFavorited: Boolean;
  // the date the user found the geocache in the timezone of the geocache (null if not found) -  Nullable 
  foundDate: Date;
  // the date the user logged a DNF on the geocache in the timezone of the geocache (null if no DNF exists) -  Nullable 
  dnfDate: Date;
  // latitude and longitude of the user&#39;s solved coordinates -  
  correctedCoordinates: Coordinates;
}



//
// coordinates : Coordinates
//
export interface Coordinates {

  // the latitude in decimal format -  
  latitude: Number;
  // the longitude in decimal format -  
  longitude: Number;
}



//
// userReference : UserReference
//
export interface UserReference {

  // identifier of the user -  
  referenceCode: String;
  // the display username -  
  username: String;
  // source link of user avatar image -  
  avatarUrl: String;
}



//
// type : Type
//
export interface Type {

  // identifier of the type -  
  id: Integer;
  // the name of the type -  
  name: String;
  // link to the image of the type -  
  imageUrl: String;
}

