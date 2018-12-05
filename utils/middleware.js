const jwt = require('jsonwebtoken')

const authorization = (req, res, next) => {
  const authorization = req.get('authorization')
  if(authorization && authorization.toLowerCase().startsWith('bearer ')) {
    req.token = authorization.substring(7)
  }
  next()
}

const requireAuthentication = (req, res, next) => {
  try {
    const token = req.token
    const decodedToken = jwt.verify(token, process.env.SECRET)

    if(!token || !decodedToken.id) {
      throw new Error()
    }
    req.userId = decodedToken.id
  } catch(error) {
    return res.status(401).json({ error: 'token missing or invalid' })
  }
  next()
}
module.exports = {
  authorization,
  requireAuthentication
}