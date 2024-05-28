import { serve } from '@hono/node-server'; // for Node.js Adapter
import { Hono } from 'hono';
import { showRoutes } from 'hono/dev';

import colors from './colors';
import { basicAuth } from 'hono/basic-auth';
//import { Element } from './Element';

//import { alphabet } from '@xkeshav/alphabet';
//import { prettyJSON } from 'hono/pretty-json';
//import { Alphabet } from './Alphabet';

const app = new Hono();

// text
app.get('/', (c) => c.text('Hello Node.js!'));

// set custom headers
app.get('/welcome', (c) => {
  c.header('X-Message', 'Hello!');
  c.header('Content-Type', 'text/plain');
  return c.body('welcome, see header part of request');
});

// multiple path 
app.on('GET', ['/hello', '/hi', '/hey'], (c) => c.text('🙋🏻‍♂️ Hello' ));

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
app.use(
  '/auth/*',
  basicAuth({
    username: 'hono',
    password: 'hono',
  })
);
app.get('/auth/page', (c) => {
  return c.text('You are authorized')
});
// MARK: json support
//app.get('/element', prettyJSON(), (c) => {
//  return c.json(element_list);
//});

// MARK: HTML support
//app.get('/element/html', (c) => {
//  return c.html(<Element list={element_list} />)
//});

// MARK: JSX Support
//app.get('/alphabet', (c) => {
//  return c.html(<Alphabet list={alphabet}/>)
//});

app.route('/color', colors); // app.route

showRoutes(app);
serve(app);
