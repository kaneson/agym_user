import React, { useEffect, useState, FC } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { InformationCircleOutline } from 'heroicons-react'

import Skeleton from 'react-loading-skeleton'

import { ShelfVideoProps } from './Content'

interface SideVideosListProps {
  video: ShelfVideoProps;
}

const SideVideosList:FC<SideVideosListProps> = ({ video }) => {
  const [useLoading, setUseLaoding] = useState(true);
  useEffect(() => { console.log(video,'side videos')},[video]);
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
      <Link href={`/video/${video.videoId}?channelId=${video.channelId}`} className="flex row h-[130px] hover:bg-gray-100 dark:hover:bg-[#202020] transition-all cursor-pointer">
        <Image 
          src={{
            src: video.thumbnails.default.url,
            width: video.thumbnails.default.width,
            height: video.thumbnails.default.height
          }} 
          alt="img" 
          width={200} 
          height={50} 
          className="rounded-lg mr-2" 
        />
        <div className='flex-col p-2'>
          <h1 className='font-md font-medium text-[#121212] dark:text-[#F9F9F9] mb-1'>
            { video.title }
          </h1>
          <div className='flex row items-center space-x-2'>
            <p className='text-sm font-medium text-gray-400'>
              { video.channelTitle }
            </p>
            <InformationCircleOutline size={12} />
          </div>
          <p className='font-ligth text-sm dark:text-gray-100'>
            27 mil visualizaçoes . há 23 horas
          </p>
          <div className='flex items-center justify-center w-[60px] bg-gray-300 dark:bg-[#252525] p-1 rounded-xl'>
            <span className='text-center xl:text-[12px] sm:text-[10x] font-medium text-[#121212] dark:text-[#F9F9F9]'>
              Novo!
            </span>
          </div>
        </div>
      </Link>
    </>
  )
}

export default SideVideosList