import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react';
import Hamburger from '../components/hamburger/Hamburger';
import Nav from '../components/nav/Nav'
import logo from '../public/img/LogoBlue.svg'


export default function Home() {
  const [toggle, setToggle] = useState(true)

  function OpenMenu() {
    setToggle(prev => !prev)
  }
  return (
    <div className={styles.container}>      
      <Head>
        <title>Freelance Hire</title>
        <link rel="icon" href="/favicon.ico" />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        </style>
      </Head>
      
      <Nav 
      toggle={toggle}
      OpenMenu={OpenMenu} />
      <div className="mob">
        <Hamburger
        toggle={toggle}
        OpenMenu={OpenMenu}
        />
        </div>
       {!toggle && <div className="overlay absolute top-0 bottom-0 left-0 right-0 bg-primary opacity-20 -z-10 lg:hidden"></div>}
      
    </div>
  )
}