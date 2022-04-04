import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from './../CustomLink/CustomLink';

const Navbar = () => {
    return (
        <div className='sticky top-0 bg-white px-20 py-5 flex justify-center md:justify-between'>
            <div className='hidden md:block'><Link to={'/'} className="font-sans font-bold text-xl text-gray-600">Crypto Cafe</Link></div>
            <div className='flex gap-4 text-xl'>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/coins'>Reviews</CustomLink>
                <CustomLink to='/contact'>Dashboard</CustomLink>
                <CustomLink to='/blogs'>Blogs</CustomLink>
                <CustomLink to='/about'>About</CustomLink>
            </div>
        </div>
    );
};

export default Navbar;