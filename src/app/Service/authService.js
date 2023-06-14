import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const backendUrl = 'http://localhost:3001/api/v1'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    // base url of backend API
    baseUrl: backendUrl,
    // prepareHeaders is used to configure the header of every request and gives access to getState which we use to include the token from the store
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.userToken
      if (token) {
       // include token in req header
        headers.set('authorization', `Bearer ${token}`)  
        return headers
      }
    },
  }),
  endpoints: (builder) => ({
    getUserDetails: builder.query({
      query: () => ({
        url: '/user/profile',
        method: 'POST',
      }),
    }),
  }),
})

export const { useGetUserDetailsQuery } = authApi