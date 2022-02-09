import './Footer.css';
import Logo from '../../img/icons/Logo.svg';

let Footer = () => {
    return(
        <>
        <div className='footer0'>
        <div className='footer1'>
        <div className='socialDiv'>
        <span className='social'>
    <a href='#'> <i class="fab fa-instagram ic"></i> </a>
    <a href='#'> <i class="fab fa-twitter-square ic"></i> </a>
    <a href='#'> <i class="fab fa-facebook-square ic"></i> </a>
        تابعونا على السوشيال ميديا
        
        </span>
        </div>


        <div className='img'>
            <div className='cover'></div>
            <img src = { Logo } />
        </div>


        <div className='contact text-right'>
        <span className='con'>
        أتصل بنا
        </span>
        <ul>
            <li>
                خالد بن الوليد، شيراتون المطار، القاهرة
                <i class="fas fa-map-marker-alt icon mx-2"></i>
            </li>
            <li>
                الأحد إلى الخميس: 10 صباحاً - 6 مساءً
                <i class="far fa-clock icon mx-2"></i>
            </li>
            <li>
                info@c-egy.com
                <i class="far fa-envelope icon mx-2"></i>
            </li>
            <li>
                16559
                <i class="fas fa-phone-alt icon mx-2"></i>
            </li>
        </ul>
        </div>


        </div>
        <div className='footerMap'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.782130549502!2d31.37685498570093!3d30.100425422882594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145816152c499753%3A0x9e48c6e2afee2ce2!2zNCDYtNin2LHYuSDYrtin2YTYryDYqNmGINin2YTZiNmE2YrYr9iMINi02YrYsdin2KrZiNmGINin2YTZhdi32KfYsdiMINmC2LPZhSDYp9mE2YbYstmH2KnYjCDZhdit2KfZgdi42Kkg2KfZhNmC2KfZh9ix2KnigKw!5e0!3m2!1sar!2seg!4v1643827862712!5m2!1sar!2seg"  allowfullscreen="" loading="lazy"></iframe>
        </div>


        <div className='footer2 pt-4 '>
        <p>
        تصميم : أحمد يحيى
        </p>
        <p>
        © جميع الحقوق محفوظة لشركة العاصمة للتسويق العقاري 2022
        </p>
        </div>
        </div>
        </>
    )
}

export default Footer;