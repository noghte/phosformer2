import { c as create_ssr_component, b as add_attribute } from './index-26be9cd2.js';
import 'd3';

const css = {
  code: "#svg-container.svelte-i9jw11{overflow:hidden}.zoom-slider-container.svelte-i9jw11{display:flex;align-items:center;z-index:10}.help-button.svelte-i9jw11{background-color:#4a90e2;color:white;padding:5px 10px;border:none;border-radius:5px;font-weight:bold;cursor:pointer;transition:background-color 0.3s ease;position:absolute;margin-top:40pt;margin-left:10pt}.help-button.svelte-i9jw11:hover{background-color:#3a7fd5}.modal.svelte-i9jw11{position:fixed;left:0;top:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.5);display:flex;justify-content:center;align-items:center;z-index:1000}.modal-content.svelte-i9jw11{background-color:white;padding:20px;border-radius:10px;box-shadow:0 4px 8px rgba(0, 0, 0, 0.1);width:80%;max-width:770px}.close.svelte-i9jw11{float:right;font-size:28px;font-weight:bold;color:#aaa;cursor:pointer}.close.svelte-i9jw11:hover{color:black}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let container;
  $$result.css.add(css);
  return `<section class="py-10"><div class="zoom-slider-container absolute top-27 left-0 m-5 svelte-i9jw11">
    Zoom
    <input type="range" id="zoomSlider" min="0.5" max="2" step="0.1" value="1"></div>

<div class="flex flex-col"><div class="flex flex-row w-full bg-blue-50"><div id="svg-container" class="w-full relative svelte-i9jw11"${add_attribute("this", container, 0)}></div>
        <button class="help-button svelte-i9jw11">Demo</button>
        ${``}

        <div id="hover-div" class="w-1/3 p-4 bg-white rounded-lg shadow-md h-1/4"></div></div>
    <div id="weblogo_container" class="w-full rounded-lg shadow-md"></div></div>
</section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-73cc672f.js.map
