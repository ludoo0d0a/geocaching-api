# ApiV10.GeocacheNotesApi

All URIs are relative to *https://api.groundspeak.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**geocacheNotesDeleteNote**](GeocacheNotesApi.md#geocacheNotesDeleteNote) | **DELETE** /v{api-version}/geocaches/{referenceCode}/notes | Delete a geocache note for the calling user
[**geocacheNotesUpsertNote**](GeocacheNotesApi.md#geocacheNotesUpsertNote) | **PUT** /v{api-version}/geocaches/{referenceCode}/notes | Upsert a geocache note for the calling user



## geocacheNotesDeleteNote

> Object geocacheNotesDeleteNote(referenceCode, apiVersion)

Delete a geocache note for the calling user

This method will return no content.

### Example

```javascript
import ApiV10 from 'api_v1_0';

let apiInstance = new ApiV10.GeocacheNotesApi();
let referenceCode = "referenceCode_example"; // String | The identifier of the geocache (ex: GC25)
let apiVersion = "'1.0'"; // String | The requested API version
apiInstance.geocacheNotesDeleteNote(referenceCode, apiVersion, (error, data, response) => {
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
 **referenceCode** | **String**| The identifier of the geocache (ex: GC25) | 
 **apiVersion** | **String**| The requested API version | [default to &#39;1.0&#39;]

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/json-patch+json


## geocacheNotesUpsertNote

> String geocacheNotesUpsertNote(referenceCode, apiVersion, geocacheNote)

Upsert a geocache note for the calling user

This method will return the upserted text.

### Example

```javascript
import ApiV10 from 'api_v1_0';

let apiInstance = new ApiV10.GeocacheNotesApi();
let referenceCode = "referenceCode_example"; // String | The identifier of the geocache (ex: GC25)
let apiVersion = "'1.0'"; // String | The requested API version
let geocacheNote = new ApiV10.GeocacheNote(); // GeocacheNote | The geocache note text.
apiInstance.geocacheNotesUpsertNote(referenceCode, apiVersion, geocacheNote, (error, data, response) => {
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
 **referenceCode** | **String**| The identifier of the geocache (ex: GC25) | 
 **apiVersion** | **String**| The requested API version | [default to &#39;1.0&#39;]
 **geocacheNote** | [**GeocacheNote**](GeocacheNote.md)| The geocache note text. | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/json-patch+json, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/json-patch+json

