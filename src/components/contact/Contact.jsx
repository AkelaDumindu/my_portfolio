import React from 'react'
import Swal from 'sweetalert2'
import './contact.css'; 


const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Success!",
        text: "Message Sent Successfully!",
        icon: "success"
      });
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (


    // <section className="section">
      <div className="container">
        <div className="contact-outer mb-24">

        <div className="flex flex-col items-center mb-5">
            <h2 className="headline-2">Contact Me</h2>
          </div>
        <div className='contactform flex flex-col items-center' id="form">
    <form action="" id="contactForm" onSubmit={onSubmit} className='form-outer'>
  <span>Name</span>
  <input className="field" type="text" name="name" placeholder="Enter your name" required/><br />
  
  <span>Email</span>
  <input className="field" type="email" name="email" placeholder="Enter your email" required /><br />
  
  <span id="captcha"></span>
  
  <span>Message</span>
  <textarea className="field" name="message" placeholder="Enter your message" required></textarea><br />
  
  <input type="submit" name="submit" value="Send e-mail" className="submit" />
</form>

      </div>
        </div>

     
        
      </div>
    // </section>



    
  )
}

export default Contact