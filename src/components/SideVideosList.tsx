import React, { useEffect, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import img from '../../public/images/video.jpg'

import { InformationCircleOutline } from 'heroicons-react'
import Skeleton from 'react-loading-skeleton'

const SideVideosList:React.FC = () => {
  const [useLoading, setUseLaoding] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setUseLaoding(false);
    }, 4000);
  },[]);
  
  if(useLoading) {
    return (
      <div className="flex row w-full">
        <Skeleton width={200} height={150} className="rounded-full" />
        <div className="flex-col my-2 mx-2">
          <Skeleton count={3} width={200} height={15} />
        </div>
      </div>
    )
  }

  return (
    <>
      <Link href={"/video"} className="flex row h-[130px] hover:bg-gray-100 transition-all cursor-pointer">
        <Image 
          src={img} 
          alt="img" 
          width={200} 
          height={50} 
          className="rounded-lg mr-2" 
        />
        <div className='flex-col p-2'>
          <h1 className='font-md font-medium text-[#121212] mb-1'>
            Lorem ipsum dollar sign tittle video text
          </h1>
          <div className='flex row items-center space-x-2'>
            <p className='text-sm font-medium text-gray-400'>
              channel name
            </p>
            <InformationCircleOutline size={12} />
          </div>
          <p className='font-ligth text-sm'>
            27 mil visualizaçoes . há 23 horas
          </p>
          <div className='flex items-center justify-center w-[60px] bg-gray-300 p-1 rounded-xl'>
            <span className='text-center xl:text-[12px] sm:text-[10x] font-medium text-[#121212] '>
              Novo!
            </span>
          </div>
        </div>
      </Link>
    </>
  )
}

export default SideVideosList