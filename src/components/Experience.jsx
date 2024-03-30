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
    <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
        <div className='max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full text-white sm:px-4'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                <p className='py-6'>These are the technologies I've worked with :</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                <div className='shadow-md shadow-orange-800 hover:scale-105 duration-500 py-2 rounded-lg'>
                    <img src={html} alt="" className='w-20 mx-auto' />
                    <p className='mt-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-blue-800 hover:scale-105 duration-500 py-2 rounded-lg'>
                    <img src={css} alt="" className='w-20 mx-auto' />
                    <p className='mt-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-yellow-600 hover:scale-105 duration-500 py-2 rounded-lg'>
                    <img src={javascript} alt="" className='w-20 mx-auto' />
                    <p className='mt-4'>JAVASCRIPT</p>
                </div>
                <div className='shadow-md shadow-cyan-800 hover:scale-105 duration-500 py-2 rounded-lg'>
                    <img src={reactImage} alt="" className='w-20 mx-auto' />
                    <p className='mt-4'>REACT.JS</p>
                </div>
                <div className='shadow-md shadow-cyan-400 hover:scale-105 duration-500 py-2 rounded-lg'>
                    <img src={tailwind} alt="" className='w-20 mx-auto' />
                    <p className='mt-4'>TAILWIND</p>
                </div>
                <div className='shadow-md shadow-green-500 hover:scale-105 duration-500 py-2 rounded-lg'>
                    <img src={node} alt="" className='w-20 mx-auto' />
                    <p className='mt-4'>NODE.JS</p>
                </div>
                <div className='shadow-md shadow-yellow-600 hover:scale-105 duration-500 py-2 rounded-lg'>
                    <img src={express} alt="" className='w-20 mx-auto' />
                    <p className='mt-4'>EXPRESS.JS</p>
                </div>
                <div className='shadow-md shadow-green-800 hover:scale-105 duration-500 py-2 rounded-lg'>
                    <img src={mongodb} alt="" className='w-20 mx-auto' />
                    <p className='mt-4'>MONGO-DB</p>
                </div>
                <div className='shadow-md shadow-red-400 hover:scale-105 duration-500 py-2 rounded-lg'>
                    <img src={git} alt="" className='w-20 mx-auto' />
                    <p className='mt-4'>GIT</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience