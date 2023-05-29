import {apiSlice} from '../Api/apiSlice'

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: ( login ) => ({
                url: '/user/login',
                method: 'POST',
                body: { ...login },
            }),
        }), 
    })
})

export const { useLoginMutation } = authApiSlice;