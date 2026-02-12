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
        await fetch(`${import.meta.env.VITE_BACKEND_URL}/contact`,{
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
        <h1>On Something <span className='spanf'>Cool </span>Together</h1>
        
       <div className='loader'></div>             
  </div> 
            
            
  <div className="form-container" >
        <form className="contact-form" onSubmit={handleSubmit}>
                 
                 <div className='inputWrapper'>
                    <input  className='textInput'
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    />
                 </div>
                 <div className='inputWrapper'>
                    <input className='textInput'
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                    />
                 </div>
                 <div className='inputWrapper'>
                   <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    required
                  /> 
                 </div>
            <button type="submit">Submit</button>
        </form>

  </div>
</section>
);
};

export default Contact;
