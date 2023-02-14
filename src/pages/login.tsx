import { useRouter } from 'next/router';
import React, { useContext } from 'react'

const loginScreen = () => {  
  return (
    <div className='flex flex-1 justify-center items-center'>
      <button 
        className="text-lg bg-black text-white rounded-full my-40 font-medium p-4"
      >
        login
      </button>
    </div>
  )
}

export default loginScreen