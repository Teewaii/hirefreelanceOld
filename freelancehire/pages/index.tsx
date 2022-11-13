import type { NextPage } from 'next';
import { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Hamburger from '../components/hamburger/Hamburger';
import Nav from '../components/nav/Nav'
import logo from '../public/img/LogoBlue.svg'


const Home: NextPage = () => {
  const [toggle, setToggle] = useState(true)

  function OpenMenu() {
    setToggle(prev => !prev)
  }
  return (
    <div className="relative">
      <Head>
        <title>Freelance Hire</title>
        <link rel="icon" href="/favicon.ico" />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        </style>
      </Head>
      <Nav />
      <div className="mob">
        <Hamburger
        />
      </div>
    </div>
  )
}

export default Home
