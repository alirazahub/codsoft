import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import { FiUpload } from 'react-icons/fi';
import { useDropzone } from "react-dropzone";
import 'react-quill/dist/quill.snow.css';
import { Form, Select, Button, Space, Input, notification } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { BiMinus } from 'react-icons/bi';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { key } from "../key.js"

const { Option } = Select;
const UserProfile = () => {
    const [imagePreview, setImagePreview] = useState(null);
    const [imagePreview1, setImagePreview1] = useState(null);
    const [cookies] = useCookies(['x-auth-token']);
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [phone, setPhone] = useState('');
    const [portfolio, setPortfolio] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [github, setGithub] = useState('');
    const [degree, setDegree] = useState('');
    const [institute, setInstitute] = useState('');
    const [graduation_date, setGraduation_date] = useState('');
    const [cgpa, setCgpa] = useState('');
    const [cover_letter, setCover_letter] = useState('');
    const [resume, setResume] = useState('');
    const [image, setImage] = useState('');
    const [allSkills, setAllSkills] = useState([]);


    const onDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];
        setImagePreview(file)
    };
    const onDrop1 = (acceptedFiles) => {
        const file = acceptedFiles[0];
        setImagePreview1(file)
    };

    //eslint-disable-next-line
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop: onDrop });
    const { getRootProps: getRootProps1, getInputProps: getInputProps1, isDragActive: isDragActive1 } = useDropzone({ onDrop: onDrop1 });
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
                company: '',
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
    const onFinish = async () => {
        const data = {
            name,
            email,
            dob,
            phone,
            portfolio,
            linkedin,
            github,
            degree,
            institute,
            graduation_date,
            cgpa,
            cover_letter,
            skills,
            experiences,
        };
        if (imagePreview) {
            const formData = new FormData();
            const fileName = Date.now() + imagePreview.name;
            formData.append('name', fileName);
            formData.append('file', imagePreview);
            data.resume = fileName;
            await axios.post(`${key}/api/upload`, formData)
        }
        if (imagePreview1) {
            const formData2 = new FormData();
            const fileName2 = Date.now() + imagePreview1.name;
            formData2.append('name', fileName2);
            formData2.append('file', imagePreview1);
            data.image = fileName2;
            await axios.post(`${key}/api/upload`, formData2)
        }
        try {
            await axios.put(`${key}/api/user/user-profile`, data, {
                headers: {
                    'x-auth-token': cookies['x-auth-token'],
                }
            });
            notification.success({
                message: 'Success',
                description: 'Profile updated successfully',
            });
        } catch (error) {
            notification.error({
                message: 'Error',
                description: 'Update failed',
            });
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${key}/api/user/user-profile`, {
                    headers: {
                        'x-auth-token': cookies['x-auth-token'],
                    }
                });
                setUser(res?.data?.user);
                console.log(res?.data?.user)
                setEmail(res?.data?.user?.email);
                setName(res?.data?.user?.name);
                setDob(res?.data?.user?.dob);
                setPhone(res?.data?.user?.phone);
                setPortfolio(res?.data?.user?.portfolio);
                setLinkedin(res?.data?.user?.linkedin);
                setGithub(res?.data?.user?.github);
                setDegree(res?.data?.user?.degree);
                setInstitute(res?.data?.user?.institute);
                setGraduation_date(res?.data?.user?.graduation_date);
                setCgpa(res?.data?.user?.cgpa);
                setCover_letter(res?.data?.user?.cover_letter);
                setResume(res?.data?.user?.resume);
                setImage(res?.data?.user?.image);
                // setSkills(res?.data?.user?.skills);
                // setExperiences(res?.data?.user?.experiences);

            } catch (error) {
                console.log(error);
            }
        }
        fetchData();

        const fetchSkills = async () => {
            try {
                const res = await axios.get(`${key}/api/user/get-skills`);
                setAllSkills(res?.data?.skills);
            } catch (error) {
                console.log(error);
            }
        }
        fetchSkills();
        //eslint-disable-next-line
    }, []);
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
                        <div>
                            <Form.Item
                                label="Image"
                                name="image"
                                className='w-full mr-8 '
                            >
                                <div
                                    {...getRootProps1()}
                                    className="w-[200px] h-[250px] mx-[auto] p-2 border-2 border-dashed rounded-lg flex flex-col items-center justify-center cursor-pointer"
                                >
                                    {imagePreview1 ? (
                                        <img
                                            src={URL.createObjectURL(imagePreview1)}
                                            alt="Uploaded"
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    ) :
                                        image ? (
                                            <img
                                                src={`${key}/images/${image}`}
                                                alt="Uploaded"
                                                className="w-full h-full object-cover rounded-lg"
                                            />
                                        ) :
                                            (
                                                <>
                                                    <input {...getInputProps1()} />
                                                    {isDragActive1 ? (
                                                        <p className="text-primary">Drop the Image here...</p>
                                                    ) : (
                                                        <div className="flex flex-col items-center">
                                                            <FiUpload className="text-4xl text-primary" />
                                                            <p className="text-primary">Choose or drag a Image</p>
                                                        </div>
                                                    )}
                                                </>
                                            )}
                                </div>
                            </Form.Item>
                        </div>
                        <div className='flex mb-3'>
                            <div className='w-full mr-8'>
                                <label>Name</label>
                                <input value={name} onChange={(e) => setName(e.target.value)} type='text' className='border-[1px] w-full p-2 outline-none' />
                            </div>
                            <div className='w-full'>
                                <label>Date of Birth</label>
                                <input value={dob} onChange={(e) => setDob(e.target.value)} type='date' className='border-[1px] w-full p-2 outline-none' />
                            </div>
                        </div>
                        <div className='flex mb-3'>
                            <div className='w-full mr-8'>
                                <label>Email</label>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' className='border-[1px] w-full p-2 outline-none' />
                            </div>
                            <div className='w-full'>
                                <label>Phone</label>
                                <input value={phone} onChange={(e) => setPhone(e.target.value)} type='text' className='border-[1px] w-full p-2 outline-none' />
                            </div>
                        </div>
                        <div className='flex mb-3'>
                            <div className='w-full mr-8'>
                                <label>Portfolio</label>
                                <input value={portfolio} onChange={(e) => setPortfolio(e.target.value)} type='text' className='border-[1px] w-full p-2 outline-none' />
                            </div>
                            <div className='w-full'>
                                <label>LinkedIn</label>
                                <input value={linkedin} onChange={(e) => setLinkedin(e.target.value)} type='text' className='border-[1px] w-full p-2 outline-none' />
                            </div>
                        </div>
                        <div className='flex mb-3'>
                            <div className='w-full mr-8'>
                                <label>Github</label>
                                <input value={github} onChange={(e) => setGithub(e.target.value)} type='text' className='border-[1px] w-full p-2 outline-none' />
                            </div>
                            
                        </div>
                        <div className='my-5 border-b-[1px]'>
                            <div className='mb-2 font-bold text-[30px]'>Highest Education</div>

                            <div className='flex mb-3'>
                                <div className='w-full mr-8'>
                                    <label>Degree</label>
                                    <input value={degree} onChange={(e) => setDegree(e.target.value)} type='text' className='border-[1px] w-full p-2 outline-none' />
                                </div>
                                <div className='w-full'>
                                    <label>Institute</label>
                                    <input value={institute} onChange={(e) => setInstitute(e.target.value)} type='text' className='border-[1px] w-full p-2 outline-none' />
                                </div>
                            </div>
                            <div className='flex mb-3'>
                                <div className='w-full mr-8'>
                                    <label>Graduation</label>
                                    <input value={graduation_date} onChange={(e) => setGraduation_date(e.target.value)} type='date' className='border-[1px] w-full p-2 outline-none' />
                                </div>
                                <div className='w-full'>
                                    <label>CGPA</label>
                                    <input value={cgpa} onChange={(e) => setCgpa(e.target.value)} type='text' className='border-[1px] w-full p-2 outline-none' />
                                </div>
                            </div>
                        </div>
                        <div className='my-5 border-b-[1px]'>
                            <div className='mb-2 font-bold text-[30px]'>Skills</div>
                            {skills?.map((skill, index) => (
                                <Space key={index} className='flex mb-4 items-center' align="baseline">
                                    <div className='mb-0 w-full mr-6'>
                                        <input
                                            className='border-[1px] w-[459px] p-2 outline-none'
                                            value={skill.name}
                                            onChange={(e) => handleSkillChange(index, 'name', e.target.value)}
                                            placeholder="Skill Name"
                                        />
                                    </div>
                                    <div className='mb-0  w-full'>
                                        <input
                                            className='border-[1px] p-2 w-[420px] outline-none'
                                            value={skill.proficiency}
                                            onChange={(e) => handleSkillChange(index, 'proficiency', e.target.value)}
                                            placeholder="Proficiency level (%)"
                                            type="number"
                                            min={1}
                                            max={100}
                                        />
                                    </div>
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
                            {experiences?.map((experience, index) => (
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
                                            {allSkills?.map((skill) => (
                                                <Option key={skill._id} value={skill.skill}>
                                                    {skill.skill}
                                                </Option>
                                            ))}
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
                        <div>
                            <label> Cover Letter</label>
                            <ReactQuill value={cover_letter} onChange={setCover_letter} />
                        </div>

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
                                        resume ? (
                                            <img
                                                src={`${key}/images/${resume}`}
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
