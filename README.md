# Hono Talk

This is related to hono talk to understand basic things about honojs.

## How to start

```sh
npm install
npm run dev
```

and this will open [http://localhost:3000](http://localhost:3000)

## Web Page

[https://master.hono-fly.pages.dev/](https://master.hono-fly.pages.dev)

Note: using cloudflare adapter and uploaded from [separate repo](https://github.com/xkeshav/hono-fly)

## Examples

Here are few examples with honojs

### Text response

- endpoint: `/`
- use of `c.text()`

### Custom Header

- endpoint: `/welcome`
- use of `c.header()` and `c.body()`

### Multiple paths

- endpoint: `/hello` or `/hey` or `/hi`
- multiple path return same page; no redirect logic

### JSON response

- endpoint: `/json/list`
- use of `c.json()` and `app.all()` route

### HTML response

- endpoint: `/html/element`
- use of `c.html()`

### CSS Support

- `/color/`

- `/color/rainbow`

### Path Params

- endpoint: `/color/white`
- add any valid color in place of _white_ as a path params

### Query Params

- endpoint: `/color/white?sz=3`
- change font size with query params `sz`

### JSX Support

- endpoint: `/alphabet`
- use of reusable component like react

## Author

Keshav Mohta | [@xkeshav](https://www.xkeshav.com)
