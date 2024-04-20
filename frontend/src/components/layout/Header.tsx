import React, { forwardRef } from 'react';
import Link from 'next/link';

// components
import Magnetic from '../interactive/Magnetic';

type Props = {}

const Header = forwardRef<HTMLDivElement, Props>((props, ref) => {
  return (
    <header className='sticky top-0 left-0 z-10 flex justify-between items-center w-full h-16 pl-8 overflow-hidden'>
      <Link href='/' className='text-white'>로고</Link>
      {/* s: custom.scss */}
      <div className='all-menu'>
        <Magnetic>
          <div className='burger'>
            <div ref={ref} className='bounds'></div>
          </div>
        </Magnetic>
      </div>
      {/* e: custom.scss */}
    </header>
  );
});

// displayName 속성 설정
Header.displayName = 'Header';

export default Header;
