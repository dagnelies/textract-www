Guidelines
==========

The provided API supports two kind of requests: synchronous and asynchronous.

Synchronous API
---------------

This is used to extract text of small files "directly". The response simply returns the extracted text.

The processing time allocated to such a request is however limited to one minute. It is suited for documents not requiring large amount of OCR (Optical Character Recognition).

Asynchronous API
----------------

The asynchronous one is practical for large documents requiring OCR or SR. These will be "queued" and processed according to the system's resources.
