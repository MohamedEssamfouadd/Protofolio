/* eslint-disable no-unused-vars */
import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';
import game from "../assets/projects/pieces-of-xo-game-abstract-composition-multiple-x-pieces-against-o-piece-2HTHMTD.jpg"
import todolist from "../assets/projects/360_F_110019055_JBbr778hMxpwuwDaFszyQNck5PhBYHli.jpg"
import LightDark from "../assets/projects/vector-day-night-switch-mobile-600nw-2313361409.jpg"
import video from "../assets/projects/71Qjj5CLk9L.png"
import movies from "../assets/projects/move.jpg"
import image from "../assets/projects/1677072926437_image-gallery-hero.png"

function Project() {
  return (
    <div className='mt-20'>
      <motion.h1 
       whileInView={{opacity:1,y:0}}
       initial={{opacity:0,y:-100}}
       transition={{duration:1.5}}
    
      
      className='text-center font-thin text-5xl pb-4'>Projects</motion.h1>
      <div className='flex flex-wrap justify-center align-items-center'>
        <motion.div
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1}}  
        className='w-full lg:w-1/2  flex flex-col gap-20'>
          <motion.div
          whileInView={{opacity:1,x:0}}
          initial={{opacity:0,x:-100}}
          transition={{duration:1}}  
          
          className='img-fluid mx-auto'>
            <img src='https://images04.nicepage.com/feature/461183/blog.jpg' className='img-fluid w-64 rounded-md' alt='' />
          </motion.div>
          <motion.div 
          whileInView={{opacity:1,x:0}}
          initial={{opacity:0,x:-100}}
          transition={{duration:1}}
          
          className='img-fluid mx-auto'>
            <img src='https://img.freepik.com/free-vector/online-shopping-concept-landing-page_52683-11721.jpg?w=740&t=st=1719840364~exp=1719840964~hmac=750438fdf738b652315716c34d23fcdaa1d35f9a4be47b021843284a29446e7d' className='w-64 rounded-md' alt='' />
          </motion.div>
          <motion.div 
          whileInView={{opacity:1,x:0}}
          initial={{opacity:0,x:-100}}
          transition={{duration:1}}
          
          className='img-fluid mx-auto'>
            <img src={movies} className='w-64 rounded-md' alt='' />
          </motion.div>
          <motion.div
          whileInView={{opacity:1,x:0}}
          initial={{opacity:0,x:-100}}
          transition={{duration:1}} 
          className='img-fluid mx-auto'>
            <img src={game} className='w-64 rounded-md' alt='' />
          </motion.div>
        
          <motion.div
          whileInView={{opacity:1,x:0}}
          initial={{opacity:0,x:-100}}
          transition={{duration:1}} 
          className='img-fluid mx-auto'>
            <img src={todolist} className='w-64 rounded-md' alt='' />
          </motion.div>
          <motion.div
          whileInView={{opacity:1,x:0}}
          initial={{opacity:0,x:-100}}
          transition={{duration:1}} 
          className='img-fluid mx-auto'>
            <img src={video} className='w-64 rounded-md' alt='' />
          </motion.div>
          <motion.div
          whileInView={{opacity:1,x:0}}
          initial={{opacity:0,x:-100}}
          transition={{duration:1}} 
          className='img-fluid mx-auto'>
            <img src={image} className='w-64 rounded-md' alt='' />
          </motion.div>
          <motion.div
          whileInView={{opacity:1,x:0}}
          initial={{opacity:0,x:-100}}
          transition={{duration:1}} 
          className='img-fluid mx-auto'>
            <img src={LightDark} className='w-64 rounded-md' alt='' />
          </motion.div>
        </motion.div>
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:100}}
        transition={{duration:1}}
        className='w-full lg:w-1/2 '>
          {PROJECTS.map((project, index) => {
            return (
              <motion.div  
              whileInView={{opacity:1,x:0}}
             initial={{opacity:0,x:100}}
             transition={{duration:1}}
              key={index} className='p-12'>
                <h2 className='font-bold'>{project.title}</h2>
                <p className='mt-3'>{project.description}</p>
                <div className='flex flex-wrap mt-4'>
                  {project.technologies.map((technology, index) => (
                    <div key={index} className='mr-2 mb-2'>
                      <button className='text-purple-700 font-bold py-2 px-4 rounded'>
                        {technology}
                      </button>
                      
                    </div>
                  ))}
                </div>
                <button key={index} className='bg-black shadow-2xl text-white p-2 rounded-lg '><a href={project.link} className= ''  target='_blank'>Preview Site</a></button>
                
                 <a href="" className=''></a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

export default Project;
