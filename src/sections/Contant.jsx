import { Mail, Phone, MapPin , Send } from 'lucide-react'
import React from 'react'
import Button from '../component/Button'


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
            <form className='space-y-6'>
              <div>
                <label  htmlFor='name' className='block text-sm font-medium mb-2' >Name</label>
                <input required placeholder='Your name...'   id='name' type='text' className='w-full px-4 py-3 bg-surface rounded-xl border border-border  focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all' />

              </div>

              <div>
                <label htmlFor='email' className='block text-sm font-medium mb-2' >Email</label>
                <input required placeholder='your@email...'  id='email'  type='email' className='w-full px-4 py-3 bg-surface rounded-xl border border-border  focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all' />

              </div>

              <div>
                <label  htmlFor='message' className='block text-sm font-medium mb-2' >Message</label>
                <textarea    rows={5}  required placeholder='Your message...' className='w-full px-4 py-3 bg-surface rounded-xl border border-border  focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none'/>

              </div>

              <Button className="w-full" type="submit" size='lg'> Send Message <Send/> </Button>

            </form>
          </div>
        </div>




      </div>



    </section>
  )
}

export default Contant