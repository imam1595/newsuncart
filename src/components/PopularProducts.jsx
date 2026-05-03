import Link from 'next/link';
import React from 'react';
import ProductCard from './ProductCard';

const PopularProducts = async () => {
    const res = await fetch("https://newsuncart.vercel.app/data.json");
    const products = await res.json();

    // console.log(products);

    const topThree = products.slice(0,3);
    // console.log(topThree);

    return (
        <div>
            <div className='flex justify-between items-center mb-10 mt-10 shadow-sm p-2 border-slate-500'>
                <h1 className='font-bold md:text-2xl'>Popular Products</h1>
                <Link href={'/products'}><button className='btn bg-[#f59e0b]'>See More</button></Link>
            </div>
            <div className='grid grid-cols-1 gap-10 md:grid-cols-3 '>
                {
                    topThree.map((one) => <ProductCard key={one.id} one={one} />)
                }
            </div>
        </div>
    );
};

export default PopularProducts;