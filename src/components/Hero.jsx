import React from 'react';
import me from '../assets/me.png';
import{TypeAnimation} from "react-type-animation";


const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 w-full  md:h-[70vh] mx-auto py-8 bg-black'>
       <div className='col-span-1 my-auto mx-auto w-[80%] sm:w-[60%]lg:w-[50%]'>
        <img src={me} alt="my snap" />

        </div>
        <div className='col-span-2 px-5 my-auto'>
            <h1 className='text-white text-3xl sm:text-4xl lg:text-5xl  font-extrabold'>
                <span className='primary-color'>
                    I'm a
                    </span><br/>
                    <TypeAnimation
                    sequence={[
                        "Frontend Dev",
                        1000,
                        "Web Developer",
                        1000,
                        "Python  Developer",
                        1000,


                    ]}
                    wrapper="span"
                    speed ={50}
                    repeat ={Infinity}
                    />
                     </h1>
                     <p className='text-white sm:text-lg my-6 lg:text-xl'>
                        My name is Ashesha ,a Javascript/React developer and loves to experiment with other tech domain
                     </p>
                     <div className='my-8 flex flex-col sm:flex-row'>
                        <a href="/" className='px-6 py-3 mb-4 sm:mb-0 sm:mr-4 w-full  sm:w-auto rounded-xl mr-4
                        bg-gradient-to-br from-orange-500 to-pink-500 text-white'>
                            Download Resume
                        </a>
                        <a href="#contact" className='px-6 py-3 w-full sm:w-auto rounded-xl 
                        border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none'>
                            Contact
                        </a>
                     </div>
            
            </div> 
    </div>
  )
}

export default Hero