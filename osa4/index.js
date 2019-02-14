// require('dotenv').config() //tämä varmasti pois
//löytyy utlis>config

// const http = require('http') //pois?
// const blog = require('./models/blog')
const config = require('./utils/config')
const app = require('./app') //Tämä jää!

// // const server = http.createServer(app) //Tämä jää!

// const express = require('express') //tämä controllers>blogs
// const app = express()
// // const app = require('./App')
// const bodyParser = require('body-parser')
// const cors = require('cors')
//tämä kaikki löytyy models/blog.js
// const mongoose = require('mongoose')

// const blogSchema = mongoose.Schema({
//   title: String,
//   author: String,
//   url: String,
//   likes: Number
// })
// blogSchema.set('toJSON', {
//     transform: (document, returnedObject) => {
//       returnedObject.id = returnedObject._id.toString()
//       delete returnedObject._id
//       delete returnedObject.__v
//     }
//   })

// const Blog = mongoose.model('Blog', blogSchema) //löytyy models/blog josta
// // blogia muutettu niin että module.export
// // const mongoUrl = process.env.MONGODB_URI
// // //löytyy utlis>config

// mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true })


// app.use(cors())
// app.use(bodyParser.json())

// app.get('/api/blogs', (request, response) => {
//   Blog
//     .find({})
//     .then(blogs => {
//       response.json(blogs)
//     })
// })

// app.post('/api/blogs', (request, response) => {
//   const blog = new Blog(request.body)

//   blog
//     .save()
//     .then(result => {
//       response.status(201).json(result)
//     })
// })

// const PORT = process.env.PORT
//löytyy utlis>config
app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`)
})
