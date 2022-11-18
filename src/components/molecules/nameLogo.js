import * as React from 'react'
import logo from '../atoms/logo.png'
import {logoMolecule, appLogo, logoName} from './nameLogo.module.css'

const NameLogo = () => {
    return(
        <div class={logoMolecule}>
            <a href="/" >
                <img src = {logo} className = {appLogo} alt="logo"/>
            </a>
            <a href="/" class={logoName}>HUDAO</a>
        </div>
        
    )
}

export default NameLogo