import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'
import Notification from './components/Notification'
import BlogForm from './components/BlogForm'
import LoginForm from './components/LoginForm'
import Togglable from './components/Toggable'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [errorMessage] = useState(null)
  const [notifMessage, setNotifMessage] = useState(null)
  // const [blogVisible, setBlogVisible] = useState(false)
  const [newTitle, setNewTitle] = useState('')
  const [newAuthor, setNewAuthor] = useState('')
  const [newUrl, setNewUrl] = useState('')


  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs ))
  }, [])
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])
  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username, password,
      })
      window.localStorage.setItem(
        'loggedNoteappUser', JSON.stringify(user))
      blogService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      console.error(exception)
      setNotifMessage('käyttäjätunnus tai salasana virheellinen')
      setTimeout(() => {
        setNotifMessage(null)
      }, 5000)
    }
  }
  const handleLogout = () => {
    window.localStorage.removeItem('loggedBlogappUser')
    setUser(null)
    setUsername('')
    setPassword('')
    setNotifMessage('Uloskirjautuminen onnistui')
    setTimeout(() => {
      setNotifMessage(null)
    }, 5000)
  }
  // const updateBlog = (event, bloglikes) => {
  //   bloglikes.likes = bloglikes.likes + 1
  //   event.preventDefault()
  //   blogService
  //     .update(bloglikes).then(() => {
  //       setTimeout(() => {
  //         setNotifMessage(null)
  //       }, 5000)
  //     })
  // }

  const handleBlog = (event) => { event.preventDefault()
    const blogObject = {
      title: newTitle,
      author: newAuthor,
      url: newUrl,
      likes: 0,
    }

    blogService
      .create(blogObject).then(returnedBlog => {
        setBlogs(blogs.concat(returnedBlog))
        setNotifMessage(`a new blog ${newTitle} by ${newAuthor} added`)
        setTimeout(() => {
          setNotifMessage(null)
        }, 5000)
        setNewTitle('')
        setNewAuthor('')
        setNewUrl('')
      })
  }
  if (user === null) {
    return (
      <div>
        <h2>Log in to application</h2>
        <Notification message={errorMessage} error={true} />
        <Notification message={notifMessage} error={false} />
        <Togglable buttonLabel='login'>
          <LoginForm
            username={username}
            password={password}
            handleUsernameChange={({ target }) => setUsername(target.value)}
            handlePasswordChange={({ target }) => setPassword(target.value)}
            handleSubmit={handleLogin}/>
        </Togglable>
      </div>
    )
  }


  return (
    <div>

      <Notification message={errorMessage} error={true} />
      <Notification message={notifMessage} error={false} />
      { user === null ? LoginForm() :
        <div> <p>{user.name} logged in</p><button onClick={() => handleLogout()}>logout</button>
          <h2>blogs</h2>
          {/* {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} update={updateBlog} />
      )} */}
          <Togglable buttonLabel="new blog">
            <BlogForm
              title = {newTitle}
              author = {newAuthor}
              url = {newUrl}
              handleTitleChange={({ target }) => setNewTitle(target.value)}
              handleAuthorChange={({ target }) => setNewAuthor(target.value)}
              handleUrlChange={({ target }) => setNewUrl(target.value)}
              handleBlog={handleBlog}
            />
          </Togglable>
          {blogs.map(blog => <Blog key={blog.id}
            blog={blog}
            blogs={blogs}
            setBlogs={setBlogs}
            user={user}
          />
          )}

          {/* {newBlogForm()} */}
        </div>
      }

      {/* <h2>blogs</h2>
      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )} */}
    </div>
  )
}

export default App