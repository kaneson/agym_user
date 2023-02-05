import React from 'react'

import logo from '../../public/images/logo.png';

import {
  MenuOutline,
  SearchOutline,
  MicrophoneOutline,
  ViewGridOutline,
  DotsVerticalOutline,
} from 'heroicons-react'

import Image from 'next/image'
import Link from 'next/link'

import Switcher from './Switcher';

import { motion } from 'framer-motion'

interface HeaderProps {
  setShow: (value: any) => any;
  setSearch: (value: string) => void;
}

const Header: React.FC<HeaderProps> = ({ 
  setShow, 
  setSearch
}) => {

  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)"
    }
  }

  return (
    <div className='flex flex-1 space-x-2 justify-between items-center w-full bg-transparent h-10 px-6 py-8'>
      <div className='mx-3 flex cursor-pointer items-center'>
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
              damping: 5,
              stiffness: 100,
              restDelta: 0.001
            }
          }}
        >
          <MenuOutline 
            className='h-7 mr-4 dark:text-[#FFF] color-[#121212] '
            onClick={
              () => setShow((value:any) => !value)
            } 
          />
        </motion.div>
        <Link href="/" className='container'>
          <motion.div
            className="box rounded-xl mx-4 transition hover:scale-105 mb-1"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              default: {
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01]
              },
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001
              }
            }}
          >
            <Image
              alt="logo" 
              src={logo}
              width={135}
              height={70}
              style={{ minWidth:50 }}
            />
          </motion.div>
        </Link>

        <motion.div 
          className='flex justify-center items-center relative top-1'
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            default: {
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01]
            },
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001
            }
          }}
        >
          <Switcher />
        </motion.div>
      </div>

      <div className='flex items-center w-full justify-center'>
        <motion.form 
          className='flex items-center justify-center rounded-l-full w-[50%]'
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            default: {
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01]
            },
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001
            }
          }}
        >
          <input 
            type="text" 
            placeholder='Search' 
            className='flex w-full shadow-md p-3 bg-[#ebedf3] dark:bg-[#404040] h-10 placeholder:text-lg dark:placeholder:text-white placeholder:relative placeholder:left-2 rounded-l-full z-10 cursor-pointer' 
            onChange={(event) => setSearch(event.target.value)}
          />
          <button className='h-10 w-16 items-center shadow-md p-2 bg-[#643ADC] text-white border-l-2 border-gray-300 dark:border-gray-900 rounded-r-full justify-center flex'>
            <SearchOutline className='h-5' />
          </button>
        </motion.form>

        <motion.button 
          className="bg-[#643ADC] text-white h-10 w-10 shadow-lg ml-4 rounded-full flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            default: {
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01]
            },
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001
            }
          }}
        >
          <MicrophoneOutline />
        </motion.button>
      </div>

      <div className='flex justify-between h-32'>
        <ViewGridOutline className='h-6 cursor-pointer' />
        <DotsVerticalOutline className='h-6 cursor-pointer' />
        <Image
          src={{
            src: "/www.github.com/omanramalho42.png",
            width: 50,
            height: 50
          }}
          alt=''
          width={50}
          height={50}
          style={{ objectFit: "contain" }}
          className="cursor-pointer rounded-full"
        />
      </div>

    </div>
  )
}

export default Header