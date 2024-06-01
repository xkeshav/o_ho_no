import { Hono } from "hono";
import { css, cx, Style } from "hono/css";

// MARK: HTML and CSS support syntax
const colorRoute = new Hono();

const headerClass = css`
background-color: hsl(250 100% 50%);
color: white;
padding: 1rem;
`;

const ColorHome = () => <><Style /><p class={headerClass}>type path /rainbow</p></>;

colorRoute.get("/", (c) => c.html(<ColorHome />));

colorRoute.get("/rainbow", (c) => {
  // css as object
  const listClass = css`
    background-color: #5d7065e0;
    list-style-type: none;
    display: grid;
    grid-auto-flow: row;
    gap: 0.5rem;
    padding: 0.5rem;
    & li {
      font-size: 2rem;
      margin: 0.5rem;
      border-bottom: 1px solid white;
      padding-inline: 0.5rem;
      letter-spacing: 0.25ch;
    }
  `;
  const borderClass = css`
    border: 4px solid black;
    border-radius: 0.5rem;
  `;
  // MARK: use of React Fragment
  return c.html(
    <html>
      <Style /> {/*this is must to insert*/}
      <div>
        {/* using cx to join classes */}
        <h1 class={cx(headerClass, borderClass)}>Rainbow Colors</h1>
        <ul class={listClass}>
          <li style={{ color: "violet" }}>Violet</li>
          <li style={{ color: "indigo" }}>Indigo</li>
          <li style={{ color: "blue" }}>Blue</li>
          <li style={{ color: "green" }}>Green</li>
          <li style={{ color: "yellow" }}>Yellow</li>
          <li style={{ color: "orange" }}>Orange</li>
          <li style={{ color: "red" }}>Red</li>
        </ul>
      </div>
    </html>
  );
});

// MARK: path params
colorRoute.get("/:what", (c) => {
  const { what } = c.req.param(); // const what = c.req.param('what');
  const { sz } = c.req.query();
  // console.log({ what, sz });
  // MARK: CSS within <Style>
  return c.html(
    <html>
      <head>
        <Style>
          {css`
            main {
              background: linear-gradient(45deg, ${what} 24%, pink 10%);
              color: black;
              text-align: center;
              font-size: ${sz ?? 2}rem;
              mix-blend-mode: difference;
              padding: 1rem;
              margin: 2rem;
              height: 30vh;
              border: 2px solid grey;
              display: grid;
              place-content: center;
              box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
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
          <p>
            Path param value is:<span>{what}</span>
          </p>
        </main>
      </body>
    </html>
  );
});

export default colorRoute;
