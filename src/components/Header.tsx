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

interface HeaderProps {
  setShow: (value: any) => any;
  setSearch: (value: string) => void;
}

const Header: React.FC<HeaderProps> = ({ 
  setShow, 
  setSearch
}) => {

  return (
    <div className='flex flex-1 space-x-2 justify-between items-center w-full bg-gray-100 h-10 px-6 py-8'>
      <div className='mx-3 flex cursor-pointer items-center'>
        <MenuOutline 
          className='h-7 mr-4 color-[#121212]'
          onClick={
            () => setShow((value:any) => !value)
          } 
        />
        <Link href="/">
          <Image 
            alt="logo" 
            src={logo}
            width={90}
            height={50}
            style={{ minWidth:100 }}
            className="rounded-xl mx-4 transition hover:scale-105 mb-1" 
          />
        </Link>
        <Switcher />
      </div>

      <div className='flex items-center w-full justify-center'>
        <form className='flex items-center justify-center rounded-l-full w-[50%]'>
          <input 
            type="text" 
            placeholder='Search' 
            className='flex w-full shadow-md p-3 bg-slate-200 h-10 placeholder:text-lg placeholder:relative placeholder:left-2 rounded-l-full z-10 cursor-pointer' 
            onChange={(event) => setSearch(event.target.value)}
          />
          <button className='h-10 w-16 items-center shadow-md p-2 bg-slate-200 border-l-2 border-gray-300 rounded-r-full justify-center flex'>
            <SearchOutline className='h-5' />
          </button>
        </form>

        <button className="bg-gray-200 h-10 w-10 shadow-lg ml-4 rounded-full flex justify-center items-center">
          <MicrophoneOutline />
        </button>
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