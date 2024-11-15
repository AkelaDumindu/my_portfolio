import React from 'react'
import './contact.css'; 


const Contact = () => {
  return (


    <section className="section">
      <div className="container">
        <div className="contact-outer mb-24">

        <div className="flex flex-col items-center mb-5">
            <h2 className="headline-2">Contact Me</h2>
          </div>
        <div className='contactform flex flex-col items-center' id="form">
    <form action="" id="contactForm" method="post">
  <span>Name</span>
  <input class="field" type="text" name="name" placeholder="Enter your name" /><br />
  
  <span>Email</span>
  <input class="field" type="email" name="email" placeholder="Enter your email" /><br />
  
  <span id="captcha"></span>
  
  <span>Message</span>
  <textarea class="field" name="message" placeholder="Enter your message"></textarea><br />
  
  <input type="submit" name="submit" value="Send e-mail" class="submit" />
</form>

      </div>
        </div>

     
        
      </div>
    </section>



    
  )
}

export default Contact