import Image from 'next/image';
import grow from '../../public/img/grow.svg'
import boost from '../../public/img/boost.svg'
import sell from '../../public/img/sell.svg'

function Feautes() {
  return (
    <section className='lg:h-[30vh] flex items-center'>
        <div className="features-wrapper container flex flex-col lg:justify-between lg:flex-row space-y-8 lg:space-y-0 py-12  ">
           
            <div className="grow-aud  space-y-2  flex flex-col items-center  text-center p-6  ">
                <Image className='w-12'
                src={grow}
                />
                <h1 className='text-heading text-sm'>Grow your audience</h1>
                <p className='w-[220px] text-sm text-body'>Find new customers and build your email list with lead generation ..</p>
            </div>
            <div className="boost  space-y-2  flex flex-col items-center  text-center p-6  ">
                <Image className='w-12'
                src={boost}
                />
                <h1 className='text-heading text-sm'>Boost online sales</h1>
                <p className='w-[220px] text-sm text-body'>Market your ecommerce business and deliver experiences ..</p>
            </div>
            <div className="sell  space-y-2 flex flex-col items-center text-center p-6  ">
                <Image className='w-12'
                src={sell}
                />
                <h1 className='text-heading text-sm'>Sell your knowledge</h1>
                <p className='w-[220px] text-sm text-body'>Build a following, engage them with your content ..</p>
            </div>
        </div>
    </section>
  )
}

export default Feautes