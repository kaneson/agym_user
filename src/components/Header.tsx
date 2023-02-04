import React from 'react'

import {
  MenuOutline,
  SearchOutline,
  MicrophoneOutline,
  ViewGridOutline,
  DotsVerticalOutline
} from 'heroicons-react'

import Image from 'next/image'
import Link from 'next/link'

interface HeaderProps {
  setShow: (value: any) => any;
  setSearch: (value: string) => void;
}

const Header: React.FC<HeaderProps> = ({ setShow, setSearch }) => {

  return (
    <div className='flex flex-1 justify-between items-center w-full h-10 px-6 py-8 bg-[#202020] text-white'>
      <div className='flex cursor-pointer'>
        <MenuOutline 
          className='h-7 mr-4'
          onClick={
            () => setShow((value:any) => !value)
          } 
        />
        {/* <Link href="/">
          <h1 className='text-xl font-bold'>
            YouTube
          </h1>
        </Link> */}
      </div>

      <div className='flex items-center w-full justify-center'>
        <form className='flex xl-w-[600px] items-center rounded-l-full'>
          <input 
            type="text" 
            placeholder='Search' 
            className='bg-black flex-1 h-10 placeholder:text-lg placeholder:relative placeholder:left-2 rounded-l-full z-10 cursor-pointer' 
            onChange={(event) => setSearch(event.target.value)}
          />
          <button className='h-10 w-16 items-center p-2 bg-[#313131] rounded-r-full justify-center flex'>
            <SearchOutline className='h-5' />
          </button>
        </form>

        <button className="bg-black h-10 w-10 ml-4 rounded-full flex justify-center items-center">
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