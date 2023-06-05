<script>
    import { onMount } from "svelte";
    import * as d3 from "d3";
    import * as proteins from "./proteins.js";
    import * as genesNfamily from "./genesNfamily.js";

    let container;
    let slider;

    function handleClick(event) {
        alert(event.target.id);
    }
    function handleHoverEnter(event)
    {
        const hoverDiv = document.querySelector("#hover-div");
        // const hoverText = element.textContent;
        hoverDiv.textContent = event.target.textContent;
        hoverDiv.classList.remove("hidden");
    }
    function handleHoverLeave(event)
    {
        const hoverDiv = document.querySelector("#hover-div");
        hoverDiv.classList.add("hidden");
    }
    function handleZoom(e) {
        // d3.select("svg g").attr("transform", e.transform);
        d3.selectAll("svg g").attr("transform", e.transform);
    }
    let zoom = d3.zoom().on("zoom", handleZoom);

    onMount(() => {
        d3.xml("/coraltree.svg").then((data) => {
            // let container = document.querySelector('#svg-container');
            d3.select(container).node().append(data.documentElement);
            let svg = container.querySelector("svg");

            const width = 900;
            const height = 675;

            svg.setAttribute("width", width);
            svg.setAttribute("height", height);

            d3.select(svg).call(zoom);

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
                element.setAttribute("class", "hover-element");
                element.addEventListener("click", handleClick);
                element.addEventListener("mouseenter", handleHoverEnter);
                element.addEventListener("mouseleave", handleHoverLeave);

                element.addEventListener("mouseover", () => {
                    element.style.cursor = "pointer";
                });
            });


  });

            // Slider
    //         function handleSliderDrag(draggedValue) {
    //     zoom.scaleTo(d3.select(svg), draggedValue);
    // }
    //         const sliderWidth = 300;
    //         const sliderHeight = 50;
    //         const sliderMargin = { top: 10, right: 50, bottom: 10, left: 50 };
    //         const xScale = d3
    //             .scaleLinear()
    //             .domain([1, 10])
    //             .range([0, sliderWidth])
    //             .clamp(true);

        //     const drag = d3.drag().on("drag", (event) => {
        //         handleSliderDrag(xScale.invert(event.x));
        //     });

        //     const sliderSvg = d3
        //         .select(slider)
        //         .attr(
        //             "width",
        //             sliderWidth + sliderMargin.left + sliderMargin.right
        //         )
        //         .attr(
        //             "height",
        //             sliderHeight + sliderMargin.top + sliderMargin.bottom
        //         );

        //     const sliderGroup = sliderSvg
        //         .append("g")
        //         .attr(
        //             "transform",
        //             `translate(${sliderMargin.left}, ${sliderMargin.top})`
        //         );

        //     sliderGroup
        //         .append("rect")
        //         .attr("class", "track")
        //         .attr("x", xScale.range()[0])
        //         .attr("y", sliderHeight / 2 - 2)
        //         .attr("width", xScale.range()[1] - xScale.range()[0])
        //         .attr("height", 4);

        //     sliderGroup
        //         .append("circle")
        //         .attr("class", "handle")
        //         .attr("cx", xScale.range()[0])
        //         .attr("cy", sliderHeight / 2)
        //         .attr("r", 9)
        //         .call(drag);
        //  });
    });
</script>

<div class="flex flex-col">
    <!--<div class="w-full bg-red-100">
        <svg bind:this={slider} />
    </div>-->
    <div class="w-full bg-blue-50">
        <div id="svg-container" bind:this={container} class="relative">
     
              <div id="hover-div" class="absolute top-0 right-0 p-4 bg-white rounded-lg shadow-md">
                Content to show on hover
              </div>
        </div>
    </div>
</div>

<!-- <style>
    .track {
        fill: #ddd;
    }

    .handle {
        fill: #fff;
        stroke: #000;
        stroke-opacity: 0.5;
        stroke-width: 1.25px;
        cursor: grab;
    }
</style> -->
