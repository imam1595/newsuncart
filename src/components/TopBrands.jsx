import React from 'react';
import { SiBrandfolder } from "react-icons/si";
import { FaRegEye } from "react-icons/fa";
import { GiClothes, GiGlowingArtifact } from "react-icons/gi";
import { MdAccountBalance } from "react-icons/md";


const TopBrands = () => {
    return (
        <div className='space-y-5 mt-10'>

            <h1 className='font-bold text-2xl text-accent flex items-center gap-3'>
                Top Brands
                <SiBrandfolder />
            </h1>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5'>

                <div className='card shadow-sm border border-slate-200 p-5 text-center items-center space-y-2 bg-[#fff7ed]'>
                    <FaRegEye className='text-4xl' />
                    <h2 className='font-bold text-xl'>SunShade</h2>
                    <p>Eye wear</p>
                </div>

                <div className='card shadow-sm border border-slate-200 p-5 text-center items-center space-y-2 bg-[#fff7ed]'>
                    <GiGlowingArtifact className='text-4xl' />
                    <h2 className='font-bold text-xl'>GlowSkin</h2>
                    <p>Skincare</p>
                </div>

                <div className='card shadow-sm border border-slate-200 p-5 text-center items-center space-y-2 bg-[#fff7ed]'>
                    <GiClothes className='text-4xl' />
                    <h2 className='font-bold text-xl'>BeachWave</h2>
                    <p>Clothing</p>
                </div>

                <div className='card shadow-sm border border-slate-200 p-5 text-center items-center space-y-2 bg-[#fff7ed]'>
                    <MdAccountBalance className='text-4xl' />
                    <h2 className='font-bold text-xl'>CoastalKit</h2>
                    <p>Accessories</p>
                </div>

            </div>

        </div>
    );
};

export default TopBrands;