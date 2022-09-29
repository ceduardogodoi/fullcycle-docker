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
    const people = results
    response.send(`
      <main>
        <h1>Full Cycle Rocks!</h1>

        <p>Lista de nomes cadastrada no banco de dados.</p>
        <ul>
          ${people.map(person => `<li>${person.name} ${person.id}</li>`)}
        </ul>
      </main>
    `)
  })
})

app.listen(3000, () => {
  console.log('App is running...')
})