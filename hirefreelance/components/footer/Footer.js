import React from 'react'
import Appointment from '../btn/Appointment';
import Image from 'next/image'
import logoW from '../../public/img/LogoWhite.svg'

function Footer() {
    return (
        <section className=" min-h-[75vh] footer bg-footer_wmk bg-right-top bg-fit bg-no-repeat  py-[50px]  relative overflow:hidden after:absolute after:bg-primary after:top-0 after:bottom-0 after:left-0 after:right-0 after:z-[-1]">
            <div className='footer-wrapper container flex flex-col items-center py-20 space-y-12'>
                <h1 className='text-white text-2xl lg:text-4xl lg:max-w-[450px] text-center font-normal'> People who are
                    ready took these courses!</h1>
                <Appointment />

                <div className="footer_links grid grid-cols-2 border gap-4 justify-center">
                    <div className="logo flex flex-col items-start space-y-2">
                        <Image
                            src={logoW}
                            alt='logo'
                        />
                        <p className='text-white text-[0.8rem] text-left w-[70%] '>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
                    </div>
                    <div className="links   items-center">
                        <h1 className='text-white text-md font-bold'>Links</h1>
                        <ul className='flex flex-col'>
                            <li className='text-white text-sm'>Overons</li>
                            <li className='text-white text-sm'>Social Media</li>
                            <li className='text-white text-sm'>Counters</li>
                            <li className='text-white text-sm'>Contact</li>
                        </ul>
                    </div>
                    <div className="company">
                        <h1>Company</h1>
                        <ul>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="getIntouch"></div>
                </div>
                <p className='text-white text-[0.7rem] text-center'>© 2021 Developed by <a className='cursor-pointer underline' href="https://github.com/Teewaii/hirefreelance.git" target='blank'>Taiye Ajimati</a> & <br />Designed by ar-shakir. All rights reserved</p>
            </div>
        </section>
    )
}

export default Footer