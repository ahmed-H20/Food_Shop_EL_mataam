import React from 'react'

const Testimonials = () => {
  return (
    <div className='section-container'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
            {/* image section */}
            <div className='md:w-1/2'>
                <img src="images/home/testimonials/testimonials.png" alt="" />
            </div>
            {/* text section */}
            <div className='md:w-1/2'>
                <p className='uppercase text-red font-semibold '>Testimonials</p>
                <h2 className='text-4xl md:text-5xl  w-[540px] font-bold leading-8'>What Our Customers Say About Us</h2>
                <blockquote className='my-5 text-secondary'>
                    “I had the pleasure of dining at Foodi last night,
                    and I'm still raving about the experience!
                    The attention to detail in presentation and service was impeccable”
                </blockquote>
                {/* Feedpack section */}
                <div className='flex items-center gap-4 flex-wrap'>
                    <div className="avatar-group -space-x-6 rtl:space-x-reverse">                        
                        <div className="avatar">
                            <div className="w-12">
                            <img src="images/home/testimonials/testimonial1.png" />
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-12">
                            <img src="images/home/testimonials/testimonial2.png" />
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-12">
                            <img src="images/home/testimonials/testimonial3.png" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h5 className='font-bold'>Customer Feedback</h5>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Testimonials
