# GeocachingApiV10.HQPromotionsApi

All URIs are relative to *https://staging.api.groundspeak.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**hQPromotionsGet**](HQPromotionsApi.md#hQPromotionsGet) | **GET** /v{api-version}/HQPromotions/metadata | Returns a list of metadata for currently visible and upcoming Geocaching HQ promotions


<a name="hQPromotionsGet"></a>
# **hQPromotionsGet**
> [HQPromotionMetadata] hQPromotionsGet(apiVersion)

Returns a list of metadata for currently visible and upcoming Geocaching HQ promotions

### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.HQPromotionsApi();

var apiVersion = "apiVersion_example"; // String | The requested API version


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.hQPromotionsGet(apiVersion, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | **String**| The requested API version | 

### Return type

[**[HQPromotionMetadata]**](HQPromotionMetadata.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/json-patch+json

