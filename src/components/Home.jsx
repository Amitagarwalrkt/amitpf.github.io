import React from 'react'

import pic from "../../public/Avatar.png";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";

import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";

import { ReactTyped } from "react-typed";


function Home() {
  return (
    <>
    <div 
    name='Home'
    className='max-w-screen-2xl container max-auton px-4 md:px-20 my-20'>
        <div className='flex flex-col md:flex-row'>
            {/* left side of page */}
            <div className='md:w-1/2 mt-14 md:mt-32 order-2 md:order-1'>
                <span className='text-xl'>Welcome In My Feed</span>
                <div className='flex space-x-1 text-2xl md:text-4xl my-2'>
                    <h1>Hello, I'm a</h1>
                    {/*<span >Developer</span> */}
                    <ReactTyped
                        className=' text-blue-700 font-bold'
                        strings={["Developer", "Coder", "Programmer"]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop={true}
                    />
                </div>
                <br />
                <p className='text-sm md:text-md text-justify'>
                I'm a Computer Science student who loves solving problems and building Websites.

                Currently I am pursuing <span className="text-blue-700 font-bold">MCA</span> at Graphic Era Hill University . I love to explore new things.

                I am more interested in building newWeb Technologies and Products.

                I always apply my experience in developing products with Node.js and Modern Javascript Library and Framework like vite + React.js.

                Currently expanding my portfolio by building more projects projects that I can add here.
                </p>
                <br />
                {/* social media icons */}
                <div className='flex flex-col items-center  md:flex-row justify-between space-y-6 md:space-y-0 '>
                <div className='space-y-3'>
                    <h1 className='font-bold text-center'>AVALABLE ON</h1> 
                    <ul className='flex space-x-5 '>
                        <li>
                            <a href="https://github.com/amitagarwalrkt">
                            <FaGithub className='text-2xl cursor-pointer hover:scale-110 duration-200'/>
                        </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/amit-agarwal-rkt/">
                            <FaLinkedin className='text-2xl cursor-pointer hover:scale-110 duration-200'/>
                        </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/am.it_agarwal/">
                            <FaInstagram className='text-2xl cursor-pointer hover:scale-110 duration-200'/>
                        </a>
                        </li>
                        <li>
                            <a href="https://api.whatsapp.com/send/?phone=919756775633&text&type=phone_number&app_absent=0">
                            <FaSquareWhatsapp className='text-2xl cursor-pointer hover:scale-110 duration-200'/>
                        </a>
                        </li>
                    </ul>
                </div >
                <div className='space-y-3'>
                    <h1 className='font-bold'>CURRENTLY WORKING ON</h1> 
                    <div className='flex space-x-5 '>
                        <SiMongodb className='text-2xl md: text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                        <FaNodeJs className='text-2xl md: text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                        <FaReact className='text-2xl md: text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                        <FaAngular className='text-2xl md: text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                    </div>
                </div>
                </div>
            </div>
            {/* right side of page */}
        <div className='md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1'>
            <img src={pic} className='rounded-full md:w-[450px] md:h-[450px]' alt="" />
        </div>
        </div>
    </div>
    <br />
    <hr />
    
    </>
  )
}

export default Home
