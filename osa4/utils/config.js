if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
  }

  let MONGODB_URI = process.env.MONGODB_URI
  // 'mongodb://fullstack:sPiLZXPp0znsDLHa@cluster0-shard-00-00-gbdjr.mongodb.net:27017,cluster0-shard-00-01-gbdjr.mongodb.net:27017,cluster0-shard-00-02-gbdjr.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true'
  let PORT = process.env.PORT
  // mongodb+srv://fullstack:sPiLZXPp0znsDLHa@cluster0-gbdjr.mongodb.net/test?retryWrites=true 
  module.exports = {
    MONGODB_URI,
    PORT
  }