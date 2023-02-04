import React, { FC } from 'react'

import Sidebar from './Sidebar'
import Content from './Content'

interface MainProps {
  show: boolean; 
  search: string;
}

const Main:FC<MainProps> = ({ show, search }) => {
  return (
    <div className='flex flex-row'>
      {/* SIDEBAR */}
      {show && (
        <Sidebar />
      )}

      {/* CONTENT */}
      <Content search={search} />
    </div>
  )
}

export default Main