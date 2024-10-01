import React from 'react'

const Nav = () => {
  return (
    <div className='bg-black text-white'>
        <nav  className='flex items-center justify-between text-xl h-[4rem] pl-32 '>
            <h1 className='text-3xl font-medium'>PORTFOLIO.</h1>
          <ul className='flex px-44 items-center gap-16 w-[65%] py-[18px] bg-zinc-900 p'>
            <li className='underline decoration-yellow-500'><a href="/">HOME</a></li>
            <li><a href="/about">ABOUT</a></li>
            <li><a href="/contact">CONTACT</a></li>
            <li><a href="/contact">BLOG</a></li>
            <li><a href="/contact">WORKS</a></li>

          </ul>
        </nav>
    </div>
  )
}

export default Nav