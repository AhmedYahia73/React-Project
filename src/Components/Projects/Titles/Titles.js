import './Titles.css';

let Titles = (props) => {
    return(
        <>
        <div className='ProjectTitles py-3 text-center'>
        { props.text }
        </div>
        </>
    )
}

export default Titles;