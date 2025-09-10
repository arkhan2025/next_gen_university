import React from 'react'
import './Contacts.css'
import msgicon from '../../assets/msg-icon.png'
import mailicon from '../../assets/mail-icon.png'
import phoneicon from '../../assets/phone-icon.png'
import locationicon from '../../assets/location-icon.png'
import arrow from '../../assets/white-arrow.png'

const Contacts = () => {
const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "bab83027-15f6-491e-833d-8fa8fe681d05");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='contact'>
        <div className='contactcol'>
    <h3>Send us a message<img src={msgicon} alt=''/></h3>
    <p>We’re here to answer your questions and hear your 
        thoughts. Fill out the form below, and our team will
         get back to you as soon as possible.</p>

        <ul>
            <li><img src={mailicon} alt=''/>ar.khan5766@gmail.com</li>
            <li><img src={phoneicon} alt=''/>01521768664</li>
            <li><img src={locationicon} alt=''/>307, Kawlar azar, Uttara, Dhaka - 1229</li>
        </ul>
        </div>
        <div className='contactcol'>
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type='text' name='name' placeholder='Enter your name' required/>
                <label>Your phone number</label>
                <input type='tel' name='phone' placeholder='Enter your mobile number' required/>
                <label>Your phone message here</label>
                <textarea name='message' rows="6" placeholder='Enter your message' required/>
                <button type='submit' className='btn darkbtn'>Submit now<img src={arrow} alt=''/></button>
            </form>
            <span>{result}</span>
        </div>
        </div>
  )
}

export default Contacts