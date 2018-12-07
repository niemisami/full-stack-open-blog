const router = require('express').Router({ mergeParams: true })
const Comment = require('../models/comment')

router.get('/', async (req, res) => {
  const blog = req.params.id
  const comments = await Comment.find({ blog })
  const response = comments.reduce((acc, comment) => {
    const asBlogIdObject = acc[comment.blog] || []
    const formattedComment = {
      id: comment._id,
      content: comment.content
    }
    return {
      ...acc,
      [comment.blog]: asBlogIdObject.concat(formattedComment)
    }
  }, {})
  res.json(response)
})

router.post('/', async (req, res) => {
  try {
    const newCommentData = req.body
    if(!newCommentData.content) {
      return res.status(400).json({ error: 'content missing' })
    }
    const comment = new Comment(newCommentData)
    comment.blog = req.params.id
    const result = (await comment.save())

    res.status(201).json(Comment.format(result))

  } catch(error) {
    if(error.name === 'JsonWebTokenError') {
      res.status(401).json({ error: error.message })
    } else {
      console.log(error)
      res.status(500).json({ error: 'something went wrong...' })
    }
  }
})

module.exports = router
