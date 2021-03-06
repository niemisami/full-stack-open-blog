const router = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')
const commentsRouter = require('./comments')

router.get('/', async (req, res) => {

  const blogs = await Blog.find({})
    .populate('user', { username: 1, name: 1 })
  res.json(blogs.map(blog => Blog.format(blog)))
})

router.get('/:id', async (req, res) => {
  const id = req.params.id
  try {
    const blog = await Blog.findById(id)
      .populate('user', { username: 1, name: 1 })
    if(blog) {
      res.json(Blog.format(blog))
    } else {
      res.status(404).end()
    }
  } catch(error) {
    // console.log(exception)
    res.status(400).send({ error: 'malformatted id' })
  }
})

router.use('/:id/comments', commentsRouter)

router.post('/', async (req, res) => {
  try {
    const newBlogData = req.body
    if(!newBlogData.title || !newBlogData.url) {
      return res.status(400).json({ error: 'content missing' })
    }

    if(!newBlogData.likes) {
      newBlogData.likes = 0
    }
    newBlogData.user = req.userId
    const blog = new Blog(newBlogData)
    const result = await blog.save()

    const user = await User.findById(req.userId)
    user.blogs = user.blogs.concat(result._id)
    await user.save()

    blog.user = user
    res.status(201).json(Blog.format(result))

  } catch(error) {
    if(error.name === 'JsonWebTokenError') {
      res.status(401).json({ error: error.message })
    } else {
      console.log(error)
      res.status(500).json({ error: 'something went wrong...' })
    }
  }
})

router.put('/:id', async (req, res) => {
  const newBlogData = req.body
  if(!newBlogData.title || !newBlogData.author || !newBlogData.url) {
    return res.status(400).json({ error: 'author, title or url is missing' })
  }
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, newBlogData, { new: true })
      .populate('user', { username: 1, name: 1 })
    res.json(Blog.format(updatedBlog))
  } catch(error) {
    console.log(error)
    res.status(400).end()
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const token = req.token

    const blog = await Blog.findById(req.params.id)

    if(blog.user && blog.user.toString() !== req.userId) {
      return res.status(401).json({ error: 'not allowed to remove blog' })
    }

    if(blog.user && (!token || !req.userId)) {
      return res.status(401).json({ error: 'token missing or invalid' })
    }

    await Blog.findByIdAndRemove(req.params.id)
    res.status(204).end()
  } catch(error) {
    console.error(error)
    res.status(400).send({ error: 'malformatted id' })
  }
})

module.exports = router
