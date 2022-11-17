import * as React from 'react'
import { container,heading } from './layout.module.css'
import Navbar from './navbar'

const Layout = ({pageTitle, children}) => {
    return(
        <div className={container}>
            <Navbar/>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout