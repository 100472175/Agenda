export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.RYS7XcC4.js","app":"_app/immutable/entry/app.BE0ki5-r.js","imports":["_app/immutable/entry/start.RYS7XcC4.js","_app/immutable/chunks/entry.CtyJBdYi.js","_app/immutable/chunks/scheduler.BFbjQpLA.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/entry/app.BE0ki5-r.js","_app/immutable/chunks/scheduler.BFbjQpLA.js","_app/immutable/chunks/index.DZfq2G-4.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/math",
				pattern: /^\/math\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

export const prerendered = new Set([]);

export const base = "";