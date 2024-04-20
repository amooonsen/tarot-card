import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className='flex justify-between items-center h-12 px-8'>
      <Link href='/'>로고</Link>
      {/* 전체메뉴(햄버거) */}
      {/* <div className="">
        <nav>
          <ul>
            <li>
              <Link href='/chocie'>Choice.</Link>
              <Link href='/notice'>Notice.</Link>
              <Link href='/info'>Info.</Link>
              <Link href='/prototype'>Prototype.</Link>
            </li>
          </ul>
        </nav>
      </div> */}
        {/* <Magnetic> */}
          <div className="relative flex flex-col gap-2 p-4 pointer-events-none">
            <div className="absolute left-0 top-0 w-full h-full pointer-events-auto hover:scale-300"></div>
            <div className="block w-8 h-[2px] mix-blend-difference bg-white"></div>
            <div className="block w-8 h-[2px] mix-blend-difference bg-white"></div>
            <div className="block w-8 h-[2px] mix-blend-difference bg-white"></div>
          </div>
        {/* </Magnetic> */}

    </header>
  )
}
