import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex justify-center'>
      <button className='button-outlined'>Button</button>
      <Link className='button-outlined'>Button</Link>
      <div className='button-outlined'>Button</div>
      <button className='button-filled'>Button</button>
      <Link className='button-filled'>Button</Link>
      <div className='button-filled'>Button</div>
    </div>
  )
}

export default Home
