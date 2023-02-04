import React, { FC, useCallback, useEffect, useReducer, useState } from 'react'
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

import SideVideosList from '../components/SideVideosList'

import { Helmet } from 'react-helmet'

import { Header } from '../components'

const Comment:React.FC = () => {
  return (
    <div className='flex row space-x-2 mt-2'>
      <div>
        <img 
          src="http://github.com/omanramalho42.png" 
          alt="avatar" 
          width={40} 
          height={40} 
          className="rounded-full" 
        />
      </div>
      <div className='flex-col mt-3'>
        <div className='flex w-full justify-between items-center'>
          <div className='flex row justify-start items-center space-x-2 mb-2'>
            <IdentificationOutline size={12} />
            <p className='text-sm font-light'>
              fixado por oman ramalho
            </p>
          </div>
          
          <button 
            className='relative rounded-full p-2 text-sm text-center hover:bg-gray-200'
          >
            ...
          </button>
        </div>
        <div className='flex row items-center space-x-2'>
          <button className='flex row justify-between space-x-1 items-center bg-gray-100 py-1 px-2 rounded-full'>
            <p className='text-sm font-medium'>
              Oman plus
            </p>
            <IdentificationOutline size={14} />
          </button>
          <p className='text-sm font-light'>
            Há 3 horas
          </p>
        </div>
        <p className='text-md mb-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil itaque sint ratione.
        </p>
        <div className='flex row items-center space-x-3 mt-2'>
          <button className='flex items-center space-x-1'>
            <HeartOutline size={14} /> 
            <p className='font-medium text-sm'>
              18
            </p>
          </button>

          <button className='flex items-center'>
            <TrashOutline size={14} />
          </button>

          <p className='font-medium text-sm'>
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

const WidgetChannelInfo: FC<WidgetChannelInfoProps> = ({ channelName, subscribers }: WidgetChannelInfoProps) => {
  return (
    <div className='flex row items-center'>
      <img 
        src="https://github.com/omanramalho42.png" 
        alt="avatar" 
        className='rounded-full cursor-pointer'
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
      <button className='flex py-3 ml-2 px-4 bg-gray-100 hover:bg-gray-200 active:bg-gray-300 transition-all rounded-full text-center justify-center'>
        <p className='font-medium text-sm'>
          Inscrever-se
        </p>
      </button>
    </div>
  )
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

  interface FilterActionProps {
    title: 'Compartilhar' | 'Download' | 'Contribuir' | '...';
    icon?: React.ReactNode;
  }

  const filtersAction: FilterActionProps[] = [
    { title: 'Compartilhar', icon: <ShareOutline className='mr-1 hover:scale-110 transition-all'/> },
    { title: 'Download', icon: <ShareOutline className='mr-1 hover:scale-110 transition-all'/> },
    { title: 'Contribuir', icon: <ShareOutline className='mr-1 hover:scale-110 transition-all'/> },
    { title: '...' },
  ];

  useEffect(() => { console.log(likes,'likes') },[likes])

  return (
    <div className='flex flex-wrap items-center row space-x-2 justify-start'>
      <div className='flex rounded-full my-2 h-[auto] bg-gray-200'>
        <button 
          className='like flex justify-center items-center font-medium text-sm px-2 py-2 rounded-l-full text-center bg-gray-100 hover:bg-gray-200 active:bg-gray-300 transition-all'
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
        <button onClick={handleDislike} className='font-medium text-sm text-center px-2 rounded-r-full bg-gray-100 hover:bg-gray-200 transition-all active:bg-gray-300'>
          <TrashOutline className='mx-1 hover:scale-110 transition-all' />
        </button>
      </div>

      {filtersAction.map((i, idx) => (
        <div key={idx} className='flex justify-around px-3 my-2 rounded-full py-2 w-[auto] bg-gray-100 hover:bg-gray-200 active:bg-gray-300 transition-all'>
          { i?.icon }
          <button className='flex items-center font-medium text-sm mr-1 text-center justify-between'>
            <p>
              { i.title }
            </p>
          </button>
        </div>
      ))}

    </div>
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
}: WidgetContentDescriptionProps) => {
  const [formatterView, setFormatterView] = useState<string>("");
  const [showMoreInfo, setShowMoreInfo] = useState<boolean>(false);

  useEffect(() => {
    if(views > 1000 && views < 1000000) {
      setFormatterView(`${Math.round(views/1000).toString()} mil}`)
    } else if (views >= 10000000) {
      setFormatterView(`${Math.round(views/10000000).toString()} milhões}`)
    } else {
      setFormatterView(views.toString())
    }
  },[views]);

  useEffect(() => {
    if(description.length > 20) {
      setShowMoreInfo(true)
    }
  },[])

  return (
    <div className='flex-col h-[auto] bg-gray-100 p-3 rounded-lg my-4'>
      <h4 className='font-medium'>
        {  formatterView } {' '} visualizações há { date } horas
      </h4>
      <p className='text-md mb-5'>
        { description.length > 80 ? description.slice(0,80).concat("...") : description  }
      </p>
      { showMoreInfo && (
        <button>
          <span className='font-medium cursor-pointer'>
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

const WidgetCommentArea: FC<WidgetCommentAreaProps> = ({ onClick, value }: WidgetCommentAreaProps) => {
  const [comment, setComment] = useState<string>("");
  const [showComment, setShowComment] = useState<boolean>(false);
  
  return (
    <>
      <div className='flex row items-center justify-start space-x-5 my-5'>
        <h5 className='text-lg'>
          621 comentarios
        </h5>
        <div className='flex items-center font-medium cursor-pointer'>
          <FilterOutline />
          <p>Ordenar por</p>
        </div>
      </div>

      <div className='flex items-center space-x-3 my-5'>
        <img src="http://github.com/omanramalho42.png" width={40} height={40} className="rounded-full" />
        <form className='flex-col w-full space-y-2' action='/' method='post' onSubmit={() => {}}>
          <div className='flex border-b-2 rounded-sm'>
            <input 
              onClick={
                () => setShowComment((value) => !value)
              }
              type="text" 
              placeholder='Adicionar comentario' 
              className='w-full'
              style={{ all: 'unset', width: '100%' }}
              onChange={
                (event) => setComment(event.target.value)
              } 
            />
          </div>
            {showComment && (
              <div className='flex w-full transition-all row justify-between items-center'>
                <EmojiHappy size={24} />
                <div className='flex row space-x-4'>
                  <button 
                    type='button'
                    className='py-2 px-4 rounded-lg' 
                    onClick={() => {
                      setComment("")
                      setShowComment(() => false)
                    }}
                  >
                    <p className='font-medium text-black text-md'>
                      Cancelar
                    </p>
                  </button>
                  <button 
                    className='bg-gray-200 py-2 px-4 rounded-lg' 
                    type='submit'
                  >
                    <p 
                      className='font-medium text-black text-md'
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
      {comment ? (
        <>
          <Comment />

          <div className='flex-col mt-3 mx-10'>
            <button
              onClick={
                () => onClick((value: any) => !value)
              } 
              className='flex items-center text-slate-700 hover:bg-slate-700 hover:text-white transition-all rounded-full p-2'>
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
          <p className='font-light text-sm'>
            Seja o primeiro a comentar
          </p>
        </div>
      )}
    </>
  )
}

const video:NextPage = () => {
  const [showCommentResponse, setShowCommentResponse] = useState(false);
  const [title, setTile] = useState<string>("Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae non obcaecati.")

  return (
    <div className='flex-col' >
      {/* //@ts-ignore */}
      <Header setShow={() => {}} />
      
      <Helmet>
        <title>Video</title>
      </Helmet>

      <div className='flex-1' >
        <video className='w-full xl:h-[600px] sm:h-[500px] bg-[black]'>
          <source>
          </source>
        </video>
      </div>

      <div className='grid xl:grid-cols-3 md:grid-cols-1 my-2 mx-[5%]' >
        {/* AREA CENTRAL COMENTARIOS E VIDEO */}
        <div className='col px-4 lg:col-span-2'>  
          <h3 className='xl:text-3xl sm:text-2xl font-medium mb-5'>
            { title }
          </h3>

          <div className='flex flex-wrap row justify-between space-x-2'>       
            <WidgetChannelInfo 
              channelName='Channel name' 
              subscribers={80} 
            />
            <WidgetActionFilters />
          </div>

          <WidgetContentDescription 
            date='3'
            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit ex incidunt esse, libero sequi dolorum iure? Iste reprehenderit illum eos aut facilis, nostrum excepturi incidunt voluptate deserunt, rerum autem id.'
            views={30}
          />

          <WidgetCommentArea 
            value={showCommentResponse} 
            onClick={setShowCommentResponse} 
          />
        </div>
        
        {/* AREA LATERAL DIREITA VIDEOS DE REPRODUÇÃO */}
        <div className='flex-col flex-1 space-y-2 my-5'>
          {['1','2','3'].map((i) => (
            <SideVideosList key={i} />
          ))}
        </div>
      </div>


    </div>
  )
}

export default video