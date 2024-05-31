import { serve } from "@hono/node-server"; // for Node.js Adapter
import { Hono } from "hono";
// middlewares
import { cors } from 'hono/cors';
import { showRoutes } from "hono/dev";
import { logger } from "hono/logger";

import { Alphabet } from "./Alphabet";
import colorRoute from "./Color";
import htmlRoute from "./html";
import jsonRoute from "./json";

const app = new Hono();

app.use(logger()); // middleware
app.use("/*", cors());

// text
app.get("/", (c) => c.text("Hello Node.js!"));

// set custom headers
app.get("/welcome", (c) => {
  c.header("X-Message", "Hello!");
  c.header("Content-Type", "text/plain");
  return c.body("welcome, see header part of request");
});

// multiple path
app.on("GET", ["/hello", "/hi", "/hey"], (c) => c.text("🙋🏻‍♂️ Hello"));

// MARK: json support
app.route("/json", jsonRoute);

// MARK: HTML support
app.route("/html", htmlRoute);

// MARK: CSS support
app.route("/color", colorRoute);

// MARK: JSX Support
app.get("/alphabet", (c) => c.html(<Alphabet />));

// default fallback method
app.onError((err, c) => {
  console.error(`${err}`);
  return c.text("Custom Error Message", 500);
});

showRoutes(app); // display route list in terminal
serve(app);

// change default port
// const port = 3000

// serve({
//   fetch: app.fetch,
//   port
// })
