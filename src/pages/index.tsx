import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'

import { Helmet } from 'react-helmet'
import { Header, Main } from '../components'

const Home: NextPage = () => {  
  const [useShowToggleMenu, setUseShowToggleMenu] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
 
  return (
    <div>
      <Head>
        <Helmet>
          <title>Agym Care</title>
        </Helmet>
      </Head>
      

      <main className={`dark:bg-[#121212] bg-[#F8F9FC] `}>
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
