import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';


import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import AccountCard from '../../Components/AccountCard';

import './styles.scss';

const User = () => {

    const {  userToken } = useSelector(state => state.auth);

    const navigate = useNavigate();

    useEffect(() => {
        console.log(userToken);
        if (userToken === null) {
            navigate('/');
        }
    }, [navigate, userToken])
    

    return (
        <div>
            <Header />
            <div className="page-content">
                <div className="user-info">
                    <h1>
                        Welcome back <br/>
                        <span> USER NAME </span> 
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