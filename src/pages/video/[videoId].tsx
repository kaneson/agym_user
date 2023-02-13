import React, { FC, useEffect, useReducer, useState } from 'react'

import { NextPage } from 'next'

import { 
  ArrowDownOutline,
  ArrowUpOutline,
  EmojiHappy,
  FilterOutline, 
  HeartOutline, 
  IdentificationOutline,
  ShareOutline, 
  TrashOutline
} from 'heroicons-react'

import SideVideosList from '../../components/SideVideosList'

import Image from 'next/image'

import { Helmet } from 'react-helmet'

import { Header } from '../../components'

import { motion } from 'framer-motion'

import Sidebar from '../../components/Sidebar'

import { useRouter } from 'next/router'

import axios from 'axios'

import { ShelfVideoProps } from '../../components/Content'
import { mockVideos } from '../../utils/mockVideos'

const Comment:React.FC = () => {
  return (
    <div className='flex row space-x-2 mt-2'>
      <div>
        <Image 
          src={{
            src: "/www.github.com/omanramalho42.png",
            width: 50,
            height: 50
          }} 
          alt="avatar" 
          width={40} 
          height={40} 
          className="rounded-full" 
        />
      </div>
      <div className='flex-col mt-3'>
        <div className='flex w-full justify-between items-center'>
          <div className='flex row justify-start dark:text-white items-center space-x-2 mb-2'>
            <IdentificationOutline size={12} />
            <p className='text-sm font-light'>
              fixado por oman ramalho
            </p>
          </div>
          
          <button 
            className='relative rounded-full p-2 text-sm text-center hover:bg-gray-200 dark:hover:bg-[#202020]'
          >
            ...
          </button>
        </div>
        <div className='flex row items-center space-x-2'>
          <button className='flex row justify-between space-x-1 items-center bg-gray-100 dark:bg-[#303030] py-1 px-2 rounded-full'>
            <p className='text-sm font-medium dark:text-white'>
              Oman plus
            </p>
            <IdentificationOutline size={14} />
          </button>
          <p className='text-sm font-light dark:text-white'>
            Há 3 horas
          </p>
        </div>
        <p className='text-md mb-4 dark:text-white'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil itaque sint ratione.
        </p>
        <div className='flex row items-center space-x-3 mt-2'>
          <button className='flex items-center space-x-1 dark:text-white'>
            <HeartOutline size={14} /> 
            <p className='font-medium text-sm'>
              18
            </p>
          </button>

          <button className='flex items-center dark:text-white'>
            <TrashOutline size={14} />
          </button>

          <p className='font-medium text-sm dark:text-white'>
            Responder
          </p>
        </div>
      </div>
    </div>
  )
}

interface WidgetChannelInfoProps {
  channelName: string;
  subscribers: number;
}

const WidgetChannelInfo: FC<WidgetChannelInfoProps> = ({ channelName, subscribers }) => {
  return (
    <motion.div 
      className='flex row items-center'
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <Image 
        src={{
          src: "/www.github.com/omanramalho42.png",
          width: 50,
          height: 50
        }} 
        alt="avatar" 
        className='rounded-full cursor-pointer dark:bg-white bg-[#121212]'
        width={40}
        height={40} 
      />
      <div className='flex-col mx-2'>
        <div className='flex row items-center'>
          <h2 className='font-medium cursor-pointer mr-2'>
            { channelName }
          </h2>
          <IdentificationOutline />
        </div>
        <p className='relative bottom-1'>
        {
          subscribers > 1000 && subscribers < 10000000 
          ? (<p>{Math.round(subscribers/1000)} mil</p>) 
          : subscribers > 10000000 
          ? <p>{Math.round(subscribers/10000000)} milhões</p> 
          : subscribers
        } { '' } inscritos
        </p>
      </div>
      <motion.button 
        className='flex py-3 ml-2 px-4 bg-gray-100 dark:bg-[#202020] dark:hover:bg-[#404040] hover:bg-gray-200 active:bg-gray-300 transition-all rounded-full text-center justify-center'
        variants={item}
      >
        <p className='font-medium text-sm'>
          Inscrever-se
        </p>
      </motion.button>
    </motion.div>
  )
}

