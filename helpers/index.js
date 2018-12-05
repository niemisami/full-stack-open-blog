const jwt = require('jsonwebtoken')

const generateJwtToken = user => jwt.sign(user, process.env.SECRET)

module.exports = {
  generateJwtToken
}