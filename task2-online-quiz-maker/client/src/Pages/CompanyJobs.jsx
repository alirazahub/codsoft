import React, { useState, useEffect } from 'react';
import { Tabs } from 'antd'
import CompanyJobItem from '../Components/CompanyJobItem';
import { key } from "../key.js"
import axios from "axios"
import { useCookies } from "react-cookie"
import { HashLoader } from 'react-spinners'

const { TabPane } = Tabs
const CompanyJobs = () => {
    const [activeTab, setActiveTab] = useState('active');
    const [cookies] = useCookies(["x-auth-token"])
    const [activeJobs, setActiveJobs] = useState([])
    const [allJobs, setAllJobs] = useState([])
    const [loading, setLoading] = useState(false)
    const handleTabChange = (key) => {
        setActiveTab(key);
    };

    const getAllJobs = async () => {
        try {
            setLoading(true)
            const res = await axios.get(`${key}/api/user/company-all-jobs`, {
                headers: {
                    "x-auth-token": cookies["x-auth-token"]
                }
            })
            setAllJobs(res.data.jobs)
            setLoading(false)
        }
        catch (err) {
            console.log(err)
            setLoading(false)
        }
    }
    const getActiveJobs = async () => {
        try {
            setLoading(true)
            const res = await axios.get(`${key}/api/user/company-active-jobs`, {
                headers: {
                    "x-auth-token": cookies["x-auth-token"]
                }
            })
            setActiveJobs(res.data.jobs)
            setLoading(false)
        }
        catch (err) {
            console.log(err)
            setLoading(false)
        }
    }

    useEffect(() => {
        getActiveJobs()
        getAllJobs()
        // eslint-disable-next-line
    }, [])
    const handleUpdateAll = (data) => {
        console.log(data)
        getAllJobs()
        getActiveJobs()
    }
    const handleDeleteOne = (id) => {
        const newJobs = allJobs.filter(job => job._id !== id)
        setAllJobs(newJobs)
    }
    return (
        <div className='font-rubik'>
            <div className='px-3 sm:px-[150px] py-10'>
                <div className='font-bold text-[30px]'>All Jobs you Posted</div>
                <hr />
                <div >
                    <Tabs activeKey={activeTab} onChange={handleTabChange}>
                        <TabPane tab="Active jobs" key="active">
                            {loading ? <div className='w-[200px] mx-[auto]'> <HashLoader color="#FF4F6C" /> </div> :
                                <div className='grid grid-cols-1 gap-10 sm:grid-cols-2'>
                                    {
                                        activeJobs.map((job, index) => (
                                            <CompanyJobItem key={index} handleDeleteOne={handleDeleteOne} handleUpdateAll={handleUpdateAll} jobDetail={job} />
                                        ))
                                    }
                                </div>}
                        </TabPane>
                        <TabPane tab="All jobs" key="all">
                            {loading ? <div className='w-[200px] mx-[auto]'> <HashLoader color="#FF4F6C" /> </div> :
                                <div className='grid grid-cols-1 gap-10 sm:grid-cols-2'>
                                    {
                                        allJobs.map((job, index) => (
                                            <CompanyJobItem key={index} handleDeleteOne={handleDeleteOne} handleUpdateAll={handleUpdateAll} jobDetail={job} />
                                        ))
                                    }
                                </div>}
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

export default CompanyJobs
