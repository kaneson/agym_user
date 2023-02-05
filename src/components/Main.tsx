import React, { FC } from 'react'

import Sidebar from './Sidebar'
import Content from './Content'

interface MainProps {
  show: boolean; 
  search: string;
}

const Main:FC<MainProps> = ({ show, search }) => {
  return (
    <div className='w-full h-[100%] flex row'>
      {/* SIDEBAR */}
      {show && (
        <div
          className='flex z-10 xl:relative lg:relative absolute'
        >
          <Sidebar />
        </div>
      )}

      {/* CONTENT */}
      <div className={`flex-1 transition-all ${show && 'opacity-70'}  `}>
        <Content search={search} />
      </div>
    </div>
  )
}

export default Main