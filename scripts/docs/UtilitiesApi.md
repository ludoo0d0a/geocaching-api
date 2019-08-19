# ApiV10.UtilitiesApi

All URIs are relative to *https://api.groundspeak.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**utilitiesGetReferenceCode**](UtilitiesApi.md#utilitiesGetReferenceCode) | **GET** /v{api-version}/utilities/referencecode | Returns the reference code from an id



## utilitiesGetReferenceCode

> String utilitiesGetReferenceCode(id, codePrefix, apiVersion)

Returns the reference code from an id

### Example

```javascript
import ApiV10 from 'api_v1_0';

let apiInstance = new ApiV10.UtilitiesApi();
let id = 789; // Number | the id to get the reference code for
let codePrefix = "codePrefix_example"; // String | the prefix of the reference code (e.g. GC)
let apiVersion = "'1.0'"; // String | The requested API version
apiInstance.utilitiesGetReferenceCode(id, codePrefix, apiVersion, (error, data, response) => {
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
 **id** | **Number**| the id to get the reference code for | 
 **codePrefix** | **String**| the prefix of the reference code (e.g. GC) | 
 **apiVersion** | **String**| The requested API version | [default to &#39;1.0&#39;]

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/json-patch+json, text/json

