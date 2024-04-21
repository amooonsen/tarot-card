"use client"

import React, { useState, forwardRef } from 'react';
import Link from 'next/link';

// components
import Magnetic from '../interactive/Magnetic';
import StairEffect from '../interactive/StairEffect';
import AllMenu from './AllMenu';


type Props = {}

const Header = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpenMenu = (e: React.MouseEvent<HTMLButtonElement>) => setIsOpen(true)
  const handleCloseMenu = (e: React.MouseEvent<HTMLButtonElement>) => setIsOpen(false)
  return (
    <header className='fixed top-0 left-0 z-10 flex justify-between items-center w-full h-24 pl-8 overflow-hidden'>
      <Link href='/' className='text-white'>로고</Link>
      {/* s: custom.scss */}
      <button className='all-menu-trigger-btn' onClick={handleOpenMenu}>
        <Magnetic>
          <div className='burger'>
            <div ref={ref} className='bounds'></div>
          </div>
        </Magnetic>
      </button>
      {
        isOpen && (
          <>
            <StairEffect />
            <AllMenu closeMenu={handleCloseMenu} />
          </>
        )
      }
      {/* e: custom.scss */}
    </header>
  );
});

// displayName 속성 설정
Header.displayName = 'Header';

export default Header;
