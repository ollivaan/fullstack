const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const helper = require('./test_helper')
const api = supertest(app)

const Blog = require('../models/blog')
const User = require('../models/user')


beforeEach(async () => {
    await Blog.deleteMany({})
//deleteMany({})
    let blogObject = new Blog(helper.initialBlogs[0])
    await blogObject.save()

    blogObject = new Blog(helper.initialBlogs[1])
    await blogObject.save()
})

test('blogs are returned as json', async () => {
    await api
        .get('/api/blogs')
        .expect(200)
        .expect('Content-Type', /application\/json/)
})
test('the first blog is about', async () => {

    const response = await api.get('/api/blogs')
    expect(response.body[0].title).toBe('Harry potter')
})
test('there are two blogs', async () => {

    const response = await api.get('/api/blogs')
    expect(response.body.length).toBe(2)
})
test('_id => id', async () => {

    const response = await api.get('/api/blogs')
    expect(response.body[0]).toBeDefined();
})
test('a blog without title is not added', async () => {
    const newBlog = {
        author: 'seppo',
        url: 'www.string.fi',
        likes: 10 
    }
    await api 
        .post('/api/blogs')
        .send(newBlog)
        .expect(400)
const blogsAtEnd = await helper.blogsInDb()

expect(blogsAtEnd.length).toBe(helper.initialBlogs.length)
})
test('a blog without url is not added', async () => {
    const newBlog = {
        title: 'jee',
        author: 'seppo',
        likes: 10 
    }
    await api 
        .post('/api/blogs')
        .send(newBlog)
        .expect(400)
const blogsAtEnd = await helper.blogsInDb()

expect(blogsAtEnd.length).toBe(helper.initialBlogs.length)
})
// test('a blog without likes amount is 0', async () => {
//     const newBlog = {
//         title: 'jee',
//         author: 'seppo',
//         url: 'www.jee.fi' 
//     }
//     await api 
//         .post('/api/blogs')
//         .send(newBlog)
//         .expect(200)
// const blogsAtEnd = await helper.blogsInDb()
// console.log(newBlog.title)
// console.log(newBlog.likes)
// expect(newBlog.likes).toBe(0)
// })


test('a valid blog can be added ', async () => {
    const newBlog = {
        title: 'uusi kirja',
        author: 'seppo',
        url: 'www.string.fi',
        likes: 10        
    }
  
    await api
      .post('/api/blogs')
      .send(newBlog)
      .expect(200)
      .expect('Content-Type', /application\/json/)
  
  
    const blogsAtEnd = await helper.blogsInDb()
    expect(blogsAtEnd.length).toBe(helper.initialBlogs.length + 1)
  
    const titles = blogsAtEnd.map(n => n.title)
    expect(titles).toContain(
      'uusi kirja'
    )
  })
  test('a blog can be deleted', async () => {
    const blogsAtStart = await helper.blogsInDb()
    const blogToDelete = blogsAtStart[0]
  
    await api
      .delete(`/api/blogs/${blogToDelete.id}`)
      .expect(204)
  
    const blogsAtEnd = await helper.blogsInDb()
  
    expect(blogsAtEnd.length).toBe(
      helper.initialBlogs.length - 1
    )
  
    const titles = blogsAtEnd.map(r => r.title)
  
    expect(titles).not.toContain(blogToDelete.title)
  })  
  describe('when there is initially one user at db', async () => {
    beforeEach(async () => {
      await User.deleteMany({})
      const user = new User({ username: 'root', password: 'sekret' })
      await user.save()
    })
  
    test('creation succeeds with a fresh username', async () => {
      const usersAtStart = await helper.usersInDb()
  
      const newUser = {
        username: 'mluukkai',
        name: 'Matti Luukkainen',
        password: 'salainen',
      }
  
      await api
        .post('/api/users')
        .send(newUser)
        .expect(200)
        .expect('Content-Type', /application\/json/)
  
      const usersAtEnd = await helper.usersInDb()
      expect(usersAtEnd.length).toBe(usersAtStart.length + 1)
  
      const usernames = usersAtEnd.map(u => u.username)
      expect(usernames).toContain(newUser.username)
    })
  
    test('creation fails with proper statuscode and message if username already taken', async () => {
      const usersAtStart = await helper.usersInDb()
  
      const newUser = {
        username: 'root',
        name: 'Superuser',
        password: 'salainen',
      }
  
      const result = await api
        .post('/api/users')
        .send(newUser)
        .expect(400)
        .expect('Content-Type', /application\/json/)
  
      expect(result.body.error).toContain('`username` to be unique')
  
      const usersAtEnd = await helper.usersInDb()
      expect(usersAtEnd.length).toBe(usersAtStart.length)
    })
  })
  
  afterAll(() => {
    mongoose.connection.close()
  })