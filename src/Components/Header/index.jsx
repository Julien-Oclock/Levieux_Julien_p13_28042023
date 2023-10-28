import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../app/Features/auth/authSlice'


// import logo
const logo = 'src/assets/img/argentBankLogo.png'

import './styles.scss'

const Header = () => {
  const { userToken } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  // get user name from state
  const { userInfo } = useSelector(state => state.auth);

  console.log(userInfo);



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
      
      {userInfo != null ? 
      <div className='nav__userName'>
        <i className="fa-solid fa-circle-user"></i>
        <p>{userInfo.firstName}</p> 
      </div>
      : <p></p>}
      <div className="useName">
      {userToken === null ? 
        <Link className="nav__item" to="/sign-in"> Sign In </Link> :
        <Link className="nav__item" to="/" onClick={() => dispatch(logoutUser())}> Sign Out </Link> 
      }
      </div>

        
    </div>
  </nav>
  )

}

export default Header;

 