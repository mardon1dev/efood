"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className='pt-12'>
      <div className='container'>
        <div className='hero flex flex-col md:flex-row gap-2'>
          <div className='hero__main'>
            <h1 className='hero__title'>Super Fast <span className='hero__text '>Food Delivery</span> Service</h1>
            <p className='hero__description'>We provide super fast-delivery service. Let’s use our services right now and get discounts of up to 50%</p>
            <div className='hero__explore'>
              <button className='button'>Explore food</button>
              <Link href='download' className='hero__download'>Download App</Link>
            </div>
          </div>
          <div className='hero__image'>
            <img className='hero_img w-100' src="/assets/images/guy.png" alt="Scooter"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero