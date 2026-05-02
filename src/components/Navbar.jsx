'use client'
import Link from 'next/link';
import React from 'react';
import { CiSun } from "react-icons/ci";
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import { RxAvatar } from "react-icons/rx";

const Navbar = () => {
    const userData = authClient.useSession();
    // console.log(userData);

    const user = userData.data?.user;
    // console.log(user);

    const handleLogout = async () => {
        await authClient.signOut();
    }
    
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

                { user && <div className='flex gap-4'>
                                <div className="avatar">
                                    <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2 relative">

                                        {
                                            user?.Image ? (

                                                <Image
                                                    src={user?.image}
                                                    referrerPolicy='no-referrer'
                                                    alt="User Avatar"
                                                    fill
                                                    className="object-cover"
                                                />
                                            ) : (
                                                <div className="w-10 h-10 rounded-full bg-[#f59e0b] flex items-center justify-center text-white font-bold text-lg">
                                                    {user?.name?.charAt(0).toUpperCase()}
                                                </div>
                                            )
                                        }
                                        
                                    </div>
                                </div>

                                <Link href={'/logout'}><button onClick={handleLogout} className='btn bg-[#f59e0b]'>Logout</button></Link>
                            </div>
                }

                { !user && <div className='flex gap-5'>
                                <Link href={'/login'}><button className='btn bg-[#f59e0b]'>Login</button></Link>
                                <Link href={'/register'}><button className='btn bg-[#f59e0b]'>Register</button></Link>
                            </div>
                }
            </div>
        </div>
    );
};

export default Navbar;