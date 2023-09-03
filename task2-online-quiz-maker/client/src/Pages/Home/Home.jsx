import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineDesktopComputer, HiPhotograph } from 'react-icons/hi'
import { IoMdColorPalette } from 'react-icons/io'
import { FaPython } from 'react-icons/fa'
import { FiLogIn } from "react-icons/fi"
import { MdFindInPage } from "react-icons/md"
import { PiRocketBold, PiShootingStarThin } from "react-icons/pi"
import { Carousel } from 'antd';
import CarouselItem from './CarouselItem'
import JobItem from './JobItem'
import { key } from '../../key'
import { HashLoader } from 'react-spinners'
import axios from 'axios'


const Home = () => {
  const carouselData = [{
    name: "Abdul Hadi",
    rank: "CEO, ABH Foundation",
    description: "This is the best place to find the right talent for your project. I have been using JobsBoard for the last 3 years and I am very satisfied with the results. Highly recommended!",
  },
  {
    name: "Najam ul Hassan",
    rank: "CEO, NAAsoft",
    description: "I have been using JobsBoard for the last 3 years and I am very satisfied with the results. Highly recommended!",
  },
  {
    name: "Zain ul Abideen",
    rank: "CEO, ZainTech",
    description: "This is the best place to find the right talent for your project. I have been using JobsBoard for the last 3 years and I am very satisfied with the results. Highly recommended!",
  },
  {
    name: "Hassan Raza",
    rank: "CEO, RazaTech",
    description: "I have been using JobsBoard for the last 3 years and I am very satisfied with the results. Highly recommended!",
  },
  ]
  const carouselData2 = [
    {
      name: "Najam ul Hassan",
      rank: "CEO, NAAsoft",
      description: "I have been using JobsBoard for the last 3 years and I am very satisfied with the results. Highly recommended!",
    },
    {
      name: "Hassan Raza",
      rank: "CEO, RazaTech",
      description: "I have been using JobsBoard for the last 3 years and I am very satisfied with the results. Highly recommended!",
    },
    {
      name: "Abdul Hadi",
      rank: "CEO, ThemeDesign",
      description: "This is the best place to find the right talent for your project. I have been using JobsBoard for the last 3 years and I am very satisfied with the results. Highly recommended!",
    },
    {
      name: "Zain ul Abideen",
      rank: "CEO, ZainTech",
      description: "This is the best place to find the right talent for your project. I have been using JobsBoard for the last 3 years and I am very satisfied with the results. Highly recommended!",
    },
  ]
  const [jobData, setJobData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const response = await axios.get(`${key}/api/user/get-jobs`)
      setJobData(response.data.jobs)
      setLoading(false)
    }
    fetchData()
    //eslint-disable-next-line
  }, [])
  return (
    <div className='font-roboto'>
      <div className='absolute w-[100%]'><img className='h-[92.1vh] w-[100%]' src="https://themesdesign.in/joobsy/images/bg-home.jpg" alt="cover" /></div>
      <div className='font-rubik relative bg-overlay flex flex-col items-center justify-center h-[calc(101.4vh-72px)]'>
        <h1 className='text-[48px] font-bold text-center text-white'>Welcome to JobsBoard</h1>
        <p className='text-[24px] text-center text-white'>Find your dream job today!</p>
        <Link to='/jobs' className='mt-8 border-[1px] transition-all ease-in duration-500 border-primary py-1 font-bold text-primary hover:text-white hover:bg-primary px-8 rounded-full'>Find Jobs</Link>
      </div>

      {/* categories */}

      <div className='my-14 mt-[50px] sm:px-[150px] px-[20px]'>
        <div className='w-[124px] mx-[auto] pb-2 border-b-2 mb-[100px] border-primary text-center text-[25px] font-bold'>Categories</div>
        <div className='grid sm:grid-cols-4 grid-cols-2 sm:gap-8 gap-6'>
          <Link className='bg-background  p-4 pt-7 rounded-lg text-primary hover:text-white hover:bg-primary cursor-pointer transition-all ease-in duration-500'>
            <div className='w-[100px] h-[100px] mx-[auto] rounded-full bg-secondary items-center flex justify-center'><HiOutlineDesktopComputer color='#FF4F6C' size={45} /></div>
            <div className='text-center my-3 font-rubik text-[20px] font-bold'>Software Developement</div>
            <div className='text-center my-3 font-rubik text-[16px] font-semibold'>450 Jobs</div>
          </Link>
          <Link className='bg-background p-4 rounded-lg pt-7 text-primary hover:text-white hover:bg-primary cursor-pointer transition-all ease-in duration-500'>
            <div className='w-[100px] h-[100px] mx-[auto] rounded-full bg-secondary items-center flex justify-center'><HiPhotograph color='#FF4F6C' size={45} /></div>
            <div className='text-center my-3 font-rubik text-[20px] font-bold'>Marketing</div>
            <div className='text-center my-3 font-rubik text-[16px] font-semibold'>100 Jobs</div>
          </Link>
          <Link className='bg-background p-4 rounded-lg pt-7 text-primary hover:text-white hover:bg-primary cursor-pointer transition-all ease-in duration-500'>
            <div className='w-[100px] h-[100px] mx-[auto] rounded-full bg-secondary items-center flex justify-center'><IoMdColorPalette color='#FF4F6C' size={45} /></div>
            <div className='text-center my-3 font-rubik text-[20px] font-bold'>Designing</div>
            <div className='text-center my-3 font-rubik text-[16px] font-semibold'>129 Jobs</div>
          </Link>
          <Link className='bg-background p-4 rounded-lg pt-7 text-primary hover:text-white hover:bg-primary cursor-pointer transition-all ease-in duration-500'>
            <div className='w-[100px] h-[100px] mx-[auto] rounded-full bg-secondary items-center flex justify-center'><FaPython color='#FF4F6C' size={45} /></div>
            <div className='text-center my-3 font-rubik text-[20px] font-bold'>Data Science</div>
            <div className='text-center my-3 font-rubik text-[16px] font-semibold'>450 Jobs</div>
          </Link>
        </div>
      </div>

      {/* featured jobs */}
      <div className=' bg-background pb-10'>
        <div className='w-[190px] mx-[auto] border-b-2 font-rubik pt-10 border-primary text-center text-[25px] pb-2 mb-10 font-bold'>Featured Jobs</div>
        {loading && <div className='w-[200px] mx-[auto]'> <HashLoader color="#FF4F6C" /> </div>}
        <div className='grid sm:grid-cols-3 grid-cols-1 sm:gap-10 gap-6 sm:px-[150px] px-[20px]'>
          {
            jobData.slice(0, 9).map((item, index) => (
              <JobItem key={index} data={item} />
            ))
          }
        </div>
      </div>

      {/* how  it works */}

      <div className='cover-image'>
        <div className='bg-overlay'>
          <div className='w-[165px] mx-[auto] border-b-2 text-white pt-10 border-primary text-center text-[25px] pb-2 font-bold'>How it Works?</div>
          <div className='grid sm:grid-cols-4 grid-cols-2 sm:gap-8 gap-6 sm:px-[150px] px-[20px]'>
            <div className='my-14'>
              <div className=''><FiLogIn color='#FF4F6C' size={80} /></div>
              <div className='text-left mt-3 text-primary font-rubik text-[24px] font-bold'>Step 01</div>
              <div className='text-left my-0 text-white font-rubik text-[20px] font-bold'>Create an Account</div>
              <div className='text-left my-3 text-white font-rubik text-[16px] font-semibold'>Create an account, complete your profile and upload a portfolio.</div>
            </div>
            <div className='my-14'>
              <div className=''><MdFindInPage color='#FF4F6C' size={80} /></div>
              <div className='text-left mt-3 text-primary font-rubik text-[24px] font-bold'>Step 02</div>
              <div className='text-left my-0 text-white font-rubik text-[20px] font-bold'>Search for Jobs</div>
              <div className='text-left my-3 text-white font-rubik text-[16px] font-semibold'>Search for jobs that suit your skills and apply for them.</div>
            </div>
            <div className='my-14'>
              <div className=''><PiRocketBold color='#FF4F6C' size={80} /></div>
              <div className='text-left mt-3 text-primary font-rubik text-[24px] font-bold'>Step 03</div>
              <div className='text-left my-0 text-white font-rubik text-[20px] font-bold'>Get Hired</div>
              <div className='text-left my-3 text-white font-rubik text-[16px] font-semibold'>Get hired by the employer and start working on your dream project.</div>
            </div>
            <div className='my-14'>
              <div className=''><PiShootingStarThin color='#FF4F6C' size={80} /></div>
              <div className='text-left mt-3 text-primary font-rubik text-[24px] font-bold'>Step 04</div>
              <div className='text-left my-0 text-white font-rubik text-[20px] font-bold'>Get Paid</div>
              <div className='text-left my-3 text-white font-rubik text-[16px] font-semibold'>Get paid by the employer and start working on your dream project.</div>
            </div>
          </div>
        </div>
      </div>

      <div className='my-14 sm:px-[150px] px-[20px]'>
        <div className='w-[150px] mx-[auto] border-b-2 font-rubik pt-10 border-primary text-center text-[25px] pb-2 mb-10 font-bold'>Testimonials</div>
        <div className='grid grid-cols-1 sm:grid-cols-2  gap-2'>
          <Carousel autoplay dots={false} className='sm:w-[600px] w-[100%] mx-[auto] my-6 shadow-lg shadow-gray-500/50 rounded-lg'>
            {
              carouselData.map((item, index) => (
                <CarouselItem key={index} description={item.description} name={item.name} rank={item.rank} />
              ))
            }
          </Carousel>
          <Carousel autoplay dots={false} className='smw-[600px] w-[100%] mx-[auto] my-6 shadow-lg shadow-gray-500/50 rounded-lg'>
            {
              carouselData2.map((item, index) => (
                <CarouselItem key={index} description={item.description} name={item.name} rank={item.rank} />
              ))
            }
          </Carousel>
        </div>
      </div>

      <div className='bg-background py-10 sm:px-[150px] '>
        <div className='bg-white flex justify-between'>
          <img src="/cta-bg.jpg" alt="cover" />
          <div className='flex items-center sm:text-[35px] text-[20px] font-rubik'>Apply Now and let your next job find you</div>
          <div className='flex items-center pr-5'>
            <button className='button-outlined'>Apply Now</button>
          </div>
        </div>
      </div>
      {/* footer */}
    </div >
  )
}

export default Home
