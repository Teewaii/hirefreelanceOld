import Image from 'next/image';
import grow from '../../public/img/grow.svg'
import boost from '../../public/img/boost.svg'
import sell from '../../public/img/sell.svg'

function Values() {
    return (
        <section id='values' className='lg:h-[38vh] flex items-center '>
            <div className="features-wrapper container flex flex-col lg:justify-between lg:flex-row space-y-8 lg:space-y-0 py-10 ">

                <div className="grow-aud  space-y-2  flex flex-col items-center  text-center p-6  ">
                    <Image className='w-12'
                        src={grow}
                        alt='icon'
                    />
                    <h1 className='text-body text-sm'>Grow your audience</h1>
                    <p className='w-[220px] text-sm text-body'>Find new customers and build your email list with lead generation ..</p>
                </div>
                <div className="boost  space-y-2  flex flex-col items-center  text-center p-6  ">
                    <Image className='w-12'
                        src={boost}
                        alt='icon'
                    />
                    <h1 className='text-body text-sm'>Boost online sales</h1>
                    <p className='w-[220px] text-sm text-body'>Market your ecommerce business and deliver experiences ..</p>
                </div>
                <div className="sell  space-y-2 flex flex-col items-center text-center p-6  ">
                    <Image className='w-12'
                        src={sell}
                        alt='icon'
                    />
                    <h1 className='text-body text-sm'>Sell your knowledge</h1>
                    <p className='w-[220px] text-sm text-body'>Build a following, engage them with your content ..</p>
                </div>
            </div>
        </section>
    )
}

export default Values