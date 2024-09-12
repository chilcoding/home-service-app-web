import GlobalApi from '@/app/_services/GlobalApi'
import { Button } from '@/components/ui/button'
import { NotebookPen } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import BookingSection from './BookingSection'




function SuggestedBusinessList({ business }) {
  const [businessList, setBusinessList] = useState([])

  useEffect(() => {
    business && getBusinessList()
  }, [business])

  const getBusinessList = () => {
    GlobalApi.getBusinessByCategory(business?.category?.name).then((res) => {
      setBusinessList(res?.businessLists)
    })
  }


  return (
    <div className='md:pl-10'>

      <BookingSection business={business}>
        <Button className="flex gap-2 w-full">
          <NotebookPen />
          Book Appointment
        </Button>
      </BookingSection>
      <div className='hidden md:block'>


        <h2 className='font-semibold text-lg  mt-3 '>Similar Business</h2>

        <div className='flex flex-col gap-4 mt-4 '>
          {businessList && businessList.map((business, index) => (
            <Link href={'/details/' + business.id} className='flex gap-3 rounded-lg hover:scale-105 border-2 py-1 cursor-pointer shadow-md hover:bg-purple-100  transition-all ease-in-out'>
              <Image src={business?.images[0].url}
                alt={business.name}
                width={80}
                height={80}
                className='rounded-lg object-cover'

              />

              <div>
                <h2 className='font-bold text-lg'>{business.name}</h2>
                <h2 className='text-pink-500 font-semibold'>{business.contactPerson}</h2>
                <h2 className='text-gray-500'>{business.address}</h2>

              </div>
            </Link>

          ))}
        </div>
      </div>
    </div>
  )
}

export default SuggestedBusinessList