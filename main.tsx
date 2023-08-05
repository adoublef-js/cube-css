import { Hono, serveStatic } from "deps";
import { Html } from "./components/base/mod.ts";
import { SimpleBlog } from "./examples/simple-blog/simple-blog.tsx";

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
	const app = new Hono();

	app.get("/", ({ html }) => {
		return html(<SimpleBlog />);
	});

	app.use("/*", serveStatic({ root: "./static/" }));

	const port = Number(Deno.env.get("PORT") ?? "8080");
	Deno.serve({ port }, app.fetch);
}
