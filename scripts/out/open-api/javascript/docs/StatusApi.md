# ApiV10.StatusApi

All URIs are relative to *https://api.groundspeak.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**statusPingAsync**](StatusApi.md#statusPingAsync) | **GET** /status/ping | Returns Ok.



## statusPingAsync

> statusPingAsync(apiVersion)

Returns Ok.

This method return Ok.

### Example

```javascript
import ApiV10 from 'api_v1_0';

let apiInstance = new ApiV10.StatusApi();
let apiVersion = "'1.0'"; // String | The requested API version
apiInstance.statusPingAsync(apiVersion).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | **String**| The requested API version | [default to &#39;1.0&#39;]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

