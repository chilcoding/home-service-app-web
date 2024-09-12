import React, { useEffect, useState } from 'react'

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import { Calendar } from "@/components/ui/calendar"
import { Button } from '@/components/ui/button'
import GlobalApi from '@/app/_services/GlobalApi'
import { useSession } from 'next-auth/react'
import { toast } from 'sonner'



function BookingSection({ children, business }) {

    const [date, setDate] = useState(new Date())
    const [timeSlot, setTimeSlot] = useState([])
    const [selectedTime, setSelectedTime] = useState()
    const [bookedSlot, setBookedSlot] = useState([])
    const { data } = useSession()


    useEffect(() => {
        getTime()

    }, [])



    useEffect(() => {
        date&&BusinessBookedSlot()

    }, [date])


    const BusinessBookedSlot = ()=>{
        GlobalApi.BusinessBookedSlot(business.id,date)
        .then(res=>{
            console.log(res)
            setBookedSlot(res.bookings)
        })
    }


    const getTime = () => {
        const timeList = [];
        for (let i = 10; i <= 12; i++) {
            timeList.push({
                time: i + ':00 AM'
            })
            timeList.push({
                time: i + ':30 AM'
            })
        }

        for (let i = 1; i <= 6; i++) {
            timeList.push({
                time: i + ':00 PM'
            })
            timeList.push({
                time: i + ':30 PM'
            })
        }
        setTimeSlot(timeList)
    }


    const saveBooking = () => {
        GlobalApi.createNewBooking(business.id, date, selectedTime, data.user.email, data.user.name)
            .then(res => {
                console.log(res)
                if (res) {
                    setDate()
                    setSelectedTime()
                    toast("Error While Creating Booking")
                }
                
            }, (e) => {
                toast("Slot Book Successfully")


            })
    }


    const isSlotBooked = (time)=>{
        return bookedSlot.find(item=>item.time==time)
    }



    return (
        <div className=''>

            <Sheet>
                <SheetTrigger asChild>
                    {children}
                </SheetTrigger>
                <SheetContent className="overflow-auto">
                    <SheetHeader>
                        <SheetTitle>Book A Service</SheetTitle>
                        <SheetDescription>
                            Select Date And Time Slot To Book A Service
                            <h2 className='my-5 font-bold text-lg'>Select Time Slot</h2>

                            <div className='flex flex-col gap-5 items-baseline'>
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    className="rounded-md border mb-4"
                                />

                            </div>

                            <h2 className='my-5 font-bold text-lg'>Select Time Slot</h2>
                            <div className='grid grid-cols-3 gap-3 '>
                                {
                                    timeSlot.map((item, index) => (
                                        <Button key={index} disabled={isSlotBooked(item.time)}
                                        variant='outline'
                                            className={`hover:bg-purple-800 hover:text-white hover:scale-95 
                                        transition-all ease-in-out ${selectedTime == item.time && 'bg-primary text-white'} `}
                                            onClick={() => setSelectedTime(item.time)} >

                                            {item.time}
                                        </Button>
                                    ))
                                }

                            </div>

                        </SheetDescription>
                    </SheetHeader>
                    <SheetFooter className="mt-5">
                        <SheetClose asChild>
                            <div className='flex gap-5'>
                                <Button variant="destructive"
                                    className=" bg-red-700 hover:bg-red-500 shadow-sm text-white" >
                                    Cancel
                                </Button>


                                <Button disabled={!(selectedTime && date)}
                                    onClick={() => saveBooking()}
                                    className="bg-purple-700 hover:bg-purple-500 shadow-sm hover:shadow-purple-700 text-white">
                                    Book
                                </Button>
                            </div>
                        </SheetClose>
                    </SheetFooter>
                </SheetContent>
            </Sheet>

        </div>
    )
}

export default BookingSection