import { configureStore as rtkConfigureStore } from '@reduxjs/toolkit'
import FakeListSliceReducer from './fakelisteSlice'

const configureStore = () => rtkConfigureStore({ reducer: {fakelist: FakeListSliceReducer} })
export default configureStore