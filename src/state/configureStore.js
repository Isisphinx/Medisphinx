import { configureStore as rtkConfigureStore } from '@reduxjs/toolkit'

const configureStore = () => rtkConfigureStore({ reducer: {} })
export default configureStore