import React, { useEffect, useState } from "react"

import Image from "next/image"
import Link from 'next/link';

import Skeleton from "react-loading-skeleton";

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
  const [useLoading, setUseLoading] = useState(true);
  const [useViewsFormat, setUseViewsFormat] = useState("");

  useEffect(() => {
    views > 1000 && views < 10000000 
      ? setUseViewsFormat(`${Math.round(views/1000).toString()}k` )
      : views > 10000000 
      ? setUseViewsFormat(`${Math.round(views/10000000).toString}mil`) 
      : setUseViewsFormat(views.toString())
  },[views]);

  useEffect(() => {
    setTimeout(() => 
      setUseLoading(false), 
      4000
    );
  },[]);

  if(useLoading) {
    return (
      <div className="flex-col w-full">
        <Skeleton width={280} height={150} className="rounded-full" />
        <div className="flex row my-2 space-x-2">
          <Skeleton width={26} height={26} circle/>
          <Skeleton count={3} width={200} height={15} />
        </div>
      </div>
    )
  }

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
        <Image 
          src={{
            src: `/${avatar}`,
            width: 50,
            height: 50
          }}
          alt="image"
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
            { useViewsFormat }{' '} views - { date }hours
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Video