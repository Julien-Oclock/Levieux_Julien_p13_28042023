import { createSlice } from '@reduxjs/toolkit'
import { loginUser, updateUserInfo} from './authAction'


//initialize userToken from local storage
const userToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null

const initialState = {
  loading: false, // for loading spinner
  userInfo: null, // for user object
  userToken: userToken ? userToken : null, // for storing the JWT
  error: null, // for error message
  success: false, // for monitoring the registration process.
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout : (state) => {
      localStorage.removeItem('userToken') // deletes token from storage
      state.loading = false
      state.userInfo = null
      state.userToken = null
      state.error = null
    },
    setCredentials: (state, { payload }) => {
      state.userInfo = payload.body
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
      state.succes = true
      state.userToken = payload.body.token
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },


    // update user profile info with token in local storage
    [updateUserInfo.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [updateUserInfo.fulfilled]: (state, { payload }) => {
      // update name and firstname in state.userInfo
      state.loading = false
      state.succes = true
      userInfo.firstname = payload.body.firstname ? payload.body.firstname : state.userInfo.firstname
      userInfo.lastName = payload.body.lastName ? payload.body.name : state.userInfo.lastName
    },
    [updateUserInfo.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    }
  },
})


export const { logout, setCredentials } = authSlice.actions
export default authSlice.reducer