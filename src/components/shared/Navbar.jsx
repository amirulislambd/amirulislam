import Image from 'next/image';
import React from 'react';
import logo from '@/assets/logo.png';
import NavLinks from './NavLinks';

const Navbar = () => {

    const links = [
        { name: 'Home', href: '/' },
        { name: 'About Me', href: '/about' },
        { name: 'projects', href: '/projects' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <div className='w-full py-4 border-b-2 border-zinc-200'>

        <div className=' flex items-center justify-between max-w-7xl mx-auto px-4'>
            <div className='w-10 h-10 md:w-16 md:h-16 border-2 border-[#131A31] rounded-full shadow-xl'>
            <Image className='w-16 rounded-full' width={500} height={100} src={logo} alt="Logo" />
            </div>
            <ul>
                <NavLinks links={links} />
            </ul>
        </div>
        </div>
    );
};

export default Navbar;