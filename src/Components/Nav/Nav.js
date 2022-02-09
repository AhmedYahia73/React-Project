
import './Nav.css';
import Logo from '../../img/icons/redLogo.svg';
import {Link} from 'react-router-dom';
let Nav = ({act}) => {
    let navBtn = () => {
        document.getElementsByClassName('Links')[0].classList.toggle('hide');
    }
    return(
        <>
<nav className="MainNav  d-flex align-items-center justify-content-between">
    <div className="contact d-flex align-items-center">
    <a href='#'> <i class="fab fa-instagram"></i> </a>
    <a href='#'> <i class="fab fa-twitter-square"></i> </a>
    <a href='#'> <i class="fab fa-facebook-square"></i> </a>
    <button className='BookingBtn'>
        أحجز الان
        <i class="far fa-check-square mx-2"></i>
        </button>

    </div>

    
    <div className="Links text-center hide">
        <ul className="">
            <Link to = '/CantactUs'><li>
                اتصل بنا
            </li></Link>
            <Link to = '/Projects'><li>
                مشاريع
            </li></Link>
            <Link to = '/ADS'><li>
                اعلانات
            </li></Link>
            <Link to = '/News'><li>
               أخبار
            </li></Link>
            <Link to = '/AboutCity'><li>
                عن المدينة
            </li></Link>
            <Link to = '/About'><li>
                عن الشركة
            </li></Link>
            <Link to = '/'><li>
                الرئيسية
            </li></Link>
        </ul>
    </div>

    <div>
    <div className="Logo">
        <img src={ Logo } alt='Logo' />
    </div>
    <button onClick={navBtn} className='btn navBtn text-center'>
    <i class="fas fa-bars"></i>
    </button></div>
</nav>
</>
    )
}

export default Nav;