'use client';
import React, { useState } from 'react';
import footerBg from '../../public/images/liveparte_footer.png';
import logo from '../../public/svgs/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import facebook from '../../public/svgs/facebook.svg'
import instagram from '../../public/svgs/instagram.svg'
import linkedin from '../../public/svgs/linkedin.svg'
import twitter from '../../public/svgs/x.svg'

const Footer = () => {
    const [toggle, setToggle] = useState(true);
    return (
        <div>
            <div className='w-[90%] mx-auto lg:mt-44 mt-16 lg:grid lg:grid-cols-4 flex flex-col-reverse lg:ml-44 mb-5'>
                <div className='flex lg:flex-col flex-row lg:justify-start justify-between lg:items-start items-center lg:mt-0 mt-10'>
                    <div>
                        <Image src={logo} alt='liveparte logo' />
                        <div className='mt-8 flex gap-4'>
                            <div className='w-[32px] h-[32px]'><Image src={facebook} alt='facebook icon' /></div>
                            <div className='w-[32px] h-[32px]'><Image src={instagram} alt='facebook icon' /></div>
                            <div className='w-[32px] h-[32px]'><Image src={linkedin} alt='facebook icon' /></div>
                            <div className='w-[32px] h-[32px]'><Image src={twitter} alt='facebook icon' /></div>
                        </div>
                    </div>
                    <p className='font-mattersq text-base font-medium leading-[19.2px] lg:mt-7 mt-12'>© 2024 Liveparte</p>
                </div>
                <div>
                    <div className='flex justify-between items-center lg:mt-0 mt-8'>
                        <h1 className='font-mdtest font-bold text-[20px] leading-[20px] tracking-[-0.12px]'>Company</h1>
                        <svg className='lg:hidden block' onClick={() => setToggle(!toggle)} width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 1L6 6L1 1" stroke="#B4BECB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    {toggle && <>
                        <div className='mt-4'>
                            <Link href="/" className='font-mattersq font-medium text-base leading-[19.2px] tracking-[-0.12px]'>About Us</Link>
                        </div>
                        <div className='mt-4'>
                            <Link href="/" className='font-mattersq font-medium text-base leading-[19.2px] tracking-[-0.12px]'>Careers</Link>
                        </div>
                        <div className='mt-4'>
                            <Link href="/" className='font-mattersq font-medium text-base leading-[19.2px] tracking-[-0.12px]'>Studio</Link>
                        </div>
                    </>}
                </div>
                <div>
                    <div className='flex justify-between items-center lg:mt-0 mt-8 '>
                        <h1 className='font-mdtest font-bold text-[20px] leading-[20px] tracking-[-0.12px]'>Resources</h1>
                        <svg className='lg:hidden block' onClick={() => setToggle(!toggle)} width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 1L6 6L1 1" stroke="#B4BECB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>

                    {toggle && <>
                        <div className='lg:mt-4 mt-8'>
                            <Link href="/" className='font-mattersq font-medium text-base leading-[19.2px] tracking-[-0.12px]'>Help Center</Link>
                        </div>
                        <div className='mt-4'>
                            <Link href="/" className='font-mattersq font-medium text-base leading-[19.2px] tracking-[-0.12px]'>Email us</Link>
                        </div>
                        <div className='mt-4'>
                            <Link href="/" className='font-mattersq font-medium text-base leading-[19.2px] tracking-[-0.12px]'>Blog</Link>
                        </div>
                    </>}
                </div>
                <div>
                    <div className='flex justify-between items-center'>
                        <h1 className='font-mdtest font-bold text-[20px] leading-[20px] tracking-[-0.12px]'>Legal</h1>
                        <svg className='lg:hidden block' onClick={() => setToggle(!toggle)} width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 1L6 6L1 1" stroke="#B4BECB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    {toggle && <><div className='mt-4'>
                        <Link href="/" className='font-mattersq font-medium text-base leading-[19.2px] tracking-[-0.12px]'>Terms of Service</Link>
                    </div>
                        <div className='mt-4'>
                            <Link href="/" className='font-mattersq font-medium text-base leading-[19.2px] tracking-[-0.12px]'>Purchase Policy</Link>
                        </div>
                        <div className='mt-4'>
                            <Link href="/" className='font-mattersq font-medium text-base leading-[19.2px] tracking-[-0.12px]'>Privacy Policy</Link>
                        </div></>}
                </div>
            </div>
            <div>
                <Image className='w-full h-full object-cover bg-cover' src={footerBg} alt="liveparte" />
            </div>
        </div>
    );
};

export default Footer;