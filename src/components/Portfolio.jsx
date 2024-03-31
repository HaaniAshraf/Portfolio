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
                <div className='project-card'>
                    <img src={Ecommerce} alt="" className='project-image'/>
                    <h2 className='project-title'>E-commerce Website</h2>
                    <div className='flex items-center justify-center'>
                        <button className='project-button'>Demo</button>
                        <a href="https://github.com/HaaniAshraf/E-commerce-website">
                            <button className='project-button'>Code</button>
                        </a>
                    </div>
                </div>
                <div className='project-card'>
                    <img src={TodoList} alt="" className='project-image'/>
                    <h2 className='project-title'>To-Do List</h2>
                    <div className='flex items-center justify-center'>
                        <button className='project-button'>Demo</button>
                        <a href="https://github.com/HaaniAshraf/To-Do-List">
                            <button className='project-button'>Code</button>
                        </a> 
                    </div>
                </div>
                <div className='project-card'>
                    <img src={Koenigsegg} alt="" className='project-image'/>
                    <h2 className='project-title'>Koenigsegg Website</h2>
                    <div className='flex items-center justify-center'>
                        <button className='project-button'>Demo</button>
                        <a href="https://github.com/HaaniAshraf/Koenigsegg-website">
                            <button className='project-button'>Code</button>
                        </a> 
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Portfolio