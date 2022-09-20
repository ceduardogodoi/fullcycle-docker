const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (_, res) => {
  res.send('<h1>Full Cycle</h1>')
})

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`)
})
