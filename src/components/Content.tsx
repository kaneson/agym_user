import React, { lazy, useEffect, useState } from 'react'

import axios from 'axios';

const ContentVideos = lazy(() => import('./ContentVideos'));
import FiltersTop from './FiltersTop'

import imageVideo from '../../public/images/video.jpg'

export interface ShelfVideoProps {
  channelId:string;
  channelTitle:string;
  description:string;
  liveBroadcastContent:string;
  publishTime:string;
  publishedAt:string;
  thumbnails: {
    default: {
      url: string;
      width: number; 
      height: number;
    }
    high: {
      url: string;
      width: number; 
      height: number;
    }
    medium: {
      url: string;
      width: number; 
      height: number;
    }
  }
  title:string;
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
  // const [useVideos, setUseVideos] = useState<VideoProps[]>([
  //   { 
  //     title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos officiis perferendis animi sed ',
  //     description: 'description video', author: { avatar: { heigth: 50, width: 60, url: 'https://github.com/omanramlho42.png'}, name: 'Channel Name', url: '' }, 
  //     uploadedAt: '4' , 
  //     bestThumbnail: imageVideo , 
  //     url: '/video', 
  //     views: 10070,
  //     subscribers: "@channelName",
  //     type: 'viddeo',
  //     verified: true ,
  //     duration: '3',
  //     id: '1',
  //     thumbnails: [],
  //   },
  //   { 
  //     title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos officiis perferendis animi sed ',
  //     description: 'description video', author: { avatar: { heigth: 50, width: 60, url: 'http://github.com/omanramlho42.png'}, name: 'Channel Name', url: '' }, 
  //     uploadedAt: '4' , 
  //     bestThumbnail: imageVideo , 
  //     url: '/video', 
  //     views: 10070,
  //     subscribers: "@channelName",
  //     type: 'viddeo',
  //     verified: true ,
  //     duration: '3',
  //     id: '2',
  //     thumbnails: [],
  //   },
  //   { 
  //     title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos officiis perferendis animi sed ',
  //     description: 'description video', author: { avatar: { heigth: 50, width: 60, url: 'http://github.com/omanramlho42.png'}, name: 'Channel Name', url: '' }, 
  //     uploadedAt: '4' , 
  //     bestThumbnail: imageVideo , 
  //     url: '/video', 
  //     views: 10070,
  //     subscribers: "@channelName",
  //     type: 'viddeo',
  //     verified: true ,
  //     duration: '3',
  //     id: '3',
  //     thumbnails: [],
  //   },
  //   { 
  //     title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos officiis perferendis animi sed ',
  //     description: 'description video', author: { avatar: { heigth: 50, width: 60, url: 'http://github.com/omanramlho42.png'}, name: 'Channel Name', url: '' }, 
  //     uploadedAt: '4' , 
  //     bestThumbnail: imageVideo , 
  //     url: '/video', 
  //     views: 10070,
  //     subscribers: "@channelName",
  //     type: 'viddeo',
  //     verified: true ,
  //     duration: '3',
  //     id: '4',
  //     thumbnails: [],
  //   },
  // ]);
  
    const API = 'AIzaSyAWnSk8uTxl2n8PUZ0dOUELLhFwcOF9l5k';
    const channelId = 'UCvphc_K3Cd0YFTygQsvKUEQ';

  useEffect(() => {
    // aurelioalfieri
    const options = {
      method: 'GET',
      url: `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&order=date&q=aurelio%2Balfieri&key=${API}`,
    };
    
    axios.request(options).then(function (response) {
      setUseShelfVideos(
        response.data.items.map(
          (i: any) => i.snippet
        )
      );
    }).catch(function (error) {
      console.error(error.message);
    });
  },[])

  const [useFilterVideo, setUseFilterVideos] = useState("");

  return (
    <div className='flex-1'>
      <FiltersTop 
        setFilter={setUseFilterVideos} 
      />
      
      <ContentVideos 
        videos={useShelfVideos} 
        filter={useFilterVideo}
        search={search}
      />
    </div>
  )
}

export default Content;