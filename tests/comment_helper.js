const Comment = require('../models/comment')

const initialComments = [
  {
    content: 'Good blog',
    blog: '5a422a851b54a676234d17f7',
  },
  {
    content: '6/8 would recommend!',
    blog: '5a422a851b54a676234d17f7',
  }
]

const nonExistingId = async () => {
  const comment = new Comment()
  await comment.save()
  await comment.remove()
  return comment._id.toString()
}

const commentsForBlogInDb = async (blogId) => {
  const comment = await Comment.find({ blog: blogId })
  return comment
}

module.exports = {
  initialComments,
  nonExistingId,
  commentsForBlogInDb
}