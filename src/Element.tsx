import { css, Style } from 'hono/css';
import { FC } from 'hono/jsx';
type Item = {name: string; emoji: string; id: number;};
type ElementProps = { list : Item[]};

const main = css`
  display:grid;
  grid-gap: 4px;
  grid-template-columns: repeat(2,1fr);
`
const element = css`
  display: grid;
  height: 10rem;
  color: var(--text, white);
  background-color: hwb(var(--hue, 40) 10% 60%);
  place-content: center;
  font-size: 4rem;
}
`
export const Element: FC<ElementProps> = ({list}) => {
  return (
    <html>
      <body>
        <Style/>
        <h1>Element List : HTML supported</h1>
        <main class={main}>
          {list.map((item) => <div class={element}>{item.name} : {item.emoji} </div>)}
        </main>
      </body>
    </html>
  );
}
