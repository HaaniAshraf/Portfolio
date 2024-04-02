import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import node from '../assets/node.png'
import express from '../assets/express-js.png'
import mongodb from '../assets/mongodb.png'
import git from '../assets/git.png'


const Experience = () => {
  return (
    <div name='experience' id='experience' className='bg-gradient-to-b from-gray-800 to-black w-full h-full pt-24 sm:pt-28 pl-5 sm:pl-0'>
        <div className='max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full text-white sm:px-4'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                <p className='py-6'>These are the technologies I've worked with :</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                <div className='experience-card html'>
                    <img src={html} alt="" className='w-20 mx-auto' />
                    <p className='mt-4'>HTML</p>
                </div>
                <div className='experience-card css'>
                    <img src={css} alt="" className='w-20 mx-auto' />
                    <p className='mt-4'>CSS</p>
                </div>
                <div className='experience-card js'>
                    <img src={javascript} alt="" className='w-20 mx-auto' />
                    <p className='mt-4'>JAVASCRIPT</p>
                </div>
                <div className='experience-card reactjs'>
                    <img src={reactImage} alt="" className='w-20 mx-auto' />
                    <p className='mt-4'>REACT.JS</p>
                </div>
                <div className='experience-card tailwind'>
                    <img src={tailwind} alt="" className='w-20 mx-auto' />
                    <p className='mt-4'>TAILWIND</p>
                </div>
                <div className='experience-card node'>
                    <img src={node} alt="" className='w-20 mx-auto' />
                    <p className='mt-4'>NODE.JS</p>
                </div>
                <div className='experience-card express'>
                    <img src={express} alt="" className='w-20 mx-auto' />
                    <p className='mt-4'>EXPRESS.JS</p>
                </div>
                <div className='experience-card mongo'>
                    <img src={mongodb} alt="" className='w-20 mx-auto' />
                    <p className='mt-4'>MONGO-DB</p>
                </div>
                <div className='experience-card git'>
                    <img src={git} alt="" className='w-20 mx-auto' />
                    <p className='mt-4'>GIT</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience