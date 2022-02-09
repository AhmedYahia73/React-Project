import Titles from '../Components/Projects/Titles/Titles';
import Content from '../Components/Projects/Content/Content';

let Project = () => {
    return(
        <>
        <Titles text = 'مشاريع في العاصمة الإدارية الجديدة' />

        <Content />
        <Titles text = 'للتسجيل في مشاريع خارج العاصمة اضغط هنا' />
        </>
    )
}

export default Project;