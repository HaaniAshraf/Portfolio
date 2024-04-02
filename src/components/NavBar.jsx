import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaGithub,FaLinkedin } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

function NavBar() {
    // State to manage whether the mobile navigation menu is open or closed
    const [nav, setNav] = useState(false);

    // Function to scroll to a specific section of the page
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            // Close the mobile navigation menu after a selection is made
            setNav(false); 
        }
    }

    return (
        <div className='flex justify-between items-center w-full h-20 text-white fixed bg-black px-4 z-10'>
            <div><h1 className='text-5xl font-signature ml-2'>Haani</h1></div>
            <ul className='hidden md:flex'>
                <li className='nav-item' onClick={() => scrollToSection('home')}>Home</li>
                <li className='nav-item' onClick={() => scrollToSection('about')}>About</li>
                <li className='nav-item' onClick={() => scrollToSection('portfolio')}>Portfolio</li>
                <li className='nav-item' onClick={() => scrollToSection('experience')}>Experience</li>
                <li className='nav-item' onClick={() => scrollToSection('contact')}>Contact</li>
            </ul>

            {/* When clicked, it toggles the value of the nav state variable using setNav.
             If nav is currently true, it sets it to false, and vice versa. */}
            <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
                {/*  If nav is true, it renders the close icon (FaTimes).
                {/*  If nav is false, it renders the bar icon (FaTimes). */}
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
                    <li className='nav-link' onClick={() => scrollToSection('home')}>Home</li>
                    <li className='nav-link' onClick={() => scrollToSection('about')}>About</li>
                    <li className='nav-link' onClick={() => scrollToSection('portfolio')}>Portfolio</li>
                    <li className='nav-link' onClick={() => scrollToSection('experience')}>Experience</li>
                    <li className='nav-link' onClick={() => scrollToSection('contact')}>Contact</li>
             
                    <div className='flex mt-10'>
                    <li className='icon-item'>
                        <a href="https://www.linkedin.com/in/haani-ashraf-ba1163283/" class='icon-link'>
                            <FaLinkedin class='icon' size={35}/>
                        </a>
                    </li>
                    <li className='icon-item'>
                        <a href="https://github.com/HaaniAshraf" class='icon-link'>
                            <FaGithub class='icon' size={35}/>
                        </a>
                    </li>
                    <li className='icon-item'>
                        <a href="mailto:haaniashraf1234@gmail.com" class='icon-link'>
                            <HiOutlineMail class='icon' size={35}/>
                        </a>
                    </li>
                    <li className='icon-item'>
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