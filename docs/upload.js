function sendFiles(files) {
	console.debug('Sending files...');
	console.log(files);
	let formData = new FormData($('#to-upload')[0]);
	console.log(formData);
	
	$('#progress').attr('data-value', 0);
	$('#output').text("Uploading...");
	
	$.ajax({
		method: 'POST',
		url: 'api.textract.io/text?api_key=betatest',
		data: formData,
		
		// Tell jQuery not to process data or worry about content-type
		// You *must* include these options!
		cache: false,
		contentType: false,
		processData: false,

		// Custom XMLHttpRequest
		xhr: function() {
			var myXhr = $.ajaxSettings.xhr();
			if (myXhr.upload) {
				// For handling the progress of the upload
				myXhr.upload.addEventListener('progress', function(e) {
					console.debug(e);
					if (e.lengthComputable) {
						$('#progress').attr('data-value', 100 * e.loaded / e.total);
					}
				} , false);
			}
			return myXhr;
		},

		success: function(res) {
			console.debug(res);
			$('#output').text(res);
		},
		error: function(xhr, err, msg) {
			console.warn(err + " - " + msg);
			console.warn(xhr);
			Metro.toast.create("Failed to convert document: " + xhr.responseText, null, 5000, "bg-red fg-white");
		}
	})
}