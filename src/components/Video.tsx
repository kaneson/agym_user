import React, { useEffect, useState } from "react"

import Image from "next/image"
import Link from 'next/link'

import Moment from "react-moment";

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
  },[channelId]);

  if(useLoading) {
    return (
      <div className="flex-col w-full">
        <Skeleton 
          width={350} 
          height={200} 
          containerClassName="w-full h-full rounded-2xl" 
        />
        <div className="flex row my-2 space-x-2">
          <Skeleton width={26} height={26} circle />
          <Skeleton count={3} width={200} height={15} />
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gray-200 dark:bg-[#202020] rounded-lg mb-5 flex flex-col shadow-lg">
      <Link href={`/video/${videoId}?channelId=${channelId}`}>
        <Image 
          alt="thumbnail" 
          src={{ 
            src: thumbnails.default.url, 
            width: thumbnails.default.width, 
            height: thumbnails.default.height 
          }}
          className="rounded-t-xl w-full h-full transition-all hover:scale-[1.03] hover:rounded-lg mb-1 shadow-md" 
        />
      </Link>
      <div className="flex justify-around p-1 mt-2" style={{ maxHeight: 150, minHeight: 135 }}>
        <Image 
          src={{ src:"https://ca.slack-edge.com/T02G05R726R-U02GFQN1MCH-8694f2745211-512", width: 40, height: 40 }}
          alt="image"
          className="rounded-full w-[11%] h-[100%]" 
        />
        <div className="w-[80%] flex-col text-sm font-bold">
          <h3 className="text-sm text-[#121212] dark:text-[#F9F9F9]">
            { title }
          </h3>
          <h3 className="text-[12px] text-gray-500">
            { channelTitle }
          </h3>
          <h3 className="flex text-[12px] text-gray-600">
            Categoria: Perna
          </h3>
          <h3 className="flex text-[12px] text-gray-600">
            Duração: 5 min
          </h3>
          
          {/* <h3 className="flex text-[12px] text-gray-600">
            { useViewsFormat }{' '} publicado - <Moment format="YYYY/MM/DD" date={publishTime} />
          </h3> */}
        </div>
      </div>
    </div>
  )
}

export default Video