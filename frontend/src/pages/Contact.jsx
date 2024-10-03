import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>Us</span></p>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt=''/>
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='text-gray-600 font-semibold text-lg'>OUR OFFICE</p>
          <p className='text-gray-500'>00000 Willms Station <br></br>
          Suite 000, Washington, USA</p>
          <p className='text-gray-500'>Tel: (000) 000-0000 <br/>
          Email: greatstackdev@gmail.com</p>
          <p className='text-gray-600 font-semibold text-lg'>CAREERS AT PRESCRIPTO</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all  duration-500'>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact