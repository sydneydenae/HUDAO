import * as React from 'react'
import {container, imageGallery, overlay} from './imageGallery.module.css'
import pic1 from '../atoms/galleryPics/pic1.png'
import pic2 from '../atoms/galleryPics/pic2.png'
import pic3 from '../atoms/galleryPics/pic3.jpeg'



const ImageGallery = () => {
    return(
        <div className={container}>
        <ul className={imageGallery}>
            <li>
                <img src = {pic1} alt="pic1"/>
            </li>
            <li>
                <img src = {pic1} alt="pic1"/>
            </li>
            <li>
                <img src = {pic1} alt="pic1"/>
            </li>
            <li>
                <img src = {pic2} alt="pic1"/>
            </li>
            <li>
                <img src = {pic2} alt="pic1"/>
            </li>
            <li>
                <img src = {pic2} alt="pic1"/>
            </li>
            <li>
                <img src = {pic3} alt="pic1"/>
            </li>
            <li>
                <img src = {pic3} alt="pic1"/>
            </li>
            <li>
                <img src = {pic3} alt="pic1"/>
            </li>
        </ul>
        </div>

    )
}

export default ImageGallery