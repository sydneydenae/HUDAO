import * as React from 'react'
import { Link } from 'gatsby'
import NameLogo from '../molecules/nameLogo'
import {navbar,  navLinks, navLinkItem, navLinkText, appLogo, logoName} from './navbar.module.css'



const Navbar = () => {
    return(
        <nav className={navbar}>
        <NameLogo/>
        <ul className={navLinks}>
            <li className={navLinkItem}><Link to = "/" className={navLinkText}>Home</Link></li>
            <li className={navLinkItem}><Link to = "/about" className={navLinkText}>About</Link></li>
        </ul>
        </nav>

    )
}

export default Navbar
