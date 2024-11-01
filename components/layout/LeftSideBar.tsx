'use client';
import { navLinks } from '@/lib/constants';
import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const LeftSideBar = () => {
  const pathname = usePathname();

  return (
    <div
      className='h-screen left-0 top-0 sticky p-10 gap-16 flex flex-col 
     bg-blue-2 shadow-xl max-lg:hidden'
    >
      <Image src='/logo.png' alt='' width={150} height={70} />
      <div className='flex flex-col gap-12 border-2 border-green-500'>
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.url}
            className={`flex gap-4 text-body-medium ${
              pathname === link.url ? 'text-blue-1' : ''
            }`}
          >
            {link.icon} <p>{link.label}</p>
          </Link>
        ))}
      </div>
      <div className='flex gap-4 text-body-medium items-center'>
        <UserButton />
        <p>Edit Profile</p>
      </div>
    </div>
  );
};

export default LeftSideBar;
