import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../app/Features/auth/authSlice'
import { useEffect } from 'react';


// import logo
const logo = 'src/assets/img/argentBankLogo.png'

import './styles.scss'

const Header = () => {
  const { userToken } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  // logout user
  const logoutUser = () => {
    // remove token from state using logout reducer
    dispatch(logout());
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
      {userToken === null ? 
        <Link className="nav__item" to="/sign-in"> Sign In </Link> :
        <Link className="nav__item" to="/" onClick={() => dispatch(logoutUser())}> Sign Out </Link> 
      }
        
    </div>
  </nav>
  )

}

export default Header;

 