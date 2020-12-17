import faker from 'faker'
import { setRedux } from './fakelisteSlice'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

const createexamen = 'radio genou'

const createUser = () => ({
  uuid: faker.random.uuid(),
  email: faker.internet.email(),
  address: faker.address.streetAddress(),
  bio: faker.lorem.sentence(),
  image: faker.image.avatar(),
  firstname: faker.name.firstName(),
  lastname: faker.name.lastName(),
  age: faker.random.number({ min: 0, max: 80 }),
  examen: createexamen,
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
