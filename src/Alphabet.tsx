import { css } from 'hono/css';
import { FC } from 'hono/jsx';
import { Layout } from './Layout';

const parentContainer = css`
  display:grid;
  grid-gap: 4px;
  grid-template-columns: repeat(5,1fr);
`
const itemClass = css`
  display: grid;
  height: 10rem;
  color: var(--text, white);
  background-color: hwb(var(--hue) 0% 0%);
  place-content: center;
  font-size: 4rem;
}
`

export const Alphabet: FC<{ list: string[] }> = ({ list }) => {
  return (
    <Layout>
      <h1>Alphabets</h1>
      <div class={parentContainer}>
        {list.map(((item, idx) => <div class={itemClass} style={{ "--hue": idx*10 + 20, "--text": idx < 20 ? '#000': '#FFF'}}>{item}</div>))}
      </div>
    </Layout>
  )
};
