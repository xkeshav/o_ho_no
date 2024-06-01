import { Hono } from "hono";
import { prettyJSON } from "hono/pretty-json";

const jsonRoute = new Hono();

const element_list = [
  {
    id: 1,
    name: "Water",
    emoji: "💧",
  },
  {
    id: 2,
    name: "Fire",
    emoji: "🔥",
  },
  {
    id: 3,
    name: "Earth",
    emoji: "🌍",
  },
  {
    id: 4,
    name: "Air",
    emoji: "💨",
  },
  {
    id: 5,
    name: "Sky",
    emoji: "🌌",
  },
];

jsonRoute.all("/", c => c.text("write `list` to path to see the json data."));
// MARK: JSON middleware
jsonRoute.get("/list", prettyJSON(), c => c.json(element_list));

export default jsonRoute;
