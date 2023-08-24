import React from 'react';
import { Form } from 'antd';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const JobPost = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

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
                                    <option value="full-time">Full Time</option>
                                    <option value="part-time">Part Time</option>
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
                                <input className='border-[1px] w-full p-2 outline-none' />
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
                                name="education"
                                className='w-full mr-8'
                                rules={[{ required: true, message: 'Please enter the education level' }]}
                            >
                                <input className='border-[1px] w-full p-2 outline-none' />
                            </Form.Item>

                            <Form.Item
                                label="Experience"
                                name="experience"
                                className='w-full'
                                rules={[{ required: true, message: 'Please enter the experience level' }]}
                            >
                                <input className='border-[1px] w-full p-2 outline-none' />
                            </Form.Item>
                        </div>
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
