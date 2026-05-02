import DetailsCard from '@/components/DetailsCard';
import React from 'react';

const Details = async ({params}) => {
    const {id} = await params;
    // console.log(id);

    const res = await fetch("https://newsuncart.vercel.app/data.json");
    const products = await res.json();
    // console.log(products);

    const expectedProduct = products.find((one) => one.id == id);
    // console.log(expectedProduct);


    return (
        <div>
            <DetailsCard key={expectedProduct.id} expectedProduct={expectedProduct} />
        </div>
    );
};

export default Details;