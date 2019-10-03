const mongoose = require('mongoose')

// DB Option
const dbUrl = "mongodb+srv://haniif:haniif@cluster0-igq45.mongodb.net/test"
const dbOption = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

mongoose.Promise = global.Promise
mongoose.connect(dbUrl, dbOption)

module.exports = {mongoose}