import faker from 'faker'
import { setRedux } from './fakelisteSlice'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

const array = ['Radio genou', 'Echo genou', 'Radio epaule', 'Echo epaule']

function createexamen() {
  const nb1 = getRandomInt(4)
  const nb2 = getRandomInt(4)
  const nbexamen = getRandomInt(2)
  if (nb1 === nb2) return createexamen()
  if (nbexamen === 0) {
    const examen = [array[nb1]]
    return examen
  }
  if (nbexamen === 1) {
    const examen = [array[nb1], array[nb2]]
    return examen
  }
}
function createdateBirth () {
  const fulldate = faker.date.recent()
  const day = fulldate.getDate()
  const month = fulldate.getMonth()
  const years = fulldate.getFullYear()

  return (`${day}/${month}/${years}`)
}

const createUser = () => ({
  uuid: faker.random.uuid(),
  email: faker.internet.email(),
  address: faker.address.streetAddress(),
  bio: faker.lorem.sentence(),
  image: faker.image.avatar(),
  firstname: faker.name.firstName(),
  lastname: faker.name.lastName(),
  age: faker.random.number({ min: 5, max: 80 }),
  examen: createexamen(),
  datebirth: createdateBirth(),
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
