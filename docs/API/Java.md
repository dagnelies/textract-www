Textract API for Java
=====================

The client library can be downloaded here: [TextractApiClient-0.2.jar](TextractApiClient-0.2.jar)

Simply add it to your classpath. Maven and gradle dependencies are coming soon.

Usage example:

```java
import io.textract.client.ApiClient;
import io.textract.client.ApiException;
import io.textract.client.Configuration;
import io.textract.client.TextractApi;

// ...

// Configure API key authorization: api_key
Configuration.getDefaultApiClient().setApiKey("YOUR API KEY");

// Create API client instance
TextractApi apiInstance = new TextractApi();

// Extract text from a file
File file = new File("/path/to/file.txt");
String textFromFile = apiInstance.getTextFromFile(file); // throws ApiException
System.out.println(textFromFile);

// Extract text from an URL
String url = "url_example";
String textFromUrl = apiInstance.getTextFromURL(url); // throws ApiException
System.out.println(textFromUrl);
```
