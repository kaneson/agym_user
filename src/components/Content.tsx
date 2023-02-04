import React, { lazy, useEffect, useState } from 'react'

import { StaticImageData } from 'next/image'

import axios from 'axios';

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

  useEffect(() => {

    const options = {
      method: 'GET',
      url: 'https://youtube-search-results.p.rapidapi.com/youtube-search/',
      params: {q: 'justin+bieber'},
      headers: {
        'X-RapidAPI-Key': 'f00cec9078msh573a61c68aa9a49p193ad3jsna8d9057c4752',
        'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com'
      }
    };

    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  },[])

  const [videos] = useState<VideoProps[]>([
    { 
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos officiis perferendis animi sed ',
      description: 'description video', channelName: 'Channel Name' , 
      date: '4' , 
      image: imageVideo , 
      url: '/video', 
      views: 10070, 
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
    <div className='w-[100%]'>
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