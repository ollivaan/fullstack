const Blog = require('../models/blog')
const User = require('../models/user')

//...
const usersInDb = async () => {
    const users = await User.find({})
    return users.map(u => u.toJSON())
  }

const initialBlogs = [
    {
        title: 'Harry potter',
        author: 'j.k rowling',
        url: 'www.potteri.fi',
        likes: '123100'
    },
    {
        title: 'Sieppari ruispellossa',
        author: 'joku tyyppi',
        url: 'www.johnlennon.fi',
        likes: '2332'
    }
]

const nonExistingId = async () => {
  const blog = new Blog({ title: 'willremovethissoon', likes: 10 })
  await blog.save()
  await blog.remove()

  return blog._id.toString()
}

const blogsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map(blog => blog.toJSON())
}
module.exports = {
  initialBlogs,
  nonExistingId,
  blogsInDb,
  usersInDb,
}
