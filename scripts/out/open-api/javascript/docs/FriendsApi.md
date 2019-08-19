# ApiV10.FriendsApi

All URIs are relative to *https://api.groundspeak.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**friendsAcceptFriendRequest**](FriendsApi.md#friendsAcceptFriendRequest) | **POST** /v{api-version}/friendrequests/{requestId}/accept | Accept a friend request
[**friendsCreateFriendRequest**](FriendsApi.md#friendsCreateFriendRequest) | **POST** /v{api-version}/friendrequests | Create a friend request
[**friendsDeleteFriendRequest**](FriendsApi.md#friendsDeleteFriendRequest) | **DELETE** /v{api-version}/friendrequests/{requestId} | Delete a friend request
[**friendsGetFriendRequests**](FriendsApi.md#friendsGetFriendRequests) | **GET** /v{api-version}/friendrequests | Get a list of friend requests for the calling user
[**friendsGetFriends**](FriendsApi.md#friendsGetFriends) | **GET** /v{api-version}/friends | Get a list of friends for the calling user
[**friendsRemoveFriend**](FriendsApi.md#friendsRemoveFriend) | **DELETE** /v{api-version}/friends/{userCode} | Removes a friend



## friendsAcceptFriendRequest

> friendsAcceptFriendRequest(requestId, apiVersion)

Accept a friend request

### Example

```javascript
import ApiV10 from 'api_v1_0';

let apiInstance = new ApiV10.FriendsApi();
let requestId = 56; // Number | friend request identifier
let apiVersion = "'1.0'"; // String | The requested API version
apiInstance.friendsAcceptFriendRequest(requestId, apiVersion, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestId** | **Number**| friend request identifier | 
 **apiVersion** | **String**| The requested API version | [default to &#39;1.0&#39;]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## friendsCreateFriendRequest

> FriendRequest friendsCreateFriendRequest(apiVersion, friendRequest, opts)

Create a friend request

This method will return the friend request created.

### Example

```javascript
import ApiV10 from 'api_v1_0';

let apiInstance = new ApiV10.FriendsApi();
let apiVersion = "'1.0'"; // String | The requested API version
let friendRequest = new ApiV10.FriendRequest(); // FriendRequest | The friend request to create.
let opts = {
  'fields': "'id'" // String | Properties you want to return, defaults to id
};
apiInstance.friendsCreateFriendRequest(apiVersion, friendRequest, opts, (error, data, response) => {
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
 **friendRequest** | [**FriendRequest**](FriendRequest.md)| The friend request to create. | 
 **fields** | **String**| Properties you want to return, defaults to id | [optional] [default to &#39;id&#39;]

### Return type

[**FriendRequest**](FriendRequest.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, application/json-patch+json, application/x-www-form-urlencoded, text/json
- **Accept**: application/json, application/json-patch+json, text/json


## friendsDeleteFriendRequest

> Object friendsDeleteFriendRequest(requestId, apiVersion)

Delete a friend request

This method will return no content.

### Example

```javascript
import ApiV10 from 'api_v1_0';

let apiInstance = new ApiV10.FriendsApi();
let requestId = 56; // Number | The identifier of the friend request
let apiVersion = "'1.0'"; // String | The requested API version
apiInstance.friendsDeleteFriendRequest(requestId, apiVersion, (error, data, response) => {
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
 **requestId** | **Number**| The identifier of the friend request | 
 **apiVersion** | **String**| The requested API version | [default to &#39;1.0&#39;]

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/json-patch+json, text/json


## friendsGetFriendRequests

> [FriendRequest] friendsGetFriendRequests(apiVersion, opts)

Get a list of friend requests for the calling user

This method will return a list of requests including both inbound and outbound requests.

### Example

```javascript
import ApiV10 from 'api_v1_0';

let apiInstance = new ApiV10.FriendsApi();
let apiVersion = "'1.0'"; // String | The requested API version
let opts = {
  'skip': 0, // Number | How many requests to skip (default = 0)
  'take': 10, // Number | How many requests to return (default = 10, max = 50)
  'fields': "'id'" // String | Properties you want to return, defaults to id
};
apiInstance.friendsGetFriendRequests(apiVersion, opts, (error, data, response) => {
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
 **skip** | **Number**| How many requests to skip (default &#x3D; 0) | [optional] [default to 0]
 **take** | **Number**| How many requests to return (default &#x3D; 10, max &#x3D; 50) | [optional] [default to 10]
 **fields** | **String**| Properties you want to return, defaults to id | [optional] [default to &#39;id&#39;]

### Return type

[**[FriendRequest]**](FriendRequest.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/json-patch+json, text/json


## friendsGetFriends

> [User] friendsGetFriends(apiVersion, opts)

Get a list of friends for the calling user

This method will return a list of Users.

### Example

```javascript
import ApiV10 from 'api_v1_0';

let apiInstance = new ApiV10.FriendsApi();
let apiVersion = "'1.0'"; // String | The requested API version
let opts = {
  'skip': 0, // Number | How many friends to skip (default = 0)
  'take': 10, // Number | How many friends to return (default = 10, max = 50)
  'fields': "'referenceCode'" // String | Properties you want to return, defaults to referenceCode
};
apiInstance.friendsGetFriends(apiVersion, opts, (error, data, response) => {
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
 **skip** | **Number**| How many friends to skip (default &#x3D; 0) | [optional] [default to 0]
 **take** | **Number**| How many friends to return (default &#x3D; 10, max &#x3D; 50) | [optional] [default to 10]
 **fields** | **String**| Properties you want to return, defaults to referenceCode | [optional] [default to &#39;referenceCode&#39;]

### Return type

[**[User]**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/json-patch+json, text/json


## friendsRemoveFriend

> Object friendsRemoveFriend(userCode, apiVersion)

Removes a friend

This method will return no content.

### Example

```javascript
import ApiV10 from 'api_v1_0';

let apiInstance = new ApiV10.FriendsApi();
let userCode = "userCode_example"; // String | The identifier of the friend (their user reference code)
let apiVersion = "'1.0'"; // String | The requested API version
apiInstance.friendsRemoveFriend(userCode, apiVersion, (error, data, response) => {
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
 **userCode** | **String**| The identifier of the friend (their user reference code) | 
 **apiVersion** | **String**| The requested API version | [default to &#39;1.0&#39;]

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/json-patch+json, text/json

