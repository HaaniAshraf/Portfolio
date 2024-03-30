import React from 'react'
import Ecommerce from '../assets/portfolio/e-commerce.jpg'
import TodoList from '../assets/portfolio/Todo-List.jpg'
import Koenigsegg from '../assets/portfolio/koenigsegg.jpg'

const Portfolio = () => {
  return (
    <div name='portfolio' id="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some of my works here.</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                <div className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={Ecommerce} alt="" className='rounded-md duration-200 hover:scale-105 h-2/3'/>
                    <h2 className='w-full text-center mt-2 font-semibold text-xl'>E-commerce Website</h2>
                    <div className='flex items-center justify-center'>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110'>Demo</button>
                       <a href="https://github.com/HaaniAshraf/E-commerce-website">
                       <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110'>Code</button>
                       </a>
                    </div>
                </div>
                <div className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={TodoList} alt="" className='rounded-md duration-200 hover:scale-105 h-2/3'/>
                    <h2 className='w-full text-center mt-2 font-semibold text-xl'>To-Do List</h2>
                    <div className='flex items-center justify-center'>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110'>Demo</button>
                       <a href="https://github.com/HaaniAshraf/To-Do-List">
                       <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110'>Code</button></a> 
                    </div>
                </div>
                <div className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={Koenigsegg} alt="" className='rounded-md duration-200 hover:scale-105 h-2/3'/>
                    <h2 className='w-full text-center mt-2 font-semibold text-xl'>Koenigsegg Website</h2>
                    <div className='flex items-center justify-center'>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110'>Demo</button>
                       <a href="https://github.com/HaaniAshraf/Koenigsegg-website">
                       <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110'>Code</button></a> 
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio