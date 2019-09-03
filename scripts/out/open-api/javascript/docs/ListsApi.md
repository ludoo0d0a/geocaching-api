# ApiV10.ListsApi

All URIs are relative to *https://api.groundspeak.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listsAddGeocache**](ListsApi.md#listsAddGeocache) | **POST** /v{api-version}/lists/{referenceCode}/geocaches | Add a geocache to a list
[**listsAddGeocaches**](ListsApi.md#listsAddGeocaches) | **POST** /v{api-version}/lists/{referenceCode}/bulkgeocaches | Add multiple geocaches to a list
[**listsCreateList**](ListsApi.md#listsCreateList) | **POST** /v{api-version}/lists | Create a list
[**listsDeleteGeocache**](ListsApi.md#listsDeleteGeocache) | **DELETE** /v{api-version}/lists/{referenceCode}/geocaches/{geocacheReferenceCode} | Remove a geocache from a list
[**listsDeleteList**](ListsApi.md#listsDeleteList) | **DELETE** /v{api-version}/lists/{referenceCode} | Remove a list
[**listsGetGeocaches**](ListsApi.md#listsGetGeocaches) | **GET** /v{api-version}/lists/{referenceCode}/geocaches | Get a list of geocaches for a specified list
[**listsGetList**](ListsApi.md#listsGetList) | **GET** /v{api-version}/lists/{referenceCode} | Get a list
[**listsGetZippedPocketQuery**](ListsApi.md#listsGetZippedPocketQuery) | **GET** /v{api-version}/lists/{referenceCode}/geocaches/zipped | Gets a zipped file for a pocket query
[**listsUpdateList**](ListsApi.md#listsUpdateList) | **PUT** /v{api-version}/lists/{referenceCode} | Edit a list



## listsAddGeocache

> Geocache listsAddGeocache(referenceCode, apiVersion, postListGeocache, opts)

Add a geocache to a list

This method will return the geocache added.

### Example

```javascript
import ApiV10 from 'api_v1_0';

let apiInstance = new ApiV10.ListsApi();
let referenceCode = "referenceCode_example"; // String | unique identifier of the list
let apiVersion = "'1.0'"; // String | The requested API version
let postListGeocache = new ApiV10.PostListGeocache(); // PostListGeocache | geocache to add to the list
let opts = {
  'fields': "'referenceCode'" // String | Property fields you want to return, defaults to referenceCode
};
apiInstance.listsAddGeocache(referenceCode, apiVersion, postListGeocache, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCode** | **String**| unique identifier of the list | 
 **apiVersion** | **String**| The requested API version | [default to &#39;1.0&#39;]
 **postListGeocache** | [**PostListGeocache**](PostListGeocache.md)| geocache to add to the list | 
 **fields** | **String**| Property fields you want to return, defaults to referenceCode | [optional] [default to &#39;referenceCode&#39;]

### Return type

[**Geocache**](Geocache.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, application/json-patch+json, application/x-www-form-urlencoded, text/json
- **Accept**: application/json, application/json-patch+json, text/json


## listsAddGeocaches

> BulkResponse listsAddGeocaches(referenceCode, apiVersion, requestBody)

Add multiple geocaches to a list

This method will return the successful and failed geocache codes.

### Example

```javascript
import ApiV10 from 'api_v1_0';

let apiInstance = new ApiV10.ListsApi();
let referenceCode = "referenceCode_example"; // String | unique identifier of the list
let apiVersion = "'1.0'"; // String | The requested API version
let requestBody = ["null"]; // [String] | geocache reference codes to add to the list
apiInstance.listsAddGeocaches(referenceCode, apiVersion, requestBody).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCode** | **String**| unique identifier of the list | 
 **apiVersion** | **String**| The requested API version | [default to &#39;1.0&#39;]
 **requestBody** | [**[String]**](String.md)| geocache reference codes to add to the list | 

### Return type

[**BulkResponse**](BulkResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, application/json-patch+json, application/x-www-form-urlencoded, text/json
- **Accept**: application/json, application/json-patch+json, text/json


## listsCreateList

> GeocacheList listsCreateList(apiVersion, postGeocacheList, opts)

Create a list

This method will return the created geocache list.

### Example

```javascript
import ApiV10 from 'api_v1_0';

let apiInstance = new ApiV10.ListsApi();
let apiVersion = "'1.0'"; // String | The requested API version
let postGeocacheList = new ApiV10.PostGeocacheList(); // PostGeocacheList | The list to add
let opts = {
  'fields': "'referenceCode'" // String | Property fields you want to return, defaults to referenceCode
};
apiInstance.listsCreateList(apiVersion, postGeocacheList, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | **String**| The requested API version | [default to &#39;1.0&#39;]
 **postGeocacheList** | [**PostGeocacheList**](PostGeocacheList.md)| The list to add | 
 **fields** | **String**| Property fields you want to return, defaults to referenceCode | [optional] [default to &#39;referenceCode&#39;]

### Return type

[**GeocacheList**](GeocacheList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, application/json-patch+json, application/x-www-form-urlencoded, text/json
- **Accept**: application/json, application/json-patch+json, text/json


## listsDeleteGeocache

> Object listsDeleteGeocache(referenceCode, geocacheReferenceCode, apiVersion)

Remove a geocache from a list

This method will not return anything.

### Example

```javascript
import ApiV10 from 'api_v1_0';

let apiInstance = new ApiV10.ListsApi();
let referenceCode = "referenceCode_example"; // String | unique identifier of the list
let geocacheReferenceCode = "geocacheReferenceCode_example"; // String | unique identifier of the geocache to remove
let apiVersion = "'1.0'"; // String | The requested API version
apiInstance.listsDeleteGeocache(referenceCode, geocacheReferenceCode, apiVersion).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCode** | **String**| unique identifier of the list | 
 **geocacheReferenceCode** | **String**| unique identifier of the geocache to remove | 
 **apiVersion** | **String**| The requested API version | [default to &#39;1.0&#39;]

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/json-patch+json, text/json


## listsDeleteList

> Object listsDeleteList(referenceCode, apiVersion)

Remove a list

This method will not return anything.

### Example

```javascript
import ApiV10 from 'api_v1_0';

let apiInstance = new ApiV10.ListsApi();
let referenceCode = "referenceCode_example"; // String | unique identifier of the list
let apiVersion = "'1.0'"; // String | The requested API version
apiInstance.listsDeleteList(referenceCode, apiVersion).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCode** | **String**| unique identifier of the list | 
 **apiVersion** | **String**| The requested API version | [default to &#39;1.0&#39;]

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/json-patch+json, text/json


## listsGetGeocaches

> [ListGeocache] listsGetGeocaches(referenceCode, apiVersion, opts)

Get a list of geocaches for a specified list

This method will return a list of geocaches.

### Example

```javascript
import ApiV10 from 'api_v1_0';

let apiInstance = new ApiV10.ListsApi();
let referenceCode = "referenceCode_example"; // String | identifier of the list
let apiVersion = "'1.0'"; // String | The requested API version
let opts = {
  'skip': 0, // Number | how many geocaches to skip over
  'take': 10, // Number | how many geocaches to retrieve
  'lite': true, // Boolean | whether to return lite geocaches or not
  'fields': "'referenceCode'", // String | fields you want to return, defaults to \"referenceCode\"
  'expand': "''" // String | fields to include with base geocache object
};
apiInstance.listsGetGeocaches(referenceCode, apiVersion, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCode** | **String**| identifier of the list | 
 **apiVersion** | **String**| The requested API version | [default to &#39;1.0&#39;]
 **skip** | **Number**| how many geocaches to skip over | [optional] [default to 0]
 **take** | **Number**| how many geocaches to retrieve | [optional] [default to 10]
 **lite** | **Boolean**| whether to return lite geocaches or not | [optional] [default to true]
 **fields** | **String**| fields you want to return, defaults to \&quot;referenceCode\&quot; | [optional] [default to &#39;referenceCode&#39;]
 **expand** | **String**| fields to include with base geocache object | [optional] [default to &#39;&#39;]

### Return type

[**[ListGeocache]**](ListGeocache.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/json-patch+json, text/json


## listsGetList

> GeocacheList listsGetList(referenceCode, apiVersion, opts)

Get a list

This method will return a list.

### Example

```javascript
import ApiV10 from 'api_v1_0';

let apiInstance = new ApiV10.ListsApi();
let referenceCode = "referenceCode_example"; // String | The reference code of the list (example: BM25).
let apiVersion = "'1.0'"; // String | The requested API version
let opts = {
  'fields': "'referenceCode'" // String | Property fields you want to return, defaults to referenceCode
};
apiInstance.listsGetList(referenceCode, apiVersion, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCode** | **String**| The reference code of the list (example: BM25). | 
 **apiVersion** | **String**| The requested API version | [default to &#39;1.0&#39;]
 **fields** | **String**| Property fields you want to return, defaults to referenceCode | [optional] [default to &#39;referenceCode&#39;]

### Return type

[**GeocacheList**](GeocacheList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/json-patch+json, text/json


## listsGetZippedPocketQuery

> Blob listsGetZippedPocketQuery(referenceCode, apiVersion)

Gets a zipped file for a pocket query

This method will return a zipped file.

### Example

```javascript
import ApiV10 from 'api_v1_0';

let apiInstance = new ApiV10.ListsApi();
let referenceCode = "referenceCode_example"; // String | identifier of the pocket query
let apiVersion = "'1.0'"; // String | The requested API version
apiInstance.listsGetZippedPocketQuery(referenceCode, apiVersion).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCode** | **String**| identifier of the pocket query | 
 **apiVersion** | **String**| The requested API version | [default to &#39;1.0&#39;]

### Return type

**Blob**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/json-patch+json, text/json


## listsUpdateList

> GeocacheList listsUpdateList(referenceCode, apiVersion, geocacheList, opts)

Edit a list

This method will return the updated geocache list.

### Example

```javascript
import ApiV10 from 'api_v1_0';

let apiInstance = new ApiV10.ListsApi();
let referenceCode = "referenceCode_example"; // String | the unique identifier of the list (ex: BM100)
let apiVersion = "'1.0'"; // String | The requested API version
let geocacheList = new ApiV10.GeocacheList(); // GeocacheList | The list to update
let opts = {
  'fields': "'referenceCode'" // String | Property fields you want to return, defaults to referenceCode
};
apiInstance.listsUpdateList(referenceCode, apiVersion, geocacheList, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCode** | **String**| the unique identifier of the list (ex: BM100) | 
 **apiVersion** | **String**| The requested API version | [default to &#39;1.0&#39;]
 **geocacheList** | [**GeocacheList**](GeocacheList.md)| The list to update | 
 **fields** | **String**| Property fields you want to return, defaults to referenceCode | [optional] [default to &#39;referenceCode&#39;]

### Return type

[**GeocacheList**](GeocacheList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, application/json-patch+json, application/x-www-form-urlencoded, text/json
- **Accept**: application/json, application/json-patch+json, text/json

