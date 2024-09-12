import Image from 'next/image'
import React from 'react'
import { Mail, MapPin, Share, TimerIcon, User } from 'lucide-react'
import { Button } from '@/components/ui/button'

function BusinessInfo({business}) {
  return business?.name&& (
    <div className='md:flex gap-4 items-center'>
      <Image src={business?.images[0]?.url}
      alt={business.name}
      width={150}
      height={200}
      className='rounded-full h-[150px] object-cover'

      />
        <div className='flex justify-between items-center gap-3 w-full'>
        <div className='flex flex-col mt-2 items-baseline gap-3'>
          <h2 className='text-primary font-semibold bg-purple-200 rounded-lg py-1 px-2 text-lg'>{business?.category?.name}</h2>
          <h2 className='text-[20px] md:text-[40px] font-bold'>{business.name}</h2>
          <h2 className='flex items-center gap-1 text-gray-500 md:text-lg'><MapPin/>{business.address}</h2>
          <h2 className='flex gap-1 text-gray-500 md:text-lg'><Mail/> {business?.email}</h2>
        </div>

        <div className='flex flex-col gap-5 items-start'>
          <Button><Share/></Button>
          <h2 className='flex gap-2 md:text-lg text-primary font-semibold'><User/>{business.contactPerson}</h2>
          <h2 className='flex gap-2 md:text-lg text-gray-500 font-semibold'><TimerIcon/> Available 8:00AM to 10:00PM</h2>
        </div>
        </div>

    </div>
  )
}

export default BusinessInfo


