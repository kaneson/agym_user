import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'

import { Helmet } from 'react-helmet'
import { Header, Main } from '../components'

const Home: NextPage = () => {  
  const [useShowToggleMenu, setUseShowToggleMenu] = useState<boolean>(true);
  const [search, setSearch] = useState<string>("");

  return (
    <div>
      <Head>
        <Helmet>
          <title>Agym Care</title>
        </Helmet>
      </Head>

      <main className='w-full h-[100vh] bg-gray-100'>
        {/* HEADER */}
        <Header
          setSearch={setSearch}
          setShow={setUseShowToggleMenu} 
        />
        {/* INFO */}
        <Main 
          search={search}
          show={useShowToggleMenu} 
        />
      </main>

    </div>
  )
}

export default Home
