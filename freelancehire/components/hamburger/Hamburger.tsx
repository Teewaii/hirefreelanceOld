
import Image from 'next/image';
import logomob from '../../public/img/LogoWhite.svg';
import Link from 'next/link';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { XMarkIcon } from '@heroicons/react/24/solid'


function Hamburger() {
    return (
        <div className="container mobMenu flex items-center justify-between py-5 absolute top-0 left-0 right-0 lg:hidden">
            <Link href='/'><Image className='w-20' src={logomob} alt='logo'
            /></Link>
            <div className="openClose flex ">
                <Bars3Icon className='w-6 fill-primary' />
                <XMarkIcon className='w-6 fill-primary' />
            </div>

        </div>
    )
}

export default Hamburger