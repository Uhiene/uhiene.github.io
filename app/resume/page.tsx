"use client"
import React from 'react'
import Layout from '../components/Layout/Layout'
import ResumeCard from '../components/Resume/ResumeCard'
import { TbDownload } from "react-icons/tb";
import SkillCard from '../components/Resume/SkillCard';
import { FaCss3Alt, FaGithub, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si';
import Link from 'next/link';


const Resume = () => {
  const professionalSkills = [
    { name: 'Frontend Developer' },
    { name: 'Project Manager' },
    { name: 'Content Writer' },
    { name: 'Tutor' },
    { name: 'Youtuber', },
  ];

  const frontendSkills = [
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'TailwindCss', icon: <SiTailwindcss /> },
    { name: 'Git & Github', icon: <FaGithub /> },
    { name: 'JavaScript', icon: <IoLogoJavascript /> },
    { name: 'React Js', icon: <FaReact /> },
    { name: 'Next Js', icon: <SiNextdotjs /> },
    { name: 'Node Js', icon: <FaNodeJs /> },
    { name: 'Typescript', icon: <SiTypescript /> },
  ];

 
  return (
    <Layout>
      <div className='bg-[#F8F9FA] p-10 lg:p-20 flex flex-col items-center gap-16'>
        <h1 className='text-5xl font-bold gradient-text'>Resume</h1>

        <div className="w-full lg:w-4/5">
          <div className='flex justify-between mb-8'>
            <h1 className='text-3xl font-bold text-pink-500'> Experience</h1>
            <Link href="https://www.dropbox.com/scl/fi/vjm0zvi4ivl1epl1izmg4/Princess-Uhiene-CV.pdf?rlkey=up6p2v215ys7t2arzqpfxlx26&st=yk6dka5w&dl=0" target='_blank'>
            <button className="bg-pink-500 text-white p-4 rounded-lg flex gap-2 items-center">
              <TbDownload /> Download Resume
            </button>
            </Link>
          </div>
          <ResumeCard
            dateRange="2022 - 2023"
            jobTitle="Web Developer"
            company="White creativity "
            location="Rivers State, Nigeria"
          >
            <p>- Developed responsive websites, ensuring cross-device compatibility.</p>
            <p className='my-2'>- Collaborated with teams to deliver high-quality projects.</p>
            <p>- Utilized HTML, CSS, and JavaScript for dynamic interfaces.</p>
            <p className='my-2'>- Implemented SEO practices to boost website visibility.</p>
            <p>- Provided client support and gathered requirements.</p>
          </ResumeCard>
        </div>

        <div className="w-full lg:w-4/5">
          <ResumeCard
            dateRange="2022 - Present"
            jobTitle="Frontend Developer"
            company="Dapp Mentors"
            location="Rivers State, Nigeria"
          >
            <p>
              Spearheaded dApp development with React and Ethereum.
            </p>
            <p className='my-2'>
              - Optimized web apps for speed and scalability
            </p>
            <p>
              - Integrated blockchain for secure applications.
            </p>
            <p className='my-2'>
              - Collaborated on frontend-backend integration.
            </p>
            <p>
              - Conducted code reviews and mentored developers.
            </p>
          </ResumeCard>
        </div>

        <div className="w-full lg:w-4/5">
          <ResumeCard
            dateRange="2023 - 2023"
            jobTitle="React Developer"
            company="Sate Consult"
            location="Ghanna"
          >
            <p>
              - Led React and Redux web app development.
            </p>
            <p className='my-2'>
              - Transformed wireframes into functional pages.
            </p>
            - Ensured UI/UX feasibility and optimized speed.
            <p className='my-2'>
              - Implemented state management for performance.
            </p>
            <p>
              - Collaborated on innovative client solutions.
            </p>
          </ResumeCard>
        </div>

        <div className="w-full lg:w-4/5">
          <div className='flex justify-between mb-8'>
            <h1 className='text-3xl font-bold text-pink-500'> Education</h1>
          </div>
          <ResumeCard
            dateRange="2018 - 2023"
            jobTitle="University of Port Harcourt"
            company="Rivers State, Nigeria"
            location="BS, Computer Science"
          >
            <p>
              During my time at the University of Port Harcourt pursuing a Bachelor of Science degree,
              I was introduced to the captivating world of computer science. Within the dynamic academic environment,
              I encountered the foundational principles of programming, sparking my curiosity and igniting a passion for technology.
            </p>
          </ResumeCard>
        </div>

        <div className='w-full lg:w-4/5'>
          <SkillCard title="Professional Skills" skills={professionalSkills} />
        </div>

        <div className='w-full lg:w-4/5'>
          <SkillCard title="Frontend Skills" skills={frontendSkills} />
        </div>

      </div>
    </Layout >
  )
}

export default Resume