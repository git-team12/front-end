import React from 'react'
import './GetStart.css' //import css
import logo from '../../assets/img/Getstarted-img .png'
import { Link } from 'react-router-dom'

//component below 

const GetStart = () => {
  return (
    <div className='bg-mobile bg-no-repeat bg-cover test1 w-full h-screen justify-center bg-main flex flex-col items-center  pb-2'>
      <div className='w-48 h-48  relative '>
        <div className='w-48 h-48 btn-color cercle animate-spin set-spin ' ></div>
        <img className='w-[95%] h-[95%]  object-cover rounded-full absolute top-[2.5%] right-[2.5%] ' src={logo} alt="" />

      </div>
      <h1 className='text-white font-semibold mt-4 text-4xl px-2'>Welcome To Workout</h1>
      <h1 className='text-white font-semibold mt-4 text-4xl'>start your journey</h1>
      <p className='text-white mt-4 mb-10'>Create a workout planto stay fit </p>
      {/* <button className='btn-color text-white text-base my-4 w-5/6 h-10 bg-blue-500 px-2 '><Link to="/Register">Get Stared !</Link></button> */}
      <Link to="/Register" className='btn-color text-white text-base my-4 w-5/6 h-10 bg-blue-500 px-2 flex items-center'> <button className=' w-full'>Get Stared !</button></Link>
    </div>
  )
}

export default GetStart