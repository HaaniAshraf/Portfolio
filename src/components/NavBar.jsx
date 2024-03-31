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
                <li class='nav-item' onClick={() => scrollToSection('home', setNav)}>Home</li>
                <li class='nav-item' onClick={() => scrollToSection('about', setNav)}>About</li>
                <li class='nav-item' onClick={() => scrollToSection('portfolio', setNav)}>Portfolio</li>
                <li class='nav-item' onClick={() => scrollToSection('experience', setNav)}>Experience</li>
                <li class='nav-item' onClick={() => scrollToSection('contact', setNav)}>Contact</li>
            </ul>

            <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
                    <li class='nav-link' onClick={() => scrollToSection('home', setNav)}>Home</li>
                    <li class='nav-link' onClick={() => scrollToSection('about', setNav)}>About</li>
                    <li class='nav-link' onClick={() => scrollToSection('portfolio', setNav)}>Portfolio</li>
                    <li class='nav-link' onClick={() => scrollToSection('experience', setNav)}>Experience</li>
                    <li class='nav-link' onClick={() => scrollToSection('contact', setNav)}>Contact</li>
             
                    <div className='flex mt-10'>
                    <li class='icon-item'>
                        <a href="https://www.linkedin.com/in/haani-ashraf-ba1163283/" class='icon-link'>
                            <FaLinkedin class='icon' size={35}/>
                        </a>
                    </li>
                    <li class='icon-item'>
                        <a href="https://github.com/HaaniAshraf" class='icon-link'>
                            <FaGithub class='icon' size={35}/>
                        </a>
                    </li>
                    <li class='icon-item'>
                        <a href="mailto:haaniashraf1234@gmail.com" class='icon-link'>
                            <HiOutlineMail class='icon' size={35}/>
                        </a>
                    </li>
                    <li class='icon-item'>
                        <a href="https://linkedin.com" class='icon-link'>
                            <BsFillPersonLinesFill class='icon' size={35}/>
                        </a>
                    </li>

                    </div>
                    
                </ul>
            )}

        </div>
    );
}

export default NavBar;