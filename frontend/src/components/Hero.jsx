import React from 'react'

const Hero = () => {
  return (
    <div className='relative h-[500px] flex items-center justify-center text-white'>
        <div className='absolute inset-0 bg-center'
        style={{
            backgroundImage: 'url("./herobg.png")',
          }}>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className='relative z-10 text-center px-4'>
            <h1 className='mb-8 font-playfair font-bold text-[92px] leading-[94.96px] text-center'>Our events gallery</h1>
            <p className='font-poppins font-normal text-[28px] leading-[42px tracking-wider text-center]'>Events at DBTR are filled with joyous occasions, cultural <br /> gatherings and learning opportunities that bring us all together.</p>
        </div>
    </div>
  )
}

export default Hero