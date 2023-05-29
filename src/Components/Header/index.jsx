import { Link } from 'react-router-dom';


// import logo
const logo = 'src/assets/img/argentBankLogo.png'

import './styles.scss'

const Header = () => {
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
      <Link className="nav__item" to="/sign-in">
        Sign In
      </Link>
    </div>
  </nav>
  )

}

export default Header;

 