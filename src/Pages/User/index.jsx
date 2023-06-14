// This component renders the user's account page.
// It displays the user's name, a button to edit the user's name, and a list of cards containing the user's account information.
// The user's name is retrieved from the backend using the useGetUserDetailsQuery hook from the auth service.
// The user's name is displayed with the first name and last name separated by a space.
// The button to edit the user's name is currently unimplemented.
// The list of cards is currently unimplemented.
// The user's name is retrieved from the backend using the useGetUserDetailsQuery hook from the auth service.
// The user's name is displayed with the first name and last name separated by a space.
// The button to edit the user's name is currently unimplemented.
// The list of cards is currently unimplemented.

import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useGetUserDetailsQuery } from '../../app/Service/authService';
import { setCredentials } from '../../app/Features/auth/authSlice';


import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import AccountCard from '../../Components/AccountCard';

import './styles.scss';

const User = () => {

    const { userToken, userInfo } = useSelector(state => state.auth);

    const { data, isFetching } = useGetUserDetailsQuery('userDetails', {
        // perform a refetch every 15mins
          pollingInterval: 900000,
        })

    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(() => {
        console.log(userToken);
        if (userToken === null) {
            navigate('/');
        }
    }, [navigate, userToken])

    useEffect(() => {
        dispatch(setCredentials(data))
        console.log(userInfo);
      }, [data, dispatch])
    

    return (
        <div>
            <Header />
            <div className="page-content">
                <div className="user-info">
                    <h1>
                        Welcome back <br/>
                        {/* {isFetching ? <span>Loading...</span>  : <span> {userInfo.firstName} {userInfo.lastName}</span>}     */}
                    </h1>
                    <button className='edit'>Edit Name</button>
                </div>
                <div className="card-container">
                    <AccountCard />
                    <AccountCard />
                    <AccountCard />
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default User;