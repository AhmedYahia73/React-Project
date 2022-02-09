import './SubHeader.css';

let SubHeader = () => {
    return(
        <div className='SubHeader py-3 px-4 text-center d-flex justify-content-between'>

            
        <div className='view'>
            
            <div className='points d-flex'>
            <span className='mr-3'>
            خريطة&nbsp; 
            <i class="fas fa-map-marker-alt colorRed mx-1"></i></span>
            
            <span className='mr-3'>
             قائمة &nbsp;
             <i class="fas fa-bars colorRed mx-1"></i>
             </span>
            
            
            <div className='mr-3 colorRed'>
             معرض &nbsp;
             <i class="fas fa-qrcode"></i></div>
            </div>
            <span className='mr-3'>
            <b className='pr-3 topTitle'>طريقة العرض </b>
            </span>
        </div>


            <div className='view'>
                <div className='points d-flex'>
                
                <span className='mr-3 colorRed'>
                 الأقل سعرا&nbsp; <i class="fas fa-sort-amount-down mx-1"></i>
                </span>
                
                <span className='mr-3'>
                 الأعلى سعرا&nbsp; <i class="fas colorRed fa-sort-amount-up mx-1"></i>
                </span>
                <div className='mr-3'>
                الأحدث&nbsp; <i class="far fa-clock colorRed"></i>
                </div>
                </div>
                <span className='mr-3 topTitle'>
                <b  className='pr-3'>عرض حسب </b>
                </span>
            </div>
        <div className='view0'>
            
        <span className='mr-2'>
            <b className='pr-3 topTitle'>طريقة العرض </b>
            </span>
            <div className='points d-flex'>
            
            <span className='mr-2'>
            خريطة&nbsp; 
            <i class="fas fa-map-marker-alt colorRed mx-1"></i></span>
            
            
            <span className='mr-2'>
             قائمة &nbsp;
             <i class="fas fa-bars colorRed mx-1"></i></span>

             <div className='mr-2 colorRed'>
             معرض &nbsp;
             <i class="fas fa-qrcode"></i></div>
            </div>
        </div>


            <div className='view0'>
                <span className='mr-2 topTitle'>
                <b  className='pr-3'>عرض حسب </b>
                </span>
                <div className='points d-flex'>
                
                <span className='mr-2 colorRed'>
                 الأقل سعرا&nbsp; 
                 <i class="fas fa-sort-amount-down mx-1"></i></span>
                
                <span className='mr-2'>
                 الأعلى سعرا&nbsp; <i class="fas colorRed fa-sort-amount-up mx-1"></i>
                </span>

                
                <div className='mr-2'>
                الأحدث&nbsp;<i class="far fa-clock colorRed"></i>
                </div>
                </div>
            </div>


        
            <div className='colorRed'>
                عدد الاعلانات: 1
            </div>

        </div>
    )
}

export default SubHeader;