interface FilterActionProps {
  title: 'Compartilhar' | 'Download' | 'Contribuir' | '...';
  icon?: React.ReactNode;
}


const WidgetActionFilters:React.FC = () => {
  const initialState = {
    like: 0,
    deslike: 0
  };

  const reducer = (state: any, action: any) => {
    switch(action.type) {
      case 'LIKE':
        return { ...state, like: state.like + 1 };
      case 'DESLIKE':
        return { ...state, deslike: state.deslike + 1 };
      default:
        return state;
    }
  }
  const [likes, dispatch] = useReducer(reducer, initialState);
  
  const handleLike = () => {
    dispatch({ type: 'LIKE' });
  }
  const handleDislike = () => {
    dispatch({ type: 'DESLIKE' });
  }

  const filtersAction: FilterActionProps[] = [
    { title: 'Compartilhar', icon: <ShareOutline className='mr-1 hover:scale-110 transition-all'/> },
    { title: 'Download', icon: <ShareOutline className='mr-1 hover:scale-110 transition-all'/> },
    { title: 'Contribuir', icon: <ShareOutline className='mr-1 hover:scale-110 transition-all'/> },
    { title: '...' },
  ];

  return (
    <motion.div 
      className='flex flex-wrap items-center row space-x-2 justify-start'
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.div 
        className='flex rounded-full my-2 h-[auto] bg-gray-200 dark:bg-gray-900'
        variants={item} 
      >
        <button 
          className='like flex justify-center items-center font-medium text-sm px-2 py-2 rounded-l-full text-center bg-gray-100 dark:hover:bg-[#404040] dark:bg-[#202020] hover:bg-gray-200 active:bg-gray-300 transition-all'
          onClick={handleLike}
        >
          <HeartOutline className='mr-1 hover:scale-110 transition-all' /> 
          {
            likes.like > 1000 && likes.like < 10000000 
            ? (<p>{Math.round(likes.like/1000)} mil</p>) 
            : likes.like > 10000000 
            ? <p>{Math.round(likes.like/10000000)} milhões</p> 
            : likes.like
          }
        </button>

        <div className='w-[1px] bg-gray-200 my-2 '/>
        
        <button 
          onClick={handleDislike}
          className='font-medium text-sm text-center px-2 rounded-r-full bg-gray-100 dark:bg-[#202020] hover:bg-gray-200  dark:hover:bg-[#404040] transition-all active:bg-gray-300'
        >
          <TrashOutline className='mx-1 hover:scale-110 transition-all' />
        </button>
      </motion.div>

      { filtersAction.map((i, idx) => (
        <motion.div 
          key={idx} 
          className='flex justify-around px-3 my-2 cursor-pointer rounded-full py-2 w-[auto] bg-gray-100 dark:bg-[#202020] hover:bg-gray-200 dark:hover:bg-[#404040] active:bg-gray-300 transition-all'
          variants={item}
        >
          { i?.icon }
          <button className='flex items-center font-medium text-sm mr-1 text-center justify-between'>
            <p>
              { i.title }
            </p>
          </button>
        </motion.div>
      ))}

    </motion.div>
  )
}

interface WidgetContentDescriptionProps {
  views: number;
  description: string;
  date: string;
} 

const WidgetContentDescription: FC<WidgetContentDescriptionProps> = ({ 
  views, 
  description, 
  date 
}) => {
  const [useFormatterView, setUseFormatterView] = useState<string>("");
  const [useShowMoreInfo, setUseShowMoreInfo] = useState<boolean>(false);

  useEffect(() => {
    if(views > 1000 && views < 1000000) {
      setUseFormatterView(`${Math.round(views/1000).toString()} mil}`)
    } else if (views >= 10000000) {
      setUseFormatterView(`${Math.round(views/10000000).toString()} milhões}`)
    } else {
      setUseFormatterView(views.toString())
    }
  },[views]);

  useEffect(() => {
    if(description.length > 20) {
      setUseShowMoreInfo(true)
    }
  },[description.length]);
  
  return (
    <div className='flex-col h-[auto] bg-gray-100 dark:bg-[#121212] p-3 rounded-lg my-4'>
      <h4 className='font-medium dark:text-white'>
        {  useFormatterView } {' '} visualizações há { date } horas
      </h4>
      <p className='text-md mb-5 dark:text-white'>
        { description.length > 80 ? description.slice(0,80).concat("...") : description  }
      </p>
      { useShowMoreInfo && description.length > 0 &&(
        <button>
          <span className='font-medium cursor-pointer dark:text-white'>
            Mostrar mais...
          </span>
        </button>
      )}
    </div>
  )
}

