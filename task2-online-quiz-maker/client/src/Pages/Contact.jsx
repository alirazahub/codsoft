import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <div>
            <div className='detail-banner'>
                <div className='bg-overlay'>
                    <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-[133px]'>
                        <h1 className='text-4xl text-center text-white font-bold'>Contact Us</h1>
                        <p className='text-xl text-center text-primary'>
                            JobsBoard is a platform where you can find your dream job and apply for it and you can also post a job if you are a company.
                        </p>
                    </div>
                </div>
            </div>
            <div className='sm:px-[150px] px-3 py-[100px]'>
                <iframe
                title='Company Address'
                    src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d6030.418742494061!2d-111.34563870463673!3d26.01036670629853!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1471908546569"
                    width="100%"
                    height={500}
                    style={{ border: 0 }}
                    allowFullScreen=""
                />
            </div>
            <div className='sm:px-[150px] font-rubik px-3'>
                <div className='text-[40px] font-semibold'>Get in Touch</div>
                <div className='sm:flex block'>
                    <div className='sm:w-[65%] border-[1px] p-3 mr-4'>
                        <form>
                            <div className='flex'>
                                <div className='w-[50%] mr-5'>
                                    <label>Name</label>
                                    <input type="text" placeholder='Name' className='w-full border-[1px] p-2 rounded-md outline-none' />
                                </div>
                                <div className='w-[50%]'>
                                    <label>Emain</label>
                                    <input type="email" placeholder='Email' className='w-full border-[1px] p-2 rounded-md outline-none' />
                                </div>
                            </div>
                            <div className='mt-4'>
                                <label>Subject</label>
                                <input type="text" placeholder='Subject' className='w-full border-[1px] p-2 rounded-md outline-none' />
                            </div>
                            <div className='mt-4'>
                                <label>Message</label>
                                <textarea rows="5" placeholder='Message' className='w-full border-[1px] p-2 rounded-md outline-none'></textarea>
                            </div>
                            <div className='mt-4'>
                                <button className='button-filled'>Send Message</button>
                            </div>
                        </form>
                    </div>
                    <div className='sm:w-[30%] border-[1px] p-3'>
                        <div className='text-[20px] text-center font-semibold pt-3'>Contact Information</div>
                        <div className='py-10'>
                            <div className='py-2'>
                                Lahore, Pakistan
                            </div>
                            <div className='py-2'>
                                +92 302 5414924
                            </div>
                            <div className='py-2'>
                                alirazahub2@gmail.com
                            </div>
                        </div>
                        <div className='mt-[100px] flex items-center justify-center'>
                            <Link to="https://facebook.com/" target='_blank' className='mx-2 bg-primary hover:bg-[#eb7676] transition-all ease-in duration-500 h-[33px] w-[33px] flex items-center justify-center rounded-full'>
                                <FaFacebook size={20} color='white' />
                            </Link>
                            <Link to="https://facebook.com/" target='_blank' className='mx-2 bg-primary hover:bg-[#eb7676] transition-all ease-in duration-500 h-[33px] w-[33px] flex items-center justify-center rounded-full'>
                                <FaInstagram size={20} color='white' />
                            </Link>
                            <Link to="https://facebook.com/" target='_blank' className='mx-2 bg-primary hover:bg-[#eb7676] transition-all ease-in duration-500 h-[33px] w-[33px] flex items-center justify-center rounded-full'>
                                <FaTwitter size={20} color='white' />
                            </Link>
                            <Link to="https://facebook.com/" target='_blank' className='mx-2 bg-primary hover:bg-[#eb7676] transition-all ease-in duration-500 h-[33px] w-[33px] flex items-center justify-center rounded-full'>
                                <FaLinkedin size={20} color='white' />
                            </Link>
                            <Link to="https://facebook.com/" target='_blank' className='mx-2 bg-primary hover:bg-[#eb7676] transition-all ease-in duration-500 h-[33px] w-[33px] flex items-center justify-center rounded-full'>
                                <FaYoutube size={20} color='white' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contact
