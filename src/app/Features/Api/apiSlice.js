// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import  { login, logout } from '../Features/authSlice';

// const baseQuery = fetchBaseQuery({
//     baseUrl: 'http://localhost/argentBankDB:3001',
//     credentials: 'include',
//     prepareHeaders: (headers, { getState }) => {
//         // Here we will be adding our auth token to the GET requests
//         const token = getState().auth.token;
//         if (token) {
//             headers.set('authorization', `Bearer ${token}`);
//         }
//         return headers;        
//     }
// });

// // Here we will be adding our refresh token logic (don't know if i will need it)
// const baseQueryWithRefreshToken = async (args, api, extraOptions) => {
//     let result = await baseQuery(args, api, extraOptions);

//     if (result?.error?.status === 401) {
//         console.log('sending refresh token request');
//         const refreshResult = await baseQuery(args, api, extraOptions);
//         if ( refreshResult?.data ) {
//             const user = api.getState().auth.user;
//             // store the new token in the store
//             api.dispatch(login({...refreshResult.data, user}));

//             // retry the initial request
//             console.log('retrying initial request');
//             result = await baseQuery(args, api, extraOptions);
//         } else {
//             api.dispatch(logout());
//         }
//     }
//     return result;
// };

// export const apiSlice = createApi({
//     baseQuery: baseQueryWithRefreshToken,
//     endpoints: builder => ({})
// });