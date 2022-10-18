const express = require('express')
const path = require('path')
const app = express('')
const port = 3000

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencode
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public', 'index.html'))
})
  app.get('/kevin.html', (req, res) => {
    res.sendFile(path.join(__dirname, './public', 'kevin.html'))
  })
  app.get('/gerardo.html', (req, res) => {
    res.sendFile(path.join(__dirname, './public', 'gerardo.html'))
  })
  app.get('/miguel.html', (req, res) => {
    res.sendFile(path.join(__dirname, './public', 'miguel.html'))
  })
  app.get('/stanley.html', (req, res) => {
    res.sendFile(path.join(__dirname, './public', 'stanley.html'))
  })
  app.get('/nadia.html', (req, res) => {
    res.sendFile(path.join(__dirname, './public', 'nadia.html'))
  })
  app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, './public', 'index.html'))
  })
app.get('/welcome', (req, res) => {
    res.send('Welcom to the serverside!')
  })
  app.post('/comment', function (req, res, next) {
    console.log(req.body)
    res.json(req.body)
  })
app.post('/', (req, res) => {
    res.send("Received a post request")
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 