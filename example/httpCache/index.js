const express = require('express')
const path = require('path')
const app = express()
const port = 3000

var oneDay = 86400000;

const opts = {
  etag: false,
  lastModified: false,
  maxAge: oneDay
}
app.use('/static', express.static(path.join(__dirname, 'static'), opts))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


