import React from 'react'

const Home = () => {
  return (
    <div className='w-full h-[calc(100vh-4rem)] bg-red-300 flex items-center'>
        <div id="left" className='w-[39.6%]  h-[100%] bg-black'></div>
        <div id="right" className='w-[61%] h-[100%] bg-zinc-800'>
            <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1721333089021-bcd0ea4851de?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>


    </div>
  )
}

export default Home