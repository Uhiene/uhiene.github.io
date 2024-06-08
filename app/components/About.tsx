import Link from 'next/link'
import React from 'react'
import { BsTwitterX } from 'react-icons/bs'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const About = () => {
  return (
    <div className='bg-[#F8F9FA] text-start md:text-center px-5 py-8 md:p-20 mt-5 md:mt-10 w-full'>
      <h1 className='text-3xl md:text-5xl font-bold text-center gradient-text'>About Me</h1>
      <p className='my-4 text-slate-600 font-light text-lg'>Hello there! My name is Princess, and I'm delighted to connect with you.</p>
      <p className='text-slate-500 font-light'>As a versatile Frontend Developer, I'm deeply passionate about crafting remarkable digital experiences. Beyond coding, I excel in content writing, project management, and tutoring, along with creating educational content for YouTube. My focus lies in designing and implementing captivating visual elements for websites and applications. I find great joy in sharing my expertise and knowledge with others,
        fostering learning and growth within our community. Let's build something incredible together!
      </p>
      <div className='flex justify-center my-4 gap-4 mx-auto text-4xl text-pink-500'>
        <Link href='https://www.linkedin.com/in/uhiene-princess-399470198/' target='_blank' >
        <FaLinkedin />
        </Link>
        <Link href='https://x.com/Chenemi_U' target='_blank' >
          <BsTwitterX />
        </Link>
        <Link href='https://github.com/Uhiene' target='_blank' >
        <FaGithub />
        </Link>
      </div>
    </div>
  )
}

export default About