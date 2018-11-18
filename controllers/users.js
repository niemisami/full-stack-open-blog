const router = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../models/user')

router.get('/', async (req, res) => {
  const users = await User.find({})
    .populate('blogs', { title: 1, author: 1, url: 1, likes: 1 })
  res.json(users.map(user => User.format(user)))
})

router.get('/:id', async (req, res) => {
  const id = req.params.id
  try {
    const user = await User.findById(id)
      .populate('blogs', { title: 1, author: 1, url: 1, likes: 1 })
    if(user) {
      res.json(User.format(user))
    } else {
      res.status(404).end()
    }
  } catch(exception) {
    res.status(400).send({ error: 'malformatted id' })
  }
})

router.post('/', async (req, res) => {
  try {
    const newUserData = req.body
    if(!newUserData.username ||
      !newUserData.name ||
      !newUserData.password) {
      return res.status(400).json({ error: 'content missing' })
    }
    if(newUserData.password.length < 3) {
      return res.status(400).json({ error: 'Password must be 3 or more characters long' })
    }
    const existingUser = await User.find({ username: newUserData.username })
    if(existingUser.length > 0) {
      return res.status(400).json({ error: 'Username is already taken' })
    }

    if(newUserData.adult === undefined) {
      newUserData.adult = true
    }
    const saltRounds = 10
    newUserData.password = await bcrypt.hash(newUserData.password, saltRounds)

    const user = new User(newUserData)
    const result = await user.save()
    res.status(201).json(User.format(result))

  } catch(exception) {
    console.log(exception)
    res.status(500).send({ error: 'something went wrong...' })
  }
})

module.exports = router
