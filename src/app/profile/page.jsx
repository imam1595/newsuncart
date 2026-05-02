'use client'
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import React from 'react';

const ProfilePage = () => {
    const userData = authClient.useSession();
        // console.log(userData);
    
        const user = userData.data?.user;
        // console.log(user);

    return (
        <div className='border-slate-400 flex flex-col items-center p-10 mt-10 mb-10 shadow-sm'>
            
            <div className='font-bold text-2xl'>{user?.name}</div>

            <div className='text-xl'>{user?.email}</div>

            <div className="avatar">
                <div className="ring-primary ring-offset-base-100 w-20 h-20 rounded-full ring-2 ring-offset-2 relative">

                    {
                        user?.image ? (

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
                        
                   
            
        </div>
    );
};

export default ProfilePage;