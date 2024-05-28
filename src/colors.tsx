import { Hono } from 'hono';
import { css, Style } from 'hono/css';

const colors = new Hono();

// MARK: HTML & CSS support
colors.get('/', (c) => {
  return c.text('type path `rainbow`')
});

colors.get('/rainbow', (c) => {
  const headerClass = css`
    background-color: hsl(250 100% 50%);
    color: white;
    padding: 1rem;
  `
  const listClass =css`
  background-color: #492937e0;
  list-style-type: none;
  display:grid;
  grid-auto-flow: row;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 0.25rem;
  & li {
    font-size: 2rem;
    margin: 0.5rem;
    border-bottom:1px solid grey;
    padding-inline:0.5rem;
  }
  `
  return c.html(
      <>
      <Style/>
      <div>
      <h1 class={headerClass}>Color in Rainbow</h1>
      <ul class={listClass}>
        <li style={{color: 'violet'}}>Violet</li>
        <li style={{color: 'indigo'}}>Indigo</li>
        <li style={{color: 'blue'}}>Blue</li>
        <li style={{color: 'green'}}>Green</li>
        <li style={{color: 'yellow'}}>Yellow</li>
        <li style={{color: 'orange'}}>Orange</li>
        <li style={{color: 'red'}}>Red</li>
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
      main {
        background: linear-gradient(45deg, ${what} 24%, pink 10%);
        color: black;
        text-align: center;
        font-size: ${sz ?? 2}rem;
        mix-blend-mode: difference;
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
