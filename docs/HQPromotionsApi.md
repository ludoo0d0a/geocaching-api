# ApiV10.HQPromotionsApi

All URIs are relative to *https://api.groundspeak.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**hQPromotionsGet**](HQPromotionsApi.md#hQPromotionsGet) | **GET** /v{api-version}/HQPromotions/metadata | Returns a list of metadata for currently visible and upcoming Geocaching HQ promotions



## hQPromotionsGet

> [HQPromotionMetadata] hQPromotionsGet(apiVersion)

Returns a list of metadata for currently visible and upcoming Geocaching HQ promotions

### Example

```javascript
import ApiV10 from 'api_v1_0';

let apiInstance = new ApiV10.HQPromotionsApi();
let apiVersion = "'1.0'"; // String | The requested API version
apiInstance.hQPromotionsGet(apiVersion).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | **String**| The requested API version | [default to &#39;1.0&#39;]

### Return type

[**[HQPromotionMetadata]**](HQPromotionMetadata.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/json-patch+json, text/json

