import React from 'react'

const Menu = () => {
  return (
    <div>
      <div className='section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%'>
      <div className='py-48 flex flex-col justify-center items-center gap-8'>           
        {/* Text side */}
        <div className='text-center space-y-7'>
          <h2 className='md:text-5xl text-4xl font-bold leading-sung'>
          For the Love of Delicious  <span className='text-green'>Food</span>
          </h2>
          <p className="text-[#4A4A4A] text-xl md:w-4/5 mx-auto">
              Come with family & feel the joy of mouthwatering food such as
              Greek Salad, Lasagne, Butternut Pumpkin, Tokusen Wagyu, Olivas
              Rellenas and more for a moderate cost
            </p>
          <div className='space-x-5'>
            <button className='btn bg-green text-white text-md font-semibold rounded-full px-8 py-4'>Order Now</button>
          </div>
        </div>                
      </div>
    </div>
    </div>
  )
}

export default Menu
