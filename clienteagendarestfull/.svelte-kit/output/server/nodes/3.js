

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/math/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.wxTTjl64.js","_app/immutable/chunks/scheduler.BFbjQpLA.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/index.DZfq2G-4.js"];
export const stylesheets = [];
export const fonts = [];
