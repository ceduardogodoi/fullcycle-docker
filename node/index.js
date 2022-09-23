const express = require('express')
const mysql = require('mysql')

const app = express()
const PORT = 3000

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb',
}

const connection = mysql.createConnection(config)

const sql = `INSERT INTO PEOPLE(name) values('Wesley')`

connection.query(sql)
connection.end()

app.get('/', (_, res) => {
  res.send('<h1>Full Cycle</h1>')
})

app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`)
})
