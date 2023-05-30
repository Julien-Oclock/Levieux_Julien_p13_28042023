import axios from "axios";
import { createAsyncThunk} from "@reduxjs/toolkit";

const backendUrl = 'http://localhost:3001'

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
            localStorage.setItem('userToken', JSON.stringify(data.userToken))
            return data
        } catch (error) {
            if (error.response) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)