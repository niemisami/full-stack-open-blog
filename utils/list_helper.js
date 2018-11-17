const totalLikes = blogs => blogs.reduce((likes, blog) => likes + blog.likes, 0)

const favoriteBlog = blogs => formatBlog(blogs.sort((a, b) => a.likes < b.likes)[0])

const formatBlog = (blog = {}) => ({ author: blog.author, title: blog.title, likes: blog.likes, url: blog.url })

// TODO: 4.6
// const mostBlogs = blogs => ({})

// TODO: 4.7
// const mostLikes = blogs => ({})

module.exports = {
  totalLikes,
  favoriteBlog
}