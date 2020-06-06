app.get('*', (req, res) => {
    const context = { url: req.url }
    const renderStream = renderer.renderToStream(context)
    renderStream.once('data', () => {
      const {
        title, htmlAttrs, headAttrs, bodyAttrs, link,
        style, script, noscript, meta
      } = context.meta.inject()
      res.write(`
        <!doctype html>
        <html data-vue-meta-server-rendered ${htmlAttrs.text()}>
          <head ${headAttrs.text()}>
            ${meta.text()}
            ${title.text()}
            ${link.text()}
            ${style.text()}
            ${script.text()}
            ${noscript.text()}
          </head>
          <body ${bodyAttrs.text()}>
      `)
    })
    renderStream.on('data', (chunk) => {
      res.write(chunk)
    })
    renderStream.on('end', () => {
      res.end(`
            <script src="/assets/vendor.bundle.js"></script>
            <script src="/assets/client.bundle.js"></script>
            ${script.text({ body: true })}
          </body>
        </html>
      `)
    })
    renderStream.on('error', (error) => {
      res.status(500).end(`<pre>${error.stack}</pre>`)
    })
  })