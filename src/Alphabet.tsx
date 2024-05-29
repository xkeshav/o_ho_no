import { css } from 'hono/css';
import { FC } from 'hono/jsx';
import { Layout } from './Layout';

import { alphabet } from '@xkeshav/alphabet';

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
  border:2px solid grey;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
}
`

const Letter:FC = ({what, idx}) => (<div class={itemClass} style={{ "--hue": idx*10 + 20, "--text": idx < 20 ? '#000': '#af0'}}>{what}</div>)

export const Alphabet: FC = () => (
    <Layout>
      <h1>Alphabets</h1>
      <div class={parentContainer}>
        {alphabet.map(((item,idx) => <Letter idx={idx} what={item} />))}
      </div>
    </Layout>
);

