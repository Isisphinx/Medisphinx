import faker from 'faker'
import { setRedux } from './fakelisteSlice'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

const array = ['Radio genou','Echo genou','Radio epaule','Echo epaule']

function createexamen() {
  const nb1 = getRandomInt(4)
  const nb2 = getRandomInt(4)
  if (nb1 === nb2)
    return (createexamen())
  const examen = [array[nb1], array[nb2]]
  return (examen)
}

const createUser = () => ({
  uuid: faker.random.uuid(),
  email: faker.internet.email(),
  address: faker.address.streetAddress(),
  bio: faker.lorem.sentence(),
  image: faker.image.avatar(),
  firstname: faker.name.firstName(),
  lastname: faker.name.lastName(),
  age: faker.random.number({ min: 0, max: 80 }),
  examen: createexamen(),
})

const createUsers = (numUsers = 5) => Array.from({ length: numUsers }, createUser)
const users = createUsers()

const SetFakeList = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(setRedux(users))
  })

  return null
}

export default SetFakeList
