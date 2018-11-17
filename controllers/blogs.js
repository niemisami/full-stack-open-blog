const router = require('express').Router()
const Blog = require('../models/blog')

router.get('/', async (req, res) => {
  const blogs = await Blog.find({})
  res.json(blogs.map(blog => Blog.format(blog)))
})

router.get('/:id', async (req, res) => {
  const id = req.params.id
  try {
    const blog = await Blog.findById(id)
    if(blog) {
      res.json(Blog.format(blog))
    } else {
      res.status(404).end()
    }
  } catch(exception) {
    // console.log(exception)
    res.status(400).send({ error: 'malformatted id' })
  }
})

router.post('/', async (req, res) => {
  const newBlogData = req.body
  if(!newBlogData.title || !newBlogData.url) {
    return res.status(400).json({ error: 'content missing' })
  }

  if(!newBlogData.likes) {
    newBlogData.likes = 0
  }
  const blog = new Blog(newBlogData)
  const result = await blog.save()
  res.status(201).json(Blog.format(result))
})

router.put('/:id', async (req, res) => {
  const newBlogData = req.body
  if(!newBlogData.title || !newBlogData.author || !newBlogData.url) {
    console.log(newBlogData)
    return res.status(400).json({ error: 'author, title or url is missing' })
  }
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, newBlogData, { new: true })
    res.json(Blog.format(updatedBlog))
  } catch(error) {
    console.log(error)
    res.status(400).end()
  }
})

router.delete('/:id', async (req, res) => {
  try {
    await Blog.findByIdAndRemove(req.params.id)
    res.status(204).end()
  } catch(error) {
    res.status(400).send({ error: 'malformatted id' })
  }
})

module.exports = router
