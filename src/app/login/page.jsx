'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';


const LoginPage = () => {
    const handleSignIn = async (e) => {
            e.preventDefault();
            
    
            const email = e.target.email.value;
            const password = e.target.password.value;
            
            // console.log({email,password});
    
            const {data, error} = await authClient.signIn.email({
                email,
                password,
                callbackURL: '/'
            })
    
            // console.log({data, error});
            
        };

    return (
        <div className='flex justify-center mt-10 mb-10'>
        
            <form onSubmit={handleSignIn}>
                <fieldset className="fieldset bg-[#fff7ed] border-base-300 rounded-box w-xs border p-4 space-y-2">
                    <legend className="fieldset-legend">SignIn</legend>


                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" name="email" required />

                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password mini-length-8" name="password" required minLength="8" />


                    <button className="btn bg-[#f59e0b] mt-4">SignIn</button>

                    <h1>To get an account? <Link href={'/register'}><span className='text-[#f59e0b]'>Register</span></Link></h1>

                    
                </fieldset>
            </form>
        </div>
    );
};

export default LoginPage;