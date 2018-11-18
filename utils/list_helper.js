const totalLikes = blogs => blogs.reduce((likes, blog) => likes + blog.likes, 0)

const favoriteBlog = blogs => formatBlog(blogs.sort((a, b) => a.likes < b.likes)[0])

const formatBlog = (blog = {}) => ({ author: blog.author, title: blog.title, likes: blog.likes, url: blog.url })

// Use author names as keys to increment blog count if necessary
const mostBlogs = blogs => Object.values(
  blogs.reduce((blogsPerAuthor, blog) => {
    const author = blog.author
    const perviousAuthorObject = blogsPerAuthor[author] ? { ...blogsPerAuthor[author] } : { author, blogs: 0 }
    perviousAuthorObject.blogs += 1
    return { ...blogsPerAuthor, [author]: perviousAuthorObject }
  }, {}))
  .sort((a, b) => a.blogs < b.blogs)[0]

const mostLikes = blogs => Object.values(
  blogs.reduce((blogsPerAuthor, blog) => {
    const author = blog.author
    const perviousAuthorObject = blogsPerAuthor[author] ? { ...blogsPerAuthor[author] } : { author, likes: 0 }
    perviousAuthorObject.likes += blog.likes
    return { ...blogsPerAuthor, [author]: perviousAuthorObject }
  }, {}))
  .sort((a, b) => a.likes < b.likes)[0]

module.exports = {
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}