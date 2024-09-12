import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import React from 'react'
import { Search } from 'lucide-react'

function Hero() {
  return (
    <div className='flex justify-center items-center flex-col pt-14 pb-7  gap-3'>
        <h2 className='font-bold text-[46px] text-center'>
        Find Home 
        <span className='text-red-700 drop-shadow-lg mx-3 '>Service/Repair</span> 
        Near You 
        </h2>
        <h3 className='text-gray-400 text-xl'>Explore Best Home Service/Repair Near You</h3>

        <div className='mt-6 flex items-center gap-4'>
            <Input placeholder= 'Search a service' className=" rounded-xl md:w-[350px]" />
            <Button className='rounded-xl h-[45px]'>
                <Search className='h-4 w-4 ' />
            </Button>
        </div>
    </div>
  )
}

export default Hero