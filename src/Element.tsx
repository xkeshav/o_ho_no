import { css, Style } from "hono/css";
import { FC } from "hono/jsx";

// MARK: Types
type Item = { name: string; emoji: string; id: number };
type ElementProps = { list: Item[] };

// extend classes
const common = css`
  color: var(--text, white);
  background-color: hwb(var(--hue, 40) 10% 60%);
  font-size: 4rem;
`;
const main__container = css`
  display: grid;
  grid-gap: 4px;
  grid-template-columns: repeat(2, 1fr);
`;
const element__item = css`
  ${common}
  display: grid;
  height: 10rem;
  place-content: center;
`;

const Element: FC<ElementProps> = ({ list }) => (
  <html>
    <body>
      <Style />
      <h1>Five Elements</h1>
      <main class={main__container}>
        {list.map((item) => (
          <div class={element__item}>
            {item.name} : {item.emoji}{" "}
          </div>
        ))}
      </main>
    </body>
  </html>
);

export { Element, ElementProps };
