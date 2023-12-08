<script>
	let iframeUrl = 'https://noghte.github.io/static/html/umap.html';
  let showHelpModal = false;

function toggleHelpModal() {
    showHelpModal = !showHelpModal;
}
  </script>
 
  
  <button on:click={toggleHelpModal} class="help-button">Demo</button>
  {#if showHelpModal}
  <div class="modal">
      <div class="modal-content">
          <span class="close" on:click={toggleHelpModal}>&times;</span>
          <iframe width="672" height="378" src="https://www.youtube.com/embed/KMDeObIipIo?si=CPX_nQekVuYr_TyF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
  </div>
  {/if}
  <div class="iframe-container">
  	<iframe src="{iframeUrl}" title="umap"></iframe>
  </div>
   
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
  
   .help-button {
          background-color: #4a90e2; /* A shade of blue matching your bg-blue-50 */
          color: white;
          padding: 5px 10px;
          border: none;
          border-radius: 5px;
          font-weight: bold;
          cursor: pointer;
          transition: background-color 0.3s ease;
          position: absolute;
          margin-top: 0pt;
          margin-left: 35pt;
          z-index: 10;
      }
      .help-button:hover {
          background-color: #3a7fd5; /* Darker shade on hover */
      }
  
      .modal {
          position: fixed;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000; /* Ensure it's above all other content */
      }
  
      .modal-content {
          background-color: white;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          width: 80%;
          max-width: 770px; 
      }
  
      .close {
          float: right;
          font-size: 28px;
          font-weight: bold;
          color: #aaa;
          cursor: pointer;
      }
      .close:hover {
          color: black;
      }
    </style>