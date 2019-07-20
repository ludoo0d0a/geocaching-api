# GeocachingApiV10.GeocacheLogsApi

All URIs are relative to *https://staging.api.groundspeak.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**geocacheLogsAddImage**](GeocacheLogsApi.md#geocacheLogsAddImage) | **POST** /v{api-version}/geocachelogs/{referenceCode}/images | Add an image to a geocache log
[**geocacheLogsCreateGeocacheLog**](GeocacheLogsApi.md#geocacheLogsCreateGeocacheLog) | **POST** /v{api-version}/geocachelogs | Add a log to a geocache
[**geocacheLogsDeleteGeocacheLog**](GeocacheLogsApi.md#geocacheLogsDeleteGeocacheLog) | **DELETE** /v{api-version}/geocachelogs/{referenceCode} | Delete a geocache log
[**geocacheLogsDeleteGeocacheLogImages**](GeocacheLogsApi.md#geocacheLogsDeleteGeocacheLogImages) | **DELETE** /v{api-version}/geocachelogs/{referenceCode}/images/{imageGuid} | Deletes a geocache log image
[**geocacheLogsGetGeocacheLog**](GeocacheLogsApi.md#geocacheLogsGetGeocacheLog) | **GET** /v{api-version}/geocachelogs/{referenceCode} | Get a single geocache log
[**geocacheLogsGetImages**](GeocacheLogsApi.md#geocacheLogsGetImages) | **GET** /v{api-version}/geocachelogs/{referenceCode}/images | Get a the images attached to a geocache log
[**geocacheLogsUpdateGeocacheLog**](GeocacheLogsApi.md#geocacheLogsUpdateGeocacheLog) | **PUT** /v{api-version}/geocachelogs/{referenceCode} | Update a geocache log


<a name="geocacheLogsAddImage"></a>
# **geocacheLogsAddImage**
> Image geocacheLogsAddImage(referenceCode, image, apiVersion, opts)

Add an image to a geocache log

This method will return a single Geocache.

### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.GeocacheLogsApi();

var referenceCode = "referenceCode_example"; // String | The reference code of the geocache log (example: GL100).

var image = new GeocachingApiV10.PostImage(); // PostImage | 

var apiVersion = "apiVersion_example"; // String | The requested API version

var opts = { 
  'fields': "url" // String | fields to return on the response object, defaults to \"url\"
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.geocacheLogsAddImage(referenceCode, image, apiVersion, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCode** | **String**| The reference code of the geocache log (example: GL100). | 
 **image** | [**PostImage**](PostImage.md)|  | 
 **apiVersion** | **String**| The requested API version | 
 **fields** | **String**| fields to return on the response object, defaults to \&quot;url\&quot; | [optional] [default to url]

### Return type

[**Image**](Image.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/json-patch+json

<a name="geocacheLogsCreateGeocacheLog"></a>
# **geocacheLogsCreateGeocacheLog**
> GeocacheLog geocacheLogsCreateGeocacheLog(log, apiVersion, opts)

Add a log to a geocache

This method will return the created geocache log.

### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.GeocacheLogsApi();

var log = new GeocachingApiV10.PostGeocacheLog(); // PostGeocacheLog | The log to add

var apiVersion = "apiVersion_example"; // String | The requested API version

var opts = { 
  'fields': "referencecode" // String | the fields to return in the response body, defaults to referencecode
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.geocacheLogsCreateGeocacheLog(log, apiVersion, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **log** | [**PostGeocacheLog**](PostGeocacheLog.md)| The log to add | 
 **apiVersion** | **String**| The requested API version | 
 **fields** | **String**| the fields to return in the response body, defaults to referencecode | [optional] [default to referencecode]

### Return type

[**GeocacheLog**](GeocacheLog.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/json-patch+json

<a name="geocacheLogsDeleteGeocacheLog"></a>
# **geocacheLogsDeleteGeocacheLog**
> Object geocacheLogsDeleteGeocacheLog(referenceCode, apiVersion)

Delete a geocache log

This method will not have a response body.

### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.GeocacheLogsApi();

var referenceCode = "referenceCode_example"; // String | The reference code of the geocache log (example: GL100).

var apiVersion = "apiVersion_example"; // String | The requested API version


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.geocacheLogsDeleteGeocacheLog(referenceCode, apiVersion, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCode** | **String**| The reference code of the geocache log (example: GL100). | 
 **apiVersion** | **String**| The requested API version | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/json-patch+json

<a name="geocacheLogsDeleteGeocacheLogImages"></a>
# **geocacheLogsDeleteGeocacheLogImages**
> Object geocacheLogsDeleteGeocacheLogImages(referenceCode, imageGuid, apiVersion)

Deletes a geocache log image

This method will not return anything in the body.

### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.GeocacheLogsApi();

var referenceCode = "referenceCode_example"; // String | The reference code of the geocache log (example: GL100).

var imageGuid = "imageGuid_example"; // String | the guid of the image

var apiVersion = "apiVersion_example"; // String | The requested API version


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.geocacheLogsDeleteGeocacheLogImages(referenceCode, imageGuid, apiVersion, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCode** | **String**| The reference code of the geocache log (example: GL100). | 
 **imageGuid** | [**String**](.md)| the guid of the image | 
 **apiVersion** | **String**| The requested API version | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/json-patch+json

<a name="geocacheLogsGetGeocacheLog"></a>
# **geocacheLogsGetGeocacheLog**
> GeocacheLog geocacheLogsGetGeocacheLog(referenceCode, apiVersion, opts)

Get a single geocache log

This method will return a single geocache log.

### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.GeocacheLogsApi();

var referenceCode = "referenceCode_example"; // String | The reference code of the geocache log (example: GL100).

var apiVersion = "apiVersion_example"; // String | The requested API version

var opts = { 
  'expand': "", // String | fields to include with base geocache log object
  'fields': "referencecode" // String | Property fields you want to return, defaults to referencecode
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.geocacheLogsGetGeocacheLog(referenceCode, apiVersion, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCode** | **String**| The reference code of the geocache log (example: GL100). | 
 **apiVersion** | **String**| The requested API version | 
 **expand** | **String**| fields to include with base geocache log object | [optional] [default to ]
 **fields** | **String**| Property fields you want to return, defaults to referencecode | [optional] [default to referencecode]

### Return type

[**GeocacheLog**](GeocacheLog.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/json-patch+json

<a name="geocacheLogsGetImages"></a>
# **geocacheLogsGetImages**
> [Image] geocacheLogsGetImages(referenceCode, apiVersion, opts)

Get a the images attached to a geocache log

This method will return a list of images.

### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.GeocacheLogsApi();

var referenceCode = "referenceCode_example"; // String | The reference code of the geocache log (example: GL100).

var apiVersion = "apiVersion_example"; // String | The requested API version

var opts = { 
  'skip': 0, // Number | Amount of images to skip over used for pagination. Defaults to 0.
  'take': 10, // Number | Amount of images to include in results. Defaults to 10.
  'fields': "url" // String | Properties you want to return. Defaults to \"url\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.geocacheLogsGetImages(referenceCode, apiVersion, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCode** | **String**| The reference code of the geocache log (example: GL100). | 
 **apiVersion** | **String**| The requested API version | 
 **skip** | **Number**| Amount of images to skip over used for pagination. Defaults to 0. | [optional] [default to 0]
 **take** | **Number**| Amount of images to include in results. Defaults to 10. | [optional] [default to 10]
 **fields** | **String**| Properties you want to return. Defaults to \&quot;url\&quot;. | [optional] [default to url]

### Return type

[**[Image]**](Image.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/json-patch+json

<a name="geocacheLogsUpdateGeocacheLog"></a>
# **geocacheLogsUpdateGeocacheLog**
> GeocacheLog geocacheLogsUpdateGeocacheLog(referenceCode, log, apiVersion, opts)

Update a geocache log

This method will return a geocache log.

### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.GeocacheLogsApi();

var referenceCode = "referenceCode_example"; // String | The log reference code (example: GL100).

var log = new GeocachingApiV10.GeocacheLog(); // GeocacheLog | An instance of the log that is being modified

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
apiInstance.geocacheLogsUpdateGeocacheLog(referenceCode, log, apiVersion, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCode** | **String**| The log reference code (example: GL100). | 
 **log** | [**GeocacheLog**](GeocacheLog.md)| An instance of the log that is being modified | 
 **apiVersion** | **String**| The requested API version | 
 **fields** | **String**| Property fields you want to return, defaults to referencecode | [optional] [default to referencecode]

### Return type

[**GeocacheLog**](GeocacheLog.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/json-patch+json

