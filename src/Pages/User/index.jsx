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

// react imports
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';


// local imports
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import AccountCard from '../../Components/AccountCard';
import EditUserForm from '../../Components/EditUserForm';


// styles
import './styles.scss';

const User = () => {

    const { userToken, editForm } = useSelector(state => state.auth);
    console.log(editForm);

    const navigate = useNavigate();

    useEffect(() => {
        if (userToken === null) {
            navigate('/');
        }
    }, [navigate, userToken]);





    return (
        <div>
            <Header />
            <div className="page-content">
                <div className="user-info">
                  <h1>
                    Welcome back
                  </h1>
                  <EditUserForm isEditForm={editForm}/>
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