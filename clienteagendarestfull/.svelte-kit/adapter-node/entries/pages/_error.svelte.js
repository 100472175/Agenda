import { g as getContext, c as create_ssr_component, b as subscribe, e as escape } from "../../chunks/ssr.js";
import "../../chunks/exports.js";
import "devalue";
function get(key, parse = JSON.parse) {
  try {
    return parse(sessionStorage[key]);
  } catch {
  }
}
const SNAPSHOT_KEY = "sveltekit:snapshot";
const SCROLL_KEY = "sveltekit:scroll";
get(SCROLL_KEY) ?? {};
get(SNAPSHOT_KEY) ?? {};
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<h1 class="underline text-center text-3xl bg-red-500 font-semibold">${escape($page.status)} -&gt; ${escape($page.error.message.toUpperCase())}</h1> <h3 class="text-justify text-xl" data-svelte-h="svelte-1h7ud6e">La página no está disponible, seguramente porque no hayas lanzado el backend,
  por favor, comprueba que está lanzado en el puerto 13300.</h3>`;
});
export {
  Error$1 as default
};
