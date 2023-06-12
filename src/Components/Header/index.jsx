import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../app/Features/auth/authAction'
import { useEffect } from 'react';

// import logo
const logo = 'src/assets/img/argentBankLogo.png'

import './styles.scss'

const Header = () => {

  const { userToken, error } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  // useEffect(() => {
  //     if(!userToken) {
  //         navigate('/');
  //     }

  // }, [navigate, userToken])

  const logout = () => {
    dispatch(logoutUser());
    console.log(userToken);
  }
  return(
    <nav className="nav">
    <Link className="nav__logo-link" to="/">
      <img
        className="nav__logo-image"
        src={logo}
        alt="Argent Bank Logo"
      />
    </Link>
    <div className='nav__list-item'>
      <i className="fa-solid fa-circle-user"></i>
      {userToken ? 
        <button className="logout" onClick={
          () => {
            logout();
            navigate('/');
          }
        }> Sign out </button>: 
        <Link className="nav__item" to="/sign-in"> Sign In </Link> 
      }
        
    </div>
  </nav>
  )

}

export default Header;

 