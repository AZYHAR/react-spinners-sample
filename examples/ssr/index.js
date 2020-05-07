const { createElement } = require('react')
const express = require('express')
const { renderToString } = require('react-dom/server')
const { Ring } = require('react-spinners-sample')

const port = 3000
const app = express()

app.get('*', (req, res) => {
  const el = createElement(Ring)

  const html = renderToString(el)

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
    </head>
    <body style="background-color: #efefef;">
    ${html}
    </body>
    </html>
  `)
})

app.listen(port, () => console.log(`http://localhost:${port}`))
