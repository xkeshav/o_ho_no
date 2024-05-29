import { serve } from '@hono/node-server'; // for Node.js Adapter
import { Hono } from 'hono';
import { showRoutes } from 'hono/dev';

import jsonWise from './json';
import htmlWise from './html';
import colorWise from './colors';
import { Alphabet } from './Alphabet';
import { logger } from 'hono/logger';

const app = new Hono();

app.use(logger()) // middleware

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

// MARK: json support
app.route('/json', jsonWise);

// MARK: HTML support
app.route('/html', htmlWise);

// MARK: JSX Support
app.get('/alphabet', (c) => {
  return c.html(<Alphabet/>)
});

// MARK: CSS support
app.route('/color', colorWise);

app.onError((err, c) => {
  console.error(`${err}`)
  return c.text('Custom Error Message', 500)
});

showRoutes(app);
serve(app);

// change default port 
// const port = 3000

// serve({
//   fetch: app.fetch,
//   port
// })