interface WidgetCommentAreaProps {
  value: boolean;
  onClick: (value: any) => any;
}

const WidgetCommentArea: FC<WidgetCommentAreaProps> = ({ onClick, value }) => {
  const [useComment, setUseComment] = useState<string>("");
  const [useShowComment, setUseShowComment] = useState<boolean>(false);
  
  return (
    <>
      <div className='flex row items-center justify-start space-x-5 my-5'>
        <h5 className='text-lg dark:text-white'>
          621 comentarios
        </h5>
        <div className='flex items-center font-medium cursor-pointer'>
          <FilterOutline className='dark:text-white text-black' />
          <p className='dark:text-white'>
            Ordenar por
          </p>
        </div>
      </div>

      <div className='flex items-center space-x-3 my-5'>
        <Image 
          src={{
            src: "/www.github.com/omanramalho42.png",
            width: 50,
            height: 50
          }}
          alt="avatar"
          width={40} 
          height={40} 
          className="rounded-full dark:bg-white bg-[#121212]" 
        />
        <form className='flex-col w-full space-y-2' action='/' method='post' onSubmit={() => {}}>
          <div className='flex border-b-2 rounded-sm'>
            <input 
              onClick={
                () => setUseShowComment((value) => !value)
              }
              type="text" 
              placeholder='Adicionar comentario' 
              className='w-full dark:placeholder:text-white'
              style={{ all: 'unset', width: '100%' }}
              onChange={
                (event) => setUseComment(event.target.value)
              } 
            />
          </div>
            {useShowComment && (
              <div className='flex w-full transition-all row justify-between items-center'>
                <EmojiHappy size={24} className="dark:text-[#FFF]" />
                <div className='flex row space-x-4'>
                  <button 
                    type='button'
                    className='py-2 px-4 rounded-lg' 
                    onClick={() => {
                      setUseComment("")
                      setUseShowComment(() => false)
                    }}
                  >
                    <p className='font-medium text-black dark:text-white text-md'>
                      Cancelar
                    </p>
                  </button>
                  <button 
                    className='bg-gray-200 dark:bg-[#202020] py-2 px-4 rounded-lg' 
                    type='submit'
                  >
                    <p 
                      className='font-medium text-black text-md dark:text-white'
                    >
                      Comentar
                    </p>
                  </button>
                </div>
              </div>
            )}
        </form>
      </div>

      {/* Comments */}
      {useComment ? (
        <>
          <Comment />

          <div className='flex-col mt-3 mx-10'>
            <button
              onClick={
                () => onClick((value: any) => !value)
              } 
              className='flex items-center text-slate-700 hover:bg-[#505050] dark:hover:bg-[#202020] hover:text-white dark:text-white transition-all rounded-full p-2'>
              { value ? (
                <ArrowDownOutline size={12} className="mr-1" />
              ) : (
                <ArrowUpOutline size={12} className="mr-1" />
              )}
              2 Respostas
            </button>
            
            {value && (
              <div className='mx-5'>
                <Comment />
              </div>
            )}
          </div>
        </>
      ) : (
        <div className='flex justify-center'>
          <p className='font-light text-sm dark:text-white'>
            Seja o primeiro a comentar
          </p>
        </div>
      )}
    </>
  )
}

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

interface VideoProps {
  categoryId: string;
  channelId: string;
  channelTitle: string;
  defaultAudioLanguage: string;
  defaultLanguage:string;
  description: string;
  liveBroadcastContent: string;
  localized: {
    title: string; 
    description: string;
  }
  publishedAt: string;
  thumbnails: {
    default: {
      url: string;
      height: number;
      width: number;
    };
    medium: {
      url: string;
      height: number;
      width: number;
    }; 
    high: {
      url: string;
      height: number;
      width: number;
    }; 
    standard: {
      url: string;
      height: number;
      width: number;
    }; 
    maxres: {
      url: string;
      height: number;
      width: number;
    };
  }
title:string
}

