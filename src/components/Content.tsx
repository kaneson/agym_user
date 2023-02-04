import { StaticImageData } from 'next/image'
import React, { lazy, useState } from 'react'

const ContentVideos = lazy(() => import('./ContentVideos'));
import FiltersTop from './FiltersTop'

import imageVideo from '../../public/images/video.jpg'

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

interface ContentProps {
  search: string;
}

const Content:React.FC<ContentProps> = ({ search }) => {

  const [videos] = useState<VideoProps[]>([
    { 
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos officiis perferendis animi sed ',
      description: 'description video', channelName: '' , date: '4' , image: imageVideo , url: '/video', views: 10070, 
      avatar: 'http://github.com/omanramalho42.png' 
    },
    { title: 'Lorem Javascript dolor sit amet consectetur adipisicing elit. Quos officiis perferendis animi sed ', description: 'description video', channelName: '' , date: '4' , image: imageVideo , url: '/video', views: 10, avatar: 'http://github.com/omanramalho42.png' },
    { title: 'Lorem ipsum React sit amet consectetur adipisicing elit. Quos officiis perferendis animi sed ', description: 'description video', channelName: '' , date: '4' , image: imageVideo , url: '/video', views: 10, avatar: 'http://github.com/omanramalho42.png' },
    { title: 'Lorem ipsum dolor Tailwind amet consectetur adipisicing elit. Quos officiis perferendis animi sed ', description: 'description video', channelName: '' , date: '4' , image: imageVideo , url: '/video', views: 10, avatar: 'http://github.com/omanramalho42.png' },
    { title: 'Lorem ipsum dolor sit Universal Code consectetur adipisicing elit. Quos officiis perferendis animi sed ', description: 'description video', channelName: '' , date: '4' , image: imageVideo , url: '/video', views: 10, avatar: 'http://github.com/omanramalho42.png' },
    { title: 'Lorem ipsum dolor sit Music amet Typesctypt adipisicing elit. Quos officiis perferendis animi sed ', description: 'description video', channelName: '' , date: '4' , image: imageVideo , url: '/video', views: 10, avatar: 'http://github.com/omanramalho42.png' },
    { title: 'Lorem ipsum dolor sit amet Music adipisicing elit. Quos officiis perferendis animi sed ', description: 'description video', channelName: '' , date: '4' , image: imageVideo , url: '/video', views: 10, avatar: 'http://github.com/omanramalho42.png' },
  ]);
  const [useFilterVideo, setUseFilterVideos] = useState("");

  return (
    <div className='w-[94%]'>
      <FiltersTop 
        setFilter={setUseFilterVideos} 
      />
      
      <ContentVideos 
        videos={videos} 
        filter={useFilterVideo}
        search={search}
      />
    </div>
  )
}

export default Content;