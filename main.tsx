import { Hono } from "deps";

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
    const app = new Hono();

    app.get("/", ({ html }) => html(<div>hi</div>));

    const port = Number(Deno.env.get("PORT") ?? "8080");
    Deno.serve({ port }, app.fetch);
}
