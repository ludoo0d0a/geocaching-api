# GeocachingApiV10.TrackableLogsApi

All URIs are relative to *https://staging.api.groundspeak.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**trackableLogsAddImage**](TrackableLogsApi.md#trackableLogsAddImage) | **POST** /v{api-version}/trackablelogs/{referenceCode}/images | Add an image to a trackable log
[**trackableLogsCreateTrackableLog**](TrackableLogsApi.md#trackableLogsCreateTrackableLog) | **POST** /v{api-version}/trackablelogs | Add a log to a trackable
[**trackableLogsDeleteTrackableLog**](TrackableLogsApi.md#trackableLogsDeleteTrackableLog) | **DELETE** /v{api-version}/trackablelogs/{referenceCode} | Deletes a trackable log
[**trackableLogsDeleteTrackableLogImages**](TrackableLogsApi.md#trackableLogsDeleteTrackableLogImages) | **DELETE** /v{api-version}/trackablelogs/{referenceCode}/images/{imageGuid} | Deletes a trackable log image
[**trackableLogsGetImages**](TrackableLogsApi.md#trackableLogsGetImages) | **GET** /v{api-version}/trackablelogs/{referenceCode}/images | Get a the images attached to a trackable log
[**trackableLogsGetTrackableLog**](TrackableLogsApi.md#trackableLogsGetTrackableLog) | **GET** /v{api-version}/trackablelogs/{referenceCode} | Get a single trackable log
[**trackableLogsUpdateTrackableLog**](TrackableLogsApi.md#trackableLogsUpdateTrackableLog) | **PUT** /v{api-version}/trackablelogs/{referenceCode} | Update a trackable log


<a name="trackableLogsAddImage"></a>
# **trackableLogsAddImage**
> Image trackableLogsAddImage(referenceCode, image, apiVersion, opts)

Add an image to a trackable log

This method will return a single image.

### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.TrackableLogsApi();

var referenceCode = "referenceCode_example"; // String | The reference code of the trackable log (example: TL100).

var image = new GeocachingApiV10.PostImage(); // PostImage | image to add

var apiVersion = "apiVersion_example"; // String | The requested API version

var opts = { 
  'fields': "url" // String | Property fields you want to return, defaults to url
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trackableLogsAddImage(referenceCode, image, apiVersion, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCode** | **String**| The reference code of the trackable log (example: TL100). | 
 **image** | [**PostImage**](PostImage.md)| image to add | 
 **apiVersion** | **String**| The requested API version | 
 **fields** | **String**| Property fields you want to return, defaults to url | [optional] [default to url]

### Return type

[**Image**](Image.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/json-patch+json

<a name="trackableLogsCreateTrackableLog"></a>
# **trackableLogsCreateTrackableLog**
> TrackableLog trackableLogsCreateTrackableLog(log, apiVersion, opts)

Add a log to a trackable

This method will return the created trackable log.

### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.TrackableLogsApi();

var log = new GeocachingApiV10.PostTrackableLog(); // PostTrackableLog | The log to add

var apiVersion = "apiVersion_example"; // String | The requested API version

var opts = { 
  'fields': "referenceCode" // String | Property fields you want to return, defaults to referencecode
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trackableLogsCreateTrackableLog(log, apiVersion, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **log** | [**PostTrackableLog**](PostTrackableLog.md)| The log to add | 
 **apiVersion** | **String**| The requested API version | 
 **fields** | **String**| Property fields you want to return, defaults to referencecode | [optional] [default to referenceCode]

### Return type

[**TrackableLog**](TrackableLog.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/json-patch+json

<a name="trackableLogsDeleteTrackableLog"></a>
# **trackableLogsDeleteTrackableLog**
> Object trackableLogsDeleteTrackableLog(referenceCode, apiVersion)

Deletes a trackable log

This method will not return anything in the body.

### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.TrackableLogsApi();

var referenceCode = "referenceCode_example"; // String | The reference code of the trackable log (example: TL100).

var apiVersion = "apiVersion_example"; // String | The requested API version


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trackableLogsDeleteTrackableLog(referenceCode, apiVersion, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCode** | **String**| The reference code of the trackable log (example: TL100). | 
 **apiVersion** | **String**| The requested API version | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/json-patch+json

<a name="trackableLogsDeleteTrackableLogImages"></a>
# **trackableLogsDeleteTrackableLogImages**
> Object trackableLogsDeleteTrackableLogImages(referenceCode, imageGuid, apiVersion)

Deletes a trackable log image

This method will not return anything in the body.

### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.TrackableLogsApi();

var referenceCode = "referenceCode_example"; // String | The reference code of the trackable log (example: TL100).

var imageGuid = "imageGuid_example"; // String | the guid of the image

var apiVersion = "apiVersion_example"; // String | The requested API version


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trackableLogsDeleteTrackableLogImages(referenceCode, imageGuid, apiVersion, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCode** | **String**| The reference code of the trackable log (example: TL100). | 
 **imageGuid** | [**String**](.md)| the guid of the image | 
 **apiVersion** | **String**| The requested API version | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/json-patch+json

<a name="trackableLogsGetImages"></a>
# **trackableLogsGetImages**
> [Image] trackableLogsGetImages(referenceCode, apiVersion, opts)

Get a the images attached to a trackable log

This method will return a list of images.

### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.TrackableLogsApi();

var referenceCode = "referenceCode_example"; // String | The reference code of the trackable log (example: TL100).

var apiVersion = "apiVersion_example"; // String | The requested API version

var opts = { 
  'skip': 0, // Number | Amount of images to skip over used for pagination. Defaults to 0.
  'take': 10, // Number | Amount of images to include in results. Defaults to 10.
  'fields': "referencecode" // String | Properties you want to return. Defaults to referencecode.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trackableLogsGetImages(referenceCode, apiVersion, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCode** | **String**| The reference code of the trackable log (example: TL100). | 
 **apiVersion** | **String**| The requested API version | 
 **skip** | **Number**| Amount of images to skip over used for pagination. Defaults to 0. | [optional] [default to 0]
 **take** | **Number**| Amount of images to include in results. Defaults to 10. | [optional] [default to 10]
 **fields** | **String**| Properties you want to return. Defaults to referencecode. | [optional] [default to referencecode]

### Return type

[**[Image]**](Image.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/json-patch+json

<a name="trackableLogsGetTrackableLog"></a>
# **trackableLogsGetTrackableLog**
> TrackableLog trackableLogsGetTrackableLog(referenceCode, apiVersion, opts)

Get a single trackable log

This method will return a single trackable log.

### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.TrackableLogsApi();

var referenceCode = "referenceCode_example"; // String | The reference code of the trackable log (example: TL100).

var apiVersion = "apiVersion_example"; // String | The requested API version

var opts = { 
  'fields': "referencecode", // String | Property fields you want to return, defaults to referencecode
  'expand': "" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trackableLogsGetTrackableLog(referenceCode, apiVersion, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCode** | **String**| The reference code of the trackable log (example: TL100). | 
 **apiVersion** | **String**| The requested API version | 
 **fields** | **String**| Property fields you want to return, defaults to referencecode | [optional] [default to referencecode]
 **expand** | **String**|  | [optional] [default to ]

### Return type

[**TrackableLog**](TrackableLog.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/json-patch+json

<a name="trackableLogsUpdateTrackableLog"></a>
# **trackableLogsUpdateTrackableLog**
> TrackableLog trackableLogsUpdateTrackableLog(referenceCode, log, apiVersion, opts)

Update a trackable log

This method will return a trackable log.

### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.TrackableLogsApi();

var referenceCode = "referenceCode_example"; // String | The log reference code (example: TL100).

var log = new GeocachingApiV10.TrackableLog(); // TrackableLog | An instance of the log that is being modified. Text is the only modified parameter

var apiVersion = "apiVersion_example"; // String | The requested API version

var opts = { 
  'fields': "referencecode" // String | Property fields you want to return, defaults to referencecode
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trackableLogsUpdateTrackableLog(referenceCode, log, apiVersion, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCode** | **String**| The log reference code (example: TL100). | 
 **log** | [**TrackableLog**](TrackableLog.md)| An instance of the log that is being modified. Text is the only modified parameter | 
 **apiVersion** | **String**| The requested API version | 
 **fields** | **String**| Property fields you want to return, defaults to referencecode | [optional] [default to referencecode]

### Return type

[**TrackableLog**](TrackableLog.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/json-patch+json

