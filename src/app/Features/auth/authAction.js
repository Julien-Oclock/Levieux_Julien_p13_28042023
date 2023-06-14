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
            console.log(data.body.token)
            localStorage.setItem('userToken', JSON.stringify(data.body.token))
            
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

// update user profile info with token in local storage
export const updateUserInfo = createAsyncThunk(
    'user/profile',
    
    async ({firstname, lastname}, {rejectWithValue}) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                },
            }
            const {data} = await axios.put(`${backendUrl}/user/profile`, 
            {firstname, lastname}, 
            config
            )
            return data
        } catch (error) {
            if (error.response) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    },
)
