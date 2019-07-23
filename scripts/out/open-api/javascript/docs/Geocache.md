# ApiV10.Geocache

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**referenceCode** | **String** | This code uniquely identifies the geocache | [optional] 
**name** | **String** | Name of the Geocache | [optional] 
**difficulty** | **Number** | Difficulty of cache between 1.0 and 5.0 | [optional] 
**terrain** | **Number** | Terrain of cache between 1.0 and 5.0 | [optional] 
**favoritePoints** | **Number** | The number of favorite points on the Geocache | [optional] 
**findCount** | **Number** |  | [optional] 
**trackableCount** | **Number** | The number of trackables on the Geocache | [optional] 
**placedDate** | **Date** | Date the geocache was placed (If the Geocache is an event then this represents the date of the event). | [optional] 
**publishedDate** | **Date** |  | [optional] 
**eventEndDate** | **Date** |  | [optional] 
**type** | **String** | The type of Geocache | [optional] 
**geocacheType** | [**GeocacheType**](GeocacheType.md) |  | [optional] 
**size** | **String** | Container or Size of cache | [optional] 
**geocacheSize** | [**GeocacheSize**](GeocacheSize.md) |  | [optional] 
**userData** | [**UserData**](UserData.md) |  | [optional] 
**status** | **String** | The state of the Geocache | [optional] 
**location** | [**Location**](Location.md) |  | [optional] 
**postedCoordinates** | [**Coordinates**](Coordinates.md) |  | [optional] 
**lastVisitedDate** | **Date** |  | [optional] 
**ownerCode** | **String** | The reference code of the geocache owner | [optional] 
**owner** | [**User**](User.md) |  | [optional] 
**ownerAlias** | **String** |  | [optional] 
**isPremiumOnly** | **Boolean** |  | [optional] 
**shortDescription** | **String** | Summary or short description of the geocache. | [optional] 
**longDescription** | **String** | Detailed description of the geocache. | [optional] 
**hints** | **String** | Hints to find the geocache. | [optional] 
**attributes** | [**[Attribute]**](Attribute.md) |  | [optional] 
**ianaTimezoneId** | **String** |  | [optional] 
**relatedWebPage** | **String** |  | [optional] 
**backgroundImageUrl** | **String** |  | [optional] 
**url** | **String** |  | [optional] 
**containsHtml** | **Boolean** |  | [optional] 
**additionalWaypoints** | [**[AdditionalWaypoint]**](AdditionalWaypoint.md) |  | [optional] 
**trackables** | [**[Trackable]**](Trackable.md) |  | [optional] 
**geocacheLogs** | [**[GeocacheLog]**](GeocacheLog.md) |  | [optional] 
**images** | [**[Image]**](Image.md) |  | [optional] 
**userWaypoints** | [**[UserWaypoint]**](UserWaypoint.md) |  | [optional] 



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





## Enum: SizeEnum


* `Unknown` (value: `"Unknown"`)

* `Micro` (value: `"Micro"`)

* `Regular` (value: `"Regular"`)

* `Large` (value: `"Large"`)

* `Virtual` (value: `"Virtual"`)

* `Other` (value: `"Other"`)

* `Small` (value: `"Small"`)





## Enum: StatusEnum


* `Unpublished` (value: `"Unpublished"`)

* `Active` (value: `"Active"`)

* `Disabled` (value: `"Disabled"`)

* `Locked` (value: `"Locked"`)

* `Archived` (value: `"Archived"`)




