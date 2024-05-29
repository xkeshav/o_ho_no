import { Hono } from 'hono';
import { prettyJSON } from 'hono/pretty-json';

const jsonWise = new Hono();

const element_list  = [
  {
    id: 1,
    name: 'Water',
    emoji: "💧"
  },
  {
    id: 2,
    name: 'Fire',
    emoji: "🔥"
  },
  {
    id: 3,
    name: 'Earth',
    emoji: "🌍"
  },
  {
    id: 4,
    name: 'Air',
    emoji: "💨"
  },
  {
    id: 5,
    name: 'Sky',
    emoji: '🌌'
  },
];

jsonWise.all('/', (c) => {
  return c.text('write `list` to path to see the json data.');
});

jsonWise.get('/list', prettyJSON(), (c) => {
  return c.json(element_list);
});

export default jsonWise;