import './ContactUs.css';

let Contact = () => {
    return(
        <div className='Contact p-5 text-right mb-4'>
            <div className='text-center title pb-3'>
            راسلنا
            </div>

            <div className='mt-4 mb-2 inputName'>
                الاسم
            </div>
            <div>
            <input type='text' className='py-1 px-2' placeholder='... اكتب اسمك' />
            </div>
            <div className='mt-3 mb-2 inputName'>
                رقم الموبيل
            </div>
            <div>
            <input type='text' className='py-1 px-2' placeholder='...اكتب رقم الموبيل الخاص بك' />
            </div>
            <div className='mt-2 mb-2 DesName'>
                
            مثال: 
            <br />
            010********/011********/012********
            </div>
            <div className='mt-3 mb-2 inputName'>
                البريد الاليكترونى
            </div>
            <div>
            <input type='text' className='py-1 px-2' placeholder=' ...اكتب بريدك الاليكترونى' />
            </div>
            <div className='mt-3 mb-2 inputName'>
                الرسالة
            </div>
            <div>
            <textarea className='py-1 px-2' placeholder=' ...اكتب رسالتك' />
            <button className='ContactSend py-1 mt-2'>
                ارسال
            </button>

            </div>

        </div>
    )
}

export default Contact;