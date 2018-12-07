const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  content: String,
  blog: { type: mongoose.Schema.Types.ObjectId, ref: 'Blog' }
})

commentSchema.statics.format = (comment) => {
  return {
    [comment.blog]: {
      id: comment._id,
      content: comment.content
    }
  }
}

const comment = mongoose.model('comment', commentSchema)

module.exports = comment