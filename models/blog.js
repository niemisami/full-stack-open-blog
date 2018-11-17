if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const mongoose = require('mongoose')

const url = process.env.MONGODB_URI
mongoose.connect(url, { useNewUrlParser: true })

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number
})

blogSchema.statics.format = (blog) => {
  return {
    id: blog.id,
    title: blog.title,
    author: blog.author,
    url: blog.url,
    likes: blog.likes
  }
}

const Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog