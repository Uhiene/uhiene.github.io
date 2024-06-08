import React from 'react'
import Aside from './Aside'
import Image from 'next/image'
import bg from '../../assets/bg.svg'
import Avatar from '../../assets/4.png'

const Hero = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-1 md:gap-10 lg:gap-20 justify-center items-end md:mt-10 p-5'>
      <Aside />
      <div className='flex justify-center relative w-full lg:w-1/4'>
        <Image src={Avatar} alt="My Image" width={300} height={150} className="transform scale-x-[-1] " />
        <Image src={bg} alt="My Image" className="absolute -z-10 w-72 lg:w-96 top-14 lg:top-12 lg:right-5 scale-x-[-1.5] " />
      </div>
    </div>
  )
}

export default Hero