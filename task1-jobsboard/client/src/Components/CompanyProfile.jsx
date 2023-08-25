import React, { useEffect, useState } from 'react';
import { Form,Input } from 'antd';
import ReactQuill from 'react-quill';
import { FiUpload } from 'react-icons/fi';
import { useDropzone } from "react-dropzone";
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { key } from '../key.js'



const CompanyProfile = () => {
    const [imagePreview, setImagePreview] = useState(null);
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const [cookies] = useCookies(['x-auth-token']);
    const [companyDetails, setCompanyDetails] = useState({});

    const onDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];
        setImagePreview(file)
    };

    //eslint-disable-next-line
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop: onDrop });

    useEffect(() => {
        const getCompanyDetails = async () => {
            await axios.get(`${key}/api/user/company-details`, {
                headers: {
                    'x-auth-token': cookies['x-auth-token']
                }
            }).then((res) => {
                setCompanyDetails(res.data.company)
                console.log(companyDetails)
            }).catch((err) => {
                console.log(err)
            })
        }
        getCompanyDetails()
        //eslint-disable-next-line
    }, [])
    return (
        <div className='font-rubik'>
            <div className='sm:px-[250px] px-3 '>
                <div className='text-center font-bold text-[30px] mt-2'>Company Details</div>
                <div className='border-[1px] mt-4'>
                    <Form
                        name="register-company"
                        onFinish={onFinish}
                        layout="vertical"
                        className='p-10'
                    >
                        <div>
                            <Form.Item
                                label="Company Logo"
                                name="company_logo"
                                className='w-full mr-8'
                                rules={[{ required: true, message: 'Add you Company Logo' }]}
                            >
                                <div
                                    {...getRootProps()}
                                    className="w-full h-[250px] p-2 border-2 border-dashed rounded-lg flex flex-col items-center justify-center cursor-pointer"
                                >
                                    {imagePreview ? (
                                        <img
                                            src={URL.createObjectURL(imagePreview)}
                                            alt="Uploaded"
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    ) :
                                        (
                                            <>
                                                <input {...getInputProps()} />
                                                {isDragActive ? (
                                                    <p className="text-primary">Drop the image here...</p>
                                                ) : (
                                                    <div className="flex flex-col items-center">
                                                        <FiUpload className="text-4xl text-primary" />
                                                        <p className="text-primary">Choose or drag an image</p>
                                                    </div>
                                                )}
                                            </>
                                        )}
                                </div>
                            </Form.Item>
                        </div>
                        <div className='flex'>
                            <Form.Item
                                label="Company Name"
                                name="company_name"
                                className='w-full mr-8'
                                initialValue={"Software"}
                                rules={[{ required: true, message: 'Please enter the company name' }]}
                            >
                                <Input className='border-[1px] w-full p-2 outline-none' />
                            </Form.Item>

                            <Form.Item
                                label="Industry"
                                name="industry"
                                className='w-full'
                                rules={[{ required: true, message: 'Please select the industry' }]}
                            >
                                <select  className='border-[1px] w-full p-2 outline-none'>
                                    <option value="">-- Select Industry --</option>
                                    <option value="Software">Software Industry</option>
                                </select>
                            </Form.Item>
                        </div>
                        <div className='flex'>
                            <Form.Item
                                label="CEO Name"
                                name="ceo_name"
                                className='w-full mr-8'
                                rules={[{ required: true, message: 'Please enter the name of CEO' }]}
                            >
                                <input className='border-[1px] w-full p-2 outline-none' />
                            </Form.Item>

                            <Form.Item
                                label="CEO Email"
                                name="ceo_email"
                                className='w-full'
                                rules={[{ required: true, message: 'Please enter the email of CEO' }]}
                            >
                                <input className='border-[1px] w-full p-2 outline-none' />
                            </Form.Item>
                        </div>
                        <div className='flex'>
                            <Form.Item
                                label="City"
                                name="city"
                                className='w-full mr-8'
                                rules={[{ required: true, message: 'Please enter the city' }]}
                            >
                                <input className='border-[1px] w-full p-2 outline-none' />
                            </Form.Item>
                            <Form.Item
                                label="Country"
                                name="country"
                                className='w-full '
                                rules={[{ required: true, message: 'Please enter the country' }]}
                            >
                                <input className='border-[1px] w-full p-2 outline-none' />
                            </Form.Item>
                        </div>
                        <div className='flex'>
                            <Form.Item
                                label="Number of Employees"
                                name="employees"
                                className='w-full mr-8'
                                rules={[{ required: true, message: 'Please enter the Total employes' }]}
                            >
                                <input className='border-[1px] w-full p-2 outline-none' />
                            </Form.Item>

                            <Form.Item
                                label="Established"
                                name="established"
                                className='w-full'
                                rules={[{ required: true, message: 'Please enter the Established Date' }]}
                            >
                                <input className='border-[1px] w-full p-2 outline-none' />
                            </Form.Item>
                        </div>
                        <div className='flex'>
                            <Form.Item
                                label="Company Website"
                                name="website"
                                className='w-full mr-8'
                                rules={[{ required: true, message: 'Please enter the website' }]}
                            >
                                <input className='border-[1px] w-full p-2 outline-none' />
                            </Form.Item>

                            <Form.Item
                                label="LinkedIn"
                                name="linkedin"
                                className='w-full'
                                rules={[{ required: true, message: 'Please enter the LinkedIn URL' }]}
                            >
                                <input className='border-[1px] w-full p-2 outline-none' />
                            </Form.Item>
                        </div>
                        <div className='flex'>
                            <Form.Item
                                label="Instagram URL"
                                name="instagram"
                                className='w-full mr-8'
                                rules={[{ required: true, message: 'Please enter the Instagram URL' }]}
                            >
                                <input className='border-[1px] w-full p-2 outline-none' />
                            </Form.Item>

                            <Form.Item
                                label="Facebook URL"
                                name="facebook"
                                className='w-full'
                                rules={[{ required: true, message: 'Please enter the Facebook URL' }]}
                            >
                                <input className='border-[1px] w-full p-2 outline-none' />
                            </Form.Item>
                        </div>
                        <div className='flex'>
                            <Form.Item
                                label="Company Email"
                                name="company_email"
                                className='w-full mr-8'
                                rules={[{ required: true, message: 'Please enter the Emai' }]}
                            >
                                <input className='border-[1px] w-full p-2 outline-none' />
                            </Form.Item>

                            <Form.Item
                                label="Company Phone"
                                name="company_phone"
                                className='w-full'
                                rules={[{ required: true, message: 'Please enter the Company Phone' }]}
                            >
                                <input className='border-[1px] w-full p-2 outline-none' />
                            </Form.Item>
                        </div>
                        <Form.Item
                            label="Company Overview"
                            name="overview"
                            rules={[{ required: true, message: 'Please enter the Overview' }]}
                        >
                            <ReactQuill />
                        </Form.Item>

                        <Form.Item
                            label="Company Services"
                            name="services"
                            rules={[{ required: true, message: 'Please enter the Services' }]}
                        >
                            <ReactQuill />
                        </Form.Item>

                        <Form.Item>
                            <button type="primary" className='button-filled' htmlType="submit">
                                Update Info
                            </button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default CompanyProfile;
