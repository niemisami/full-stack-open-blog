const router = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../models/user')
const { generateJwtToken } = require('../helpers')

router.post('/', async (request, response) => {
  const body = request.body
  const user = await User.findOne({ username: body.username })
  const passwordCorrect = user === null ?
    false :
    await bcrypt.compare(body.password, user.passwordHash)

  if(!(user && passwordCorrect)) {
    return response.status(401).json({ error: 'invalid username or password' })
  }

  const userForToken = {
    username: user.username,
    id: user._id
  }

  const token = generateJwtToken(userForToken)

  response.status(200).send({ token, username: user.username, name: user.name })
})

module.exports = router