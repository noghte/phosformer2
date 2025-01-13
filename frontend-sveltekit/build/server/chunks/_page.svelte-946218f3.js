import { c as create_ssr_component, b as add_attribute } from './index-26be9cd2.js';

const css = {
  code: ".iframe-container.svelte-h06vc2.svelte-h06vc2{width:100%;position:relative;padding-bottom:75%;height:0;overflow:hidden}.iframe-container.svelte-h06vc2 iframe.svelte-h06vc2{position:absolute;top:0;left:0;width:100%;height:100%;border:none}.help-button.svelte-h06vc2.svelte-h06vc2{background-color:#4a90e2;color:white;padding:5px 10px;border:none;border-radius:5px;font-weight:bold;cursor:pointer;transition:background-color 0.3s ease;position:absolute;margin-top:0pt;margin-left:35pt;z-index:10}.help-button.svelte-h06vc2.svelte-h06vc2:hover{background-color:#3a7fd5}.modal.svelte-h06vc2.svelte-h06vc2{position:fixed;left:0;top:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.5);display:flex;justify-content:center;align-items:center;z-index:1000}.modal-content.svelte-h06vc2.svelte-h06vc2{background-color:white;padding:20px;border-radius:10px;box-shadow:0 4px 8px rgba(0, 0, 0, 0.1);width:80%;max-width:770px}.close.svelte-h06vc2.svelte-h06vc2{float:right;font-size:28px;font-weight:bold;color:#aaa;cursor:pointer}.close.svelte-h06vc2.svelte-h06vc2:hover{color:black}",
  map: null
};
let iframeUrl = "https://noghte.github.io/static/html/umap.html";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<button class="help-button svelte-h06vc2">Demo</button>
  ${``}
  <div class="iframe-container svelte-h06vc2"><iframe${add_attribute("src", iframeUrl, 0)} title="umap" class="svelte-h06vc2"></iframe>
  </div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-946218f3.js.map
