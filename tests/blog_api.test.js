const supertest = require('supertest')
const { app, server } = require('../index')
const api = supertest(app)
const Blog = require('../models/blog')
const { initialBlogs, nonExistingId, blogsInDb } = require('./test_helper')

describe('when there is initially data in db', () => {
  beforeAll(async () => {
    await Blog.remove({})
    const blogObjects = initialBlogs.map(n => new Blog(n))
    await Promise.all(blogObjects.map(n => n.save()))
  })

  test('all blogs are returned as json by GET /api/blogs', async () => {
    const blogsInDatabase = await blogsInDb()
    const response = await api
      .get('/api/blogs')
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
      .expect(200)
      .expect('Content-Type', /application\/json/)

    expect(response.body).toEqual(Blog.format(blog))
  })

  test('404 returned by GET /api/blogs/:id with nonexisting valid id', async () => {
    const validNonexistingId = await nonExistingId()
    await api
      .get(`/api/blogs/${validNonexistingId}`)
      .expect(404)
  })

  test('400 is returned by GET /api/blogs/:id with invalid id', async () => {
    const invalidId = '5a3d5da59070081a82a3445'
    await api
      .get(`/api/blogs/${invalidId}`)
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
        .expect(204)

      const blogsAfterOperation = await blogsInDb()

      const titles = blogsAfterOperation.map(r => r.title)

      expect(titles).not.toContain(addedBlog.title)
      expect(blogsAfterOperation.length).toBe(blogsAtStart.length - 1)
    })
  })

  afterAll(() => {
    server.close()
  })
})