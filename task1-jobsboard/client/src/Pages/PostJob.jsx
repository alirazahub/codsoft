import React, { useState,useEffect } from 'react';
import { Form, Select } from 'antd';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { key } from "../key.js"
import { useCookies } from 'react-cookie';
import { notification } from 'antd';

const { Option } = Select;
const JobPost = () => {
    const [cookies] = useCookies(['x-auth-token']);
    const [skills, setSkills] = useState([]);
    const [role, setRole] = useState('');
    const [form] = Form.useForm();
    const onFinish = async (values) => {
        if(role === "company"){
            try {
                await axios.post(`${key}/api/user/post-job`, values, {
                    headers: {
                        'x-auth-token': cookies['x-auth-token']
                    }
                });

                notification.success({
                    message: 'Success',
                    description:
                      'Job posted successfully',
                  });
                form.resetFields();
            } catch (error) {
                console.log(error)
                notification.error({
                    message: 'Error',
                    description:
                      error.response.data.message
                  });
            }
        }else{
            notification.error({
                message: 'Not Allowed',
                description:
                  'You are not allowed to post a job',
              });
        }
    };
    useEffect(() => {
        const verifyUser = async () => {
            try {
                const res = await axios.get(`${key}/api/user/verify`, {
                    headers: {
                        'x-auth-token': cookies['x-auth-token']
                    }
                });
                setRole(res?.data?.role);
            } catch (error) {
                console.log(error)
            }
        }
        verifyUser();

        const getSkills = async () => {
            try {
                const res = await axios.get(`${key}/api/user/get-skills`);
                setSkills(res.data.skills);
            } catch (error) {
                console.log(error)
            }
        }
        getSkills();
        //eslint-disable-next-line
    }, [])
    return (
        <div className='font-rubik'>
            <div className='detail-banner'>
                <div className='bg-overlay'>
                    <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-[133px]'>
                        <h1 className='text-4xl text-center text-white font-bold'>Post New Job</h1>
                        <p className='text-xl text-center text-primary'>
                            Post a new job and hire the best employees
                        </p>
                    </div>
                </div>
            </div>
            <div className='sm:px-[250px] px-3 '>
                <div className='border-[1px] mt-4'>
                    <Form
                        name="job-post"
                        onFinish={onFinish}
                        layout="vertical"
                        className='p-10'
                    >
                        <div className='flex'>
                            <Form.Item
                                label="Title"
                                name='title'
                                className='w-full mr-8'
                                rules={[{ required: true, message: 'Please enter the job title' }]}
                            >
                                <input className='border-[1px] w-full p-2 outline-none' />
                            </Form.Item>

                            <Form.Item
                                label="Type"
                                name="type"
                                className='w-full'
                                rules={[{ required: true, message: 'Please select the job type' }]}
                            >
                                <select className='border-[1px] w-full p-2 outline-none'>
                                    <option value="">-- Select Type --</option>
                                    <option value="Full Time">Full Time</option>
                                    <option value="Part Time">Part Time</option>
                                    <option value="Internship">Internship</option>
                                    <option value="Contract">Contract</option>
                                </select>
                            </Form.Item>
                        </div>
                        <div className='flex'>
                            <Form.Item
                                label="Category"
                                name="category"
                                className='w-full mr-8'
                                rules={[{ required: true, message: 'Please enter the job category' }]}
                            >
                                <select className='border-[1px] w-full p-2 outline-none'>
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
                            </Form.Item>

                            <Form.Item
                                label="City"
                                name="city"
                                className='w-full'
                                rules={[{ required: true, message: 'Please enter the city' }]}
                            >
                                <input className='border-[1px] w-full p-2 outline-none' />
                            </Form.Item>
                        </div>
                        <div className='flex'>
                            <Form.Item
                                label="Country"
                                name="country"
                                className='w-full mr-8'
                                rules={[{ required: true, message: 'Please enter the country' }]}
                            >
                                <input className='border-[1px] w-full p-2 outline-none' />
                            </Form.Item>

                            <Form.Item
                                label="Salary"
                                name="salary"
                                className='w-full'
                                rules={[{ required: true, message: 'Please enter the salary' }]}
                            >
                                <input className='border-[1px] w-full p-2 outline-none' />
                            </Form.Item>
                        </div>
                        <div className='flex'>
                            <Form.Item
                                label="Education Level"
                                name="educationLevel"
                                className='w-full mr-8'
                                rules={[{ required: true, message: 'Please enter the education level' }]}
                            >
                                <input className='border-[1px] w-full p-2 outline-none' />
                            </Form.Item>

                            <Form.Item
                                label="Experience"
                                name="experienceLevel"
                                className='w-full'
                                rules={[{ required: true, message: 'Please enter the experience level' }]}
                            >
                                <input className='border-[1px] w-full p-2 outline-none' />
                            </Form.Item>
                        </div>
                        <Form.Item
                            label="Related Skills"
                            name="skills"
                            rules={[{ required: true, message: 'Please select Skills' }]}
                        >
                            <Select showSearch className='border-[1px] w-full p-2 outline-none' mode='multiple'>
                                {skills.map((skill,index) => (
                                    <Option key={index} value={skill.skill}>{skill.skill}</Option>
                                ))}
                            </Select>
                        </Form.Item>
                        <Form.Item
                            label="Job Description"
                            name="description"
                            rules={[{ required: true, message: 'Please enter the job description' }]}
                        >
                            <ReactQuill />
                        </Form.Item>

                        <Form.Item
                            label="Job Requirements"
                            name="requirements"
                            rules={[{ required: true, message: 'Please enter the job requirements' }]}
                        >
                            <ReactQuill />
                        </Form.Item>

                        <Form.Item>
                            <button type="primary" className='button-filled' htmlType="submit">
                                Post Job
                            </button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default JobPost;
