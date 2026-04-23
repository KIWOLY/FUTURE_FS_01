import { Mail, Phone, MapPin , Send } from 'lucide-react'
import React, { useState } from 'react'
import Button from '../component/Button'
import emailjs from '@emailjs/browser';


const contactInfo = [
  {
    Icon: Mail,
    label: "Email",
    value: "ikiwoly@gmail.com",
    href: "mailto:ikiwoly@gmail.com"
  },

  {
    Icon: Phone,
    label: "Phone",
    value: "+255 654 207 970",
    href: "tel:+255654207970"
  },
  {
    Icon: MapPin,
    label: "Location",
    value: "Dar es Salaam, Tanzania",
    href: "https://www.google.com/maps/place/Dar+es+Salaam,+Tanzania/@-6.7923544,39.2083284,11z/data=!3m1!4b1!4m5!3m4!1s0x185c4b8e9d9fbb7:0x2a1c8e5e5e5e5e5!8m2!3d-6.7923544!4d39.2083284"
  }
]

const Contant = () => {
  const [formData , setFormData] = useState({
    name : "",
    email : "",
    message : ""
  })

  const[isSubmitting , setIsSubmitting] = useState({type:null , message : ""});
  const[isLoading , setIsLoading] = useState(false);

  
  const handleChange = async (e) => {
   
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSubmitting({type:null , message : ""});

    try{
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if(!serviceId || !templateId || !publicKey){
        throw new Error("Email service is not properly configured. Please try again later.");
      }

      await emailjs.send(serviceId , templateId , {
        name : formData.name,
        email : formData.email,
        message : formData.message
      } , publicKey);

      setIsSubmitting({type:"success" , message : "Message sent successfully!"});
      setFormData({
        name : "",
        email : "",
        message : ""
      })

    }
    catch(error){
      console.error("Failed to send message:", error);
      setIsSubmitting({type:"error" , message : "Failed to send message. Please try again later."});

    }
    finally{
      setIsLoading(false);
    }

  
  
  }

  return (
    <section id='contact' className='py-32 relative overflow-hidden'>
      <div className='absolute top-0 left-0 w-full h-full'>
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl' />
        <div className='absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl' />
      </div>

      <div className='container mx-auto px-6 relative z-10' >
        {/* section header */}
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <span className='text-secondary-foreground text-sm font-medium '>Get In Touch</span>
          <h2 className='text-secondary-foreground text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in'>Let's build{" "}
            <span className='font-serif italic font-normal text-white'>something great</span>
          </h2>
          <p className='text-muted-foreground animate-fade-in animation-delay-200' >
            Have a project in mind? Let’s talk. Send me a message and let’s build something impactful together.
          </p>

        </div>
        <div className='grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto' >
          <div className='glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-200'>
            <form className='space-y-6' onSubmit={handleSubmit}>
              <div>
                <label  htmlFor='name' className='block text-sm font-medium mb-2' >Name</label>
                <input value={formData.name} onChange={handleChange} required placeholder='Your name...' name='name'  id='name' type='text' className='w-full px-4 py-3 bg-surface rounded-xl border border-border  focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all' />

              </div>

              <div>
                <label htmlFor='email' className='block text-sm font-medium mb-2' >Email</label>
                <input value={formData.email} onChange={handleChange} required placeholder='your@email...' name='email' id='email'  type='email' className='w-full px-4 py-3 bg-surface rounded-xl border border-border  focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all' />

              </div>

              <div>
                <label  htmlFor='message' className='block text-sm font-medium mb-2' >Message</label>
                <textarea value={formData.message} onChange={handleChange}  name='message' id='message'  rows={5}  required placeholder='Your message...' className='w-full px-4 py-3 bg-surface rounded-xl border border-border  focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none'/>

              </div>

              <Button className="w-full" type="submit" size='lg' disabled={isLoading}>
                {isLoading ? <>Sending... </> : <>Send Message <Send className='w-5 h-5' /></> }
              </Button>
              { true && (
                <p className={`text-sm font-medium mt-4 ${isSubmitting.type === "success" ? "text-green-500" : "text-red-500"}`}>
                  {isSubmitting.message}
                </p>
              ) 

              }

            </form>
          </div>
        </div>




      </div>



    </section>
  )
}

export default Contant