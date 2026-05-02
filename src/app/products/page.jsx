import ProductCard from '@/components/ProductCard';
import React from 'react';

const Products = async () => {
    const res = await fetch("https://newsuncart.vercel.app/data.json");
    const products = await res.json();

    return (
        <div className='mt-10 mb-10'>
            <h1 className='font-bold text-2xl mb-10 shadow p-3'>All Products</h1>

            <div className='grid grid-cols-1 gap-10 md:grid-cols-3 '>
                {
                    products.map((one) => <ProductCard key={one.id} one={one} />)
                }
            </div>
        </div>
    );
};

export default Products;