import React from 'react'

const Forcast = () => {
  return (
    <div className='forcast w-full h-auto p-[10px] flex flex-wrap '>
      <div className='sub-forcast w-full relative min-h-[602px] flex flex-row justify-center  '>
        <div>
          <div className='absolute top-[60px] right-[130px] left-[3px] '><img className='w-[210px]' src="/iPhone12Pro1.png" alt="iphone 12 pro one" /></div>
          <div className='absolute top-[130px] left-[120px] z-10'><img className='w-[210px]' src="/iPhone12Pro.png" alt="iphone 12 pro one" /></div>
        </div>
        
      </div>
      <div className='text-white'>
        <h3 className='font-bold text-[#962F79] text-[25px] '>How it works</h3>
        <h1 className='text-[60px] font-medium my-[30px] ' >Viewing Long-term and Short-term forcast</h1>
        <p className=' text-[#767799] text-[18px] my-[80px] '>Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia et sint laboriosam sed ipsa sint ut voluptatum labore et possimus voluptas.</p>
        <button className='border-[2px] w-[200px] h-[60px] '>Explore Now</button>
      </div>
    </div>
  )
}

export default Forcast