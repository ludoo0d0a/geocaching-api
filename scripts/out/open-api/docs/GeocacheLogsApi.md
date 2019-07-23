# ApiV10.GeocacheLogsApi

All URIs are relative to *https://api.groundspeak.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**geocacheLogsAddImage**](GeocacheLogsApi.md#geocacheLogsAddImage) | **POST** /v{api-version}/geocachelogs/{referenceCode}/images | Add an image to a geocache log
[**geocacheLogsCreateGeocacheLog**](GeocacheLogsApi.md#geocacheLogsCreateGeocacheLog) | **POST** /v{api-version}/geocachelogs | Add a log to a geocache
[**geocacheLogsDeleteGeocacheLog**](GeocacheLogsApi.md#geocacheLogsDeleteGeocacheLog) | **DELETE** /v{api-version}/geocachelogs/{referenceCode} | Delete a geocache log
[**geocacheLogsDeleteGeocacheLogImages**](GeocacheLogsApi.md#geocacheLogsDeleteGeocacheLogImages) | **DELETE** /v{api-version}/geocachelogs/{referenceCode}/images/{imageGuid} | Deletes a geocache log image
[**geocacheLogsGetGeocacheLog**](GeocacheLogsApi.md#geocacheLogsGetGeocacheLog) | **GET** /v{api-version}/geocachelogs/{referenceCode} | Get a single geocache log
[**geocacheLogsGetImages**](GeocacheLogsApi.md#geocacheLogsGetImages) | **GET** /v{api-version}/geocachelogs/{referenceCode}/images | Get a the images attached to a geocache log
[**geocacheLogsUpdateGeocacheLog**](GeocacheLogsApi.md#geocacheLogsUpdateGeocacheLog) | **PUT** /v{api-version}/geocachelogs/{referenceCode} | Update a geocache log



## geocacheLogsAddImage

> Image geocacheLogsAddImage(referenceCode, apiVersion, postImage, opts)

Add an image to a geocache log

This method will return a single Geocache.

### Example

```javascript
import ApiV10 from 'api_v1_0';

let apiInstance = new ApiV10.GeocacheLogsApi();
let referenceCode = "referenceCode_example"; // String | The reference code of the geocache log (example: GL100).
let apiVersion = "'1.0'"; // String | The requested API version
let postImage = new ApiV10.PostImage(); // PostImage | 
let opts = {
  'fields': "'url'" // String | fields to return on the response object, defaults to \"url\"
};
apiInstance.geocacheLogsAddImage(referenceCode, apiVersion, postImage, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCode** | **String**| The reference code of the geocache log (example: GL100). | 
 **apiVersion** | **String**| The requested API version | [default to &#39;1.0&#39;]
 **postImage** | [**PostImage**](PostImage.md)|  | 
 **fields** | **String**| fields to return on the response object, defaults to \&quot;url\&quot; | [optional] [default to &#39;url&#39;]

### Return type

[**Image**](Image.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/json-patch+json, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/json-patch+json


## geocacheLogsCreateGeocacheLog

> GeocacheLog geocacheLogsCreateGeocacheLog(apiVersion, postGeocacheLog, opts)

Add a log to a geocache

This method will return the created geocache log.

### Example

```javascript
import ApiV10 from 'api_v1_0';

let apiInstance = new ApiV10.GeocacheLogsApi();
let apiVersion = "'1.0'"; // String | The requested API version
let postGeocacheLog = new ApiV10.PostGeocacheLog(); // PostGeocacheLog | The log to add
let opts = {
  'fields': "'referencecode'" // String | the fields to return in the response body, defaults to referencecode
};
apiInstance.geocacheLogsCreateGeocacheLog(apiVersion, postGeocacheLog, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | **String**| The requested API version | [default to &#39;1.0&#39;]
 **postGeocacheLog** | [**PostGeocacheLog**](PostGeocacheLog.md)| The log to add | 
 **fields** | **String**| the fields to return in the response body, defaults to referencecode | [optional] [default to &#39;referencecode&#39;]

### Return type

[**GeocacheLog**](GeocacheLog.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/json-patch+json, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/json-patch+json


## geocacheLogsDeleteGeocacheLog

> Object geocacheLogsDeleteGeocacheLog(referenceCode, apiVersion)

Delete a geocache log

This method will not have a response body.

### Example

```javascript
import ApiV10 from 'api_v1_0';

let apiInstance = new ApiV10.GeocacheLogsApi();
let referenceCode = "referenceCode_example"; // String | The reference code of the geocache log (example: GL100).
let apiVersion = "'1.0'"; // String | The requested API version
apiInstance.geocacheLogsDeleteGeocacheLog(referenceCode, apiVersion, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCode** | **String**| The reference code of the geocache log (example: GL100). | 
 **apiVersion** | **String**| The requested API version | [default to &#39;1.0&#39;]

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/json-patch+json


## geocacheLogsDeleteGeocacheLogImages

> Object geocacheLogsDeleteGeocacheLogImages(referenceCode, imageGuid, apiVersion)

Deletes a geocache log image

This method will not return anything in the body.

### Example

```javascript
import ApiV10 from 'api_v1_0';

let apiInstance = new ApiV10.GeocacheLogsApi();
let referenceCode = "referenceCode_example"; // String | The reference code of the geocache log (example: GL100).
let imageGuid = null; // String | the guid of the image
let apiVersion = "'1.0'"; // String | The requested API version
apiInstance.geocacheLogsDeleteGeocacheLogImages(referenceCode, imageGuid, apiVersion, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCode** | **String**| The reference code of the geocache log (example: GL100). | 
 **imageGuid** | [**String**](.md)| the guid of the image | 
 **apiVersion** | **String**| The requested API version | [default to &#39;1.0&#39;]

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/json-patch+json


## geocacheLogsGetGeocacheLog

> GeocacheLog geocacheLogsGetGeocacheLog(referenceCode, apiVersion, opts)

Get a single geocache log

This method will return a single geocache log.

### Example

```javascript
import ApiV10 from 'api_v1_0';

let apiInstance = new ApiV10.GeocacheLogsApi();
let referenceCode = "referenceCode_example"; // String | The reference code of the geocache log (example: GL100).
let apiVersion = "'1.0'"; // String | The requested API version
let opts = {
  'expand': "''", // String | fields to include with base geocache log object
  'fields': "'referencecode'" // String | Property fields you want to return, defaults to referencecode
};
apiInstance.geocacheLogsGetGeocacheLog(referenceCode, apiVersion, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCode** | **String**| The reference code of the geocache log (example: GL100). | 
 **apiVersion** | **String**| The requested API version | [default to &#39;1.0&#39;]
 **expand** | **String**| fields to include with base geocache log object | [optional] [default to &#39;&#39;]
 **fields** | **String**| Property fields you want to return, defaults to referencecode | [optional] [default to &#39;referencecode&#39;]

### Return type

[**GeocacheLog**](GeocacheLog.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/json-patch+json


## geocacheLogsGetImages

> [Image] geocacheLogsGetImages(referenceCode, apiVersion, opts)

Get a the images attached to a geocache log

This method will return a list of images.

### Example

```javascript
import ApiV10 from 'api_v1_0';

let apiInstance = new ApiV10.GeocacheLogsApi();
let referenceCode = "referenceCode_example"; // String | The reference code of the geocache log (example: GL100).
let apiVersion = "'1.0'"; // String | The requested API version
let opts = {
  'skip': 0, // Number | Amount of images to skip over used for pagination. Defaults to 0.
  'take': 10, // Number | Amount of images to include in results. Defaults to 10.
  'fields': "'url'" // String | Properties you want to return. Defaults to \"url\".
};
apiInstance.geocacheLogsGetImages(referenceCode, apiVersion, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCode** | **String**| The reference code of the geocache log (example: GL100). | 
 **apiVersion** | **String**| The requested API version | [default to &#39;1.0&#39;]
 **skip** | **Number**| Amount of images to skip over used for pagination. Defaults to 0. | [optional] [default to 0]
 **take** | **Number**| Amount of images to include in results. Defaults to 10. | [optional] [default to 10]
 **fields** | **String**| Properties you want to return. Defaults to \&quot;url\&quot;. | [optional] [default to &#39;url&#39;]

### Return type

[**[Image]**](Image.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/json-patch+json


## geocacheLogsUpdateGeocacheLog

> GeocacheLog geocacheLogsUpdateGeocacheLog(referenceCode, apiVersion, geocacheLog, opts)

Update a geocache log

This method will return a geocache log.

### Example

```javascript
import ApiV10 from 'api_v1_0';

let apiInstance = new ApiV10.GeocacheLogsApi();
let referenceCode = "referenceCode_example"; // String | The log reference code (example: GL100).
let apiVersion = "'1.0'"; // String | The requested API version
let geocacheLog = new ApiV10.GeocacheLog(); // GeocacheLog | An instance of the log that is being modified
let opts = {
  'fields': "'referencecode'" // String | Property fields you want to return, defaults to referencecode
};
apiInstance.geocacheLogsUpdateGeocacheLog(referenceCode, apiVersion, geocacheLog, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCode** | **String**| The log reference code (example: GL100). | 
 **apiVersion** | **String**| The requested API version | [default to &#39;1.0&#39;]
 **geocacheLog** | [**GeocacheLog**](GeocacheLog.md)| An instance of the log that is being modified | 
 **fields** | **String**| Property fields you want to return, defaults to referencecode | [optional] [default to &#39;referencecode&#39;]

### Return type

[**GeocacheLog**](GeocacheLog.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/json-patch+json, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/json-patch+json

