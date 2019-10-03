const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.use(bodyParser.json())
app.use('/img', express.static('tmp/my-uploads'))

// Controllers
const customers = require('./controllers/customer')
const admins = require('./controllers/admin')

app.use('/customer', customers)
app.use('/admin', admins)

app.listen(3000, function () {
  console.log('Run in Port 3000')
})