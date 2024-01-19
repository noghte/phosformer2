<script>
    import { onMount } from "svelte";
    import * as d3 from "d3";
    import kinaseData from "$lib/kinase_data.json";

    let container;
    let showHelpModal = false;

    function toggleHelpModal() {
        showHelpModal = !showHelpModal;
    }
    function getImagePaths(id) {
        let matchedData = kinaseData.filter((item) => item.gene.toLowerCase() === id.toLowerCase());
        console.log(matchedData);
        if (matchedData.length > 0) {
            return matchedData.map((data) => "/weblogos/" + data.weblogo);
        } else {
            console.log("No matching genes found for id: " + id);
            return ["/weblogos/empty.png"];
        }
    }

    function get_id(idHtml) {
        let idParts = idHtml.split("_");
        let id = idParts[idParts.length - 1]; //eg., MYO3A
        console.log("id", id);
        return id;
    }
    function handleClick(event) {
        const id = get_id(event.target.id);
        const imagePaths = getImagePaths(id);
        console.log("imagepaths", imagePaths);
        let imageDiv = document.getElementById("weblogo_container");
        imageDiv.innerHTML = ""; // clear the container

        imagePaths.forEach((imagePath) => {
            let newImg = document.createElement("img");
            newImg.src = imagePath;
            newImg.style.width = "100%";
            newImg.style.height = "100%";
            newImg.alt = id;
            imageDiv.appendChild(newImg);
        });

        // Scroll to a div after the new image
        let emptyDiv = document.createElement("div");
        imageDiv.appendChild(emptyDiv);
        emptyDiv.scrollIntoView({ behavior: "smooth" });
    }

    function handleHoverEnter(event) {
        const hoverDiv = document.querySelector("#hover-div");
        let id = get_id(event.target.id);
        let data = kinaseData.find((item) => item.gene.toLowerCase() === id.toLowerCase()) || {};
        // const hasUniprot = data.uniprot && data.uniprot !== "N/A";

        const cardHTML = `
        <div class="bg-white p-6">
            <h2 class="text-xl font-bold mb-2">${event.target.textContent}</h2>
            <p class="mb-2 overflow-auto break-words"><strong>Uniprot:</strong> ${
                data.uniprot ?? "N/A"
            }</p>
            <p class="mb-2 overflow-auto break-words"><strong>Specificity:</strong> ${
                data.specificity ?? "N/A"
            }</p>
            <p class="mb-2 overflow-auto break-words"><strong>Family:</strong> ${
                data.family ?? "N/A"
            }</p>
            <p class="mb-2 overflow-auto break-words"><strong>Kinase Sequence:</strong><span class="text-sm"> ${
                data.kinase_domain ?? "N/A"
            }</span></p>
            <p class="mb-2 text-sm italic">Click and scroll below to view the substrate specificity logo.</p>
        </div>
    `;

        hoverDiv.innerHTML = cardHTML;
        hoverDiv.classList.remove("hidden");
    }

    function handleHoverLeave(event) {
        const hoverDiv = document.querySelector("#hover-div");
        // hoverDiv.classList.add("hidden");
    }
    function handleZoom(e) {
        d3.selectAll("svg g").attr("transform", e.transform);
    }

    onMount(() => {
        const zoomSlider = document.getElementById("zoomSlider");
        let currentZoomLevel = 1.0;

        d3.xml("/coraltree.svg").then((data) => {
            // let container = document.querySelector('#svg-container');
            d3.select(container).node().append(data.documentElement);
            let svg = container.querySelector("svg");
            function handleZoomChange() {
                currentZoomLevel = parseFloat(zoomSlider.value);
                svg.style.transform = `scale(${currentZoomLevel})`;
            }
            zoomSlider.addEventListener("input", handleZoomChange);
            handleZoomChange();
            const width = 900;
            const height = 675;
            // Initialize the zoom behavior
            let zoom = d3.zoom().on("zoom", handleZoom);
            d3.select(svg).call(zoom);

            svg.setAttribute("width", width);
            svg.setAttribute("height", height);

            // function zoomed({ transform }) {
            //     g.attr("transform", transform);
            // }
            // svg.call(d3.zoom()
            //   .extent([[0, 0], [width, height]])
            //   .scaleExtent([1, 8])
            //   .on("zoom", zoomed));

            // Functionality
            container.querySelectorAll("path").forEach((node) => {
                node.addEventListener("mouseenter", () => {
                    node.style.stroke = "blue";
                });
                node.addEventListener("mouseleave", () => {
                    node.style.stroke = "";
                });
            });

            // const hoverElements = document.querySelectorAll("#svg-container svg .hover-element");
            container.querySelectorAll("text").forEach((element) => {
                // element.addEventListener("mouseover", () => {
                //     element.style.cursor = "pointer";
                // });
            });
            container.querySelectorAll("circle, text").forEach((element) => {
                // Apply disabled style if hasUniprot is false
                let id = get_id(element.id);
                let data = kinaseData.find((item) => item.gene.toLowerCase() === id.toLowerCase()) || {};

                if (data.uniprot) {
                    if (element.nodeName.toLowerCase() === "circle")
                        element.setAttribute("fill", "#c2f2bd"); //green
                    element.setAttribute("class", "hover-element");
                    element.addEventListener("click", handleClick);
                    element.addEventListener("mouseenter", handleHoverEnter);
                    element.addEventListener("mouseleave", handleHoverLeave);

                    element.addEventListener("mouseover", () => {
                        element.style.cursor = "pointer";
                    });
                } else {
                    if (element.nodeName.toLowerCase() === "circle")
                        element.setAttribute("fill", "#d6d4d2"); //gray
                    element.style.cursor = "default";
                    element.addEventListener("mouseover", () => {
                        element.style.cursor = "default";
                    });
                }
            });
        });
    });
</script>

<section class="py-10">

<div class="zoom-slider-container absolute top-27 left-0 m-5">
    <!-- <Fa icon={faMagnifyingGlass} class="icon-container" /> -->
    Zoom
    <input
        type="range"
        id="zoomSlider"
        min="0.5"
        max="2"
        step="0.1"
        value="1"
    />
</div>

<div class="flex flex-col">
    <div class="flex flex-row w-full bg-blue-50">
        <div id="svg-container" bind:this={container} class="w-full relative">
            <!-- SVG content here -->
        </div>
        <button on:click={toggleHelpModal} class="help-button">Demo</button>
        {#if showHelpModal}
        <div class="modal">
            <div class="modal-content">
                <span class="close" on:click={toggleHelpModal}>&times;</span>
                <iframe width="672" height="378" src="https://www.youtube.com/embed/L-A62rS_gH0?si=7TCy29a7dc4LN8sp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
        {/if}

        <div
            id="hover-div"
            class="w-1/3 p-4 bg-white rounded-lg shadow-md h-1/4"
        >
            <!-- Content to show on hover -->
        </div>
    </div>
    <div id="weblogo_container" class="w-full rounded-lg shadow-md">
        <!-- Put your second row content here -->
    </div>
</div>
</section>
<style>
    #svg-container {
        overflow: hidden;
    }

    /* .zoom-slider-container {
        position: absolute;
        top: 0;
        left: 0;
        margin: 10px;
    } */
    .zoom-slider-container {
        display: flex;
        align-items: center;
        z-index: 10;
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
        margin-top: 40pt;
        margin-left: 10pt;
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
