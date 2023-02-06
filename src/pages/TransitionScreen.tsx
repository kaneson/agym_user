import React, { useEffect } from 'react'
import { NextPage } from 'next'

import { motion } from 'framer-motion'

import Image from 'next/image'

import logo from '../../public/images/logo.png';

import { useRouter } from 'next/router';


const TransitionScreen:NextPage = () => {
  const navigation = useRouter();

  useEffect(() => {
    setTimeout(() => {
      navigation.push('/');
    },4000)
  },[navigation]);
  
  return (
    <div 
      className='flex flex-1 my-[20%] items-center justify-center w-full h-full'
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          default: {
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01]
          },
          scale: {
            type: "spring",
            repeat: Infinity,
            damping: 5,
            stiffness: 100,
            restDelta: 0.001
          },
        }}
      >
        <Image
          alt="logo" 
          src={logo}
          width={200}
          height={200}
        />
      </motion.div>
    </div>
  )
}

export default TransitionScreen