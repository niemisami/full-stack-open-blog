const supertest = require('supertest')
const { app, server } = require('../index')
const api = supertest(app)
const Blog = require('../models/blog')
const User = require('../models/user')
const { initialBlogs, nonExistingId, blogsInDb } = require('./blog_helper')
const { initialUsers, usersInDb, dummyAuthToken } = require('./user_helper')

describe('when there is initially blog data in db', async () => {
  beforeAll(async () => {
    await Blog.deleteMany({})
    const blogObjects = initialBlogs.map(n => new Blog(n))
    await Promise.all(blogObjects.map(n => n.save()))
  })

  describe('user has not authenticed', async () => {
    test('GET /api/blogs returns 401', async () => {
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

      test('all blogs are returned as json by GET /api/blogs', async () => {
        const blogsInDatabase = await blogsInDb()
        const response = await api
          .get('/api/blogs')
          .set('Authorization', authToken)
          .expect('Content-Type', /application\/json/)
          .expect(200)

        expect(response.body.length).toBe(blogsInDatabase.length)

        const returnedBlogs = response.body.map(blog => blog.title)
        blogsInDatabase.forEach(blog => {
          expect(returnedBlogs).toContain(blog.title)
        })
      })

      test('individual blogs are returned as json by GET /api/blogs/:id', async () => {
        const blogsInDatabase = await blogsInDb()
        const blog = blogsInDatabase[0]

        const response = await api
          .get(`/api/blogs/${blog.id}`)
          .set('Authorization', authToken)
          .expect(200)
          .expect('Content-Type', /application\/json/)

        expect(response.body.title).toEqual(Blog.format(blog).title)
      })

      test('404 returned by GET /api/blogs/:id with nonexisting valid id', async () => {
        const validNonexistingId = await nonExistingId()
        await api
          .get(`/api/blogs/${validNonexistingId}`)
          .set('Authorization', authToken)
          .expect(404)
      })

      test('400 is returned by GET /api/blogs/:id with invalid id', async () => {
        const invalidId = '5a3d5da59070081a82a3445'
        await api
          .get(`/api/blogs/${invalidId}`)
          .set('Authorization', authToken)
          .expect(400)
      })

      describe('addition of a new blog', async () => {

        test('POST /api/blogs succeeds with valid data', async () => {
          const blogsAtStart = await blogsInDb()

          const newBlog = {
            title: 'Testing is underrated',
            author: 'Someone',
            url: 'https://www.google.com',
          }
          await api
            .post('/api/blogs')
            .set('Authorization', authToken)
            .send(newBlog)
            .expect(201)
            .expect('Content-Type', /application\/json/)

          const blogsAfterOperation = await blogsInDb()
          expect(blogsAfterOperation.length).toBe(blogsAtStart.length + 1)
          const titles = blogsAfterOperation.map(blog => blog.title)
          expect(titles).toContain(newBlog.title)
        })

        test('POST /api/blogs fails with proper statuscode if content is missing', async () => {
          const blogsAtStart = await blogsInDb()

          const newBlog = {
            author: 'Edsger W. Dijkstra'
          }
          await api
            .post('/api/blogs')
            .set('Authorization', authToken)
            .send(newBlog)
            .expect(400)

          const blogsAfterOperation = await blogsInDb()
          expect(blogsAfterOperation.length).toBe(blogsAtStart.length)
        })
      })

      describe('update of a a blog', () => {
        test('PUT /api/blogs/:id succeeds with proper statuscode', async () => {
          const blogIndex = 0
          const blogsAtStart = await blogsInDb()

          const updatePayload = {
            ...Blog.format(blogsAtStart[blogIndex]),
            title: 'New updated title'
          }
          await api
            .put(`/api/blogs/${updatePayload.id}`)
            .set('Authorization', authToken)
            .send(updatePayload)
            .expect(200)
            .expect('Content-Type', /application\/json/)

          const blogsAfterOperation = await blogsInDb()
          expect(blogsAfterOperation.length).toBe(blogsAtStart.length)
          const titles = blogsAfterOperation.map(blog => blog.title)
          expect(titles).toContain(updatePayload.title)
        })
        test('400 is returned by PUT /api/blogs/:id with nonexisting valid id', async () => {
          const invalidId = '5a3d5da59070081a82a3445'
          await api
            .get(`/api/blogs/${invalidId}`)
            .set('Authorization', authToken)
            .expect(400)
        })
      })


      describe('deletion of a blog', async () => {
        let addedBlog

        beforeAll(async () => {
          addedBlog = new Blog({
            content: 'poisto pyynnöllä HTTP DELETE',
            important: false
          })
          await addedBlog.save()
        })

        test('DELETE /api/blogs/:id succeeds with proper statuscode', async () => {
          const blogsAtStart = await blogsInDb()

          await api
            .delete(`/api/blogs/${addedBlog._id}`)
            .set('Authorization', authToken)
            .expect(204)

          const blogsAfterOperation = await blogsInDb()

          const titles = blogsAfterOperation.map(r => r.title)

          expect(titles).not.toContain(addedBlog.title)
          expect(blogsAfterOperation.length).toBe(blogsAtStart.length - 1)
        })
      })


      test('all users are returned as json by GET /api/users', async () => {
        const usersInDatabase = await usersInDb()
        const response = await api
          .get('/api/users')
          .expect('Content-Type', /application\/json/)
          .expect(200)

        expect(response.body.length).toBe(usersInDatabase.length)

        const returnedUsers = response.body.map(user => user.title)
        usersInDatabase.forEach(user => {
          expect(returnedUsers).toContain(user.title)
        })
      })

      test('individual users are returned as json by GET /api/users/:id', async () => {
        const usersInDatabase = await usersInDb()
        const user = usersInDatabase[0]

        const response = await api
          .get(`/api/users/${user.id}`)
          .expect(200)
          .expect('Content-Type', /application\/json/)

        expect(response.body.username).toEqual(User.format(user).username)
      })

      test('404 returned by GET /api/users/:id with nonexisting valid id', async () => {
        const validNonexistingId = await nonExistingId()
        await api
          .get(`/api/users/${validNonexistingId}`)
          .expect(404)
      })

      test('400 is returned by GET /api/users/:id with invalid id', async () => {
        const invalidId = '5a3d5da59070081a82a3445'
        await api
          .get(`/api/users/${invalidId}`)
          .expect(400)
      })

      describe('addition of a new user', async () => {
        test('POST /api/users succeeds with valid data', async () => {
          const usersAtStart = await usersInDb()

          const newUser = {
            username: 'newuser',
            password: 'newuser1',
            name: 'New User',
            adult: false,
          }
          await api
            .post('/api/users')
            .send(newUser)
            .expect(201)
            .expect('Content-Type', /application\/json/)

          const usersAfterOperation = await usersInDb()
          expect(usersAfterOperation.length).toBe(usersAtStart.length + 1)
          const titles = usersAfterOperation.map(user => user.title)
          expect(titles).toContain(newUser.title)
        })

        test('POST /api/users fails with proper statuscode if password is too short', async () => {
          const usersAtStart = await usersInDb()

          const newUser = {
            username: 'newuser',
            password: 'nu',
            name: 'New User',
            adult: false,
          }
          await api
            .post('/api/users')
            .send(newUser)
            .expect(400)

          const usersAfterOperation = await usersInDb()
          expect(usersAfterOperation.length).toBe(usersAtStart.length)
        })
      })
    })
  })

  afterAll(() => {
    server.close()
  })
})