
import React, { useState } from 'react'
import blogService from '../services/blogs'

const Blog = ({ blog, blogs, setBlogs, user }) => {
  const [visible, setVisible] = useState(false)
  const showWhenVisible = { display: visible ? '' : 'none' }



  const toggleVisibility = () => {
    setVisible(!visible)
  }

  const like = () => {

    blog.likes += 1
    blogService.update(blog)
      .then(updatedBlog => {
        setBlogs(
          blogs.map(b => b.id === updatedBlog.id ? blog : b)
            .sort((a, b) => b.likes - a.likes)
        )
      })
  }
  const removeButton = (remove, blog, user) => {
    // console.log(blog.username)
    // console.log(blog)

    // console.log(user.username, blog.user.username)
    if (blog.user && user.username === blog.user.username) {
      return <button onClick={(b) => remove(b,blog)}>Remove</button>
    }
    return null
  }
  const remove = () => {
    blogService.remove(blog)
      .then(setBlogs(blogs.filter(b => b.id !== blog.id)))
  }

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }
  return (
    <div style={blogStyle}>
      <p onClick={() => toggleVisibility()}>{blog.title} {blog.author}</p>
      <div style={showWhenVisible}>
        <a href={blog.url}>{blog.url}</a>
        <p>{blog.likes} likes <button onClick={() => like()}>like</button></p>
        <p>Added by {user.name}</p>
        {/* <button onClick={() => remove()}>remove</button> */}
        {removeButton(remove,blog,user)}
      </div>
    </div>
  )
}

export default Blog
