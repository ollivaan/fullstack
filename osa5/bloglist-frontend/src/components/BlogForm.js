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
        Title: <input type="text" value={title} onChange={handleAuthorChange}/>  
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
    </form> 
  )
}
export default BlogForm
// const handleBlog = (event) => {
    
//     event.preventDefault()
//     const blogObject = {
//       title: newTitle,
//       author: newAuthor,
//       url: newUrl,
//       likes: 0,
//     }

//     blogService
//       .create(blogObject).then(returnedBlog => {
//         setBlogs(blogs.concat(returnedBlog))
//         setNotifMessage(`a new blog ${newTitle} by ${newAuthor} added`)
//         setTimeout(() => {
//           setNotifMessage(null)
//         }, 5000)
//         setNewTitle('')
//         setNewAuthor('')
//         setNewUrl('')
//       })
//   }
//   const newBlogForm = () => (
//     <form onSubmit={handleBlog}>
//     <div>  
//       <label>
//         Title: <input type="text" value={newTitle} onChange={({ target }) => setNewTitle(target.value)}/>  
//       </label>  
//     </div>
//     <div>
//       <label>
//         Author: <input type="text" value={newAuthor} onChange={({ target }) => setNewAuthor(target.value)} />
//       </label>
//     </div>
//       <label>
//         URL: <input type="text" value={newUrl} onChange={({ target }) => setNewUrl(target.value)} />
//       </label>
//       <button type="submit">Kirjaa</button>
//     </form> 
//   )