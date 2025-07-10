import React, { useState } from 'react';
import "./contact.css";

const interests=[
   "Landing Page",
    "E-commerce Website",
    "Portfolio",
    "Blog Website"
];


const Contact=()=>{

    const [formData, setFormData] = useState({name:'', email:'', message:''});
    
    const handleChange = (e) =>{
      const{ name,value }= e.target;
      setFormData(prev=> ({...prev, [name] : value }));
    };
    
    const handleSubmit=async(e)=>{
      e.preventDefault();
      try{
        await fetch(`${process.env.REACT_APP_BACKEND}/contact`,{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(formData)
        });
          alert("Message Sent Successfully");
      }catch(error){
        console.log("error submitting form");
      }
      setFormData({name:'', email:'', message:''});
  };


return(
<section className="contact">
  <div className="contact-text">
        <h1 >Let's Discuss</h1>
        <h1>On Something <span>Cool </span>Together</h1>
       <div className="temp-text">
          <p className="text-4">I'm interested in...</p>
          <div className="tags-container">
             {interests.map((interest, index) => (
                    <span className="tag-item" key={index}>
                        {interest}
                    </span>
              ))}
          </div>
       </div>                 
  </div> 
            
            
  <div className="form-container" >
        <form className="contact-form" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                  />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    required
                  />
            <button type="submit">Submit</button>
        </form>

  </div>
</section>
);
};

export default Contact;
