import React, { useEffect } from "react";

import Video from "./Video";

import { StaticImageData } from "next/image";

export interface VideoProps {
  title: string; 
  description: string; 
  image: StaticImageData; 
  url: string; 
  channelName: string;
  views: number;
  date: string;
  avatar: string;
}

interface VideosProps {
  videos: VideoProps[];
  filter?: string;
  search?: string;
}

const ContentVideos: React.FC<VideosProps> = ({ videos, filter = "", search = "" }) => {

  return (
    <div 
      className="grid justify-center gap-2 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 flex-wrap overflow-y-auto bg-[#181818] py-4 px-6"
    >
      {(
        videos.map(({ channelName, date, description, image, title, url, views, avatar }, idx) => 
        title.includes(search) && title.includes(filter)  
        && (
          <Video 
            key={idx}
            channelName={channelName}
            date={date}
            description={description}
            image={image}
            title={title}
            url={url}
            views={views}
            avatar={avatar}
          />
        ))
      )}
    </div>
  )
}

export default ContentVideos;