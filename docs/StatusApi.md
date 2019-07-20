# GeocachingApiV10.StatusApi

All URIs are relative to *https://staging.api.groundspeak.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**statusPingAsync**](StatusApi.md#statusPingAsync) | **GET** /status/ping | Returns Ok.


<a name="statusPingAsync"></a>
# **statusPingAsync**
> statusPingAsync(apiVersion)

Returns Ok.

This method return Ok.

### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.StatusApi();

var apiVersion = "1.0"; // String | The requested API version


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.statusPingAsync(apiVersion, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | **String**| The requested API version | [default to 1.0]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

