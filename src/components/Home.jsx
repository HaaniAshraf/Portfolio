import React from 'react'
import HeroImage from '../assets/heroIcon.jpg'
import { FaArrowRight } from "react-icons/fa6";

const Home = () => {
    return (
      <div
        name="home"
        className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
      >
        <div className="max-w-screen-lg mx-auto flex items-center justify-center h-full px-4 md:flex-row">
          <div className="flex flex-col justify-center h-full">
            <h2 className="xl:text-6xl sm:text-4xl font-bold text-white">
              I'm a Full Stack Developer
            </h2>
            <p className="text-gray-500 py-4 max-w-md mt-3">
              I have experience in building and designing software.
              Currently, I love to work on web application using technologies like
              React, Tailwind, NodeJS and MongoDb.
            </p>
  
            <div>
                <button className="group text-white text-xl w-fit px-6 py-3 my-2 font-bold flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-700 cursor-pointer">
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <FaArrowRight size={20} className="ml-1" />
                </span>
                </button>
            </div>
          </div>
  
          <div>
            <img
              src={HeroImage}
              alt="my profile"
              className="rounded-2xl mx-auto w-2/3 md:w-full xl:w-2/3"
            />
          </div>
        </div>
      </div>
    );
  };

export default Home