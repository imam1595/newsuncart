'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaGoogle } from "react-icons/fa";


const RegisterPage = () => {

    const route = useRouter();

    const handleRegister = async (e) => {
        e.preventDefault();
        

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const image = e.target.url.value;
        
        // console.log({name,email,password,image});

        const {data, error} = await authClient.signUp.email({
            name,
            email,
            password,
            image
        })

        // console.log({data, error});

        if(!error) {
            
            route.push('/');
        }
        
    };

    return (
        <div className='flex justify-center mt-10 mb-10'>

            <form onSubmit={handleRegister}>
                <fieldset className="fieldset bg-[#fff7ed] border-base-300 rounded-box w-xs border p-4 space-y-2">
                    <legend className="fieldset-legend">Register/SignUp</legend>

                    <label className="label">Name</label>
                    <input type="text" className="input" placeholder="Name" name="name" required />

                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" name="email" required />

                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password mini-length-8" name="password" required minLength="8" />

                    <label className="label">Image Url</label>
                    <input type="url" className="input" placeholder="Url" name="url" required />

                    <button className="btn bg-[#f59e0b] mt-4">Register/SignUp</button>

                    <h1>Already have an account? <Link href={'/login'}><span className='text-[#f59e0b]'>Login</span></Link></h1>

                    <button className='btn bg-[#f59e0b] flex items-center rounded mt-4 border-t-slate-400'>
                        <FaGoogle />
                        Continue with Google
                    </button>
                </fieldset>
            </form>
        </div>
    );
};

export default RegisterPage;




//  https://i.ibb.co.com/8DrHQ64j/9169458e-1412-4c2c-911b-80ebf3e9c47d.jpg

//  https://i.ibb.co.com/WL4fdd4/Babar-Azam-2.webp
//  https://i.ibb.co.com/7x5HzrtH/Ellipse-1.png

//  https://i.ibb.co.com/HfffKqpM/Ellipse-2.png

//  https://i.ibb.co.com/tFSpwNJ/Ellipse-3.png

//  https://i.ibb.co.com/sph9kLhK/Ellipse-4.png