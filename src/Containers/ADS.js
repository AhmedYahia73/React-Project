import ADSHeader from '../Components/ADS/ADSHeader/ADSHeader';
import SubHeader from '../Components/ADS/SubHeader/SubHeader';
import Search from '../Components/ADS/Search/Search';
import ADS from '../Components/ADS/ADS/ADS';

let Header = () => {
    return(
        <>
        <ADSHeader />
        <div className='MainAds'>
        <SubHeader />
        <div className='row d-flex justify-content-between'>
        <Search />
        <div className='col-12 col-sm-6 col-lg-9 row MainADS0'>
        <ADS />
        </div>
        </div>
        </div>
        </>
    )
}

export default Header;