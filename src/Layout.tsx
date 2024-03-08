import { Style, css } from 'hono/css';
import { FC } from 'hono/jsx';

export const Layout: FC = (props) => {
  return (
    <html>
      <head>
				<Style>{
				css`
          html {
            font-family: Arial, Helvetica, sans-serif;
          }
					:root {
						--hue: 10;
					}
        `}
				</Style>
				</head>
      <body>{props.children}</body>
    </html>
  )
};