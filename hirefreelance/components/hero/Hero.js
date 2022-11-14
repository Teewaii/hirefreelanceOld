import React from 'react'
import Link from 'next/link'
import Btn from '../btn/Btn'
import Learn from '../btn/Learn'

function Hero() {
  return (
    <div className="flex items-center md:items-end lg:items-center  justify-start relative hero-wrapper bg-mobHero lg:bg-dekstopHero bg-no-repeat  bg-top bg-contain lg:bg-top lg:bg-cover min-h-[100vh] z-[-1] border-2">
        <div className="container mt-80 lg:mt-[-50px] py-10 lg:py-0 border ">
            <h1 className='text-[2.2rem] lg:text-4xl xl:text-5xl 2xl:text-6xl lg:w-[450px]  xl:w-[550px]  leading-10  text-heading mb-2 lg:mb-4'>Find & Hire Expert Freelancers</h1>
            <p className='text-sm w-[95%] leading-5 xl:text-lg 2xl:text-xl lg:w-[350px] xl:w-[450px] 2xl:w-[500px]'>Work with the best freelance talent from around the world on our secure flexible and cost-effective platform.</p>
      <div className="btns flex space-x-6 mt-8 ">
       <Btn/>
       <Learn/>
       </div>
        </div>
    </div>
  )
}

export default Hero