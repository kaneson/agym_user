import React from 'react'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 10,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 8,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 6,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 3,
  },
};

const MenuFilterTop = () => {
  
  const customLeftArrow = (
    <div className="absolute arrow-btn left-0 text-center py-3 cursor-pointer rounded-xl bg-violet-800">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: '#262626' }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
    </div>
  );

  const customRightArrow = (
    <div className="absolute arrow-btn right-0 text-center py-3 cursor-pointer rounded-xl bg-violet-800">
      <div style={{ position: 'relative', left: 25 }}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: '#262626' }}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>
    </div>
  );

  return (
    <Carousel 
      infinite
      autoPlay
      customLeftArrow={customLeftArrow} 
      customRightArrow={customRightArrow} 
      responsive={responsive} 
      itemClass="px-2"
    >
      {['Joelho','Mão','Ombro','Ginástica','Perna','Alongamento','Fortalecimento','Agachamento','Peito','Pescoço','Costas','Coxas'].map((item) => (
        <span key={item} className='flex rounded-full justify-center bg-gray-400 mx-2 py-1'>
          <p className="text-sm text-center font-medium text-white"> 
            { item } 
          </p>
        </span>
      ))}
    </Carousel>
  );
};

export default MenuFilterTop;