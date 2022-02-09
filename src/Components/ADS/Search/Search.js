import './Search.css';

let Search = () => {
    return(
        <div className='ADSSearch col-12 col-sm-6 col-lg-3 text-right mb-3'>
        <div className='TitleSearch mt-3'>
            البحث
            <i class="fas fa-search mx-2"></i></div>
        
        <div className='SearchPart'>
            <input type='text' className=' mt-2 mx-4' placeholder='عنوان الاعلان' />
            <div>
            <select className='mt-2 mx-4'>
                <option>
                    جميع المدن
                </option>
                <option>
                    العاصمة الجديدة
                </option>
            </select>
            </div>
            <div  className='mt-2 mb-3 mx-4 myDiv py-1 px-3' >
            جميع الأحياء
            </div>
        </div>

        
        <div className='TitleSearch'>
            نوع الاعلان
        </div>
        
        <div className='SearchPart TypesAds'>
            <div className='TypeAds' >
            <div className='SearchImg'>
            <img src="https://www.c-egy.com/images/apartment.svg" alt="شقة" class="pull-left" />
            </div>
            <div className='d-flex'>
                <span className='TypeAdsText'>شقة</span>
                <div className='MainBox ml-3 d-flex justify-content-center align-items-center'>
                    <div className='SubBox'>
                        
                    </div>
                </div>
            </div>
            </div>
            <div className='TypeAds' >
            <div className='SearchImg'>
            <img src="https://www.c-egy.com/images/villa.svg" alt="فيلا" class="pull-left" />
            </div>
            <div className='d-flex'>
            <span className='TypeAdsText'>فيلا</span>
                <div className='MainBox ml-3 d-flex justify-content-center align-items-center'>
                    <div className='SubBox'>
                        
                    </div>
                </div>
                </div></div>
            <div className='TypeAds' >
            <div className='SearchImg'>
            <img src="https://www.c-egy.com/images/ground.svg" alt="قطعة أرض" class="pull-left" />
            </div>
            <div className='d-flex'>
            <span className='TypeAdsText'>قطعة أرض</span>
            
            <div className='MainBox ml-3 d-flex justify-content-center align-items-center'>
                    <div className='SubBox'>
                        
                    </div>
                    </div>
                </div>
                </div>
            <div className='TypeAds' >
            <div className='SearchImg'>
            <img src="https://www.c-egy.com/images/marketplace.svg" alt="محل تجارى" class="pull-left" />
            </div>
            <div className='d-flex'>
            <span className='TypeAdsText'>محل تجارى</span>
                <div className='MainBox ml-3 d-flex justify-content-center align-items-center'>
                    <div className='SubBox'>
                        
                    </div>
                </div></div></div>
            <div className='TypeAds' >
            <div className='SearchImg'>
            <img src="https://www.c-egy.com/images/office.svg" alt="مقر ادارى" class="pull-left" />
            </div>
            <div className='d-flex'>
            <span className='TypeAdsText'>مقر ادارى</span>
                <div className='MainBox ml-3 d-flex justify-content-center align-items-center'>
                    <div className='SubBox'>
                        
                    </div>
                </div></div></div>
        </div>

        
        <div className='TitleSearch my-3'>
            السعر (جنيه مصرى) 
        </div>

        <div className='SearchRate'>
        <input type='range'  min='0' max='12000000' />
        <input type='range'  min='0' max='12000000' />
        </div>

        <div className='TitleSearch my-3'>
        المساحة (متر مربع)
        </div>


        <div className='SearchRate'>
        <input type='range'  min='0' max='12000000' />
        <input type='range'  min='0' max='12000000' />
        </div>

        <button className='btn btnSearch text-center py-1 btn-outline-danger mt-4 mb-3' >
        ابحث
        <i class="fas fa-search mx-2"></i>
        </button>
        </div>
    )
}

export default Search;