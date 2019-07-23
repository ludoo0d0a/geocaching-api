# ApiV10.TrackableLogsApi

All URIs are relative to *https://api.groundspeak.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**trackableLogsAddImage**](TrackableLogsApi.md#trackableLogsAddImage) | **POST** /v{api-version}/trackablelogs/{referenceCode}/images | Add an image to a trackable log
[**trackableLogsCreateTrackableLog**](TrackableLogsApi.md#trackableLogsCreateTrackableLog) | **POST** /v{api-version}/trackablelogs | Add a log to a trackable
[**trackableLogsDeleteTrackableLog**](TrackableLogsApi.md#trackableLogsDeleteTrackableLog) | **DELETE** /v{api-version}/trackablelogs/{referenceCode} | Deletes a trackable log
[**trackableLogsDeleteTrackableLogImages**](TrackableLogsApi.md#trackableLogsDeleteTrackableLogImages) | **DELETE** /v{api-version}/trackablelogs/{referenceCode}/images/{imageGuid} | Deletes a trackable log image
[**trackableLogsGetImages**](TrackableLogsApi.md#trackableLogsGetImages) | **GET** /v{api-version}/trackablelogs/{referenceCode}/images | Get a the images attached to a trackable log
[**trackableLogsGetTrackableLog**](TrackableLogsApi.md#trackableLogsGetTrackableLog) | **GET** /v{api-version}/trackablelogs/{referenceCode} | Get a single trackable log
[**trackableLogsUpdateTrackableLog**](TrackableLogsApi.md#trackableLogsUpdateTrackableLog) | **PUT** /v{api-version}/trackablelogs/{referenceCode} | Update a trackable log



## trackableLogsAddImage

> Image trackableLogsAddImage(referenceCode, apiVersion, postImage, opts)

Add an image to a trackable log

This method will return a single image.

### Example

```javascript
import ApiV10 from 'api_v1_0';

let apiInstance = new ApiV10.TrackableLogsApi();
let referenceCode = "referenceCode_example"; // String | The reference code of the trackable log (example: TL100).
let apiVersion = "'1.0'"; // String | The requested API version
let postImage = new ApiV10.PostImage(); // PostImage | image to add
let opts = {
  'fields': "'url'" // String | Property fields you want to return, defaults to url
};
apiInstance.trackableLogsAddImage(referenceCode, apiVersion, postImage, opts, (error, data, response) => {
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
 **referenceCode** | **String**| The reference code of the trackable log (example: TL100). | 
 **apiVersion** | **String**| The requested API version | [default to &#39;1.0&#39;]
 **postImage** | [**PostImage**](PostImage.md)| image to add | 
 **fields** | **String**| Property fields you want to return, defaults to url | [optional] [default to &#39;url&#39;]

### Return type

[**Image**](Image.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/json-patch+json, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/json-patch+json


## trackableLogsCreateTrackableLog

> TrackableLog trackableLogsCreateTrackableLog(apiVersion, postTrackableLog, opts)

Add a log to a trackable

This method will return the created trackable log.

### Example

```javascript
import ApiV10 from 'api_v1_0';

let apiInstance = new ApiV10.TrackableLogsApi();
let apiVersion = "'1.0'"; // String | The requested API version
let postTrackableLog = new ApiV10.PostTrackableLog(); // PostTrackableLog | The log to add
let opts = {
  'fields': "'referenceCode'" // String | Property fields you want to return, defaults to referencecode
};
apiInstance.trackableLogsCreateTrackableLog(apiVersion, postTrackableLog, opts, (error, data, response) => {
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
 **postTrackableLog** | [**PostTrackableLog**](PostTrackableLog.md)| The log to add | 
 **fields** | **String**| Property fields you want to return, defaults to referencecode | [optional] [default to &#39;referenceCode&#39;]

### Return type

[**TrackableLog**](TrackableLog.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/json-patch+json, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/json-patch+json


## trackableLogsDeleteTrackableLog

> Object trackableLogsDeleteTrackableLog(referenceCode, apiVersion)

Deletes a trackable log

This method will not return anything in the body.

### Example

```javascript
import ApiV10 from 'api_v1_0';

let apiInstance = new ApiV10.TrackableLogsApi();
let referenceCode = "referenceCode_example"; // String | The reference code of the trackable log (example: TL100).
let apiVersion = "'1.0'"; // String | The requested API version
apiInstance.trackableLogsDeleteTrackableLog(referenceCode, apiVersion, (error, data, response) => {
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
 **referenceCode** | **String**| The reference code of the trackable log (example: TL100). | 
 **apiVersion** | **String**| The requested API version | [default to &#39;1.0&#39;]

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/json-patch+json


## trackableLogsDeleteTrackableLogImages

> Object trackableLogsDeleteTrackableLogImages(referenceCode, imageGuid, apiVersion)

Deletes a trackable log image

This method will not return anything in the body.

### Example

```javascript
import ApiV10 from 'api_v1_0';

let apiInstance = new ApiV10.TrackableLogsApi();
let referenceCode = "referenceCode_example"; // String | The reference code of the trackable log (example: TL100).
let imageGuid = null; // String | the guid of the image
let apiVersion = "'1.0'"; // String | The requested API version
apiInstance.trackableLogsDeleteTrackableLogImages(referenceCode, imageGuid, apiVersion, (error, data, response) => {
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
 **referenceCode** | **String**| The reference code of the trackable log (example: TL100). | 
 **imageGuid** | [**String**](.md)| the guid of the image | 
 **apiVersion** | **String**| The requested API version | [default to &#39;1.0&#39;]

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/json-patch+json


## trackableLogsGetImages

> [Image] trackableLogsGetImages(referenceCode, apiVersion, opts)

Get a the images attached to a trackable log

This method will return a list of images.

### Example

```javascript
import ApiV10 from 'api_v1_0';

let apiInstance = new ApiV10.TrackableLogsApi();
let referenceCode = "referenceCode_example"; // String | The reference code of the trackable log (example: TL100).
let apiVersion = "'1.0'"; // String | The requested API version
let opts = {
  'skip': 0, // Number | Amount of images to skip over used for pagination. Defaults to 0.
  'take': 10, // Number | Amount of images to include in results. Defaults to 10.
  'fields': "'referencecode'" // String | Properties you want to return. Defaults to referencecode.
};
apiInstance.trackableLogsGetImages(referenceCode, apiVersion, opts, (error, data, response) => {
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
 **referenceCode** | **String**| The reference code of the trackable log (example: TL100). | 
 **apiVersion** | **String**| The requested API version | [default to &#39;1.0&#39;]
 **skip** | **Number**| Amount of images to skip over used for pagination. Defaults to 0. | [optional] [default to 0]
 **take** | **Number**| Amount of images to include in results. Defaults to 10. | [optional] [default to 10]
 **fields** | **String**| Properties you want to return. Defaults to referencecode. | [optional] [default to &#39;referencecode&#39;]

### Return type

[**[Image]**](Image.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/json-patch+json


## trackableLogsGetTrackableLog

> TrackableLog trackableLogsGetTrackableLog(referenceCode, apiVersion, opts)

Get a single trackable log

This method will return a single trackable log.

### Example

```javascript
import ApiV10 from 'api_v1_0';

let apiInstance = new ApiV10.TrackableLogsApi();
let referenceCode = "referenceCode_example"; // String | The reference code of the trackable log (example: TL100).
let apiVersion = "'1.0'"; // String | The requested API version
let opts = {
  'fields': "'referencecode'", // String | Property fields you want to return, defaults to referencecode
  'expand': "''" // String | 
};
apiInstance.trackableLogsGetTrackableLog(referenceCode, apiVersion, opts, (error, data, response) => {
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
 **referenceCode** | **String**| The reference code of the trackable log (example: TL100). | 
 **apiVersion** | **String**| The requested API version | [default to &#39;1.0&#39;]
 **fields** | **String**| Property fields you want to return, defaults to referencecode | [optional] [default to &#39;referencecode&#39;]
 **expand** | **String**|  | [optional] [default to &#39;&#39;]

### Return type

[**TrackableLog**](TrackableLog.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/json-patch+json


## trackableLogsUpdateTrackableLog

> TrackableLog trackableLogsUpdateTrackableLog(referenceCode, apiVersion, trackableLog, opts)

Update a trackable log

This method will return a trackable log.

### Example

```javascript
import ApiV10 from 'api_v1_0';

let apiInstance = new ApiV10.TrackableLogsApi();
let referenceCode = "referenceCode_example"; // String | The log reference code (example: TL100).
let apiVersion = "'1.0'"; // String | The requested API version
let trackableLog = new ApiV10.TrackableLog(); // TrackableLog | An instance of the log that is being modified. Text is the only modified parameter
let opts = {
  'fields': "'referencecode'" // String | Property fields you want to return, defaults to referencecode
};
apiInstance.trackableLogsUpdateTrackableLog(referenceCode, apiVersion, trackableLog, opts, (error, data, response) => {
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
 **referenceCode** | **String**| The log reference code (example: TL100). | 
 **apiVersion** | **String**| The requested API version | [default to &#39;1.0&#39;]
 **trackableLog** | [**TrackableLog**](TrackableLog.md)| An instance of the log that is being modified. Text is the only modified parameter | 
 **fields** | **String**| Property fields you want to return, defaults to referencecode | [optional] [default to &#39;referencecode&#39;]

### Return type

[**TrackableLog**](TrackableLog.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/json-patch+json, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/json-patch+json

