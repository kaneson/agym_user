import React from 'react'

import { 
  CogOutline, 
  GlobeOutline, 
  HomeOutline, 
  PlayOutline, 
  VideoCameraOutline 
} from 'heroicons-react';

import { motion } from'framer-motion';
import Link from 'next/link';

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
  ];

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      style={{ minWidth: '80px' }} 
      className='w-[5%] h-[100vh] flex flex-col items-center bg-[#643ADC] text-[#d9d9d9] dark:text-[#f9f9f9] transition-all'
    >
      {sidebarItems.map(({ icon, title }, idx) => (
        // <Link href={`/${title}`}>
          <motion.div 
            key={idx}
            variants={item}
            className='flex flex-col justify-center cursor-pointer items-center transition-all hover:bg-[#8e3adc] hover:text-white w-full h-20'
          >
            { icon }
            <h4 className='text-[10px]'>
              { title }
            </h4>
          </motion.div>
        // </Link>
      ))}
    </motion.div>
  )
}

export default Sidebar;