import React, { lazy, useEffect, useState } from 'react'

import { StaticImageData } from 'next/image'

import axios from 'axios';

const ContentVideos = lazy(() => import('./ContentVideos'));
import FiltersTop from './FiltersTop'

import imageVideo from '../../public/images/video.jpg'

export interface ShelfVideoProps {
  author: {
    name: string;
    channelID: string;
    url: string;
    bestAvatar: any;
    avatars: any;
  }
  badges: string[];
  bestThumbnail:  {
    url: string; 
    width?: number, 
    height?: number
  }
  description: null | string;
  duration: "UPCOMING" | string;
  id: string;
  isLive: boolean;
  isUpcoming: boolean;
  thumbnails: any[];
  title: string;
  type: string;
  upcoming: number;
  uploadedAt: null | string;
  url: string;
  views: number | null;
}

export interface ShelfVideosProps {
  items: ShelfVideosProps;
}

export interface VideoProps {
  description: string; 
  bestThumbnail: any; 
  title: string; 
  url: string; 
  views: null | number; 
  author: { 
    name: string;
    avatar: {
      url: string;
      width: number;
      heigth: number;
    } 
    url: string;
  }; 
  id: string;
  duration: string;
  badges?: any[];
  isLive?: string;
  isUpcoming?: string;
  subscribers: string;
  thumbnails: any[];
  type: string;
  verified: boolean;
  upcoming?: string;
  uploadedAt: string;
}

interface ContentProps {
  search: string;
}

const Content:React.FC<ContentProps> = ({ search }) => {
  const [useShelfVideos, setUseShelfVideos] = useState<any[]>([]);
  const [useVideos, setUseVideos] = useState<VideoProps[]>([
    { 
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos officiis perferendis animi sed ',
      description: 'description video', author: { avatar: { heigth: 50, width: 60, url: 'https://github.com/omanramlho42.png'}, name: 'Channel Name', url: '' }, 
      uploadedAt: '4' , 
      bestThumbnail: imageVideo , 
      url: '/video', 
      views: 10070,
      subscribers: "@channelName",
      type: 'viddeo',
      verified: true ,
      duration: '3',
      id: '1',
      thumbnails: [],
    },
    { 
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos officiis perferendis animi sed ',
      description: 'description video', author: { avatar: { heigth: 50, width: 60, url: 'http://github.com/omanramlho42.png'}, name: 'Channel Name', url: '' }, 
      uploadedAt: '4' , 
      bestThumbnail: imageVideo , 
      url: '/video', 
      views: 10070,
      subscribers: "@channelName",
      type: 'viddeo',
      verified: true ,
      duration: '3',
      id: '2',
      thumbnails: [],
    },
    { 
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos officiis perferendis animi sed ',
      description: 'description video', author: { avatar: { heigth: 50, width: 60, url: 'http://github.com/omanramlho42.png'}, name: 'Channel Name', url: '' }, 
      uploadedAt: '4' , 
      bestThumbnail: imageVideo , 
      url: '/video', 
      views: 10070,
      subscribers: "@channelName",
      type: 'viddeo',
      verified: true ,
      duration: '3',
      id: '3',
      thumbnails: [],
    },
    { 
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos officiis perferendis animi sed ',
      description: 'description video', author: { avatar: { heigth: 50, width: 60, url: 'http://github.com/omanramlho42.png'}, name: 'Channel Name', url: '' }, 
      uploadedAt: '4' , 
      bestThumbnail: imageVideo , 
      url: '/video', 
      views: 10070,
      subscribers: "@channelName",
      type: 'viddeo',
      verified: true ,
      duration: '3',
      id: '4',
      thumbnails: [],
    },
    ]);

  // useEffect(() => {

  //   const options = {
  //     method: 'GET',
  //     url: 'https://youtube-search-results.p.rapidapi.com/youtube-search/',
  //     params: { q: 'aurélio+alfieri' },
  //     headers: {
  //       'X-RapidAPI-Key': 'f00cec9078msh573a61c68aa9a49p193ad3jsna8d9057c4752',
  //       'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com'
  //     }
  //   };
    
  //   axios.request(options).then(function (response) {
  //     console.log(response,'reponse');
  //     setUseVideos(response.data.items);
  //     setUseShelfVideos(
  //       response.data.items.filter(
  //         (i: any) => i.type === 'shelf'
  //       )
  //     );
      
  //     if(useShelfVideos) {
  //       console.log(useShelfVideos?.map((i) => i.items));
  //       console.log(useShelfVideos,'videos');
  //     }
  //   }).catch(function (error) {
  //     console.error(error);
  //   });
  // },[])

  const [useFilterVideo, setUseFilterVideos] = useState("");

  return (
    <div className='w-[100%]'>
      <FiltersTop 
        setFilter={setUseFilterVideos} 
      />
      
      <ContentVideos 
        videos={useVideos} 
        filter={useFilterVideo}
        search={search}
      />
    </div>
  )
}

export default Content;