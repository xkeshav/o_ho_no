# Hono Talk

This is related to hono talk to understand basic things about honojs.

## How to start

```sh
npm install
npm run dev
```

and this will open [http://localhost:3000](http://localhost:3000)

Note: uploaded with cloudflare adapter --> <https://80d1222e.hono-fly.pages.dev>

## Examples

Here are few examples with honojs

### Text response

- use of `c.text()`
- endpoint: `/`

### Custom Header

- use of `c.header()` and `c.body()`
- endpoint: `/welcome`


### Multiple paths

- multiple path return same page; no redirect logic
- endpoint: `/hello` or `/hey` or `/hi`

### JSON response

- use of `c.json()` and `app.all()` route
- endpoint: `/json/list`

### HTML response

- use of `c.html()`
- endpoint: `/html/element`

### CSS Support

- `/color/`

- `/color/rainbow`

### Path Params and Query Params

- add any valid color in place of _white_ as a path params
- endpoint: `/color/white`

---

- change font size with query params `sz`
- endpoint: `/color/white?sz=3`

### JSX Support

- use of reusable component like react
- endpoint: `/alphabet`

## Author

Keshav Mohta | [@xkeshav](https://www.xkeshav.com)
