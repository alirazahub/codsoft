import React, { useEffect, useState } from 'react';
import { notification } from 'antd';
import ReactQuill from 'react-quill';
import { FiUpload } from 'react-icons/fi';
import { useDropzone } from "react-dropzone";
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { key } from '../key.js'



const CompanyProfile = () => {
    const [imagePreview, setImagePreview] = useState(null);
    const [company_name, setCompany_name] = useState('')
    const [industry, setIndustry] = useState('')
    const [ceo_name, setCeo_name] = useState('')
    const [ceo_email, setCeo_email] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [no_of_employees, setNo_of_employees] = useState('')
    const [established, setEstablished] = useState('')
    const [company_website, setCompany_website] = useState('')
    const [linkedin, setLinkedin] = useState('')
    const [facebook, setFacebook] = useState('')
    const [twitter, setTwitter] = useState('')
    const [instagram, setInstagram] = useState('')
    const [company_email, setCompany_email] = useState('')
    const [company_phone, setCompany_phone] = useState('')
    const [company_overview, setCompany_overview] = useState('')
    const [company_services, setCompany_services] = useState('')
    const [image, setImage] = useState('')

    const [cookies] = useCookies(['x-auth-token']);

    const onDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];
        setImagePreview(file)
    };

    //eslint-disable-next-line
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop: onDrop });

    useEffect(() => {
        const getCompanyDetails = async () => {
            const res = await axios.get(`${key}/api/user/company-details`, {
                headers: {
                    'x-auth-token': cookies['x-auth-token']
                }
            });
            setCompany_name(res.data.company.company_name)
            setIndustry(res.data.company.industry)
            setCeo_name(res.data.company.ceo_name)
            setCeo_email(res.data.company.ceo_email)
            setCity(res.data.company.city)
            setCountry(res.data.company.country)
            setNo_of_employees(res.data.company.employees)
            setEstablished(res.data.company.established_date)
            setCompany_website(res.data.company.website)
            setLinkedin(res.data.company.linkedin)
            setFacebook(res.data.company.facebook)
            setTwitter(res.data.company.twitter)
            setInstagram(res.data.company.instagram)
            setCompany_email(res.data.company.company_email)
            setCompany_phone(res.data.company.company_phone)
            setCompany_overview(res.data.company.company_overview)
            setCompany_services(res.data.company.company_services)
            setImage(res.data.company.company_logo)
        }
        getCompanyDetails()
        //eslint-disable-next-line
    }, [])

    const handleSubmit = async (e) => {
        let nameFile;
        e.preventDefault()
        try {
            if(imagePreview){
                const formData = new FormData();
                const fileName = Date.now() + imagePreview.name;
                formData.append("name", fileName);
                formData.append("file", imagePreview);
                nameFile = fileName;
                try {
                    await axios.post(`${key}/api/upload`, formData);
                } catch (error) {
                    notification.error({
                        message: 'Error',
                        description: 'Image upload failed'
                    });
                }
            }
            await axios.put(`${key}/api/user/company-details`, {
                company_name,
                industry,
                ceo_name,
                ceo_email,
                city,
                country,
                employees: no_of_employees,
                established_date: established,
                website: company_website,
                linkedin,
                facebook,
                twitter,
                instagram,
                company_email,
                company_phone,
                company_overview,
                company_services,
                company_logo: nameFile
            }, {
                headers: {
                    'x-auth-token': cookies['x-auth-token']
                }
            });
            notification.success({
                message: 'Company Details Updated Successfully'
            })
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='font-rubik'>
            <div className='sm:px-[250px] px-3 '>
                <div className='text-center font-bold text-[30px] mt-2'>Company Details</div>
                <div className='border-[1px] mt-4'>
                    <form className='p-10' >
                        <div>
                            <div className='w-full mr-8'>
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
                                        image ? (
                                            <img
                                                src={`${key}/images/${image}`}
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
                            </div>
                        </div>
                        <div className='flex my-5'>
                            <div className='w-full mr-8'>
                                <label>Company Name</label>
                                <input value={company_name} onChange={(e) => setCompany_name(e.target.value)} className='border-[1px] w-full p-2 outline-none' />
                            </div>
                            <div className='w-full'>
                                <label>Select Industry</label>
                                <select value={industry} onChange={(e) => setIndustry(e.target.value)} className='border-[1px] w-full p-2 outline-none'>
                                    <option value="">-- Select Industry --</option>
                                    <option value="Software">Software Industry</option>
                                </select>
                            </div>
                        </div>
                        <div className='flex my-5'>
                            <div className='w-full mr-8'>
                                <label>CEO Name</label>
                                <input value={ceo_name} onChange={(e) => setCeo_name(e.target.value)} className='border-[1px] w-full p-2 outline-none' />
                            </div>

                            <div className='w-full'>
                                <label>CEO Email</label>
                                <input value={ceo_email} onChange={(e) => setCeo_email(e.target.value)} className='border-[1px] w-full p-2 outline-none' />
                            </div>
                        </div>
                        <div className='flex my-5'>
                            <div className='w-full mr-8'>
                                <label>City</label>
                                <input value={city} onChange={(e) => setCity(e.target.value)} className='border-[1px] w-full p-2 outline-none' />
                            </div>
                            <div className='w-full '>
                                <label>Country</label>
                                <input value={country} onChange={(e) => setCountry(e.target.value)} className='border-[1px] w-full p-2 outline-none' />
                            </div>
                        </div>
                        <div className='flex my-5'>
                            <div className='w-full mr-8'>
                                <label>Number on Employees</label>
                                <input value={no_of_employees} onChange={(e) => setNo_of_employees(e.target.value)} className='border-[1px] w-full p-2 outline-none' />
                            </div>

                            <div className='w-full'>
                                <label>Established</label>
                                <input type='date' value={established} onChange={(e) => setEstablished(e.target.value)} className='border-[1px] w-full p-2 outline-none' />
                            </div>
                        </div>
                        <div className='flex my-5'>
                            <div className='w-full mr-8'>
                                <label>Company Website</label>
                                <input value={company_website} onChange={(e) => company_website(e.target.value)} className='border-[1px] w-full p-2 outline-none' />
                            </div>

                            <div className='w-full'>
                                <label>LinkedIn</label>
                                <input value={linkedin} onChange={(e) => setLinkedin(e.target.value)} className='border-[1px] w-full p-2 outline-none' />
                            </div>
                        </div>
                        <div className='flex my-5'>
                            <div className='w-full mr-8'>
                                <label>Facebook</label>
                                <input value={facebook} onChange={(e) => setFacebook(e.target.value)} className='border-[1px] w-full p-2 outline-none' />
                            </div>

                            <div className='w-full'>
                                <label>Twitter</label>
                                <input value={twitter} onChange={(e) => setTwitter(e.target.value)} className='border-[1px] w-full p-2 outline-none' />
                            </div>
                        </div>
                        <div className='flex my-5'>
                            <div className='w-full mr-8'>
                                <label>Instagram</label>
                                <input value={instagram} onChange={(e) => setInstagram(e.target.value)} className='border-[1px] w-full p-2 outline-none' />
                            </div>

                            <div className='w-full'>
                                <label>Company Email</label>
                                <input value={company_email} onChange={(e) => setCompany_email(e.target.value)} className='border-[1px] w-full p-2 outline-none' />
                            </div>
                        </div>
                        <div className='flex my-5'>
                            <div className='w-full mr-8'>
                                <label>Company Phone</label>
                                <input value={company_phone} onChange={(e) => setCompany_phone(e.target.value)} className='border-[1px] w-full p-2 outline-none' />
                            </div>
                        </div>
                        <div className=' my-5'>
                            <label>Company Overview</label>
                            <ReactQuill value={company_overview} onChange={(e) => setCompany_overview(e.target.value)} />
                        </div>

                        <div className=' my-5'>
                            <label>Company Services</label>
                            <ReactQuill value={company_services} onChange={(e) => setCompany_services(e.target.value)} />
                        </div>

                        <button onClick={handleSubmit} type="primary" className='button-filled'>
                            Update Info
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CompanyProfile;
