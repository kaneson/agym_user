import React, { useEffect, useState } from "react"

import Image from "next/image"
import Link from 'next/link';

import Skeleton from "react-loading-skeleton";

import { ShelfVideoProps } from "./Content";

const Video = ({ 
  channelId,
  channelTitle,
  description,
  liveBroadcastContent,
  publishTime,
  publishedAt,
  videoId,
  thumbnails,
  title
} : ShelfVideoProps) => {
  
  const [useLoading, setUseLoading] = useState(true);
  const [useViewsFormat, setUseViewsFormat] = useState("");

  // useEffect(() => {
  //   if(views) {
  //     views > 1000 && views < 10000000 
  //       ? setUseViewsFormat(`${Math.round(views/1000).toString()}k` )
  //       : views > 10000000 
  //       ? setUseViewsFormat(`${Math.round(views/10000000).toString}mil`) 
  //       : setUseViewsFormat(views.toString())
  //   }
  // },[views]);

  useEffect(() => {
    if(!channelId) {
      setUseLoading(true);
    } else {
      setTimeout(() => 
        setUseLoading(false), 
        2000
      );
    }
  },[]);

  if(useLoading) {
    return (
      <div className="flex-col w-full">
        <Skeleton 
          width={280} 
          height={150} 
          containerClassName="rounded-xl" 
        />
        <div className="flex row my-2 space-x-2">
          <Skeleton width={26} height={26} circle />
          <Skeleton count={3} width={200} height={15} />
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gray-200 dark:bg-[#202020] rounded-lg w-[280px] mb-5 flex flex-col shadow-lg">
      <Link href={`/video/${videoId}?channelId=${channelId}`}>
        <Image 
          alt="thumbnail" 
          src={{ 
            src: thumbnails.default.url, 
            width: thumbnails.default.width, 
            height: thumbnails.default.height 
          }}
          className="rounded-t-xl w-full h-full transition hover:scale-105 hover:rounded-lg mb-1 shadow-md" 
        />
      </Link>
      <div className="flex justify-around p-1 mt-2" style={{ maxHeight: 150, minHeight: 135 }}>
        <Image 
          src={{ src:"http://github.com/omanramalho42.png", width: 40, height: 40 }}
          alt="image"
          className="rounded-full w-[11%] h-8" 
        />
        <div className="w-[80%] flex-col text-sm font-bold">
          <h3 className="text-sm text-[#121212] dark:text-[#F9F9F9]">
            { title }
          </h3>
          <h3 className="text-[12px] text-gray-500">
            { channelTitle }
          </h3>
          <h3 className="flex text-[12px] text-gray-600">
            { useViewsFormat }{' '} views - { publishTime || "" }hours
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Video