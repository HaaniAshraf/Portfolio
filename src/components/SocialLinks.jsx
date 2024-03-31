import React from 'react'
import { FaGithub,FaLinkedin } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'


const SocialLinks = () => {
  return (
    <div className=' hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            <li class="contact-item">
                <a href="https://www.linkedin.com/in/haani-ashraf-ba1163283/" class="contact-link">
                    LinkedIn <FaLinkedin size={30}/>
                </a>
            </li>
            <li class="contact-item">
                <a href="https://github.com/HaaniAshraf" class="contact-link">
                    Github <FaGithub size={30}/>
                </a>
            </li>
            <li class="contact-item">
                <a href="mailto:haaniashraf1234@gmail.com" class="contact-link">
                    Mail <HiOutlineMail size={30}/>
                </a>
            </li>
            <li class="contact-item">
                <a href="https://linkedin.com" class="contact-link">
                    Resume <BsFillPersonLinesFill size={30}/>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default SocialLinks