# ApiV10.ListGeocache

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additionalWaypoints** | [**[AdditionalWaypoint]**](AdditionalWaypoint.md) |  | [optional] 
**attributes** | [**[Attribute]**](Attribute.md) |  | [optional] 
**backgroundImageUrl** | **String** |  | [optional] 
**containsHtml** | **Boolean** |  | [optional] 
**difficulty** | **Number** | Difficulty of cache between 1.0 and 5.0 | [optional] 
**eventEndDate** | **Date** |  | [optional] 
**favoritePoints** | **Number** | The number of favorite points on the Geocache | [optional] 
**findCount** | **Number** |  | [optional] 
**geoTours** | [**[GeoTour]**](GeoTour.md) |  | [optional] 
**geocacheLogs** | [**[GeocacheLog]**](GeocacheLog.md) |  | [optional] 
**geocacheSize** | [**GeocacheSize**](GeocacheSize.md) |  | [optional] 
**geocacheType** | [**GeocacheType**](GeocacheType.md) |  | [optional] 
**hints** | **String** | Hints to find the geocache. | [optional] 
**ianaTimezoneId** | **String** |  | [optional] 
**images** | [**[Image]**](Image.md) |  | [optional] 
**isPremiumOnly** | **Boolean** |  | [optional] 
**lastVisitedDate** | **Date** |  | [optional] 
**listItemName** | **String** |  | [optional] 
**location** | [**Location**](Location.md) |  | [optional] 
**longDescription** | **String** | Detailed description of the geocache. | [optional] 
**name** | **String** | Name of the Geocache | [optional] 
**owner** | [**User**](User.md) |  | [optional] 
**ownerAlias** | **String** |  | [optional] 
**ownerCode** | **String** | The reference code of the geocache owner | [optional] 
**placedDate** | **Date** | Date the geocache was placed (If the Geocache is an event then this represents the date of the event). | [optional] 
**postedCoordinates** | [**Coordinates**](Coordinates.md) |  | [optional] 
**publishedDate** | **Date** |  | [optional] 
**referenceCode** | **String** | This code uniquely identifies the geocache | [optional] 
**relatedWebPage** | **String** |  | [optional] 
**shortDescription** | **String** | Summary or short description of the geocache. | [optional] 
**size** | **String** | Container or Size of cache | [optional] 
**status** | **String** | The state of the Geocache | [optional] 
**terrain** | **Number** | Terrain of cache between 1.0 and 5.0 | [optional] 
**trackableCount** | **Number** | The number of trackables on the Geocache | [optional] 
**trackables** | [**[Trackable]**](Trackable.md) |  | [optional] 
**type** | **String** | The type of Geocache | [optional] 
**url** | **String** |  | [optional] 
**userData** | [**UserData**](UserData.md) |  | [optional] 
**userWaypoints** | [**[UserWaypoint]**](UserWaypoint.md) |  | [optional] 



## Enum: SizeEnum


* `Micro` (value: `"Micro"`)

* `Unknown` (value: `"Unknown"`)

* `Other` (value: `"Other"`)

* `Small` (value: `"Small"`)

* `Regular` (value: `"Regular"`)

* `Virtual` (value: `"Virtual"`)

* `Large` (value: `"Large"`)





## Enum: StatusEnum


* `Unpublished` (value: `"Unpublished"`)

* `Active` (value: `"Active"`)

* `Disabled` (value: `"Disabled"`)

* `Locked` (value: `"Locked"`)

* `Archived` (value: `"Archived"`)





## Enum: TypeEnum


* `Traditional` (value: `"Traditional"`)

* `MultiCache` (value: `"MultiCache"`)

* `Virtual` (value: `"Virtual"`)

* `Letterbox` (value: `"Letterbox"`)

* `Event` (value: `"Event"`)

* `Mystery` (value: `"Mystery"`)

* `ProjectApe` (value: `"ProjectApe"`)

* `Webcam` (value: `"Webcam"`)

* `Locationless` (value: `"Locationless"`)

* `Cito` (value: `"Cito"`)

* `EarthCache` (value: `"EarthCache"`)

* `MegaEvent` (value: `"MegaEvent"`)

* `GpsAdventuresExhibit` (value: `"GpsAdventuresExhibit"`)

* `Wherigo` (value: `"Wherigo"`)

* `LostAndFoundEvent` (value: `"LostAndFoundEvent"`)

* `GeocachingHq` (value: `"GeocachingHq"`)

* `LostAndFoundCelebration` (value: `"LostAndFoundCelebration"`)

* `BlockParty` (value: `"BlockParty"`)

* `GigaEvent` (value: `"GigaEvent"`)




