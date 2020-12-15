import faker from 'faker'
import { setRedux } from './fakelisteSlice'
import { useDispatch } from 'react-redux'

const SetFakeList = () => {
  const dispatch = useDispatch()
  const createUser = () => ({ uuid: faker.random.uuid(), email: faker.internet.email(), address: faker.address.streetAddress(), bio: faker.lorem.sentence(), image: faker.image.avatar(), firstname: faker.name.firstName(),
                              lastname: faker.name.lastName(), age: faker.random.number({'min': 0, 'max':80})})

  const createUsers = (numUsers = 5) => Array.from({ length: numUsers }, createUser)
  const Users = createUsers()
  dispatch(setRedux(Users))

  return null
}

export default SetFakeList
