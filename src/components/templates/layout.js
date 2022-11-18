import * as React from 'react'
import { container,heading, navInLay, content } from './layout.module.css'
import Navbar from '../organisms/navbar'

const Layout = ({pageTitle, children}) => {
    return(
        <div className={container}>
            <Navbar className={navInLay}/>
            <main className={content}>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout