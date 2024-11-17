/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import React from 'react'
import cv from "../assets/projects/Gray and White Simple Clean Resume.pdf"



function Contact() {
  const download=(e)=>{
    e.preventDefault()

  }
   
  return (
    <div className='mt-10 text-center flex flex-col gap-6 mb-5'>
        <motion.h1 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1}}
        className='text-5xl font-thin '>Get in Touch</motion.h1>
        <motion.p 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1}} 
        className='font-bold'>Cairo-Egypt</motion.p>
        <motion.p
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:100}}
        transition={{duration:1}}  
        >01124151053</motion.p>
        <motion.p>mohamedessam21044@gmail.com</motion.p>
        <motion.button   whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:100}}
        transition={{duration:1}} className='bg-white text-black px-3 py-2 w-[fit-content] mx-auto rounded-2'>
          <a onClick={()=>download()} href={cv}download={cv} >Download resume</a>
        </motion.button>
    </div>
  )
}

export default Contact