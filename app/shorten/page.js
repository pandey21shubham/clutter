'use client'
import React, {useState} from 'react'

const Shorten = () => {
    const [url, seturl] = useState()
    const [shorturl, setShorturl] = useState()
    const [generated, setGenerated] = useState(false)

    const handleChange = () => {
      
    }
    
  return (
    <div className='mx-auto w-full max-w-2xl'>
      <h1 className=' py-5 text-center font-bold text-3xl text-amber-500 [text-shadow:2px_2px_0px_#78350f,4px_4px_6px_rgba(0,0,0,0.7)] cursor-default'>
        Generate your short URL
      </h1>
      <div className='flex flex-col justify-center items-center gap-5 w-full px-4'>
        <input type="text" 
        placeholder='Enter your URL' 
        onChange={handleChange}
        className='w-full rounded-full border-2 border-amber-800/40 px-5 py-2 bg-transparent text-center text-amber-700 placeholder:text-amber-600 hover:border-amber-600 focus:outline-none focus:border-amber-700 transition-colors duration-300'/>

        <input type="text" 
        placeholder='Enter your preferred short URL' 
        onChange={handleChange}
        className='w-full rounded-full border-2 border-amber-800/40 px-5 py-2 bg-transparent text-center text-amber-700 placeholder:text-amber-600 hover:border-amber-600 focus:outline-none focus:border-amber-700 transition-colors duration-300'/>

        <button className="group flex items-center gap-2 rounded-full bg-amber-900 px-5 py-3 font-bold text-amber-100 transition-all duration-300 hover:bg-amber-800 hover:drop-shadow-[0_0_12px_rgba(180,83,9,0.7)] cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#fef3c7" stroke="#fef3c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-all duration-300 group-hover:rotate-90 group-hover:scale-110" aria-hidden="true"> <rect x="2" y="2" width="8.5" height="8.5" rx="2.5" /><rect x="13.5" y="2" width="8.5" height="8.5" rx="2.5" /> <rect x="2" y="13.5" width="8.5" height="8.5" rx="2.5" /> <rect x="13.5" y="16.45" width="8.5" height="2.6" rx="1.3" /> <rect x="16.45" y="13.5" width="2.6" height="8.5" rx="1.3" /></svg>
            <span>Generate</span>
        </button>
      </div>
    </div>
  )
}

export default Shorten
