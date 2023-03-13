import {Link} from 'react-router-dom'

import './Header.css'
import logo from '../../assets/images/Engrenage1.png'

import NavItem, {NavItemDropDown} from '../../components/NavItem/NavItem'

const Header = () => {
  return (
    <div className="navbar navbar-expand-md bg-dark navbar-dark text-white fixed-top xelor-navbar">
        <div className="container">
            <a href='/' className="navbar-brand">
                <img className="Engrenage1" src={logo} alt="" />
            Xelor
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mainmenu">
                <ul className="navbar-nav ms-auto">
                    <NavItem>
                        <Link to='/' className='nav-link'>Home</Link>
                    </NavItem>

                    <NavItem>
                        <a href="/#" className="nav-link">Browse</a>
                    </NavItem>
                    <NavItemDropDown>
                        <a href="/#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">All</a>
                        <ul className="dropdown-menu">
                            <li><a href="/#" className="dropdown-item">Learn Xelor</a></li>
                            <li><a href="/#" className="dropdown-item">Where to be Opti PVP</a></li>
                        </ul>
                    </NavItemDropDown>
                    <NavItem>
                        <a href="/#" className="nav-link">Learn skills</a>
                    </NavItem>
                    <NavItem>
                        <Link to='/profile' className="nav-link">Profile</Link>
                    </NavItem>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header