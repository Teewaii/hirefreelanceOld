import Image from 'next/image';
// import logo from '../public/img/LogoBlue.svg'
import logo from '../../public/img/LogoBlue.svg'
import logomob from '../../public/img/LogoWhite.svg'
import Link from 'next/link';
import Btn from '../btn/Btn';
import { Bars3Icon } from '@heroicons/react/24/solid'

function Nav() {

    return (
        <nav className='bg-primary h-screen lg:h-fit py-4 absolute  left-0 right-[35%] top-0 lg:right-0 lg:top-6 lg:bg-transparent lg:py-0'>
            <div className="navWrapper space-y-16 container lg:flex lg:items-center lg:justify-between lg:space-y-0 ">
                <div className="logo  w-fit ">
                    <Link href='/'><Image src={logo} alt='logo'
                    /></Link>
                </div>
                <div className="links ">
                    <ul className='space-y-3  lg:flex lg:space-x-[36px] lg:space-y-0 items-center'>
                        <li className='text-white lg:text-body py-2 pl-4 lg:pl-0 '>
                            <Link href='#service'>Services</Link>
                        </li>
                        <li className='text-white lg:text-body py-2 pl-4 lg:pl-0 '>
                            <Link href='#about'>About us</Link>
                        </li>
                        <li className='text-white lg:text-body py-2 pl-4 lg:pl-0 '>
                            <Link href='#Blog'>Blog</Link>
                        </li>

                    </ul>

                </div>
                <div className="rightSide">
                    <div className="language"></div>
                    <div className="contact pl-4 lg:pl-0">
                        <Btn />
                    </div>
                </div>

            </div>

        </nav>
    )
}

export default Nav