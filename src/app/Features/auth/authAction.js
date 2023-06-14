import axios from "axios";
import { createAsyncThunk} from "@reduxjs/toolkit";

const backendUrl = 'http://localhost:3001/api/v1'


export const loginUser = createAsyncThunk(
    'auth/login',
    async ({email, password}, {rejectWithValue}) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                },
            }
            const {data} = await axios.post(`${backendUrl}/user/login`, 
            {email, password}, 
            config
            )
            console.log(data)
            localStorage.setItem('userToken', JSON.stringify(data.userToken))
            
            return data
        } catch (error) {
            console.error(error)
            if (error.response) {
                console.error(error.response.data)
                return rejectWithValue(error.response.data.message)
            } else {
                console.error(error.message)
                return rejectWithValue(error.message)
            }
        }
    }
)

export const registerUser = createAsyncThunk(
    'user/signup',
    async ({fistname, lastname, email, password}, {rejectWithValue}) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                },
            }
            await axios.post(`${backendUrl}/user/singup`, 
            {fistname, lastname, email, password}, 
            config
            )
        } catch (error) {
            if (error.response) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

// get user profile info with token in local storage
export const getUserProfile = createAsyncThunk(
    'user/profile',
    async (_, {rejectWithValue, getState}) => {
        try {
            const {auth} = getState()
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${auth.userToken}`
                },
            }
            const {data} = await axios.get(`${backendUrl}/user/profile`, 
            config
            )
            return data
        } catch (error) {
            console.error(error)
            if (error.response) {
                console.error(error.response.data)
                return rejectWithValue(error.response.data.message)
            } else {
                console.error(error.message)
                return rejectWithValue(error.message)
            }
        }
    }
)