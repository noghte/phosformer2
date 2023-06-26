<script>
	let iframeUrl = 'https://noghte.github.io/static/html/umap.html';
  </script>
  
  <style>
	/* Set the iframe to occupy the entire viewport */
	.iframe-container {
    width: 100%;
    position: relative;
    padding-bottom: 75%; /* Adjust this value to control the height of the iframe */
    height: 0;
    overflow: hidden;
  }

  .iframe-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
  </style>
  

  <div class="iframe-container">
	<iframe src="{iframeUrl}" title="umap"></iframe>
  </div>