const express = require('express')
const pool = require('./db')
const port = 1337

const app = express()
app.use(express.json())

// routes
app.get('/', (req, res) => {
  res.sendStatus(200)
})

app.post('/', (req, res) => {
  const { name, location } = req.body
  res.status(200).send({
    message: `Your keys were ${name}, ${location}`
  })
})

app.get('/getDosa', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM dosa')
    res.json(result.rows)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
})

app.post('/addDosa', async (req, res) => {
  const { dosa, keyword, user_id } = req.body
  console.log("req.body: ", req.body)
  try {
    await pool.query('INSERT INTO dosa (dosa, keyword, user_id) VALUES ($1, $2, $3)', [dosa, keyword, user_id])
    res.status(200).send({
      message: "Successfully added dosa!"
    })
  } catch (error) {
    console.log(error)
    res.status(500).send("Internal server error")
  }
})


app.listen(port, () => console.log(`Server has started on port: ${port}`))