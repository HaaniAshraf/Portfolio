import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaGithub,FaLinkedin } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

function NavBar() {
    const [nav, setNav] = useState(false);

    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setNav(false); 
        }
    }

    return (
        <div className='flex justify-between items-center w-full h-20 text-white fixed bg-black px-4 z-10'>
            <div><h1 className='text-5xl font-signature ml-2'>Haani</h1></div>
            <ul className='hidden md:flex'>
                <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 hover:text-gray-300' onClick={() => scrollToSection('home', setNav)}>Home</li>
                <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 hover:text-gray-300' onClick={() => scrollToSection('about', setNav)}>About</li>
                <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 hover:text-gray-300' onClick={() => scrollToSection('portfolio', setNav)}>Portfolio</li>
                <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 hover:text-gray-300' onClick={() => scrollToSection('experience', setNav)}>Experience</li>
                <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 hover:text-gray-300' onClick={() => scrollToSection('contact', setNav)}>Contact</li>
            </ul>

            <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
                    <li className='px-4 cursor-pointer capitalize py-6 text-4xl hover:text-gray-300 duration-200' onClick={() => scrollToSection('home', setNav)}>Home</li>
                    <li className='px-4 cursor-pointer capitalize py-6 text-4xl hover:text-gray-300 duration-200' onClick={() => scrollToSection('about', setNav)}>About</li>
                    <li className='px-4 cursor-pointer capitalize py-6 text-4xl hover:text-gray-300 duration-200' onClick={() => scrollToSection('portfolio', setNav)}>Portfolio</li>
                    <li className='px-4 cursor-pointer capitalize py-6 text-4xl hover:text-gray-300 duration-200' onClick={() => scrollToSection('experience', setNav)}>Experience</li>
                    <li className='px-4 cursor-pointer capitalize py-6 text-4xl hover:text-gray-300 duration-200' onClick={() => scrollToSection('contact', setNav)}>Contact</li>
                    
                    <div className='flex mt-10'>
                    <li className='px-4 cursor-pointer capitalize py-4 text-2xl hover:text-gray-300 duration-200'>
                        <a href="https://www.linkedin.com/in/haani-ashraf-ba1163283/" className='flex justify-between items-center w-full text-white'>
                        <> <FaLinkedin className='ml-2 text-gray-400 hover:text-white duration-300' size={35}/></>
                        </a>
                    </li>
                    <li className='px-4 cursor-pointer capitalize py-4 text-2xl hover:text-gray-300 duration-200'>
                        <a href="https://github.com/HaaniAshraf" className='flex justify-between items-center w-full text-white'>
                        <> <FaGithub className='ml-2 text-gray-400 hover:text-white duration-300' size={35}/></>
                        </a>
                    </li>
                    <li className='px-4 cursor-pointer capitalize py-4 text-2xl hover:text-gray-300 duration-200'>
                        <a href="mailto:haaniashraf1234@gmail.com" className='flex justify-between items-center w-full text-white'>
                        <> <HiOutlineMail className='ml-2 text-gray-400 hover:text-white duration-300' size={35}/></>
                        </a>
                    </li>
                    <li className='px-4 cursor-pointer capitalize py-4 text-2xl hover:text-gray-300 duration-200'>
                        <a href="https://linkedin.com" className='flex justify-between items-center w-full text-white'>
                        <> <BsFillPersonLinesFill className='ml-2 text-gray-400 hover:text-white duration-300' size={35}/></>
                        </a>
                    </li>
                    </div>
                    
                </ul>
            )}

        </div>
    );
}

export default NavBar;