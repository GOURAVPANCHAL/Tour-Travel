import React, { useEffect, useState } from 'react'
import './Contact.css'
import contactBG from './contact-bg.jpg'
// import toast from 'react-hot-toast'
// import axios from 'axios'

function Contact() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}, [])

// const [formdata,setformdata] = useState({
//     Name : '',
//     Email : '' ,
//     PhoneNumber : '',
//     Message : ''
// })

// const handlechange = (e) =>{
//     const { name, value } = e.target;
//     setformdata((prevData) => ({
//         ...prevData,
//        [name]: value,
//     }))
// }

// const formdatafetch = async(e) =>{
//     e.preventDefault()
//     try {
//         const response = await axios.post('https://www.api.thedigitalgyan.in/api/v16/createcontact',formdata);
//         toast.success('Message Sent Successfully!')
//         console.log(response)
//     } catch (error) {
//         console.log(error)
//         toast.error("Error Occured")
//     }
// }

  return (
    <section className='contact-section'>
      <div className="container">
      <div className="contact-main-container">
            <div className="heading">
                <span>Get in Touch</span>
            </div>
            <div className="main-container">
                <div className="up">
                <div className="left">
                    <img src={contactBG} alt="" />
                </div>
                <form action="">
                    <div className="name same-field">
                    <input type="text" placeholder='Name' name='Name' required />
                    </div>
                    <div className="name same-field">
                    <input type="email" placeholder='Email' name='Email' required />
                    </div>
                    <div className="name same-field">
                    <input type="text" placeholder='Phone No.' name='PhoneNumber' required />
                    </div>
                    {/* <div className="name same-field">
                        <input type="text" placeholder='Subject' required />
                    </div> */}
                    <div className="textarea same-field">
                    <textarea placeholder='Message' name='Message' required></textarea>
                    </div>
                    <button className='contact-btn' type='submit'>Submit</button>
                </form>
                </div>
            </div>
        </div>
      </div>
      <div className="map-parent">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7003.292579738025!2d77.28693528631932!3d28.64036131879738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd82b490f80d%3A0xb8e60d7f396dc467!2sCO-OFFIZ%20Coworking%20Space%20in%20Preet%20Vihar!5e0!3m2!1sen!2sin!4v1713185824532!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>      </div>
    </section>
  )
}

export default Contact
