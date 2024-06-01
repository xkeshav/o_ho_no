import { Hono } from "hono";
import { Style, css } from 'hono/css';

import { Element } from './Element';
import list from './list.json'; // import json file

const htmlRoute = new Hono();

// MARK: HTML with CSS
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
