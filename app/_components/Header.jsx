"use client"


import React, { useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { signIn, signOut, useSession } from 'next-auth/react'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


function Header() {

    const { data } = useSession();

    useEffect(() => {
        console.log(data)
    }, [data])

    return (
        <div className='p-5 shadow-sm flex justify-between '>
            <div className='flex items-center gap-8 '>
                <Image src="/logo.svg" alt="" width={100} height={100} />
                <div className='md:flex items-center gap-8 hidden'>
                    <h2 className='font-semibold hover:text-primary hover:scale-105 cursor-pointer'>Home</h2>
                    <h2 className='font-semibold hover:text-primary hover:scale-105 cursor-pointer'>Services</h2>
                    <h2 className='font-semibold hover:text-primary hover:scale-105 cursor-pointer'>About us</h2>
                </div>

            </div>
            <div>
                {data?.user ?
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                        <Image src={data?.user?.image} alt='user-image' width={40} height={40} className='rounded-full shadow-md hover:shadow-purple-700' />
                        </DropdownMenuTrigger>
                        
                        <DropdownMenuContent>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>My Booking</DropdownMenuItem>
                            <DropdownMenuItem onClick={()=>{signOut()}}>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    :
                    <Button onClick={() => signIn('descope')} className="bg-red-700">Login / Sign Up</Button>
                }
            </div>
        </div>
    )
}

export default Header