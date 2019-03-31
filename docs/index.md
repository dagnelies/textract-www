# *UNDER CONSTRUCTION*

Convert <span id="typeit"></span> to text
==========================================

<script src="https://cdn.jsdelivr.net/npm/typed.js"></script>
<script src="index.js"></script>

<form id="to-upload" enctype="multipart/form-data">
	<div class="row m-2">
		<label class="cell-sm-3 text-right">OCR language(s)</label>

		<select class="cell-sm-9" data-role="select" multiple>
			<option>deu</option>
			<option selected="selected">eng</option>
			<option>fra</option>
		</select>

	</div>
	<input name="file" type="file" data-role="file" data-mode="drop" data-on-select="sendFiles">
</form>
	
<div hidden id="progress-up" data-role="progress" data-cls-bar="bg-teal" data-value="0"></div>
<div hidden id="progress-busy" data-role="progress" data-type="line"></div>

<button hidden id="retry" onclick="retry()" class="button info">Try another file!</button>
<pre hidden id="output"></pre>

<script src="upload.js"></script>