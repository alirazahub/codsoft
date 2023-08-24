import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import { FiUpload } from 'react-icons/fi';
import { useDropzone } from "react-dropzone";
import 'react-quill/dist/quill.snow.css';
import { Form, Select, Button, Space } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { BiMinus } from 'react-icons/bi';

const { Option } = Select;
const UserProfile = () => {
    const [imagePreview, setImagePreview] = useState(null);

    const onDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];
        setImagePreview(file)
    };

    //eslint-disable-next-line
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop: onDrop });
    const [skills, setSkills] = useState([{ name: '', proficiency: '' }]);
    const [experiences, setExperiences] = useState([
        {
            companyName: '',
            designation: '',
            duration: '',
            skills: [],
        },
    ]);
    const addSkillField = () => {
        setSkills([...skills, { name: '', proficiency: '' }]);
    };
    const addExperienceField = () => {
        setExperiences([
            ...experiences,
            {
                companyName: '',
                designation: '',
                duration: '',
                skills: [],
            },
        ]);
    };

    const handleSkillChange = (index, field, value) => {
        const updatedSkills = [...skills];
        updatedSkills[index][field] = value;
        setSkills(updatedSkills);
    };

    const handleRemoveSkill = (index) => {
        const updatedSkills = skills.filter((_, i) => i !== index);
        setSkills(updatedSkills);
    };
    const handleExperienceChange = (index, field, value) => {
        const updatedExperiences = [...experiences];
        updatedExperiences[index][field] = value;
        setExperiences(updatedExperiences);
    };

    const handleRemoveExperience = (index) => {
        const updatedExperiences = experiences.filter((_, i) => i !== index);
        setExperiences(updatedExperiences);
    };

    const handleSkillsChange = (index, selectedSkills) => {
        const updatedExperiences = [...experiences];
        updatedExperiences[index].skills = selectedSkills;
        setExperiences(updatedExperiences);
    };
    const onFinish = (values) => {
        console.log('Success:', values, skills, experiences);
    };

    return (
        <div className='font-rubik'>
            <div className='sm:px-[250px] px-3 '>
                <div className='text-center font-bold text-[30px] mt-2'>Your Details</div>
                <div className='border-[1px] mt-4'>
                    <Form
                        name="register-company"
                        onFinish={onFinish}
                        layout="vertical"
                        className='p-10'
                    >
                        <div className='flex'>
                            <Form.Item
                                label="Name"
                                name="name"
                                className='w-full mr-8'
                                rules={[{ required: true, message: 'Please enter your name' }]}
                            >
                                <input className='border-[1px] w-full p-2 outline-none' />
                            </Form.Item>
                            <Form.Item
                                label="Date of Birth"
                                name="dob"
                                className='w-full'
                                rules={[{ required: true, message: 'Please enter the Date of Birth' }]}
                            >
                                <input className='border-[1px] w-full p-2 outline-none' />
                            </Form.Item>
                        </div>
                        <div className='flex'>
                            <Form.Item
                                label="Email"
                                name="email"
                                className='w-full mr-8'
                                rules={[{ required: true, message: 'Please enter Email' }]}
                            >
                                <input className='border-[1px] w-full p-2 outline-none' />
                            </Form.Item>

                            <Form.Item
                                label="Phone"
                                name="phone"
                                className='w-full'
                                rules={[{ required: true, message: 'Please enter  Phone' }]}
                            >
                                <input className='border-[1px] w-full p-2 outline-none' />
                            </Form.Item>
                        </div>
                        <div className='flex'>
                            <Form.Item
                                label="Portfolio"
                                name="portfolio"
                                className='w-full mr-8'
                            >
                                <input className='border-[1px] w-full p-2 outline-none' />
                            </Form.Item>

                            <Form.Item
                                label="LinkedIn"
                                name="linkedin"
                                className='w-full'
                            >
                                <input className='border-[1px] w-full p-2 outline-none' />
                            </Form.Item>
                        </div>
                        <div className='flex'>
                            <Form.Item
                                label="Instagram URL"
                                name="instagram"
                                className='w-full mr-8'
                            >
                                <input className='border-[1px] w-full p-2 outline-none' />
                            </Form.Item>

                            <Form.Item
                                label="Facebook URL"
                                name="facebook"
                                className='w-full'
                            >
                                <input className='border-[1px] w-full p-2 outline-none' />
                            </Form.Item>
                        </div>
                        <div className='my-5 border-b-[1px]'>
                            <div className='mb-2 font-bold text-[30px]'>Highest Education</div>

                            <div className='flex'>
                                <Form.Item
                                    label="Degree"
                                    name="degree"
                                    className='w-full mr-8'
                                    rules={[{ required: true, message: 'Please enter Degree' }]}
                                >
                                    <input className='border-[1px] w-full p-2 outline-none' />
                                </Form.Item>

                                <Form.Item
                                    label="Institute"
                                    name="institute"
                                    className='w-full'
                                    rules={[{ required: true, message: 'Please enter Institute' }]}
                                >
                                    <input type='text' className='border-[1px] w-full p-2 outline-none' />
                                </Form.Item>
                            </div>
                            <div className='flex'>
                                <Form.Item
                                    label="Graduation Date"
                                    name="graduation_date"
                                    className='w-full mr-8'
                                    rules={[{ required: true, message: 'Please enter Graduation Date' }]}
                                >
                                    <input type="date" className='border-[1px] w-full p-2 outline-none' />
                                </Form.Item>

                                <Form.Item
                                    label="CGPA"
                                    name="cgpa"
                                    className='w-full'
                                    rules={[{ required: true, message: 'Please enter CGPA' }]}
                                >
                                    <input className='border-[1px] w-full p-2 outline-none' />
                                </Form.Item>
                            </div>
                        </div>
                        <div className='my-5 border-b-[1px]'>
                            <div className='mb-2 font-bold text-[30px]'>Skills</div>
                            {skills.map((skill, index) => (
                                <Space key={index} className='flex mb-4 items-center' align="baseline">
                                    <Form.Item className='mb-0 w-full mr-6'>
                                        <input
                                            className='border-[1px] w-[459px] p-2 outline-none'
                                            value={skill.name}
                                            onChange={(e) => handleSkillChange(index, 'name', e.target.value)}
                                            placeholder="Skill Name"
                                        />
                                    </Form.Item>
                                    <Form.Item className='mb-0  w-full'>
                                        <input
                                            className='border-[1px] p-2 w-[420px] outline-none'
                                            value={skill.proficiency}
                                            onChange={(e) => handleSkillChange(index, 'proficiency', e.target.value)}
                                            placeholder="Proficiency level (%)"
                                            type="number"
                                            min={1}
                                            max={100}
                                        />
                                    </Form.Item>
                                    <div className='border-[1px] border-gray-200 text-gray-200 cursor-pointer hover:border-primary hover:text-primary p-1 flex justify-center items-center' onClick={() => handleRemoveSkill(index)}>
                                        <BiMinus size={30} />
                                    </div>
                                </Space>
                            ))}
                            <Form.Item>
                                <Button type="dashed" onClick={addSkillField} block icon={<PlusOutlined />}>
                                    Add Another Skill
                                </Button>
                            </Form.Item>
                        </div>

                        <div className='my-5 border-b-[1px]'>
                            <div className='mb-2 font-bold text-[30px]'>Experience</div>
                            {experiences.map((experience, index) => (
                                <Space key={index} className='flex mb-4 items-center' align="baseline">
                                    <Form.Item className='mb-0 w-full mr-6'>
                                        <input
                                            className='border-[1px] p-2 outline-none'
                                            value={experience.company}
                                            onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
                                            placeholder="Company Name"
                                            type='text'
                                        />
                                    </Form.Item>
                                    <Form.Item className='mb-0  w-full'>
                                        <input
                                            className='border-[1px] p-2 outline-none'
                                            value={experience.designation}
                                            onChange={(e) => handleExperienceChange(index, 'designation', e.target.value)}
                                            placeholder="Designation"
                                            type="text"
                                        />
                                    </Form.Item>
                                    <Form.Item className='mb-0  w-full'>
                                        <input
                                            className='border-[1px] p-2 outline-none'
                                            value={experience.duration}
                                            onChange={(e) => handleExperienceChange(index, 'duration', e.target.value)}
                                            placeholder="Duration"
                                            type="text"
                                        />
                                    </Form.Item>
                                    <Form.Item className='mb-0  w-full'>
                                        <Select
                                            mode="multiple"
                                            value={experience.skills}
                                            onChange={(selectedSkills) => handleSkillsChange(index, selectedSkills)}
                                            placeholder="Please select Skills"
                                            className='w-full'
                                            style={{ width: '320px' }}
                                        >
                                            <Option value="Skill 1">Skill 1</Option>
                                            <Option value="Skill 2">Skill 2</Option>
                                            <Option value="Skill 3">Skill 3</Option>
                                        </Select>
                                    </Form.Item>
                                    <div className='border-[1px] border-gray-200 text-gray-200 cursor-pointer hover:border-primary hover:text-primary p-1 flex justify-center items-center' onClick={() => handleRemoveExperience(index)}>
                                        <BiMinus size={30} />
                                    </div>
                                </Space>
                            ))}
                            <Form.Item>
                                <Button type="dashed" onClick={addExperienceField} block icon={<PlusOutlined />}>
                                    Add Another Experience
                                </Button>
                            </Form.Item>
                        </div>
                        <Form.Item
                            label="Cover Letter"
                            name="cover_letter"
                            rules={[{ required: true, message: 'Please enter Cover Letter' }]}
                        >
                            <ReactQuill />
                        </Form.Item>

                        <div>
                            <Form.Item
                                label="Resume"
                                name="resume"
                                className='w-full mr-8'
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
                                                    <p className="text-primary">Drop the Resume here...</p>
                                                ) : (
                                                    <div className="flex flex-col items-center">
                                                        <FiUpload className="text-4xl text-primary" />
                                                        <p className="text-primary">Choose or drag a resume</p>
                                                    </div>
                                                )}
                                            </>
                                        )}
                                </div>
                            </Form.Item>
                        </div>
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

export default UserProfile;
