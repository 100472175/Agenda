import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.DBa0tzZ3.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.BFbjQpLA.js","_app/immutable/chunks/index.DZfq2G-4.js","_app/immutable/chunks/each.D6YF6ztN.js"];
export const stylesheets = ["_app/immutable/assets/2.BM8lUUNW.css"];
export const fonts = [];
