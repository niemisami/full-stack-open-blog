const supertest = require('supertest')
const { app, server } = require('../index')
const api = supertest(app)
const Blog = require('../models/blog')
const User = require('../models/user')
const Comment = require('../models/comment')
const { initialBlogs } = require('./blog_helper')
const { initialUsers, dummyAuthToken } = require('./user_helper')
const { initialComments, commentsForBlogInDb } = require('./comment_helper')

describe('when there is initially blog and comment data in db', async () => {
  let blogId
  beforeAll(async () => {
    await Blog.deleteMany({})
    const blogObjects = initialBlogs.map(n => new Blog(n))
    blogId = blogObjects[0]._id

    await Comment.deleteMany({})
    const commentObjects = initialComments.map(n => new Comment(n))

    await Promise.all([...blogObjects, ...commentObjects].map(n => n.save()))
  })

  describe('user has not authenticed', async () => {
    test('GET /api/blogs/:id/comments returns 401', async () => {
      await api
        .get('/api/blogs')
        .expect(401)
    })
  })

  describe('when there is initially user data in db', async () => {
    beforeAll(async () => {
      await User.deleteMany({})
      const userObjects = initialUsers.map(n => new User(n))
      await Promise.all(userObjects.map(n => n.save()))
    })

    describe('user has autenticated', async () => {
      let authToken
      beforeAll(async () => {
        authToken = 'Bearer ' + dummyAuthToken()
      })

      test('all comments for blog are returned as json by GET /api/blogs/:id/comment', async () => {
        const commentsInDatabase = await commentsForBlogInDb(blogId)
        const response = await api
          .get(`/api/blogs/${blogId}/comments`)
          .set('Authorization', authToken)
          .expect('Content-Type', /application\/json/)
          .expect(200)

        const commentsResponse = Object.entries(response.body)[0]

        expect(commentsResponse.length).toBe(commentsInDatabase.length)

        const returnedComments = commentsResponse[1].map(commentValueKey => commentValueKey.content)
        commentsInDatabase.forEach(comment => {
          expect(returnedComments).toContain(comment.content)
        })
      })

      describe('add new comment', async () => {
        test('POST /api/blogs/:id/comments succeeds with valid data', async () => {
          const commentsAtStart = await commentsForBlogInDb(blogId)

          const newComment = {
            content: 'Did not like testing part',
          }
          await api
            .post(`/api/blogs/${blogId}/comments`)
            .set('Authorization', authToken)
            .send(newComment)
            .expect(201)
            .expect('Content-Type', /application\/json/)

          const commentsAfterOperation = await commentsForBlogInDb(blogId)
          expect(commentsAfterOperation.length).toBe(commentsAtStart.length + 1)

          const contents = commentsAfterOperation.map(comment => comment.content)
          expect(contents).toContain(newComment.content)
        })

        test('POST /api/blogs fails with proper statuscode if content is missing', async () => {
          const commentsAtStart = await commentsForBlogInDb(blogId)
          const newComment = {
          }
          await api
            .post(`/api/blogs/${blogId}/comments`)
            .set('Authorization', authToken)
            .send(newComment)
            .expect(400)

          const commentsAfterOperation = await commentsForBlogInDb(blogId)
          expect(commentsAfterOperation.length).toBe(commentsAtStart.length)
        })
      })
    })
  })

  afterAll(() => {
    server.close()
  })
})