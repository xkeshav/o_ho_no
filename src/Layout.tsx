import { Style, css } from 'hono/css';
import { FC } from 'hono/jsx';

const Layout: FC = (props) => (
  <html>
    <head>
      <Style>{
        css`
          html {
            font-family: Arial, Helvetica, sans-serif;
            background-color: greenyellow;
            font-size: 16px;
          }
					:root {
						--hue: 10;
					}
        `}
      </Style>
    </head>
    <body>{props.children}</body>
  </html>
);

export { Layout };

