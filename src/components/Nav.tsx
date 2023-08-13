"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Nav = () => {

    const [toggle, setToggle] = useState(false);

  return (
    <nav className='nav w-full h-12 fixed '>
        <div className='container'>
            <div className='w-full h-full flex items-center justify-between pt-1'>
                <span className="logo"><span className='logo_span'>E</span>FOOD</span>
                <div className='flex lg:gap-14 gap-5 relative items-center h-auto'>
                    <ul className='list'>
                        <li><Link className='list_link' href='/'>Home</Link></li>
                        <li><Link className='list_link' href='/service'>Service</Link></li>
                        <li><Link className='list_link' href='/restaurants'>Restaurants</Link></li>
                        <li><Link className='list_link' href='/contact'>Contact</Link></li>
                    </ul>
                    <Image 
                        src="/assets/icons/search.svg"
                        width={24}
                        height={24}
                        alt="Search" 
                        className='cursor-pointer'
                        onClick={()=>setToggle(false)}
                    />
                    <Image 
                        src="/assets/icons/buy.svg"
                        width={24}
                        height={24}
                        alt="Buy" 
                        className='cursor-pointer'
                    />
                    <button className='button hidden md:block'>Sign up</button>
                    {
                        !toggle ? 
                        (
                            <div className='toggle md:hidden' onClick={()=>setToggle((prev)=>!prev)}>
                                <span className='toggle_span'></span>
                                <span className='toggle_span'></span>
                            </div>
                        ) : 
                        (
                            <div className='toggle md:hidden' onClick={()=>setToggle((prev)=>!prev)}>
                                <span className='toggle_span toggle_span-rotate1'></span>
                                <span className='toggle_span toggle_span-rotate2'></span>
                            </div>
                        )
                    }
                    {
                        toggle ? 
                        (
                            <>
                            <div className='toggle_list md:hidden'>
                                <ul className='flex flex-col items-center justify-center'>
                                    <li><Link className='list_link' href='/'>Home</Link></li>
                                    <li><Link className='list_link' href='/service'>Service</Link></li>
                                    <li><Link className='list_link' href='/restaurants'>Restaurants</Link></li>
                                    <li><Link className='list_link' href='/contact'>Contact</Link></li>
                                </ul>
                                <button className='button mt-2'>Sign up</button>
                            </div>
                            </>
                        ) : 
                        (
                            <>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Nav;