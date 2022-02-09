import './About.css';
import img1 from '../../../img/icons/icon4.svg';
import img2 from '../../../img/icons/icon3.svg';
import img3 from '../../../img/icons/icon2.svg';
import img4 from '../../../img/icons/icon1.svg';

let About = () => {
    return(
        <div className='HomeAbout text-center mt-5 '>
        <span className='px-2 py-3 title'>
        عن العاصمة الإدارية الجديدة
        </span>
        <div className=' p-5 HomeAbout0'>
            
        <div className='AboutBlock AboutBlock0'>
        <div className='img'>
        <img src={img1} alt='image' />
        </div>
        <div className='name pt-3'>مدينة للأعمال</div>
        <div className='info color1'>30%</div>
        <div className='details color1'>من المدينة تخدم قطاع المال والأعمال</div>
        </div>
        
            
        <div className='AboutBlock AboutBlock0'>
            <div className='img'>
            <img src={img2} alt='image' />
            </div>
            <div className='name pt-3'>مدينة للأعمال</div>
            <div className='info color2'>30%</div>
            <div className='details color2'>من المدينة تخدم قطاع المال والأعمال</div>
            </div>
        
            
        <div className='AboutBlock AboutBlock0'>
            <div className='img'>
            <img src={img3} alt='image' />
            </div>
            <div className='name pt-3'>مدينة للأعمال</div>
            <div className='info color3'>30%</div>
            <div className='details color3'>من المدينة تخدم قطاع المال والأعمال</div>
            </div>
        
            
        <div className='AboutBlock'>
            <div className='img'>
            <img src={img4} alt='image' />
            </div>
            <div className='name pt-3'>مدينة للأعمال</div>
            <div className='info color4'>30%</div>
            <div className='details color4'>من المدينة تخدم قطاع المال والأعمال</div>
            </div>

        </div>
        </div>
    )
}
export default About;