import React, { useState, useEffect } from 'react'
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { key } from '../key';
import { notification, Modal, Alert, Select } from 'antd';

const { Option } = Select;
const CompanyJobItem = ({ jobDetail, handleDeleteOne, handleUpdateAll }) => {
    const [visible, setVisible] = useState(false);
    const [edit, setEdit] = useState(false);
    const [skills, setSkills] = useState([]);
    const [title, setTitle] = useState(jobDetail?.title);
    const [type, setType] = useState(jobDetail?.type);
    const [category, setCategory] = useState(jobDetail?.category);
    const [city, setCity] = useState(jobDetail?.city);
    const [country, setCountry] = useState(jobDetail?.country);
    const [salary, setSalary] = useState(jobDetail?.salary);
    const [educationLevel, setEducationLevel] = useState(jobDetail?.educationLevel);
    const [experienceLevel, setExperienceLevel] = useState(jobDetail?.experienceLevel);
    const [skill, setSkill] = useState(jobDetail?.skills);
    const [description, setDescription] = useState(jobDetail?.description);
    const [requirements, setRequirements] = useState(jobDetail?.requirements);
    const [openPositions, setOpenPositions] = useState(jobDetail?.openPositions);
    const [status, setStatus] = useState(jobDetail?.status);


    const handleDelete = async () => {
        handleDeleteOne(jobDetail._id)
        try {
            await axios.delete(`${key}/api/user/company-job/${jobDetail._id}`)
            notification.success({
                message: "Job Deleted Successfully"
            })
        } catch (error) {
            console.log(error)
            notification.error({
                message: "Something went wrong"
            })
        }
    }
    const handleUpdate = async () => {
        const data = {
            title,
            type,
            category,
            city,
            country,
            salary,
            educationLevel,
            experienceLevel,
            skills: skill,
            description,
            requirements,
            openPositions,
            status
        }
        try {
            await axios.put(`${key}/api/user/company-job/${jobDetail._id}`, data)
            notification.success({
                message: "Job Updated Successfully"
            })
            setEdit(false)
        } catch (error) {
            console.log(error)
            notification.error({
                message: "Something went wrong"
            })
        }
        handleUpdateAll(data)
    }
    const handleOk = () => {
        handleDelete();
        setVisible(false);
    };

    const handleCancel = () => {
        setVisible(false);
        setEdit(false)
    };

    useEffect(() => {
        const getSkills = async () => {
            try {
                const res = await axios.get(`${key}/api/user/get-skills`);
                setSkills(res.data.skills);
            } catch (error) {
                console.log(error)
            }
        }
        getSkills();
        // eslint-disable-next-line
    }, [])
    return (
        <div className='border-[1px] p-4'>
            <Modal
                centered
                title="Confirmation"
                open={visible}
                footer={[
                    <button key="back" onClick={handleCancel} className="button-outlined mr-4">
                        Cancel
                    </button>,
                    <button key="submit" onClick={handleOk} className="button-filled">
                        Yes delete it!
                    </button>,
                ]}
                onCancel={handleCancel}
                cancelText="Cancel"
            >
                <Alert
                    message="Are you sure you want to delete?"
                    description="This action cannot be undone."
                    type="warning"
                    showIcon
                />
            </Modal>
            <Modal
                centered
                title="Updating Job"
                open={edit}
                width={1000}
                footer={[
                    <button key="back" onClick={handleCancel} className="button-outlined mr-4">
                        Cancel
                    </button>,
                    <button key="submit" onClick={handleUpdate} className="button-filled">
                        Update
                    </button>,
                ]}
                onCancel={handleCancel}
                cancelText="Cancel"
            >
                <form>
                    <div className='flex my-4'>
                        <div className='w-full mr-8' >
                            <label>Open Positions</label>
                            <input value={openPositions} onChange={(e) => setOpenPositions(e.target.value)} className='border-[1px] w-full p-2 outline-none' />
                        </div>
                        <div className='w-full' >
                            <label>Status</label>
                            <select value={status} onChange={(e) => setStatus(e.target.value)} className='border-[1px] w-full p-2 outline-none'>
                                <option value="">-- Select Status --</option>
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex my-4'>
                        <div className=' w-full mr-8'>
                            <label>Title</label>
                            <input value={title} onChange={(e) => setTitle(e.target.value)} className='border-[1px]  w-full p-2 outline-none' />
                        </div>

                        <div className=' w-full'>
                            <label>Type</label>
                            <select value={type} onChange={(e) => setType(e.target.value)} className='border-[1px]  w-full p-2 outline-none'>
                                <option value="">-- Select Type --</option>
                                <option value="Full Time">Full Time</option>
                                <option value="Part Time">Part Time</option>
                                <option value="Internship">Internship</option>
                                <option value="Contract">Contract</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex my-4'>
                        <div className=' w-full mr-8'>
                            <label>Category</label>
                            <select value={category} onChange={(e) => setCategory(e.target.value)} className='border-[1px] w-full p-2 outline-none'>
                                <option value="">-- Select Categoty --</option>
                                <option value="Programming">Programming</option>
                                <option value="Databases">Database</option>
                                <option value="Web">Web</option>
                                <option value="DevOps">DevOps</option>
                                <option value="Cloud">Cloud</option>
                                <option value="Infrastructure">Infrastructure</option>
                                <option value="Security">Security</option>
                                <option value="Ai/Ml">AI/ML</option>
                                <option value="Testing">Testing</option>
                                <option value="Project Management">Project Management</option>
                            </select>
                        </div>

                        <div
                            className=' w-full'>
                            <label>City</label>
                            <input value={city} onChange={(e) => setCity(e.target.value)} className='border-[1px] w-full p-2 outline-none' />
                        </div>
                    </div>
                    <div className='flex my-4'>
                        <div
                            className='w-full mr-8'>
                            <label>Country</label>
                            <input value={country} onChange={(e) => setCountry(e.target.value)} className='border-[1px] w-full p-2 outline-none' />
                        </div>

                        <div
                            className='w-full'>
                            <label>Salary</label>
                            <input value={salary} onChange={(e) => setSalary(e.target.value)} className='border-[1px] w-full p-2 outline-none' />
                        </div>
                    </div>
                    <div className='flex my-4'>
                        <div className='w-full mr-8' >
                            <label>Education Level</label>
                            <select value={educationLevel} onChange={(e) => setEducationLevel(e.target.value)} className='border-[1px] w-full p-2 outline-none'>
                                <option>-- Select Education Level --</option>
                                <option value="High School">High School</option>
                                <option value="Diploma">Diploma</option>
                                <option value="Bachelors">Bachelors</option>
                                <option value="Masters">Masters</option>
                                <option value="Phd">Phd</option>
                            </select>
                        </div>

                        <div className='w-full'>
                            <label>Experience Level</label>
                            <select value={experienceLevel} onChange={(e) => setExperienceLevel(e.target.value)} className='border-[1px] w-full p-2 outline-none'>
                                <option>-- Select Experience Level --</option>
                                <option value="0-1 Year">0-1 Year</option>
                                <option value="1-2 Years">1-2 Years</option>
                                <option value="2-3 Years">2-3 Years</option>
                                <option value="3-4 Years">3-4 Years</option>
                                <option value="4-5 Years">4-5 Years</option>
                                <option value="5+ Years">5+ Years</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label>Skills</label>
                        <Select value={skill} onChange={(e) => setSkill(e.target.value)} showSearch className='border-[1px] w-full p-2 outline-none' mode='multiple'>
                            {skills.map((skill, index) => (
                                <Option key={index} value={skill.skill}>{skill.skill}</Option>
                            ))}
                        </Select>
                    </div>
                    <div className='my-4'>
                        <label>Job Description</label>
                        <ReactQuill value={description} onChange={(e) => setDescription(e)} />
                    </div>

                    <div className='my-4'>
                        <label>Job Requiremnets</label>
                        <ReactQuill value={requirements} onChange={(e) => setRequirements(e)} />
                    </div>
                </form>
            </Modal>
            <div className='flex justify-between items-center'>
                <div className='text-[25px] font-semibold'>{jobDetail?.title}</div>
                <div>
                    <button onClick={() => setEdit(true)} className="mr-3 text-blue-500"><FaEdit size={25} /></button>
                    <button onClick={() => setVisible(true)} className="text-primary"><MdDelete size={25} /></button>
                </div>
            </div>
            <hr />
            <div className='flex justify-between my-2'>
                <div className='font-semibold'>Job Type:</div>
                <div className=''>{jobDetail?.type}</div>
            </div>
            <div className='flex justify-between my-2'>
                <div className='font-semibold'>No of Employees:</div>
                <div className=''>{jobDetail?.openPositions}</div>
            </div>
            <div className='flex justify-between my-2'>
                <div className='font-semibold'>Location:</div>
                <div className=''>{jobDetail?.city}, {jobDetail?.country}</div>
            </div>
            <div className='flex justify-between my-2'>
                <div className='font-semibold'>Salary:</div>
                <div className=''>{jobDetail?.salary}</div>
            </div>
            <div className='flex justify-between my-2'>
                <div className='font-semibold'>Education Level:</div>
                <div className=''>{jobDetail?.educationLevel}</div>
            </div>
            <div className='flex justify-between my-2'>
                <div className='font-semibold'>Status:</div>
                <div className={`${jobDetail?.status === "Active" ? "bg-green-500" : "bg-primary"} text-center w-[100px] font-bold text-white`}>{jobDetail?.status}</div>
            </div>
        </div>
    )
}

export default CompanyJobItem
