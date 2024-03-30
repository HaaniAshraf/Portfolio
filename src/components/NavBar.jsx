import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

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
                </ul>
            )}

        </div>
    );
}

export default NavBar;