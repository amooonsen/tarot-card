import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className='flex h-16'>
      <Link href='/'>로고</Link>
      {/* 전체메뉴(햄버거) */}
      <div className="">
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
      </div>
    </header>
  )
}
