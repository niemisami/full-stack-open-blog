const User = require('../models/user')
const { generateJwtToken } = require('../helpers')

const initialUsers = [
  {
    _id: '5a422bc61b54a676234d17fd',
    username: 'fullstack',
    password: 'fullstack1',
    name: 'Full Stack',
    adult: true,
    blogs: ['5a422a851b54a676234d17f7']
  }
]

const dummyAuthToken = () => generateJwtToken({ id: initialUsers[0]._id })

const usersInDb = async () => {
  const users = await User.find({})
  return users
}

module.exports = {
  initialUsers,
  usersInDb,
  dummyAuthToken
}