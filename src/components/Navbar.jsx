'use client'
import Link from 'next/link';
import React from 'react';
import { CiSun } from "react-icons/ci";
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {
    const userData = authClient.useSession();
    console.log(userData)
    
    return (
        <div className='min-h-[10vh] container mx-auto shadow p-3 flex flex-col text-center space-y-5 md:flex-row justify-between items-center bg-[#fff7ed]'>

            <div className='font-bold text-3xl text-accent flex justify-center items-center gap-3'>
                SunCart
                <CiSun />
            </div>

            <ul className='flex flex-col text-center md:flex-row gap-5'>
                <li><NavLink href={'/'}>Home</NavLink></li>
                <li><NavLink href={'/products'}>Products</NavLink></li>
                <li><NavLink href={'/profile'}>My Profile</NavLink></li>
            </ul>

            <div className='flex flex-col gap-5 items-center md:flex-row'>

                <div className='flex gap-4'>
                    <Link href={'/logout'}><button className='btn bg-[#f59e0b]'>Logout</button></Link>
                </div>

                <div className='flex gap-5'>
                    <Link href={'/login'}><button className='btn bg-[#f59e0b]'>Login</button></Link>
                    <Link href={'/register'}><button className='btn bg-[#f59e0b]'>Register</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;