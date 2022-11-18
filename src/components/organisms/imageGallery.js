import * as React from 'react'
import {picContainer, imageGallery, myImage, container} from './imageGallery.module.css'
import pic1 from '../atoms/galleryPics/pic1.png'
import pic2 from '../atoms/galleryPics/pic2.png'
import pic3 from '../atoms/galleryPics/pic3.jpeg'



const ImageGallery = () => {
    return(
        <div className={container}>
        <ul className={imageGallery}>
            <li className={picContainer}>
                <img className={myImage} src = {pic1} alt="pic1"/>
            </li>
            <li className={picContainer}>
                <img className={myImage} src = {pic3} alt="pic1"/>
            </li>
            <li className={picContainer}>
                <img className={myImage} src = {pic3} alt="pic1"/>
            </li>
            <li className={picContainer}>
                <img className={myImage} src = {pic1} alt="pic1"/>
            </li>
            <li className={picContainer}>
                <img className={myImage} src = {pic3} alt="pic1"/>
            </li>
            <li className={picContainer}>
                <img className={myImage} src = {pic2} alt="pic1"/>
            </li>
            <li className={picContainer}>
                <img className={myImage} src = {pic3} alt="pic1"/>
            </li>
            <li className={picContainer}>
                <img className={myImage} src = {pic3} alt="pic1"/>
            </li>
            <li className={picContainer}>
                <img className={myImage} src = {pic1} alt="pic1"/>
            </li>
        </ul>
        </div>

    )
}

export default ImageGallery