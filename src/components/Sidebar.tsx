import React from 'react'

import { 
  CogOutline, 
  GlobeOutline, 
  HomeOutline, 
  PlayOutline, 
  VideoCameraOutline 
} from 'heroicons-react';

const Sidebar:React.FC = () => {
  interface SideBarProps {
    title: string;
    icon: React.ReactNode;
  }

  const sidebarItems: SideBarProps[] = [
    { title: 'Home', icon: <HomeOutline className='h-6' /> },
    { title: 'Explorar', icon: <GlobeOutline className='h-6' /> },
    { title: 'Shorts', icon: <VideoCameraOutline className='h-6' /> },
    { title: 'Subscriptions', icon: <PlayOutline className='h-6' /> },
    { title: 'Library', icon: <CogOutline className='h-6' /> },
    { title: 'History', icon: <GlobeOutline className='h-6' /> }

  ]

  return (
    <div style={{ minWidth: '80px' }} className='w-[5%] h-[auto] flex flex-col bg-[#202020] items-center text-white transition-all'>
      {sidebarItems.map(({ icon, title }, idx) => (
        <div key={idx} className='flex flex-col justify-center cursor-pointer items-center hover:bg-gray-600 w-full h-20 mt-2'>
          { icon }
          <h4 className='text-[10px]'>
            { title }
          </h4>
        </div>
      ))}
    </div>
  )
}

export default Sidebar;