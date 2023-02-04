import React, { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import Link from 'next/link';

import { VideoProps } from "./ContentVideos";

const Video:React.FC<VideoProps> = ({ 
  title, 
  description, 
  views, 
  date, 
  channelName, 
  image, 
  url, 
  avatar 
}: VideoProps) => {

  const [viewsFormat, setViewsFormat] = useState("");

  useEffect(() => {
    views > 1000 && views < 10000000 
      ? setViewsFormat(`${Math.round(views/1000).toString()}k` )
      : views > 10000000 
      ? setViewsFormat(`${Math.round(views/10000000).toString}mil`) 
      : setViewsFormat(views.toString())
  },[views]);

  return (
    <div className="bg-[#181818] w-[280px] mb-5 flex flex-col">
      <Link href={url}>
        <Image 
          alt="thumbnail" 
          src={image}
          className="rounded-xl transition hover:scale-105 mb-1" 
        />
      </Link>
      <div className="flex justify-around mt-2">
        <img 
          src={avatar} 
          alt=""
          className="rounded-full w-[11%] h-8" 
        />
        <div className="w-[80%] flex-col text-sm font-bold">
          <h3 className="text-sm text-white">
            { title }
          </h3>
          <h3 className="text-[12px] text-gray-400">
            { channelName }
          </h3>
          <h3 className="flex text-[12px] text-gray-400">
            { viewsFormat }{' '} views - { date }hours
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Video