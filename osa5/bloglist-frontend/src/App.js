import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'
import Notification from './components/Notification'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('') 
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null) 
  const [errorMessage, setErrorMessage] = useState(null)
  const [notifMessage, setNotifMessage] = useState(null)

  const [newTitle, setNewTitle] = useState('')
  const [newAuthor, setNewAuthor] = useState('')
  const [newUrl, setNewUrl] = useState('')


  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
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
        'loggedNoteappUser', JSON.stringify(user)
      ) 
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

  const handleBlog = (event) => {
    
    event.preventDefault()
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
  const newBlogForm = () => (
    <form onSubmit={handleBlog}>
    <div>  
      <label>
        Title: <input type="text" value={newTitle} onChange={({ target }) => setNewTitle(target.value)}/>  
      </label>  
    </div>
    <div>
      <label>
        Author: <input type="text" value={newAuthor} onChange={({ target }) => setNewAuthor(target.value)} />
      </label>
    </div>
      <label>
        URL: <input type="text" value={newUrl} onChange={({ target }) => setNewUrl(target.value)} />
      </label>
      <button type="submit">Kirjaa</button>
    </form> 
  )
  const loginForm = () => (
    <form onSubmit={handleLogin}>
      <div>
        käyttäjätunnus
          <input
          type="text"
          value={username}
          name="Username"
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div>
        salasana
          <input
          type="password"
          value={password}
          name="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button type="submit">kirjaudu</button>
    </form>      
  )
  if (user === null) {
    return (
      <div>
        <h2>Log in to application</h2>
        
        <Notification message={errorMessage} error={true} />
        <Notification message={notifMessage} error={false} />
        <form onSubmit={handleLogin}>
      <div>

        käyttäjätunnus
          <input
          type="text"
          value={username}
          name="Username"
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div>
        salasana
          <input
          type="password"
          value={password}
          name="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button type="submit">kirjaudu</button>
    </form>
      </div>
    )
  }
  return (
    <div>

      <Notification message={errorMessage} error={true} />
      <Notification message={notifMessage} error={false} />
      { user === null ? loginForm() :
      <div>        
        <p>{user.name} logged in</p>
        <button onClick={() => handleLogout()}>logout</button>
        <h2>blogs</h2>
        {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}
        <h2>new blog</h2>
        {newBlogForm()}
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