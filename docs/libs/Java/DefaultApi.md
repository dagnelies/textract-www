# DefaultApi

All URIs are relative to *http://petstore.swagger.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addPet**](DefaultApi.md#addPet) | **POST** /pets | 
[**deletePet**](DefaultApi.md#deletePet) | **DELETE** /pets/{id} | 
[**findPetById**](DefaultApi.md#findPetById) | **GET** /pets/{id} | 
[**findPets**](DefaultApi.md#findPets) | **GET** /pets | 


<a name="addPet"></a>
# **addPet**
> Pet addPet(pet)



Creates a new pet in the store.  Duplicates are allowed

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.DefaultApi;


DefaultApi apiInstance = new DefaultApi();
NewPet pet = new NewPet(); // NewPet | Pet to add to the store
try {
    Pet result = apiInstance.addPet(pet);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#addPet");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pet** | [**NewPet**](NewPet.md)| Pet to add to the store |

### Return type

[**Pet**](Pet.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletePet"></a>
# **deletePet**
> deletePet(id)



deletes a single pet based on the ID supplied

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.DefaultApi;


DefaultApi apiInstance = new DefaultApi();
Long id = 789L; // Long | ID of pet to delete
try {
    apiInstance.deletePet(id);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#deletePet");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Long**| ID of pet to delete |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="findPetById"></a>
# **findPetById**
> Pet findPetById(id)



Returns a user based on a single ID, if the user does not have access to the pet

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.DefaultApi;


DefaultApi apiInstance = new DefaultApi();
Long id = 789L; // Long | ID of pet to fetch
try {
    Pet result = apiInstance.findPetById(id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#findPetById");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Long**| ID of pet to fetch |

### Return type

[**Pet**](Pet.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/xml, text/xml, text/html

<a name="findPets"></a>
# **findPets**
> List&lt;Pet&gt; findPets(tags, limit)



Returns all pets from the system that the user has access to

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.DefaultApi;


DefaultApi apiInstance = new DefaultApi();
List<String> tags = Arrays.asList("tags_example"); // List<String> | tags to filter by
Integer limit = 56; // Integer | maximum number of results to return
try {
    List<Pet> result = apiInstance.findPets(tags, limit);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#findPets");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tags** | [**List&lt;String&gt;**](String.md)| tags to filter by | [optional]
 **limit** | **Integer**| maximum number of results to return | [optional]

### Return type

[**List&lt;Pet&gt;**](Pet.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/xml, text/xml, text/html

