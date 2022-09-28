const mysql = require('mysql2')
const express = require('express')

const connection = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'db',
})

connection.connect()

const person = {
  name: 'Carlos',
}
connection.query('INSERT INTO people SET ?', person)

const app = express()

app.get('/', (_, response) => {
  connection.query('SELECT * FROM people', (error, results, fields) => {
    const person = results[results.length - 1]
    response.send(`<h1>${person.name} ${person.id}</h1>`)
  })
})

app.listen(3000, () => {
  console.log('Running on port 3000')
})