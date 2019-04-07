<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/3.22.0/swagger-ui.css" />

<script src="https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/3.22.0/swagger-ui-bundle.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/3.22.0/swagger-ui.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/3.22.0/swagger-ui-standalone-preset.js"></script>

<style>
	div.info {
		background-color: initial;
	}
</style>

<div id="swagger-ui"></div>

<script src="swagger-ui-bundle.js"></script>
<script src="swagger-ui-standalone-preset.js"></script>

<script>
window.onload = function() {
  const ui = SwaggerUIBundle({
    url: "/swagger.json",
    dom_id: '#swagger-ui',
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ]
  })

  window.ui = ui
}
</script>