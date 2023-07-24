import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
    const cartStyle = {
        background :'#F59E0D',
        display : 'flex',
        padding: '6px 12px',
        borderRadius : '50px'

    }
    return (
        <>
            <nav className=' container mx-auto flex items-center justify-between py-4'>
                <Link to="/">
                    <img className='pl-24' style={{ height: 45 }} src='/image/logo.png' alt='logo' />
                </Link>
                <ul className='flex items-center pr-24'>
                    <li> <Link to="/" >Home</Link></li>
                    <li className='ml-6'> <Link to="/products" >Products</Link></li>
                    <li className='ml-6'>
                        <Link to="/cart">
                            <div  style={cartStyle}>
                                <span>10</span>
                                <img className="ml-2" src='/image/cart.png' alt='cart' />
                            </div>
                        </Link>
                    </li>
                </ul>

            </nav>
        </>
    )
}

export default Navigation
