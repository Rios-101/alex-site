"use client"

import ProjectCard from '@/components/ProjectCard'
import { Projects } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/main-bg.webp)" }}
      className=' flex items-center justify-center bg-center bg-cover lg:h-screen'>
      <div className='grid md:grid-cols-2 grid-cols-1 mt-[100px] gap-5 max-w-[90%] '>
        {Projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            text={project.text}
            image={project.src}
            link={project.link}
          />
        ))}
      </div>
    </div>
  )
}

export default Page