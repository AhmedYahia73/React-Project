import './Slider.css';
import img1 from '../../../img/Home/Slider/img1.jpg';
import img2 from '../../../img/Home/Slider/img2.jpg';
import img3 from '../../../img/Home/Slider/img3.jpg';
import img4 from '../../../img/Home/Slider/img4.jpg';
import img5 from '../../../img/Home/Slider/img5.jpg';
import img6 from '../../../img/Home/Slider/img6.jpg';
import { useState } from 'react';
 

let Slider = () => {
    let arr = [
        <img className='myimg' src= {{ img1 }} />,
        <img className='myimg' src= {{ img2 }} />,
        <img className='myimg' src= {{ img3 }} />,
        <img className='myimg' src= {{ img4 }} />,
        <img className='myimg' src= {{ img5 }} />,
        <img className='myimg' src= {{ img6 }} />,
    ];
    let[images, setImages] = useState([]);
    let i = 0;
    return(
        setInterval(() => {
            <>
            arr[images]
            </>
            i = (i + 1) % 5;
            setImages(i);
        }, 2000)
    )
}
export default Slider;