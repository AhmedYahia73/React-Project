import './ADS.css';
import img1 from '../../../img/ADs/img1.jpg';

let ADS = () => {
    let arr = [
        {
            'img': '',
            'Address': 'العاصمة الجديدة, الحى السابع = 90.00 م',
            'Name':'شقة 90 م فى ميدتاون سكاى',
            'Price':'891,000 ج',
            'Count1':1,
            'Count2':1,
        },
    ]
    return(
        <div className='col-12 col-sm-12 MainADS0 mb-4 col-lg-4 text-right'>
            <div className='ADS'>
            <div className='img mb-3'>
            <img src = {img1} className='' />
            </div>
            <div className='cycleDiv'>
            <img src = 'https://www.c-egy.com/data-storage/company/400x400/5fe7bdec88e09.jpg' className='' />
            </div>
            <div className='Content0 p-3'>
                
                <div className='Address'>
                    <b>
                {arr[0]['Address']}
                </b>
                </div>
                
                <div className='Name'>
                <b>
                {arr[0]['Name']}
                </b>
                </div>
                
                <div className='d-flex  justify-content-between align-items-center'>
                <div className=''>
                <i class="fas fa-search mx-2"></i>
                {arr[0]['Count1']}
                <i class="fas fa-search mx-2 ml-3"></i>
                {arr[0]['Count2']}
                </div>
                <div className='Price'>
                {arr[0]['Price']}</div>
                </div>

            </div>
            </div>
        </div>
    )
}

export default ADS;