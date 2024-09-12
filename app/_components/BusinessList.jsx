import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function BusinessList({ businessList, title }) {
    return (
        <div className='mt-5'>
            <h2 className='font-bold text-[22px]'>{title}</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5 gap-6'>
                {businessList.length > 0 ?
                    businessList.map((business, index) => (
                        <Link href={'/details/' + business.id} key={index} className='shadow-md rounded-lg hover:shadow-lg hover:shadow-pink-400 hover:scale-95 transition-all ease-in-out '>
                            <Image src={business.images[0].url}
                                alt={business.name}
                                width={500}
                                height={200}
                                className='h-[130px] md:h-[180px] lg:h-[250px] object-cover rounded-lg cursor-pointer'
                            />

                            <div className='flex flex-col items-baseline py-3 px-2 gap-1'>
                                <h2 className='p-1 bg-purple-200 text-primary font-bold cursor-pointer rounded-lg px-2'>{business.category.name}</h2>
                                <h2 className='font-semibold text-xl'>{business.name}</h2>
                                <h2 className='font-semibold text-md text-pink-500'>{business.contactPerson}</h2>
                                <h2 className='font-semibold text-sm'>{business.address}</h2>
                                <Button className="mt-4">Book Now</Button>
                            </div>

                        </Link>
                    ))
                    :
                    [1, 2, 3, 4].map((item, index) => (
                        <div className=' w-full h-[250px] bg-slate-300 animate-pulse'>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default BusinessList