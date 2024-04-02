

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.9pVBjPxn.js","_app/immutable/chunks/scheduler.BFbjQpLA.js","_app/immutable/chunks/index.DZfq2G-4.js"];
export const stylesheets = ["_app/immutable/assets/0.u8StJeJa.css"];
export const fonts = [];
