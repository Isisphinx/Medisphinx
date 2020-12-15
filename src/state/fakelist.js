import faker from 'faker'
import { setRedux } from './fakelisteSlice'
import { useDispatch } from 'react-redux'

const SetFakeList = () => {
  const dispatch = useDispatch()
  const createUser = () => ({ uuid: faker.random.uuid(), email: faker.internet.email(), address: faker.address.streetAddress(), bio: faker.lorem.sentence(), image: faker.image.avatar(), name: faker.name.findName(),
                              age: faker.random.number({'min': 0, 'max':80}), years: faker.date.between('2020-12-12', '2022-02-02').getFullYear(), days: faker.date.between('2020-12-12', '2022-02-02').getDate(), month: faker.date.between('2020-12-12', '2022-02-02').getMonth()})

  const createUsers = (numUsers = 5) => Array.from({ length: numUsers }, createUser)
  const Users = createUsers()
  dispatch(setRedux(Users))

  return null
}

export default SetFakeList
