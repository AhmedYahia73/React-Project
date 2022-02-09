import './ADSHeader.css';

let Header = () => {
    return(
        <div className='ADSHeader row text-center'>
            <div className='Left py-3 col-12 col-lg-3 d-flex align-items-center justify-content-center'  >
            <a href='#'>
            أضف اعلانك
            <i class="fas fa-plus-circle mx-2"></i>
            </a></div>
            <div className='Right col-12 col-lg-9 py-3' >
                <div className='top'>
                اعلانات العقارات فى العاصمة الادارية الجديدة
                </div>
                <div className='bottom'>
                للاستفسار بخصوص أى عقار, اتصل على رقمنا: 16559
            </div>
            </div>
        </div>
    )
}

export default Header;