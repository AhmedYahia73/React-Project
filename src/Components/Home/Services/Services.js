import './Services.css';
import img1 from '../../../img/Home/Services/img1.jpg';
import img2 from '../../../img/Home/Services/img2.jpg';
import img3 from '../../../img/Home/Services/img3.jpg';
import img4 from '../../../img/Home/Services/img4.jpg';
import img5 from '../../../img/Home/Services/img5.jpg';

let Services = () => {
    return(
        <div className='HomeServices'>
        <div className='text-center container py-5'>
            <span className='title'>
                خدماتنا
            </span>
            <div className='ServiceBlocks'>
            
            <div className='serviceBlock mx-3 mt-4'>
                <div className='MainImg'>
                <div className='img'>
                <img src = {img5} />
                </div></div>
                <div className='serviceName py-2'>
                محلات تجارية
                </div>
                </div>
            
            <div className='serviceBlock mx-3 mt-4'>
                <div className='MainImg'>
                <div className='img'>
                <img src = {img4} />
                </div></div>
                <div className='serviceName py-2'>
                مقرات ادارية
                </div>
            </div>
            
            <div className='serviceBlock mx-3 mt-4'>
                <div className='MainImg'>
                <div className='img'>
                <img src = {img3} />
                </div></div>
                <div className='serviceName py-2'>
                أراضى استثمارية
                </div>
            </div>
            
            <div className='serviceBlock mx-3 mt-4'>
                <div className='MainImg'>
                <div className='img'>
                <img src = {img2} />
                </div></div>
                <div className='serviceName py-2'>
                فيلات وقصور
                </div>
            </div>
            
            <div className='serviceBlock mx-3 mt-4'>
                <div className='MainImg'>
                <div className='img'>
                <img src = {img1} />
                </div></div>
                <div className='serviceName py-2'>
                شقق سكنية
                </div>
            </div>

        </div>

        <div className='serviceBtn'>
        <button className='px-5 py-2'>
            اقرأ المزيد عن خدماتنا
        </button>
        </div>
        </div>
        </div>
    )
}

export default Services;