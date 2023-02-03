import React from "react";
import vg from "../Assests/vg.png";
import toast from "react-hot-toast";



const Contact = () => {


  
  return (
    <>
    <h1 className="form-title">Contact Us</h1>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14680.89929295096!2d72.6486786691992!3d23.088864397688265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e812693cd8fe9%3A0xb3c3c201ed50374!2sNoble%20Nagar%20Tenament%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1675323342585!5m2!1sen!2sin" 
     width="100%"
     height="400"
     style={{ border: 0 }}  
    allowFullScreen="" 
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade">

    </iframe>
    <div id="contact">
      <section>
        <form action = "https://formspree.io/f/mwkjvada" method="post">
          <h2>Contact Me</h2>
          <input
            type="text"
           
            name="username"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name	="email"
            placeholder="Your Email"
            required
           
          />
          <input
            type="text"
            name="message"
            placeholder="Your Message"
            required
        
          />
          <input type="submit" value="submit"></input>
          </form>

          
      </section>
      <aside>
        <img src={vg} alt="Graphics" />
      </aside>
    </div>
    </>
  );
};

export default Contact;