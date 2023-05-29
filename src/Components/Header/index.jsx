import { Link } from 'react-router-dom';


// import logo
const logo = 'src/assets/img/argentBankLogo.png'

import './styles.scss'

const Header = () => {
  return(
    <nav className="nav">
    <a className="nav__logo-link" href="./index.html">
      <img
        className="nav__logo-image"
        src={logo}
        alt="Argent Bank Logo"
      />
    </a>
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

 