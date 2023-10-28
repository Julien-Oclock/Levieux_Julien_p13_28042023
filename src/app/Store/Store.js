import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../Features/auth/authSlice'
import { authApi } from '../Service/authService'

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    // Add the authApi middleware before the default middleware
    [authApi.middleware, ...getDefaultMiddleware()],
    devTools : true
}, reduxDevtools)

export default store
