Limits
======

Other than the amount of free credits, free and paid plans share the same limits.

- **Max file size**: *100 Mb*
- **Max parralel requests**: *one request at a time per origin IP (not per API key!)*
- **Max extracted text**: *1 million characters*
- **Max OCR duration**: *10 minutes (typically max 100 pages)*


### A note on OCR (Optical Character Recognition)

OCR to extract text from scanned documents is a time intensive process.
While a scanned invoice usually take a few seconds, a whole scanned book (100+ pages) would typically take more than 10 minutes. This API is not suited for the latter use case. It also requires to keep the connection open during the operation.

Aborded transactions, whether client side, connection loss or server side because it reaches the limit, *will* count as consumed minutes.
