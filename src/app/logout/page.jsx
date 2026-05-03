import NavLink from '@/components/NavLink';
import React from 'react';

const LogoutPage = () => {
    return (
        <div className='flex justify-center items-center mt-10'>
            <NavLink href={'/'}><button className='btn bg-[#f59e0b]'>Go Home</button></NavLink>
        </div>
    );
};

export default LogoutPage;