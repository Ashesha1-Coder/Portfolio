import React from 'react'
import about from '../assets/about.jpg';

const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12' id='about'>

        <div className='md:grid md:grid-cols-2 sm:py-16'>
            <div className='md-4 md:mt-0 text-left flex '>
                <div className='my-auto mx-6'>
                    <h2 className='text-4xl font-bold mb-4 primary-color'>About Me</h2>
                    <p className='text-base lg:text-lg'>
                    I am Ashesha Kaushik, and I am from India. I have recently attained my Bachelor's degree in Computer Science And Engneering... I am a Web Developer with experience building open source intreactive web development projects. I am a tech enthusiast. I am always open to collaborating on projects and innovative/disruptive ideas. Find out more about me & feel free to connect with me.
                    </p>
                </div>
                <img className='mx-auto rounded-3xl py-8 md:py-0'src={about} width={300} height={300} alt=""/>

            </div>
        </div>
    </div>
  )
}

export default About