import { Hono } from 'hono';
import { css, Style } from 'hono/css';

const colors = new Hono();

// MARK: HTML & CSS support
colors.get('/', (c) => {
  return c.text('type path `rainbow`')
});

colors.get('/rainbow', (c) => {
  const headerClass = css`
    background-color: orange;
    color: white;
    padding: 1rem;
  `
  return c.html(
      <>
      <Style>{
      css`
          ul > li {
            font-size: 2rem;
          }
        `}
      </Style>
      <div>
      <h1 class={headerClass}>Color in Rainbow</h1>
      <ul>
        <li>Violet</li>
        <li>Indigo</li>
        <li>Blue</li>
        <li>Green</li>
        <li>Yellow</li>
        <li>Orange</li>
        <li>Red</li>
      </ul>
    </div></>
  );
});

// path param read
colors.get('/:what?', (c) => {
  const what  = c.req.param('what');
  console.log({what});
  return c.html(
    <html>
    <head>
      <Style>{
      css`
      div {
        background-color: ${what};
        color: color-mix(in lch, white, pink);
        mix-blend-mode: difference;
        text-align: center;
        font-size: 2rem;
        padding: 1rem;
        height: auto;
        border: 1px solid grey;
      }
      `}
      </Style>
    </head>
      <body> <div>custom path param value is : {what}</div> </body>
    </html>
    )
});

export default colors;