const Video:NextPage = () => {
  const [useShowCommentResponse, setUseShowCommentResponse] = useState(false);
  const [useShowSidebar, setUseShowSidebar] = useState(false);

  const [videoInfo, setVideoInfo] = useState<VideoProps>();
  const [videosList, setVideosList] = useState<ShelfVideoProps[]>([]);

  const { query }:any = useRouter();
  const API = 'AIzaSyAWnSk8uTxl2n8PUZ0dOUELLhFwcOF9l5k';

  // useEffect(() => {
  //   console.log(query,'query');

  //   let nextPage = "";
  //   const options = {
  //     method: 'GET',
  //     url: `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${query.channel}&order=date&q=aurelio%2Balfieri&key=${API}&pageToken=${nextPage}`,
  //   };
    
  //   axios.request(options).then(function (response) {
  //     let array: ShelfVideoProps[] = [];
  //     response.data.items.map(
  //       (i: any) => {
  //         let videoId = i.id.videoId;
  //         let { 
  //           channelId, 
  //           channelTitle, 
  //           description, 
  //           kind, 
  //           liveBroadcastContent, 
  //           publishTime, 
  //           publishedAt, 
  //           thumbnails, 
  //           title 
  //         }: ShelfVideoProps = i.snippet;
          
  //         array.push({ 
  //           channelId,
  //           channelTitle,
  //           description,
  //           kind,
  //           liveBroadcastContent,
  //           publishedAt,
  //           publishTime,
  //           thumbnails,
  //           title,
  //           videoId 
  //         });
  //       }
  //     )

  //     setVideosList(array);
  //   }).catch(function (error) {
  //     console.error(error.message);
  //   });
  // },[query]);

  useEffect(() => {
    let nextPage = "";
    const options = {
      method: 'GET',
      url: `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${query.videoId}&key=${API}`,
    };
    
    axios.request(options).then(function (response) {
      setVideoInfo(
        response.data.items[0].snippet
      );
    }).catch(function (error) {
      console.error(error.message);
    });
  },[query]);

  useEffect(() => { 
    console.log(query.videoId,'query');
    console.log(videoInfo,'videoInfo'); 
  },[query,videoInfo]);

  return (
    <motion.div 
      className='flex-col dark:bg-[#121212] bg-white' 
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <Header 
        setSearch={() => {}} 
        setShow={setUseShowSidebar} 
      />

      <div className='absolute'>
        {useShowSidebar && (
          <Sidebar />
        )}
      </div>
      
      <Helmet>
        <title>Video</title>
      </Helmet>

      <motion.div 
        className='flex-1' 
        variants={item}
      >
        <iframe 
          className='w-full xl:h-[600px] sm:h-[500px] bg-[black]'
          style={{ minHeight: '400px' }}
          src={`https://www.youtube.com/embed/${query.videoId}`}
          //@ts-ignore
          frameBorder='0'
          allow='autoplay; encrypted-media'
          allowFullScreen
          title='video'
        />
      </motion.div>

      <div className='grid xl:grid-cols-3 md:grid-cols-1 my-2 mx-[5%]' >
        <div className='col px-4 lg:col-span-2'>  
          <h3 className='xl:text-3xl sm:text-2xl font-medium mb-5 dark:text-white'>
            { videoInfo?.title }
          </h3>

          <div className='flex flex-wrap row justify-between space-x-2 dark:text-white'>       
            <WidgetChannelInfo 
              channelName={videoInfo?.channelTitle || ""} 
              subscribers={80}
            />
            <WidgetActionFilters />
          </div>

          <WidgetContentDescription 
            date='3'
            description={videoInfo?.description || ""}
            views={30}
          />

          <WidgetCommentArea 
            value={useShowCommentResponse} 
            onClick={setUseShowCommentResponse} 
          />
        </div>
        
        {/* AREA LATERAL DIREITA VIDEOS DE REPRODUÇÃO */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="visible"
          className='flex-col flex-1 space-y-4 my-5'
        >
          {mockVideos.map((video) => (
            <motion.div key={video.videoId} variants={item}>
              <SideVideosList 
                video={video} 
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
      
    </motion.div>
  )
}

export default Video