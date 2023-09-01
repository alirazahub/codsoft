import React from 'react'
import AppliedJobItem from './Home/AppliedJobItem'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { key } from '../key'
import { HashLoader } from "react-spinners";
import { useCookies } from 'react-cookie'


const AppliedJobs = () => {
  const [jobData, setJobData] = useState([])
  const [loading, setLoading] = useState(false)
  const [cookies] = useCookies(['x-auth-token'])

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const response = await axios.get(`${key}/api/user/get-applied-jobs`, {
        headers: {
          "x-auth-token": cookies['x-auth-token']
        }
      })
      console.log(response.data.jobs)
      setJobData(response.data.jobs)
      setLoading(false)
    }
    fetchData()
    //eslint-disable-next-line
  }, [])
  return (
    <div className='font-rubik sm:px-[150px] px-4 my-10'>
      <div className='mb-10 font-bold border-b-[1px] text-[20px]'> Jobs You Applied</div>
      {loading ? <div className='w-[200px] mx-[auto]'> <HashLoader color="#FF4F6C" /> </div> :
        <div className='grid sm:grid-cols-3 grid-cols-1 sm:gap-10 gap-6 '>
          {
            jobData.map((item, index) => (
              <AppliedJobItem key={index} data={item} />
            ))
          }
        </div>}
    </div>
  )
}

export default AppliedJobs
