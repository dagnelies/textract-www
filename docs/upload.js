var TEXTRACT_API_URL = "//api.textract.io";

function sendFiles(files) {
	console.debug('Sending files...');
	console.log(files);
	let formData = new FormData($('#to-upload')[0]);
	console.log(formData);
	
	$('#to-upload').prop('hidden', true);
	$('#progress-up').attr('data-value', 0);
	$('#progress-up').prop('hidden', false);
	
	$.ajax({
		method: 'POST',
		url: TEXTRACT_API_URL + '/text?api_key=betatest',
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
						$('#progress-up').attr('data-value', 100 * e.loaded / e.total);
						if( e.loaded == e.total ) {
							$('#progress-up').prop('hidden', true);
							$('#progress-busy').prop('hidden', false);
						}
					}
					
				} , false);
			}
			return myXhr;
		},
		success: function(res) {
			console.debug(res);
			$('#progress-busy').prop('hidden', true);
			$('#output').text(res);
			$('#output').prop('hidden', false);
			$('#retry').prop('hidden', false);
		},
		error: function(xhr, err, msg) {
			console.warn(err + " - " + msg);
			console.warn(xhr);
			Metro.toast.create("Failed to convert document: " + xhr.responseText, null, 5000, "bg-red fg-white");
		}
	})
}

function retry() {
	$('#output').prop('hidden', true);
	$('#retry').prop('hidden', true);
	$('#to-upload').prop('hidden', false);
}