import { createSlice } from '@reduxjs/toolkit'
import { loginUser, updateUserInfoAsync} from './authAction'

const userToken = localStorage.getItem('userToken') ? localStorage.getItem('userToken') : null

const initialState = {
  loading: false, // for loading spinner
  userInfo: null, // for user object
  userToken:userToken , // for storing the JWT
  error: null, // for error message
  success: false, // for success
  editForm : false // for monitoring the user update info process.
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
    handleEditForm: (state) => {
      state.editForm = !state.editForm
    }
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
      localStorage.setItem('userToken', payload.body.token)

    },
    [loginUser.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },


    // update user profile info with token in local storage
    [updateUserInfoAsync.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [updateUserInfoAsync.fulfilled]: (state, { payload }) => {
      // update name and firstname in state.userInfo
      state.loading = false
      state.succes = true
      state.editForm = false
      state.userInfo.lastName = payload.body.lastName
      state.userInfo.firstName = payload.body.firstName
    },
    [updateUserInfoAsync.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload

    }
  },
})


export const { logout, setCredentials, handleEditForm } = authSlice.actions
export default authSlice.reducer