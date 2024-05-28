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

// path params read
colors.get('/:what', (c) => {
  const { what }  = c.req.param();
  const { sz } = c.req.query();
  console.log({ what, sz });
  return c.html(
    <html>
    <head>
      <Style>{
      css`
      :root {
        --color: hsl(from ${what} 75 90 40);
        color-scheme: light dark;
      }
      main {
        background-color: ${what};
        color: var(--color);
        text-align: center;
        font-size: ${sz ?? 2}rem;
        padding: 1rem;
        margin: 2rem;
        height: 30vh;
        border: 2px dashed grey;
        display: grid;
        place-content: center;
        & span {
          border: 2px dashed pink;
          padding: 0.5rem 1rem;
        }
      }
      `}
      </Style>
    </head>
      <body>
        <main>
          <p>Path param value is: <span>{what}</span></p>
        </main>
      </body>
    </html>
    )
});

export default colors;
