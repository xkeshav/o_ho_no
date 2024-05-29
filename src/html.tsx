import { Hono } from 'hono';

import { Element } from './Element';
import { element_list } from './list';

const htmlWise = new Hono();

htmlWise.get('/list', (c) => {
    return c.html(<Element list={element_list} />)
});

export default htmlWise;