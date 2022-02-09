import './Video.css';

let Video = () => {
    return(
        <div className='VideoCity text-center py-5 px-3'>
            <div className='TextVideo'>
              الفيديو التعريفى للعاصمة الادارية الجديدة
            </div>
            <div className='MyVideo'>
            <iframe className = 'IframeVideo' src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FTheNewCapitalEG%2Fvideos%2F607053222816630%2F&show_text=0&width=560" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
        </div>
        </div>
    )
}

export default Video;