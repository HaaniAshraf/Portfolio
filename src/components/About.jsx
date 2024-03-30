import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-700'>About</p>
            </div>
            <p className='text-xl mt-5'>Hi,this is Haani here! I am a Full Stack Web Developer and Web Designer,
             with a strong foundation in Computer Science,
            specializing in web development. I have good work experience
             where I was core part of developer team and work on major features.
            I love working on new and exciting technologies.
            Quick to adapt to new technologies, making me a valuable asset in dynamic web development environments.
            </p>
            <br />
            <p className='text-xl'> I am a strong believer in teamwork and community building.
            I have experience in Frontend (HTML, CSS, Tailwind, Javascript, React), Backend(Node.Js, Express.Js), Databases(MongoDb).
            I have a keen interest in Web Development
            and I am always looking for new opportunities to learn and grow.</p>
        </div>
    </div>
  )
}

export default About