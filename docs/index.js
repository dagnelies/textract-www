var options = {
	strings: "pdf, docx, tiff, html, eml, msg, jpg, json, xml, zip, rar, rtf, pptx, xlsx, sql, csv".split(", "),
	typeSpeed: 50,
	backSpeed: 50,
	//backDelay: 500,
	shuffle: true,
	loop: true
}
var typed = new Typed("#typeit", options);