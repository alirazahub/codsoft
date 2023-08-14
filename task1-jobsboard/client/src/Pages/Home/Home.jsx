import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineDesktopComputer,HiPhotograph } from 'react-icons/hi'
import { IoMdColorPalette } from 'react-icons/io'
import { FaPython } from 'react-icons/fa'

const Home = () => {
  return (
    <div className='font-roboto'>
      <div className='absolute w-[100%]'><img className='h-[92.1vh] w-[100%]' src="https://themesdesign.in/joobsy/images/bg-home.jpg" alt="cover" /></div>
      <div className='font-rubik relative bg-overlay flex flex-col items-center justify-center h-[calc(101.4vh-72px)]'>
        <h1 className='text-[48px] font-bold text-center text-white'>Welcome to JobsBoard</h1>
        <p className='text-[24px] text-center text-white'>Find your dream job today!</p>
        <Link to='/jobs' className='mt-8 border-[1px] border-primary py-1 font-bold text-primary hover:text-white hover:bg-primary px-8 rounded-full'>Find Jobs</Link>
      </div>
      <div className='my-4 mt-[100px] px-[150px]'>
        <div className='w-[124px] mx-[auto] pb-2 border-b-2 mb-[100px] border-primary text-center text-[25px] font-bold'>Categories</div>
        <div className='grid grid-cols-4 gap-8'>
          <Link className='bg-background p-4 rounded-lg text-primary hover:text-white hover:bg-primary cursor-pointer transition-all ease-in duration-500'>
            <div className='w-[100px] h-[100px] mx-[auto] rounded-full bg-secondary items-center flex justify-center'><HiOutlineDesktopComputer color='#FF4F6C' size={45} /></div>
            <div className='text-center my-3 font-rubik text-[20px] font-bold'>Software Developement</div>
            <div className='text-center my-3 font-rubik text-[16px] font-semibold'>450 Jobs</div>
          </Link>
          <Link className='bg-background p-4 rounded-lg text-primary hover:text-white hover:bg-primary cursor-pointer transition-all ease-in duration-500'>
            <div className='w-[100px] h-[100px] mx-[auto] rounded-full bg-secondary items-center flex justify-center'><HiPhotograph color='#FF4F6C' size={45} /></div>
            <div className='text-center my-3 font-rubik text-[20px] font-bold'>Photo Editing</div>
            <div className='text-center my-3 font-rubik text-[16px] font-semibold'>100 Jobs</div>
          </Link>
          <Link className='bg-background p-4 rounded-lg text-primary hover:text-white hover:bg-primary cursor-pointer transition-all ease-in duration-500'>
            <div className='w-[100px] h-[100px] mx-[auto] rounded-full bg-secondary items-center flex justify-center'><IoMdColorPalette color='#FF4F6C' size={45} /></div>
            <div className='text-center my-3 font-rubik text-[20px] font-bold'>Graphic Designing</div>
            <div className='text-center my-3 font-rubik text-[16px] font-semibold'>129 Jobs</div>
          </Link>
          <Link className='bg-background p-4 rounded-lg text-primary hover:text-white hover:bg-primary cursor-pointer transition-all ease-in duration-500'>
            <div className='w-[100px] h-[100px] mx-[auto] rounded-full bg-secondary items-center flex justify-center'><FaPython color='#FF4F6C' size={45} /></div>
            <div className='text-center my-3 font-rubik text-[20px] font-bold'>Artificial Intelligence</div>
            <div className='text-center my-3 font-rubik text-[16px] font-semibold'>450 Jobs</div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
