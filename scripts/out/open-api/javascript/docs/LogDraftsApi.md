# ApiV10.LogDraftsApi

All URIs are relative to *https://api.groundspeak.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**logDraftsAddImage**](LogDraftsApi.md#logDraftsAddImage) | **POST** /v{api-version}/logdrafts/{referenceCode}/images | Add image to log draft
[**logDraftsCreateDraft**](LogDraftsApi.md#logDraftsCreateDraft) | **POST** /v{api-version}/logdrafts | Create a log draft
[**logDraftsDeleteDraft**](LogDraftsApi.md#logDraftsDeleteDraft) | **DELETE** /v{api-version}/logdrafts/{referenceCode} | Delete a log draft
[**logDraftsGetDraft**](LogDraftsApi.md#logDraftsGetDraft) | **GET** /v{api-version}/logdrafts/{referenceCode} | Get a single log draft for the calling user
[**logDraftsGetUserDrafts**](LogDraftsApi.md#logDraftsGetUserDrafts) | **GET** /v{api-version}/logdrafts | Get a list of log drafts for the calling user
[**logDraftsPromoteToGeocacheLog**](LogDraftsApi.md#logDraftsPromoteToGeocacheLog) | **POST** /v{api-version}/logdrafts/{referenceCode}/promote | Promote Log Draft to Geocache Log
[**logDraftsUpdateDraft**](LogDraftsApi.md#logDraftsUpdateDraft) | **PUT** /v{api-version}/logdrafts/{referenceCode} | Update a log draft



## logDraftsAddImage

> Image logDraftsAddImage(referenceCode, apiVersion, postImage, opts)

Add image to log draft

This method will return the image created.

### Example

```javascript
import ApiV10 from 'api_v1_0';

let apiInstance = new ApiV10.LogDraftsApi();
let referenceCode = "referenceCode_example"; // String | identifier of the log draft
let apiVersion = "'1.0'"; // String | The requested API version
let postImage = new ApiV10.PostImage(); // PostImage | The image to upload and add
let opts = {
  'fields': "'url'" // String | Properties you want to return, defaults to url
};
apiInstance.logDraftsAddImage(referenceCode, apiVersion, postImage, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCode** | **String**| identifier of the log draft | 
 **apiVersion** | **String**| The requested API version | [default to &#39;1.0&#39;]
 **postImage** | [**PostImage**](PostImage.md)| The image to upload and add | 
 **fields** | **String**| Properties you want to return, defaults to url | [optional] [default to &#39;url&#39;]

### Return type

[**Image**](Image.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, application/json-patch+json, application/x-www-form-urlencoded, text/json
- **Accept**: application/json, application/json-patch+json, text/json


## logDraftsCreateDraft

> LogDraft logDraftsCreateDraft(apiVersion, postLogDraft, opts)

Create a log draft

This method will return the log draft created.

### Example

```javascript
import ApiV10 from 'api_v1_0';

let apiInstance = new ApiV10.LogDraftsApi();
let apiVersion = "'1.0'"; // String | The requested API version
let postLogDraft = new ApiV10.PostLogDraft(); // PostLogDraft | The log draft to create.
let opts = {
  'fields': "'referenceCode'" // String | Properties you want to return, defaults to referenceCode
};
apiInstance.logDraftsCreateDraft(apiVersion, postLogDraft, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | **String**| The requested API version | [default to &#39;1.0&#39;]
 **postLogDraft** | [**PostLogDraft**](PostLogDraft.md)| The log draft to create. | 
 **fields** | **String**| Properties you want to return, defaults to referenceCode | [optional] [default to &#39;referenceCode&#39;]

### Return type

[**LogDraft**](LogDraft.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, application/json-patch+json, application/x-www-form-urlencoded, text/json
- **Accept**: application/json, application/json-patch+json, text/json


## logDraftsDeleteDraft

> Object logDraftsDeleteDraft(referenceCode, apiVersion)

Delete a log draft

This method will return no content.

### Example

```javascript
import ApiV10 from 'api_v1_0';

let apiInstance = new ApiV10.LogDraftsApi();
let referenceCode = "referenceCode_example"; // String | The identifier of the log draft (ex: LD25)
let apiVersion = "'1.0'"; // String | The requested API version
apiInstance.logDraftsDeleteDraft(referenceCode, apiVersion).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCode** | **String**| The identifier of the log draft (ex: LD25) | 
 **apiVersion** | **String**| The requested API version | [default to &#39;1.0&#39;]

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/json-patch+json, text/json


## logDraftsGetDraft

> LogDraft logDraftsGetDraft(referenceCode, apiVersion, opts)

Get a single log draft for the calling user

This method will return a single draft log.

### Example

```javascript
import ApiV10 from 'api_v1_0';

let apiInstance = new ApiV10.LogDraftsApi();
let referenceCode = "referenceCode_example"; // String | The reference code of the log draft (example: LD25).
let apiVersion = "'1.0'"; // String | The requested API version
let opts = {
  'fields': "'referenceCode'" // String | Properties you want to return, defaults to referenceCode
};
apiInstance.logDraftsGetDraft(referenceCode, apiVersion, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCode** | **String**| The reference code of the log draft (example: LD25). | 
 **apiVersion** | **String**| The requested API version | [default to &#39;1.0&#39;]
 **fields** | **String**| Properties you want to return, defaults to referenceCode | [optional] [default to &#39;referenceCode&#39;]

### Return type

[**LogDraft**](LogDraft.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/json-patch+json, text/json


## logDraftsGetUserDrafts

> [LogDraft] logDraftsGetUserDrafts(apiVersion, opts)

Get a list of log drafts for the calling user

This method will return a page (list + total) of log drafts.

### Example

```javascript
import ApiV10 from 'api_v1_0';

let apiInstance = new ApiV10.LogDraftsApi();
let apiVersion = "'1.0'"; // String | The requested API version
let opts = {
  'skip': 0, // Number | How many drafts to skip (default = 0)
  'take': 10, // Number | How many drafts to return (default = 10)
  'sort': "'dateloggedutc'", // String | How to sort the drafts (default = loggeddateutc)
  'fields': "'referenceCode'" // String | Properties you want to return, defaults to referenceCode
};
apiInstance.logDraftsGetUserDrafts(apiVersion, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | **String**| The requested API version | [default to &#39;1.0&#39;]
 **skip** | **Number**| How many drafts to skip (default &#x3D; 0) | [optional] [default to 0]
 **take** | **Number**| How many drafts to return (default &#x3D; 10) | [optional] [default to 10]
 **sort** | **String**| How to sort the drafts (default &#x3D; loggeddateutc) | [optional] [default to &#39;dateloggedutc&#39;]
 **fields** | **String**| Properties you want to return, defaults to referenceCode | [optional] [default to &#39;referenceCode&#39;]

### Return type

[**[LogDraft]**](LogDraft.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/json-patch+json, text/json


## logDraftsPromoteToGeocacheLog

> PromotedDraft logDraftsPromoteToGeocacheLog(referenceCode, apiVersion, logDraft)

Promote Log Draft to Geocache Log

This method will return the promoted draft info.

### Example

```javascript
import ApiV10 from 'api_v1_0';

let apiInstance = new ApiV10.LogDraftsApi();
let referenceCode = "referenceCode_example"; // String | identifier of the log draft
let apiVersion = "'1.0'"; // String | The requested API version
let logDraft = new ApiV10.LogDraft(); // LogDraft | The draft to promote to log
apiInstance.logDraftsPromoteToGeocacheLog(referenceCode, apiVersion, logDraft).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCode** | **String**| identifier of the log draft | 
 **apiVersion** | **String**| The requested API version | [default to &#39;1.0&#39;]
 **logDraft** | [**LogDraft**](LogDraft.md)| The draft to promote to log | 

### Return type

[**PromotedDraft**](PromotedDraft.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, application/json-patch+json, application/x-www-form-urlencoded, text/json
- **Accept**: application/json, application/json-patch+json, text/json


## logDraftsUpdateDraft

> LogDraft logDraftsUpdateDraft(referenceCode, apiVersion, logDraft, opts)

Update a log draft

This method will return the log draft edited.

### Example

```javascript
import ApiV10 from 'api_v1_0';

let apiInstance = new ApiV10.LogDraftsApi();
let referenceCode = "referenceCode_example"; // String | The identifier of the log draft (ex: LD25)
let apiVersion = "'1.0'"; // String | The requested API version
let logDraft = new ApiV10.LogDraft(); // LogDraft | The log draft to edit.
let opts = {
  'fields': "'referenceCode'" // String | Properties you want to return, defaults to referenceCode
};
apiInstance.logDraftsUpdateDraft(referenceCode, apiVersion, logDraft, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCode** | **String**| The identifier of the log draft (ex: LD25) | 
 **apiVersion** | **String**| The requested API version | [default to &#39;1.0&#39;]
 **logDraft** | [**LogDraft**](LogDraft.md)| The log draft to edit. | 
 **fields** | **String**| Properties you want to return, defaults to referenceCode | [optional] [default to &#39;referenceCode&#39;]

### Return type

[**LogDraft**](LogDraft.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, application/json-patch+json, application/x-www-form-urlencoded, text/json
- **Accept**: application/json, application/json-patch+json, text/json

