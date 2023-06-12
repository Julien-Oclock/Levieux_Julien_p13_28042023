import { createSlice } from '@reduxjs/toolkit'
import { registerUser, loginUser} from './authAction'

// initialize userToken from local storage
// const userToken = localStorage.getItem('userToken')
//   ? localStorage.getItem('userToken')
//   : null

const initialState = {
  loading: false, // for loading spinner
  userInfo: {}, // for user object
  userToken:null, // for storing the JWT
  error: null, // for error message
  success: false, // for monitoring the registration process.
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout : (state) => {
      state.login = false
      state.userInfo = null,
      state.userToken = null
      state.error = null
    },
    SetUserInfo: (state, { payload }) => {
      state.userInfo = payload
    },
  },
  extraReducers: {

    // Login user
    [loginUser.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.userToken = payload.body.token
      console.log(payload.body.token);
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },

    // Register user
    [registerUser.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [registerUser.fulfilled]: (state) => {
      state.loading = false
      state.success = true
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    }
  },
})

export default authSlice.reducer