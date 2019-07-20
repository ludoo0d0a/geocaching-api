# GeocachingApiV10.TrackablesApi

All URIs are relative to *https://staging.api.groundspeak.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**trackablesGetGeocoinTypes**](TrackablesApi.md#trackablesGetGeocoinTypes) | **GET** /v{api-version}/trackables/geocointypes | Get paged geocoin types
[**trackablesGetImages**](TrackablesApi.md#trackablesGetImages) | **GET** /v{api-version}/trackables/{referenceCode}/Images | Get the images attached to a trackable
[**trackablesGetTrackable**](TrackablesApi.md#trackablesGetTrackable) | **GET** /v{api-version}/trackables/{referenceCode} | Get a single trackable
[**trackablesGetTrackableLogs**](TrackablesApi.md#trackablesGetTrackableLogs) | **GET** /v{api-version}/trackables/{referenceCode}/trackablelogs | Get a list of trackable logs for the specified trackable
[**trackablesGetUserTrackables**](TrackablesApi.md#trackablesGetUserTrackables) | **GET** /v{api-version}/trackables | Gets a list of trackables


<a name="trackablesGetGeocoinTypes"></a>
# **trackablesGetGeocoinTypes**
> [TrackableType] trackablesGetGeocoinTypes(apiVersion, opts)

Get paged geocoin types

This method will return a list of geocoin types.

### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.TrackablesApi();

var apiVersion = "apiVersion_example"; // String | The requested API version

var opts = { 
  'skip': 0, // Number | Amount of types to skip over used for pagination. Defaults to 0.
  'take': 10, // Number | Amount of types to include in results. Defaults to 10.
  'fields': "id" // String | Properties you want to return. Defaults to id.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trackablesGetGeocoinTypes(apiVersion, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | **String**| The requested API version | 
 **skip** | **Number**| Amount of types to skip over used for pagination. Defaults to 0. | [optional] [default to 0]
 **take** | **Number**| Amount of types to include in results. Defaults to 10. | [optional] [default to 10]
 **fields** | **String**| Properties you want to return. Defaults to id. | [optional] [default to id]

### Return type

[**[TrackableType]**](TrackableType.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/json-patch+json

<a name="trackablesGetImages"></a>
# **trackablesGetImages**
> [Image] trackablesGetImages(referenceCode, apiVersion, opts)

Get the images attached to a trackable

This method will return a list of images.

### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.TrackablesApi();

var referenceCode = "referenceCode_example"; // String | The reference code of the trackable (example: TB100).

var apiVersion = "apiVersion_example"; // String | The requested API version

var opts = { 
  'skip': 0, // Number | Amount of images to skip over used for pagination. Defaults to 0.
  'take': 10, // Number | Amount of images to include in results. Defaults to 10.
  'fields': "url" // String | Properties you want to return. Defaults to url.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trackablesGetImages(referenceCode, apiVersion, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCode** | **String**| The reference code of the trackable (example: TB100). | 
 **apiVersion** | **String**| The requested API version | 
 **skip** | **Number**| Amount of images to skip over used for pagination. Defaults to 0. | [optional] [default to 0]
 **take** | **Number**| Amount of images to include in results. Defaults to 10. | [optional] [default to 10]
 **fields** | **String**| Properties you want to return. Defaults to url. | [optional] [default to url]

### Return type

[**[Image]**](Image.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/json-patch+json

<a name="trackablesGetTrackable"></a>
# **trackablesGetTrackable**
> Trackable trackablesGetTrackable(referenceCode, apiVersion, opts)

Get a single trackable

This method will return a single trackable.

### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.TrackablesApi();

var referenceCode = "referenceCode_example"; // String | The reference code or tracking number of the trackable (example: TB100).

var apiVersion = "apiVersion_example"; // String | The requested API version

var opts = { 
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
apiInstance.trackablesGetTrackable(referenceCode, apiVersion, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCode** | **String**| The reference code or tracking number of the trackable (example: TB100). | 
 **apiVersion** | **String**| The requested API version | 
 **fields** | **String**| fields you want to return, defaults to referenceCode | [optional] [default to referenceCode]
 **expand** | **String**|  | [optional] [default to ]

### Return type

[**Trackable**](Trackable.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/json-patch+json

<a name="trackablesGetTrackableLogs"></a>
# **trackablesGetTrackableLogs**
> [TrackableLog] trackablesGetTrackableLogs(referenceCode, apiVersion, opts)

Get a list of trackable logs for the specified trackable

This method will return a list of trackable logs.

### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.TrackablesApi();

var referenceCode = "referenceCode_example"; // String | The reference code of the trackable (example: TB100).

var apiVersion = "apiVersion_example"; // String | The requested API version

var opts = { 
  'skip': 0, // Number | how many logs to skip over
  'take': 10, // Number | how many logs to retrieve
  'fields': "referenceCode", // String | fields you want to return, defaults to referenceCode
  'expand': "", // String | 
  'logTypes': "logTypes_example" // String | what log types to include with results. defaults to all
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trackablesGetTrackableLogs(referenceCode, apiVersion, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCode** | **String**| The reference code of the trackable (example: TB100). | 
 **apiVersion** | **String**| The requested API version | 
 **skip** | **Number**| how many logs to skip over | [optional] [default to 0]
 **take** | **Number**| how many logs to retrieve | [optional] [default to 10]
 **fields** | **String**| fields you want to return, defaults to referenceCode | [optional] [default to referenceCode]
 **expand** | **String**|  | [optional] [default to ]
 **logTypes** | **String**| what log types to include with results. defaults to all | [optional] 

### Return type

[**[TrackableLog]**](TrackableLog.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/json-patch+json

<a name="trackablesGetUserTrackables"></a>
# **trackablesGetUserTrackables**
> [Trackable] trackablesGetUserTrackables(apiVersion, opts)

Gets a list of trackables

This method will return a list of trackables, either by specified codes or get user trackables if you leave referenceCodes null

### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.TrackablesApi();

var apiVersion = "apiVersion_example"; // String | The requested API version

var opts = { 
  'referenceCodes': "referenceCodes_example", // String | The reference code or tracking number of the trackables (example: TB100). Don't pass in this param if you want to return user trackables
  'type': "1", // String | 1= inventory, 2 = collection, 3 = owned (default: 1)
  'skip': 0, // Number | default = 0
  'take': 10, // Number | default = 10
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
apiInstance.trackablesGetUserTrackables(apiVersion, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | **String**| The requested API version | 
 **referenceCodes** | **String**| The reference code or tracking number of the trackables (example: TB100). Don&#39;t pass in this param if you want to return user trackables | [optional] 
 **type** | **String**| 1&#x3D; inventory, 2 &#x3D; collection, 3 &#x3D; owned (default: 1) | [optional] [default to 1]
 **skip** | **Number**| default &#x3D; 0 | [optional] [default to 0]
 **take** | **Number**| default &#x3D; 10 | [optional] [default to 10]
 **fields** | **String**| fields you want to return, defaults to referenceCode | [optional] [default to referenceCode]
 **expand** | **String**|  | [optional] [default to ]

### Return type

[**[Trackable]**](Trackable.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/json-patch+json

