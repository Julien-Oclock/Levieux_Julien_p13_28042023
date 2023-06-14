import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../Features/auth/authSlice'
import { authApi } from '../Service/authService'

const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    // Add the authApi middleware before the default middleware
    [authApi.middleware, ...getDefaultMiddleware()],
  devTools: true
})

export default store
