import React from 'react'
import Slider from "react-slick";

const SpecialDishes = () => {
  const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    };
  return (    
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 py-16'>
        <div className='text-2xl space-y-6'>
            <p className='text-red'>Special Dishes</p>
            <h2 className='md:text-5xl text-4xl font-bold leading-sung md:w-[520px]'>Standout Dishes From Our Menu</h2>
        </div>
        {/* Slick list */}
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
        
    </div>
  )
}

export default SpecialDishes
