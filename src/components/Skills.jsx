import React from 'react'
import html from '../assets/icons8-html-48.png';
import css from '../assets/icons8-css-48.png';
import  javascript from '../assets/icons8-javascript-48.png';
import tailwindcss from '../assets/icons8-tailwind-css-48.png';

import react from '../assets/icons8-react-a-javascript-library-for-building-user-interfaces-48.png';
import redux from '../assets/icons8-redux-48.png';

import python from '../assets/icons8-python-48.png';



const Skills = () => {
  return (
    <div className='mt-4 border border-gray-600 bg-black text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-6
                      place-items-center md:flex md:justify-between md:items-center'>
                        <h1 className='text-gray-700 text-2xl md:text-4xl font-bold m-4'>
                            My<br/> Tech <br/>Stack
                        </h1>
                        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
                            <img src={html} alt="" width={100} height={100}/>
                            <p className='mt-2'>HTML</p>
                        </div>
                        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
                            <img src={css} alt=""width={100} height={100}/>
                            <p className='mt-2'>CSS</p>
                        </div>
                        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
                            <img src={javascript} alt=""width={100} height={100}/>
                            <p className='mt-2'>Javascript</p>
                        </div>
                        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
                            <img src={tailwindcss} alt=""width={100} height={100}/>
                            <p className='mt-2'>TailwindCSS</p>
                        </div>
                        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
                            <img src={react} alt=""width={100} height={100}/>
                            <p className='mt-2'>React</p>
                        </div>
                        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
                            <img src={redux} alt=""width={100} height={100}/>
                            <p className='mt-2'>Redux</p>
                        </div>
                        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
                            <img src={python} alt=""width={100} height={100}/>
                            <p className='mt-2'>Python</p>
                        </div>
                        
                        </div>
  )
}

export default Skills