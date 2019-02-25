import React from 'react'

const BlogForm = ({
  handleBlog,
  handleTitleChange,
  handleAuthorChange,
  handleUrlChange,
  title,
  author,
  url
}) => {
  return (
    <form onSubmit={handleBlog}>
      <div>
        <label>
            Title: <input type="text" value={title} onChange={handleTitleChange}/>
        </label>
      </div>
      <div>
        <label>
            Author: <input type="text" value={author} onChange={handleAuthorChange} />
        </label>
      </div>
      <label>
        URL: <input type="text" value={url} onChange={handleUrlChange} />
      </label>
      <button type="submit">Kirjaa</button>
    </form>)
}
export default BlogForm

