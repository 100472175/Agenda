import { c as create_ssr_component, e as escape, o as each } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let sum;
  let numbers = [1, 2, 3, 4];
  sum = numbers.reduce((t, n) => t + n, 0);
  return `<p>${escape(numbers.join(" + "))} = ${escape(sum)}</p> <button data-svelte-h="svelte-1lhbpu1">Add a number</button> <button data-svelte-h="svelte-zv3xmp">Remove a number</button> ${each(numbers, (num) => {
    return `<p>${escape(num)}</p>`;
  })}`;
});
export {
  Page as default
};
