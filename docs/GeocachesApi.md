# GeocachingApiV10.GeocachesApi

All URIs are relative to *https://staging.api.groundspeak.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**geocachesGetFavoritedBy**](GeocachesApi.md#geocachesGetFavoritedBy) | **GET** /v{api-version}/geocaches/{referenceCode}/favoritedby | Get a list of Users that have favorited a geocache
[**geocachesGetGeocache**](GeocachesApi.md#geocachesGetGeocache) | **GET** /v{api-version}/geocaches/{referenceCode} | Get a single Geocache
[**geocachesGetGeocaches**](GeocachesApi.md#geocachesGetGeocaches) | **GET** /v{api-version}/geocaches | Get a list of geocaches
[**geocachesGetImages**](GeocachesApi.md#geocachesGetImages) | **GET** /v{api-version}/geocaches/{referenceCode}/images | Get a list of images for a geocache
[**geocachesGetLogs**](GeocachesApi.md#geocachesGetLogs) | **GET** /v{api-version}/geocaches/{referenceCode}/geocachelogs | Get a list of geocache logs for the specified geocache
[**geocachesGetTrackables**](GeocachesApi.md#geocachesGetTrackables) | **GET** /v{api-version}/geocaches/{referenceCode}/trackables | Get a list of trackables in a geocache
[**geocachesSearch**](GeocachesApi.md#geocachesSearch) | **GET** /v{api-version}/geocaches/search | Search for Geocaches


<a name="geocachesGetFavoritedBy"></a>
# **geocachesGetFavoritedBy**
> [User] geocachesGetFavoritedBy(referenceCode, apiVersion, opts)

Get a list of Users that have favorited a geocache

This method will return a list of users.

### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.GeocachesApi();

var referenceCode = "referenceCode_example"; // String | The reference code of the geocache (example: GC25)

var apiVersion = "apiVersion_example"; // String | The requested API version

var opts = { 
  'skip': 0, // Number | how many users to skip
  'take': 10, // Number | how many users to retrieve
  'fields': "referenceCode" // String | fields you want to return, defaults to \"referenceCode\"
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.geocachesGetFavoritedBy(referenceCode, apiVersion, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCode** | **String**| The reference code of the geocache (example: GC25) | 
 **apiVersion** | **String**| The requested API version | 
 **skip** | **Number**| how many users to skip | [optional] [default to 0]
 **take** | **Number**| how many users to retrieve | [optional] [default to 10]
 **fields** | **String**| fields you want to return, defaults to \&quot;referenceCode\&quot; | [optional] [default to referenceCode]

### Return type

[**[User]**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/json-patch+json

<a name="geocachesGetGeocache"></a>
# **geocachesGetGeocache**
> Geocache geocachesGetGeocache(referenceCode, apiVersion, opts)

Get a single Geocache

This method will return a single Geocache.

### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.GeocachesApi();

var referenceCode = "referenceCode_example"; // String | The reference code of the geocache (example: GC25).

var apiVersion = "apiVersion_example"; // String | The requested API version

var opts = { 
  'lite': false, // Boolean | Select to return a geocache object without the description and hints
  'expand': "", // String | fields to include with base geocache object
  'fields': "referenceCode" // String | fields you want to return, defaults to \"referenceCode\"
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.geocachesGetGeocache(referenceCode, apiVersion, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCode** | **String**| The reference code of the geocache (example: GC25). | 
 **apiVersion** | **String**| The requested API version | 
 **lite** | **Boolean**| Select to return a geocache object without the description and hints | [optional] [default to false]
 **expand** | **String**| fields to include with base geocache object | [optional] [default to ]
 **fields** | **String**| fields you want to return, defaults to \&quot;referenceCode\&quot; | [optional] [default to referenceCode]

### Return type

[**Geocache**](Geocache.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/json-patch+json

<a name="geocachesGetGeocaches"></a>
# **geocachesGetGeocaches**
> [Geocache] geocachesGetGeocaches(referenceCodes, apiVersion, opts)

Get a list of geocaches

This method will return a list of geocaches.

### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.GeocachesApi();

var referenceCodes = "referenceCodes_example"; // String | comma delimited list of geocache reference codes to retrieve (example: GC25,GC26,GC27).

var apiVersion = "apiVersion_example"; // String | The requested API version

var opts = { 
  'lite': false, // Boolean | Select to return a geocache object without the description and hints
  'expand': "", // String | fields to include with base geocache object
  'fields': "referenceCode" // String | fields you want to return, defaults to \"referenceCode\"
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.geocachesGetGeocaches(referenceCodes, apiVersion, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCodes** | **String**| comma delimited list of geocache reference codes to retrieve (example: GC25,GC26,GC27). | 
 **apiVersion** | **String**| The requested API version | 
 **lite** | **Boolean**| Select to return a geocache object without the description and hints | [optional] [default to false]
 **expand** | **String**| fields to include with base geocache object | [optional] [default to ]
 **fields** | **String**| fields you want to return, defaults to \&quot;referenceCode\&quot; | [optional] [default to referenceCode]

### Return type

[**[Geocache]**](Geocache.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/json-patch+json

<a name="geocachesGetImages"></a>
# **geocachesGetImages**
> [Image] geocachesGetImages(referenceCode, apiVersion, opts)

Get a list of images for a geocache

This method will return a list of images.

### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.GeocachesApi();

var referenceCode = "referenceCode_example"; // String | The reference code of the geocache (example: GC25).

var apiVersion = "apiVersion_example"; // String | The requested API version

var opts = { 
  'skip': 0, // Number | how many images to skip
  'take': 10, // Number | how many images to retrieve
  'fields': "url" // String | fields you want to return, defaults to \"url\"
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.geocachesGetImages(referenceCode, apiVersion, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCode** | **String**| The reference code of the geocache (example: GC25). | 
 **apiVersion** | **String**| The requested API version | 
 **skip** | **Number**| how many images to skip | [optional] [default to 0]
 **take** | **Number**| how many images to retrieve | [optional] [default to 10]
 **fields** | **String**| fields you want to return, defaults to \&quot;url\&quot; | [optional] [default to url]

### Return type

[**[Image]**](Image.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/json-patch+json

<a name="geocachesGetLogs"></a>
# **geocachesGetLogs**
> [GeocacheLog] geocachesGetLogs(referenceCode, apiVersion, opts)

Get a list of geocache logs for the specified geocache

This method will return a list of geocache logs.

### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.GeocachesApi();

var referenceCode = "referenceCode_example"; // String | The reference code of the geocache (example: GC25).

var apiVersion = "apiVersion_example"; // String | The requested API version

var opts = { 
  'skip': 0, // Number | how many logs to skip over
  'take': 10, // Number | how many logs to retrieve
  'expand': "", // String | fields to include with base geocache object
  'fields': "referenceCode" // String | fields you want to return, defaults to referenceCode
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.geocachesGetLogs(referenceCode, apiVersion, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCode** | **String**| The reference code of the geocache (example: GC25). | 
 **apiVersion** | **String**| The requested API version | 
 **skip** | **Number**| how many logs to skip over | [optional] [default to 0]
 **take** | **Number**| how many logs to retrieve | [optional] [default to 10]
 **expand** | **String**| fields to include with base geocache object | [optional] [default to ]
 **fields** | **String**| fields you want to return, defaults to referenceCode | [optional] [default to referenceCode]

### Return type

[**[GeocacheLog]**](GeocacheLog.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/json-patch+json

<a name="geocachesGetTrackables"></a>
# **geocachesGetTrackables**
> [Trackable] geocachesGetTrackables(referenceCode, apiVersion, opts)

Get a list of trackables in a geocache

This method will return a list of trackables.

### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.GeocachesApi();

var referenceCode = "referenceCode_example"; // String | The reference code of the geocache (example: GC25).

var apiVersion = "apiVersion_example"; // String | The requested API version

var opts = { 
  'skip': 0, // Number | how many trackables to skip
  'take': 10, // Number | how many trackables to retrieve
  'fields': "referenceCode", // String | fields you want to return, defaults to referenceCode
  'expand': "" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.geocachesGetTrackables(referenceCode, apiVersion, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCode** | **String**| The reference code of the geocache (example: GC25). | 
 **apiVersion** | **String**| The requested API version | 
 **skip** | **Number**| how many trackables to skip | [optional] [default to 0]
 **take** | **Number**| how many trackables to retrieve | [optional] [default to 10]
 **fields** | **String**| fields you want to return, defaults to referenceCode | [optional] [default to referenceCode]
 **expand** | **String**|  | [optional] [default to ]

### Return type

[**[Trackable]**](Trackable.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/json-patch+json

<a name="geocachesSearch"></a>
# **geocachesSearch**
> [Geocache] geocachesSearch(q, apiVersion, opts)

Search for Geocaches

This method will return search results.

### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.GeocachesApi();

var q = "q_example"; // String | The query used on the geocaches

var apiVersion = "apiVersion_example"; // String | The requested API version

var opts = { 
  'sort': "", // String | Defaults to distance if coords are provided otherwise favoritepoints (distance, favorites, cachename, size, difficulty, terrain, founddate, placeddate, id)
  'lite': true, // Boolean | Return a lite version of geocache (no description, hint, or
  'skip': 0, // Number | Defaults to 0, how many geocaches to skip
  'take': 50, // Number | Defaults to 20, how many geocaches to return
  'expand': "", // String | fields to include with base geocache object
  'fields': "referenceCode" // String | Properties you want to return, defaults to \"referencecode\"
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.geocachesSearch(q, apiVersion, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **String**| The query used on the geocaches | 
 **apiVersion** | **String**| The requested API version | 
 **sort** | **String**| Defaults to distance if coords are provided otherwise favoritepoints (distance, favorites, cachename, size, difficulty, terrain, founddate, placeddate, id) | [optional] [default to ]
 **lite** | **Boolean**| Return a lite version of geocache (no description, hint, or | [optional] [default to true]
 **skip** | **Number**| Defaults to 0, how many geocaches to skip | [optional] [default to 0]
 **take** | **Number**| Defaults to 20, how many geocaches to return | [optional] [default to 50]
 **expand** | **String**| fields to include with base geocache object | [optional] [default to ]
 **fields** | **String**| Properties you want to return, defaults to \&quot;referencecode\&quot; | [optional] [default to referenceCode]

### Return type

[**[Geocache]**](Geocache.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/json-patch+json

