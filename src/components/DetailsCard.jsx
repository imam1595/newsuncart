import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiDollar, CiStar } from "react-icons/ci";
import { AiOutlineStock } from "react-icons/ai";

const DetailsCard = ({expectedProduct}) => {
    return (
        <div className="max-w-sm md:max-w-md lg:max-w-lg mx-auto card bg-base-100 shadow-sm border-slate-400 mt-10">
            <figure className='relative w-full aspect-square'>

                <div 
                className={`absolute top-2 left-2 z-10 badge text-white
                    ${(expectedProduct.price > 10 && expectedProduct.price <20) 
                        ? 'bg-blue-500'
                        : (expectedProduct.price > 20 && expectedProduct.price <30) 
                        ? 'bg-green-500'
                        : 'bg-red-500'
                    }
                    `}>
                    {(expectedProduct.price > 10 && expectedProduct.price <20) 
                        ? 'new'
                        : (expectedProduct.price > 20 && expectedProduct.price <30) 
                        ? 'best seller'
                        : 'hot'
                    }
                </div>

                <Image 
                    src={expectedProduct.image}
                    alt='image'
                    fill
                    
                    className='object-cover rounded-xl'
                />
            </figure>
            <div className="card-body">

                <div className='flex flex-col font-bold gap-3'>
                    <div className="badge badge-secondary">{expectedProduct.category}</div>
                    <h2 className='text-xl'>{expectedProduct.name}</h2>
                </div>

                <div>
                    {expectedProduct.description}
                </div>

                <div>
                    <h1 className='flex items-center gap-3 font-bold text-xl text-accent'>
                        <CiStar />
                        {expectedProduct.rating}
                    </h1>
                    <h1 className='flex items-center gap-3 font-bold text-xl text-red-400'>
                        <CiDollar />
                        {expectedProduct.price}
                    </h1>
                    <h1 className='flex items-center gap-3 font-bold text-xl text-red-400'>
                        <AiOutlineStock />
                        {expectedProduct.stock}
                    </h1>
                </div>

                
            </div>
        </div>
    );
};

export default DetailsCard;