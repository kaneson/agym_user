import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'

import { Helmet } from 'react-helmet'
import { Header, Main } from '../components'
import { AuthGoogleContext } from '../context/authGoogle'

const Home = () => {  
  const router = useRouter();

  const [useShowToggleMenu, setUseShowToggleMenu] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  const { signed, user }:any = useContext(AuthGoogleContext);
  
  useEffect(() => {
    if(!signed) {
      router.push("/");
    }
  },[user, signed]);
 
  return (
    <div>
      <Head>
        <Helmet>
          <title>Agym Care</title>
        </Helmet>
      </Head>
      
      <div className='flex-1 p-2 bg-[#5524d9]'>
        <p className='flex flex-wrap justify-center text-xl font-semibold text-white text-center p-2 space-x-2'>
          Olá Thiago Costa, a sua rotina de exercícios está esperando por ti!
        </p>
      </div>

      <main className={`dark:bg-[#121212] bg-[#F8F9FC] `}>
        {/* HEADER */}
        <div>
          <Header
            setSearch={setSearch}
            setShow={setUseShowToggleMenu} 
          />
        </div>
        {/* INFO */}
        <Main 
          search={search}
          setShow={
            () => setUseShowToggleMenu((value) => !value)
          }
          show={useShowToggleMenu} 
        />
      </main>

    </div>
  )
}

export default Home
