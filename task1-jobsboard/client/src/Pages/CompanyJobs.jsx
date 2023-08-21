import React, { useState } from 'react';
import { Tabs } from 'antd'
import CompanyJobItem from '../Components/CompanyJobItem';

const { TabPane } = Tabs
const CompanyJobs = () => {
    const [activeTab, setActiveTab] = useState('active');
    const handleTabChange = (key) => {
        setActiveTab(key);
    };
    const jobs = [
        {
            name: "Software Developer",
            type: "Full-time",
            employees: 100,
            location: "New York",
            salary: "$80,000",
            education: "Bachelor's degree",
            status: "active"
        },
        {
            name: "Marketing Manager",
            type: "Contract",
            employees: 50,
            location: "Los Angeles",
            salary: "$65,000",
            education: "Master's degree",
            status: "inactive"
        },
    ];
    return (
        <div className='font-rubik'>
            <div className='px-3 sm:px-[150px] py-10'>
                <div className='font-bold text-[30px]'>All Jobs you Posted</div>
                <hr />
                <div >
                    <Tabs activeKey={activeTab} onChange={handleTabChange}>
                        <TabPane tab="Active jobs" key="active">
                            <div className='grid grid-cols-1 gap-10 sm:grid-cols-2'>
                                {
                                    jobs.map((job, index) => (
                                        <CompanyJobItem key={index} jobDetail={job} />
                                    ))
                                }
                            </div>
                        </TabPane>
                        <TabPane tab="All jobs" key="all">
                            {/* Content for All jobs tab */}
                            <p>List of all jobs goes here.</p>
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

export default CompanyJobs
