import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        
        <div className="hero bg-[#fff7ed] mt-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <Image 
                    src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1400&q=90"
                    alt="Summer Sale Banner"
                    width={600}
                    height={400}
                    className="object-cover"
                    priority
                />
                <div className='text-red-400 text-center space-y-4'>
                    <div className="badge badge-accent">Summer Sale is Live!</div>
                    <h1 className='font-bold text-2xl md:text-4xl'>Your Summer Essentials 50% OFF</h1>
                    <p>Shop the hottest deals on sunglasses, beach gear, skincare & outfits. Beat the heat in style. Shop Now</p>
                    <div className='flex gap-4 justify-center'>
                        <button className='btn btn-outline'>Shop Now</button>
                        <button className='btn btn-outline'>View Details</button>
                    </div>
                </div>
            </div>
        </div>

   
    );
};

export default Banner;