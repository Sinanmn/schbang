import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className='grid place-items-center h-screen text-5xl font-bold  '>
      About us
    <div className='flex text-base p-4 rounded-full'>
      <Link to={'/howwework'}><button className='outline mx-5 p-4' >How We Work</button></Link>
      <Link to={'/csr'}><button className='outline mx-5 p-4'>CSR</button></Link>
      <Link to={'/ourpartnership'}><button className='outline mx-5 p-4'>Our Partnership</button></Link>
      <Link to={'newscentre'}><button className='outline mx-5 p-4'>News Center</button></Link>
     
      </div>
    </div>

  )
}

export default Home
