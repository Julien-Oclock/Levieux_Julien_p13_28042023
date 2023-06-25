import axios from "axios";
import { createAsyncThunk} from "@reduxjs/toolkit";
import { GetCookie, SetCookie } from '../../Service/cookiesServices'


const backendUrl = 'http://localhost:3001/api/v1'

export const loginUser = createAsyncThunk(
    'auth/login',
    async ({email, password}, {rejectWithValue}) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            const {data} = await axios.post(`${backendUrl}/user/login`, 
            {email, password}, 
            config
            )
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

// update user profile info with token in state or local storage  
export const updateUserInfoAsync = createAsyncThunk(
    'auth/updateUserInfo',
    async ({firstName, lastName}, { rejectWithValue}) =>{
        try {
            const token = GetCookie('userToken')
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${token}` // get token from state
                },
            }
            const {data} = await axios.put(`${backendUrl}/user/profile`, 
            {firstName, lastName}, 
            config
            )
            console.log(data)
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
  );
