import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { showRoutes } from 'hono/dev';
import { logger } from 'hono/logger';
import { Alphabet } from './Alphabet';

const app = new Hono() // .basePath('/api/v1/');

app.use(logger())

app.get('/', (c) => {
  return c.html(
  <div>
    <a href="/alphabet">Alphabet</a>
  </div>
  )
})

app.get('/alphabet', (c) => {
  return c.html(<Alphabet list={[]}/>)
});

app.onError((err, c) => {
  console.error(`${err}`)
  return c.text('Custom Error Message', 500)
})


const port = 3000
console.log(`Server is running on port ${port}`)
showRoutes(app);

serve({
  fetch: app.fetch,
  port
})
