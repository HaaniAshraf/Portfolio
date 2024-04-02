import React from 'react'
import { FaGithub,FaLinkedin } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'


const SocialLinks = () => {
  return (
    <div className=' hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            <li className="contact-item">
                <a href="https://www.linkedin.com/in/haani-ashraf-ba1163283/" className="contact-link">
                    LinkedIn <FaLinkedin size={30}/>
                </a>
            </li>
            <li className="contact-item">
                <a href="https://github.com/HaaniAshraf" className="contact-link">
                    Github <FaGithub size={30}/>
                </a>
            </li>
            <li className="contact-item">
                <a href="mailto:haaniashraf1234@gmail.com" className="contact-link">
                    Mail <HiOutlineMail size={30}/>
                </a>
            </li>
            <li className="contact-item">
                <a href="https://linkedin.com" className="contact-link">
                    Resume <BsFillPersonLinesFill size={30}/>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default SocialLinks