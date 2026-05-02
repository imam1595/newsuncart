import React from 'react';
import { GoSun } from "react-icons/go";
import { GiBeerBottle } from "react-icons/gi";
import { FaGlasses } from "react-icons/fa6";
import { MdOutlineTipsAndUpdates } from "react-icons/md";

const CareTips = () => {
    return (
        <div className='space-y-5 mt-10'>
            <h1 className='font-bold text-2xl text-accent flex items-center gap-3'>
                Summer Care Tips
                <MdOutlineTipsAndUpdates />
            </h1>

            <div className='grid gap-5 md:grid-cols-3'>
                <div className='card shadow-sm border border-slate-200 gap-2 p-5 bg-[#fff7ed]'>
                    <GoSun className='text-yellow-600 text-2xl'/>
                    <h3 className='font-bold'>Apply SPF daily</h3>
                    <p>Use SPF 30+ sunscreen 20 mins before going out. Reapply every 2 hours.</p>
                </div>

                <div className='card shadow-sm border border-slate-200 gap-2 p-5 bg-[#fff7ed]'>
                    <GiBeerBottle className='text-yellow-600 text-2xl' />
                    <h3 className='font-bold'>Stay hydrated</h3>
                    <p>Drink at least 8–10 glasses of water daily. Add electrolytes when active.</p>
                </div>

                <div className='card shadow-sm border border-slate-200 gap-2 p-5 bg-[#fff7ed]'>
                    <FaGlasses className='text-yellow-600 text-2xl' />
                    <h3 className='font-bold'>Protect your eyes</h3>
                    <p>Wear UV-blocking sunglasses outdoors to prevent long-term eye damage.</p>
                </div>
            </div>
        </div>
    );
};

export default CareTips;