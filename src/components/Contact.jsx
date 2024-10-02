import React from 'react'

const Contact = () => {
  return (
    <div className='w-full mx-auto bg-black sm:py-20 p-5' id='contact'>
        <div className='text-center'>
             <h2 className='text-3xl  sm:text-4xl font-bold leading-tight primary-color'>Contact Me</h2>



        </div>
        <div className='mt-6 bg-[#161616] rounded-xl'>
            <div className="p-10">
             <form action='https://getform.io/f/bejykroa' method='POST'>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                    <div>
                        <div className='mt-2.5 '>
                            <input type="text" name="name"  placeholder='Your Name'
                            className= 'bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600'/>

                        </div>
                    </div>
                    <div>
                    <div className='mt-2.5 '>
                            <input type="email" name="email" id="" placeholder='Your Email'
                            className= 'bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600'/>

                        </div>

                    </div>
                    <div className="sm:col-span-2">
                    <div className='mt-2.5 '>
                            <textarea  name="message" id="" placeholder='Your Message'
                            className= 'bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600'>

                            </textarea>
                        </div>
                </div>
                <div className="sm:col-span-2">
                    <button type='submit'
                            className='text-xl w-full p-4 mt-2 font-semibold text-white bg-primarycolor rounded-md'>
                                Send
                            </button>
                </div>
                </div>
             </form>
            </div>
        </div>
    </div>
  )
}

export default Contact