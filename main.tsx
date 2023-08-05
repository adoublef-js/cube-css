import { Hono } from "deps";
// import * as jsx from "https://esm.sh/hono@3.3.4/jsx/jsx-runtime.js";

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
    const app = new Hono();

    app.get("/", ({ html }) => html("hi"));

    const port = Number(Deno.env.get("PORT") ?? "8080");
    Deno.serve({ port }, app.fetch);
}
