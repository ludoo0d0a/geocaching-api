# ApiV10.GeoToursApi

All URIs are relative to *https://api.groundspeak.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**geoToursGetGeoTour**](GeoToursApi.md#geoToursGetGeoTour) | **GET** /v{api-version}/geotours/{referenceCode} | Get a GeoTour
[**geoToursGetGeoTours**](GeoToursApi.md#geoToursGetGeoTours) | **GET** /v{api-version}/geotours | Get GeoTours
[**geoToursGetGeocachesByGeoTour**](GeoToursApi.md#geoToursGetGeocachesByGeoTour) | **GET** /v{api-version}/geotours/{referenceCode}/geocaches | Get the geocaches on the GeoTour



## geoToursGetGeoTour

> [GeoTour] geoToursGetGeoTour(referenceCode, apiVersion, opts)

Get a GeoTour

### Example

```javascript
import ApiV10 from 'api_v1_0';

let apiInstance = new ApiV10.GeoToursApi();
let referenceCode = "referenceCode_example"; // String | Identifier of the GeoTour (e.g. GT7)
let apiVersion = "'1.0'"; // String | The requested API version
let opts = {
  'fields': "'referenceCode'" // String | Properties you want to return, defaults to \"referencecode\"
};
apiInstance.geoToursGetGeoTour(referenceCode, apiVersion, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCode** | **String**| Identifier of the GeoTour (e.g. GT7) | 
 **apiVersion** | **String**| The requested API version | [default to &#39;1.0&#39;]
 **fields** | **String**| Properties you want to return, defaults to \&quot;referencecode\&quot; | [optional] [default to &#39;referenceCode&#39;]

### Return type

[**[GeoTour]**](GeoTour.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/json-patch+json, text/json


## geoToursGetGeoTours

> [GeoTour] geoToursGetGeoTours(apiVersion, opts)

Get GeoTours

### Example

```javascript
import ApiV10 from 'api_v1_0';

let apiInstance = new ApiV10.GeoToursApi();
let apiVersion = "'1.0'"; // String | The requested API version
let opts = {
  'sort': "''", // String | Defaults to unsorted (distance, name). If using distance sorting, must provide latitude and longitude (e.g. dist+:[47,-122])
  'skip': 0, // Number | Defaults to 0, how many geocaches to skip
  'take': 20, // Number | Defaults to 20, how many geocaches to return
  'fields': "'referenceCode'" // String | Properties you want to return, defaults to \"referencecode\"
};
apiInstance.geoToursGetGeoTours(apiVersion, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | **String**| The requested API version | [default to &#39;1.0&#39;]
 **sort** | **String**| Defaults to unsorted (distance, name). If using distance sorting, must provide latitude and longitude (e.g. dist+:[47,-122]) | [optional] [default to &#39;&#39;]
 **skip** | **Number**| Defaults to 0, how many geocaches to skip | [optional] [default to 0]
 **take** | **Number**| Defaults to 20, how many geocaches to return | [optional] [default to 20]
 **fields** | **String**| Properties you want to return, defaults to \&quot;referencecode\&quot; | [optional] [default to &#39;referenceCode&#39;]

### Return type

[**[GeoTour]**](GeoTour.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/json-patch+json, text/json


## geoToursGetGeocachesByGeoTour

> [Geocache] geoToursGetGeocachesByGeoTour(referenceCode, apiVersion, opts)

Get the geocaches on the GeoTour

This method will return a list of geocaches.

### Example

```javascript
import ApiV10 from 'api_v1_0';

let apiInstance = new ApiV10.GeoToursApi();
let referenceCode = "referenceCode_example"; // String | Identifier of the GeoTour (e.g. GT7)
let apiVersion = "'1.0'"; // String | The requested API version
let opts = {
  'lite': false, // Boolean | Select to return a geocache object without the description and hints
  'skip': 0, // Number | Defaults to 0, how many geocaches to skip
  'take': 20, // Number | Defaults to 20, how many geocaches to return
  'sort': "'gt+'", // String | Options are distance (must provide lat/lng), name (of the geocache), favorites, and geotour (order defined by GeoTour). Defaults to geotour.
  'expand': "''", // String | fields to include with base geocache object
  'fields': "'referenceCode'" // String | fields you want to return, defaults to \"referencecode\"
};
apiInstance.geoToursGetGeocachesByGeoTour(referenceCode, apiVersion, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCode** | **String**| Identifier of the GeoTour (e.g. GT7) | 
 **apiVersion** | **String**| The requested API version | [default to &#39;1.0&#39;]
 **lite** | **Boolean**| Select to return a geocache object without the description and hints | [optional] [default to false]
 **skip** | **Number**| Defaults to 0, how many geocaches to skip | [optional] [default to 0]
 **take** | **Number**| Defaults to 20, how many geocaches to return | [optional] [default to 20]
 **sort** | **String**| Options are distance (must provide lat/lng), name (of the geocache), favorites, and geotour (order defined by GeoTour). Defaults to geotour. | [optional] [default to &#39;gt+&#39;]
 **expand** | **String**| fields to include with base geocache object | [optional] [default to &#39;&#39;]
 **fields** | **String**| fields you want to return, defaults to \&quot;referencecode\&quot; | [optional] [default to &#39;referenceCode&#39;]

### Return type

[**[Geocache]**](Geocache.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/json-patch+json, text/json

