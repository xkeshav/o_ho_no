import { Hono } from "hono";
import { Style, css } from 'hono/css';

import { Element } from './Element';
import list from './list.json';

const htmlRoute = new Hono();

//htmlRoute.get("/", (c) => c.text('type /element'));

htmlRoute.get("/", (c) => c.html(
  <html>
    <head>
      <title>HTML</title>
      <meta name="description" content="${props.description}" />
      <Style>
        {css`
        html {
          font-family: Arial, Helvetica, sans-serif;
          background-color: hwb(150 40% 10%);
          font-size: 4rem;
          text-align: center;
          margin-top: 1rem;
          color: #20200b;
        }
      `}
      </Style>
    </head>
    <body><p>Type <code>/element</code></p></body>
  </html>
)
);

htmlRoute.get("/element", (c) => c.html(<Element list={list} />));

export default htmlRoute;
