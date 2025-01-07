import React from 'react'
import { IoIosSearch } from "react-icons/io";

export default function NavBar() {
    const navBarList: string[] = [
        "Movies",
        "TV-Shows",
        "Upcoming",
        "Search"
    ]
  return (
        <div className='relative navbar-container text-white font-poppins flex justify-between items-center  z-30'>
            <div className='text-primary text-2xl font-semibold'>
                LOGO
            </div>
            <ul className='flex justify-evenly items-center gap-5 '>
                {
                    navBarList.map((item, index)=>{
                        return(
                            <li key={index+1} className='transition-all hover:text-primary duration-100 cursor-pointer'>
                                {item !== 'Search' ? item : <IoIosSearch className='text-2xl'/>}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
  )
}

