# ApiV10.TrackablesApi

All URIs are relative to *https://api.groundspeak.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**trackablesGetGeocoinTypes**](TrackablesApi.md#trackablesGetGeocoinTypes) | **GET** /v{api-version}/trackables/geocointypes | Get paged geocoin types
[**trackablesGetImages**](TrackablesApi.md#trackablesGetImages) | **GET** /v{api-version}/trackables/{referenceCode}/Images | Get the images attached to a trackable
[**trackablesGetTrackable**](TrackablesApi.md#trackablesGetTrackable) | **GET** /v{api-version}/trackables/{referenceCode} | Get a single trackable
[**trackablesGetTrackableLogs**](TrackablesApi.md#trackablesGetTrackableLogs) | **GET** /v{api-version}/trackables/{referenceCode}/trackablelogs | Get a list of trackable logs for the specified trackable
[**trackablesGetUserTrackables**](TrackablesApi.md#trackablesGetUserTrackables) | **GET** /v{api-version}/trackables | Gets a list of trackables



## trackablesGetGeocoinTypes

> [TrackableType] trackablesGetGeocoinTypes(apiVersion, opts)

Get paged geocoin types

This method will return a list of geocoin types.

### Example

```javascript
import ApiV10 from 'api_v1_0';

let apiInstance = new ApiV10.TrackablesApi();
let apiVersion = "'1.0'"; // String | The requested API version
let opts = {
  'skip': 0, // Number | Amount of types to skip over used for pagination. Defaults to 0.
  'take': 10, // Number | Amount of types to include in results. Defaults to 10.
  'fields': "'id'" // String | Properties you want to return. Defaults to id.
};
apiInstance.trackablesGetGeocoinTypes(apiVersion, opts, (error, data, response) => {
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
 **skip** | **Number**| Amount of types to skip over used for pagination. Defaults to 0. | [optional] [default to 0]
 **take** | **Number**| Amount of types to include in results. Defaults to 10. | [optional] [default to 10]
 **fields** | **String**| Properties you want to return. Defaults to id. | [optional] [default to &#39;id&#39;]

### Return type

[**[TrackableType]**](TrackableType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/json-patch+json


## trackablesGetImages

> [Image] trackablesGetImages(referenceCode, apiVersion, opts)

Get the images attached to a trackable

This method will return a list of images.

### Example

```javascript
import ApiV10 from 'api_v1_0';

let apiInstance = new ApiV10.TrackablesApi();
let referenceCode = "referenceCode_example"; // String | The reference code of the trackable (example: TB100).
let apiVersion = "'1.0'"; // String | The requested API version
let opts = {
  'skip': 0, // Number | Amount of images to skip over used for pagination. Defaults to 0.
  'take': 10, // Number | Amount of images to include in results. Defaults to 10.
  'fields': "'url'" // String | Properties you want to return. Defaults to url.
};
apiInstance.trackablesGetImages(referenceCode, apiVersion, opts, (error, data, response) => {
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
 **referenceCode** | **String**| The reference code of the trackable (example: TB100). | 
 **apiVersion** | **String**| The requested API version | [default to &#39;1.0&#39;]
 **skip** | **Number**| Amount of images to skip over used for pagination. Defaults to 0. | [optional] [default to 0]
 **take** | **Number**| Amount of images to include in results. Defaults to 10. | [optional] [default to 10]
 **fields** | **String**| Properties you want to return. Defaults to url. | [optional] [default to &#39;url&#39;]

### Return type

[**[Image]**](Image.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/json-patch+json


## trackablesGetTrackable

> Trackable trackablesGetTrackable(referenceCode, apiVersion, opts)

Get a single trackable

This method will return a single trackable.

### Example

```javascript
import ApiV10 from 'api_v1_0';

let apiInstance = new ApiV10.TrackablesApi();
let referenceCode = "referenceCode_example"; // String | The reference code or tracking number of the trackable (example: TB100).
let apiVersion = "'1.0'"; // String | The requested API version
let opts = {
  'fields': "'referenceCode'", // String | fields you want to return, defaults to referenceCode
  'expand': "''" // String | 
};
apiInstance.trackablesGetTrackable(referenceCode, apiVersion, opts, (error, data, response) => {
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
 **referenceCode** | **String**| The reference code or tracking number of the trackable (example: TB100). | 
 **apiVersion** | **String**| The requested API version | [default to &#39;1.0&#39;]
 **fields** | **String**| fields you want to return, defaults to referenceCode | [optional] [default to &#39;referenceCode&#39;]
 **expand** | **String**|  | [optional] [default to &#39;&#39;]

### Return type

[**Trackable**](Trackable.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/json-patch+json


## trackablesGetTrackableLogs

> [TrackableLog] trackablesGetTrackableLogs(referenceCode, apiVersion, opts)

Get a list of trackable logs for the specified trackable

This method will return a list of trackable logs.

### Example

```javascript
import ApiV10 from 'api_v1_0';

let apiInstance = new ApiV10.TrackablesApi();
let referenceCode = "referenceCode_example"; // String | The reference code of the trackable (example: TB100).
let apiVersion = "'1.0'"; // String | The requested API version
let opts = {
  'skip': 0, // Number | how many logs to skip over
  'take': 10, // Number | how many logs to retrieve
  'fields': "'referenceCode'", // String | fields you want to return, defaults to referenceCode
  'expand': "''", // String | 
  'logTypes': "logTypes_example" // String | what log types to include with results. defaults to all
};
apiInstance.trackablesGetTrackableLogs(referenceCode, apiVersion, opts, (error, data, response) => {
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
 **referenceCode** | **String**| The reference code of the trackable (example: TB100). | 
 **apiVersion** | **String**| The requested API version | [default to &#39;1.0&#39;]
 **skip** | **Number**| how many logs to skip over | [optional] [default to 0]
 **take** | **Number**| how many logs to retrieve | [optional] [default to 10]
 **fields** | **String**| fields you want to return, defaults to referenceCode | [optional] [default to &#39;referenceCode&#39;]
 **expand** | **String**|  | [optional] [default to &#39;&#39;]
 **logTypes** | **String**| what log types to include with results. defaults to all | [optional] 

### Return type

[**[TrackableLog]**](TrackableLog.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/json-patch+json


## trackablesGetUserTrackables

> [Trackable] trackablesGetUserTrackables(apiVersion, opts)

Gets a list of trackables

This method will return a list of trackables, either by specified codes or get user trackables if you leave referenceCodes null

### Example

```javascript
import ApiV10 from 'api_v1_0';

let apiInstance = new ApiV10.TrackablesApi();
let apiVersion = "'1.0'"; // String | The requested API version
let opts = {
  'referenceCodes': "referenceCodes_example", // String | The reference code or tracking number of the trackables (example: TB100). Don't pass in this param if you want to return user trackables
  'type': "'1'", // String | 1= inventory, 2 = collection, 3 = owned (default: 1)
  'skip': 0, // Number | default = 0
  'take': 10, // Number | default = 10
  'fields': "'referenceCode'", // String | fields you want to return, defaults to referenceCode
  'expand': "''" // String | 
};
apiInstance.trackablesGetUserTrackables(apiVersion, opts, (error, data, response) => {
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
 **referenceCodes** | **String**| The reference code or tracking number of the trackables (example: TB100). Don&#39;t pass in this param if you want to return user trackables | [optional] 
 **type** | **String**| 1&#x3D; inventory, 2 &#x3D; collection, 3 &#x3D; owned (default: 1) | [optional] [default to &#39;1&#39;]
 **skip** | **Number**| default &#x3D; 0 | [optional] [default to 0]
 **take** | **Number**| default &#x3D; 10 | [optional] [default to 10]
 **fields** | **String**| fields you want to return, defaults to referenceCode | [optional] [default to &#39;referenceCode&#39;]
 **expand** | **String**|  | [optional] [default to &#39;&#39;]

### Return type

[**[Trackable]**](Trackable.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/json-patch+json

