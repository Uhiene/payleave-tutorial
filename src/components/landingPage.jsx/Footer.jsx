import React from 'react'
import { BsFacebook, BsInstagram, BsTwitterX } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='bg-[#141414] p-5 md:px-20  md:py-10'>
        <div className='flex flex-col md:flex-row gap-5 items-center justify-between border-b border-[#424242] pb-5'>
            <div>
                <h1 className="text-2xl md:text-4xl text-white">Be the first to know when we launch</h1>
                <p className="text-base md:text-xl text-[#D6D6D6]">We&apos;re still building. Join our waiting list now!</p>
            </div>
            <div className='flex flex-col md:flex-row gap-2'>
                <input type="text" className='bg-white rounded-md h-12 p-2 px-4 w-full sm:w-72 text-gray-500 placeholder:text-gray-500'  placeholder='Enter your email'/>
                <input type="submit" className="p-2 px-4 font-medium text-xl rounded-md bg-white text-[#141414]" />
            </div>
        </div>
        <div className='flex flex-col md:flex-row gap-5 items-center justify-between py-5'>
            <p  className="text-xl text-[#D6D6D6]">© 2023 Purse. All rights reserved.</p>
            <div className='text-xl text-[#D6D6D6] flex items-center gap-5'>
                <BsFacebook className='hover:text-orange-500 cursor-pointer'/>
                <BsTwitterX className='hover:text-orange-500 cursor-pointer'/>
                <BsInstagram className='hover:text-orange-500 cursor-pointer'/>
            </div>
        </div>
    </div>
  )
}

export default Footer