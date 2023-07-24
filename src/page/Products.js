import React from 'react'
import Product from './Product'

function Products() {
    return (
        <>
            <div className='container mx-auto pb-24 pl-20 pr-20'>
                <h1 className='text-lg font-bold my-8' >Products</h1>
                <div className='grid grid-cols-5 my-8 gap-24'>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                </div>
            </div>
        </>
    )
}

export default Products
