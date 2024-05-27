import { Hono } from 'hono';

const color = new Hono();

// MARK: HTML support
color.get('/rainbow', (c) => {
  return c.html(
    <div>
      <h1>Color in Rainbow</h1>
      <ul>
        <li>Violet</li>
        <li>Indigo</li>
        <li>Blue</li>
        <li>Green</li>
        <li>Yellow</li>
        <li>Orange</li>
        <li>Red</li>
      </ul> 
    </div>
  );
});

export default color;