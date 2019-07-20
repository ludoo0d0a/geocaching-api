# GeocachingApiV10.LogDraftsApi

All URIs are relative to *https://staging.api.groundspeak.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**logDraftsAddImage**](LogDraftsApi.md#logDraftsAddImage) | **POST** /v{api-version}/logdrafts/{referenceCode}/images | Add image to log draft
[**logDraftsCreateDraft**](LogDraftsApi.md#logDraftsCreateDraft) | **POST** /v{api-version}/logdrafts | Create a log draft
[**logDraftsDeleteDraft**](LogDraftsApi.md#logDraftsDeleteDraft) | **DELETE** /v{api-version}/logdrafts/{referenceCode} | Delete a log draft
[**logDraftsGetDraft**](LogDraftsApi.md#logDraftsGetDraft) | **GET** /v{api-version}/logdrafts/{referenceCode} | Get a single log draft for the calling user
[**logDraftsGetUserDrafts**](LogDraftsApi.md#logDraftsGetUserDrafts) | **GET** /v{api-version}/logdrafts | Get a list of log drafts for the calling user
[**logDraftsPromoteToGeocacheLog**](LogDraftsApi.md#logDraftsPromoteToGeocacheLog) | **POST** /v{api-version}/logdrafts/{referenceCode}/promote | Promote Log Draft to Geocache Log
[**logDraftsUpdateDraft**](LogDraftsApi.md#logDraftsUpdateDraft) | **PUT** /v{api-version}/logdrafts/{referenceCode} | Update a log draft


<a name="logDraftsAddImage"></a>
# **logDraftsAddImage**
> Image logDraftsAddImage(image, referenceCode, apiVersion, opts)

Add image to log draft

This method will return the image created.

### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.LogDraftsApi();

var image = new GeocachingApiV10.PostImage(); // PostImage | The image to upload and add

var referenceCode = "referenceCode_example"; // String | identifier of the log draft

var apiVersion = "apiVersion_example"; // String | The requested API version

var opts = { 
  'fields': "url" // String | Properties you want to return, defaults to url
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.logDraftsAddImage(image, referenceCode, apiVersion, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **image** | [**PostImage**](PostImage.md)| The image to upload and add | 
 **referenceCode** | **String**| identifier of the log draft | 
 **apiVersion** | **String**| The requested API version | 
 **fields** | **String**| Properties you want to return, defaults to url | [optional] [default to url]

### Return type

[**Image**](Image.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/json-patch+json

<a name="logDraftsCreateDraft"></a>
# **logDraftsCreateDraft**
> LogDraft logDraftsCreateDraft(logDraft, apiVersion, opts)

Create a log draft

This method will return the log draft created.

### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.LogDraftsApi();

var logDraft = new GeocachingApiV10.PostLogDraft(); // PostLogDraft | The log draft to create.

var apiVersion = "apiVersion_example"; // String | The requested API version

var opts = { 
  'fields': "referenceCode" // String | Properties you want to return, defaults to referenceCode
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.logDraftsCreateDraft(logDraft, apiVersion, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logDraft** | [**PostLogDraft**](PostLogDraft.md)| The log draft to create. | 
 **apiVersion** | **String**| The requested API version | 
 **fields** | **String**| Properties you want to return, defaults to referenceCode | [optional] [default to referenceCode]

### Return type

[**LogDraft**](LogDraft.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/json-patch+json

<a name="logDraftsDeleteDraft"></a>
# **logDraftsDeleteDraft**
> Object logDraftsDeleteDraft(referenceCode, apiVersion)

Delete a log draft

This method will return no content.

### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.LogDraftsApi();

var referenceCode = "referenceCode_example"; // String | The identifier of the log draft (ex: LD25)

var apiVersion = "apiVersion_example"; // String | The requested API version


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.logDraftsDeleteDraft(referenceCode, apiVersion, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCode** | **String**| The identifier of the log draft (ex: LD25) | 
 **apiVersion** | **String**| The requested API version | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/json-patch+json

<a name="logDraftsGetDraft"></a>
# **logDraftsGetDraft**
> LogDraft logDraftsGetDraft(referenceCode, apiVersion, opts)

Get a single log draft for the calling user

This method will return a single draft log.

### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.LogDraftsApi();

var referenceCode = "referenceCode_example"; // String | The reference code of the log draft (example: LD25).

var apiVersion = "apiVersion_example"; // String | The requested API version

var opts = { 
  'fields': "referenceCode" // String | Properties you want to return, defaults to referenceCode
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.logDraftsGetDraft(referenceCode, apiVersion, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCode** | **String**| The reference code of the log draft (example: LD25). | 
 **apiVersion** | **String**| The requested API version | 
 **fields** | **String**| Properties you want to return, defaults to referenceCode | [optional] [default to referenceCode]

### Return type

[**LogDraft**](LogDraft.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/json-patch+json

<a name="logDraftsGetUserDrafts"></a>
# **logDraftsGetUserDrafts**
> [LogDraft] logDraftsGetUserDrafts(apiVersion, opts)

Get a list of log drafts for the calling user

This method will return a page (list + total) of log drafts.

### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.LogDraftsApi();

var apiVersion = "apiVersion_example"; // String | The requested API version

var opts = { 
  'skip': 0, // Number | How many drafts to skip (default = 0)
  'take': 10, // Number | How many drafts to return (default = 10)
  'sort': "dateloggedutc", // String | How to sort the drafts (default = loggeddateutc)
  'fields': "referenceCode" // String | Properties you want to return, defaults to referenceCode
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.logDraftsGetUserDrafts(apiVersion, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | **String**| The requested API version | 
 **skip** | **Number**| How many drafts to skip (default &#x3D; 0) | [optional] [default to 0]
 **take** | **Number**| How many drafts to return (default &#x3D; 10) | [optional] [default to 10]
 **sort** | **String**| How to sort the drafts (default &#x3D; loggeddateutc) | [optional] [default to dateloggedutc]
 **fields** | **String**| Properties you want to return, defaults to referenceCode | [optional] [default to referenceCode]

### Return type

[**[LogDraft]**](LogDraft.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/json-patch+json

<a name="logDraftsPromoteToGeocacheLog"></a>
# **logDraftsPromoteToGeocacheLog**
> PromotedDraft logDraftsPromoteToGeocacheLog(draft, referenceCode, apiVersion)

Promote Log Draft to Geocache Log

This method will return the promoted draft info.

### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.LogDraftsApi();

var draft = new GeocachingApiV10.LogDraft(); // LogDraft | The draft to promote to log

var referenceCode = "referenceCode_example"; // String | identifier of the log draft

var apiVersion = "apiVersion_example"; // String | The requested API version


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.logDraftsPromoteToGeocacheLog(draft, referenceCode, apiVersion, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **draft** | [**LogDraft**](LogDraft.md)| The draft to promote to log | 
 **referenceCode** | **String**| identifier of the log draft | 
 **apiVersion** | **String**| The requested API version | 

### Return type

[**PromotedDraft**](PromotedDraft.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/json-patch+json

<a name="logDraftsUpdateDraft"></a>
# **logDraftsUpdateDraft**
> LogDraft logDraftsUpdateDraft(referenceCode, logDraft, apiVersion, opts)

Update a log draft

This method will return the log draft edited.

### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.LogDraftsApi();

var referenceCode = "referenceCode_example"; // String | The identifier of the log draft (ex: LD25)

var logDraft = new GeocachingApiV10.LogDraft(); // LogDraft | The log draft to edit.

var apiVersion = "apiVersion_example"; // String | The requested API version

var opts = { 
  'fields': "referenceCode" // String | Properties you want to return, defaults to referenceCode
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.logDraftsUpdateDraft(referenceCode, logDraft, apiVersion, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCode** | **String**| The identifier of the log draft (ex: LD25) | 
 **logDraft** | [**LogDraft**](LogDraft.md)| The log draft to edit. | 
 **apiVersion** | **String**| The requested API version | 
 **fields** | **String**| Properties you want to return, defaults to referenceCode | [optional] [default to referenceCode]

### Return type

[**LogDraft**](LogDraft.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/json-patch+json

