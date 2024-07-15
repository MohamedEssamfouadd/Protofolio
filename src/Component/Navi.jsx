/* eslint-disable no-unused-vars */
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

function Navi() {
  return (
    <Navbar className="text-neutral-300 ">
    <Container className='text-neutral-300' >
      <Navbar.Brand href="#home" className='text-white  font-bold font-sans text-7xl '>Ֆ</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text className='text-neutral-300 flex gap-3  '>
          <a href="https://www.linkedin.com/in/mohamed-essam-a0724b316/" target='_blank'>
          
          <FaLinkedinIn style={{fontSize:"1.5rem", cursor:"pointer",color:"white"}}/>
          </a>
          <a href="https://github.com/" target='_blank'>
          <FaGithub style={{fontSize:"1.5rem", cursor:"pointer",color:"white"}} />
          </a>
        
        </Navbar.Text>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navi