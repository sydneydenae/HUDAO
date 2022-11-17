import * as React from 'react'
import { Link } from 'gatsby'
import {navbar,  navLinks, navLinkItem, navLinkText} from './navbar.module.css'



const Navbar = () => {
    return(
        <nav className={navbar}>
        <ul className={navLinks}>
            <li className={navLinkItem}><Link to = "/" className={navLinkText}>Home</Link></li>
            <li className={navLinkItem}><Link to = "/about" className={navLinkText}>About</Link></li>
        </ul>
        </nav>

    )
}

export default Navbar
