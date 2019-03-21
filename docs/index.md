# *UNDER CONSTRUCTION - IN DEVELOPMENT*

Convert <span id="typeit">*</span> to text
==========================================

<script src="https://cdn.jsdelivr.net/npm/typed.js"></script>
<script src="index.js"></script>

<iframe src="upload.html" style="width:100%;border:#4bb0ea inset;height:300px;"></iframe>

Features
--------

- Convert almost any type of document as text. [See the complete list](documentation/supported-file-formats.md).
- Includes OCR (Optical Character Recognition) to analyze scanned documents. [See supported languages](documentation/supported-OCR-languages.md).
- Fast & scalable.

Developer friendly ❤
--------------------

Upload the file using...

	POST https://api.textract.io/text?api_key=... <file-inside-body>

And obtain the raw extracted text in the response. That's it!

Use the [HTTP API](API/HTTP.md) directly or use a library in your favourite language.

- [<img src="img/java.png" /> Java](API/java.md)
- [<img src="img/python.png" /> Python](API/python.md)
- [<img src="img/c-sharp.png" /> C#](API/c-sharp.md)
- [<img src="img/php.png" /> PHP](API/php.md)
- [<img src="img/js.png" /> Javascript](API/js.md)

For more advanced usage, like dealing with large files, or requiring lots of OCR, take a look at the [guidelines](documentation/guidelines.md).

<a href="#" class="btn btn-primary">Create an account and get your API key!</a> Convert up to 1000 documents/minutes for free.
