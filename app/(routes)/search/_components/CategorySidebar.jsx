"use client"


import GlobalApi from '@/app/_services/GlobalApi'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function CategorySidebar() {
    const [categoryList, setCategoryList] = useState([])
    const [selectedCategory, setSelectedCategory] = useState([])

    const params=usePathname();
    console.log(params)
    
    
    
    useEffect(() => {
        getCategoryList()
    }, [])
    useEffect(() => {
       params && setSelectedCategory(params.split("/")[2])
    }, [params])


    const getCategoryList = () => {
        GlobalApi.getCategory().then(res => {
            // console.log(res.categories)
            setCategoryList(res.categories)
        })
    }
    return (
        <div>
            <h2 className='font-bold mb-3 text-xl text-primary'>Categories</h2>
            <div>
                {categoryList.map((category,index)=>(
                    <Link href={'/search/'+category.name} key={index} 
                    className={`flex gap-2 items-center border-2 p-3 
                    md:mr-10 shadow-md rounded-lg mb-3  
                    hover:bg-purple-100 hover:scale-105 transition-all 1s 
                    ease-in-out cursor-pointer font-semibold
                    ${selectedCategory == category.name&&'border-primary bg-purple-3    00'} 
                    `}>
                    <Image src={category.icon.url}
                    alt='sidebar icon'
                    width={30}
                    height={30}
                      />
                        <h2>{category.name}</h2>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default CategorySidebar