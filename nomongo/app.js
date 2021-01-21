const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const uri = "mongodb+srv://admin:admin@cluster0.wagrb.mongodb.net/SignUp?retryWrites=true&w=majority"

const MongoClient = require('mongodb').MongoClient

MongoClient.connect(uri, { useUnifiedTopology: true })
  .then(client => {
    MongoClient.connect(uri, { useUnifiedTopology: true })
      .then(client => {
        const db = client.db('SignUp')
        // const CreateUser = db.collection('quotes')
        console.log('Connected to Database')
      })
      .catch(error => console.error(error))
  })
  

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})
app.post('/createUser', (req, res) => {
  CreateUser.insertOne(req.body)
  .then(result => {
    console.log(result)
  })
  .catch(error => console.error(error))
})
app.listen(3000, function () {
  console.log('listening on 3000')
})

// mongodb + srv://admin:admin@cluster0.wagrb.mongodb.net/SignUp?retryWrites=true&w=majority