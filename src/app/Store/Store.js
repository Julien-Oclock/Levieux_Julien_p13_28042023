import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../Features/auth/authSlice'
import { authApi } from '../Service/authService'

const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
  devTools: true
})
export default store

