import React from 'react'

const Old = ({setAge,age}) => {
  return (
    <div>
        <div className='relative top-20 hidden'>
        <div className=''>
          <h2 className='text-center text-white text-3xl'>How old are you?</h2>
          <p className='text-zinc-500 text-center'>This helps us create your personalized plan</p>
        </div>

        <div className=' mt-20 h-96 flex overflow-hidden '>
          <div className='  sm:w-2/5 md: lg:w-2/5 range_show_numer '>
            <p className='text-center text-4xl text-zinc-600'> {age - (-3)} </p>
            <p className='text-center text-5xl text-zinc-500 '> {age - (-2)} </p>
            <p className='text-center text-6xl text-zinc-500 '> {age - (-1)} </p>
            <div className='sm:w-full mx-auto  md:w-1/5 '>
              <p className='text-center text-8xl text-white current_age'> {age} </p>
            </div>
            <p className='text-center text-6xl text-zinc-200 '> {age - 1} </p>
            <p className='text-center text-5xl text-zinc-300 '> {age - 2} </p>
            <p className='text-center text-4xl text-zinc-400 '> {age - 3} </p>
          </div>

          <div className=''>
            <input type="range" min="4" max="100" className='range_bar' value={age} onChange={(e) => setAge(e.target.value)} />
            {/* <input type="range" name="" id="" /> */}
          </div>


        </div>
        <div className=' relative bg-zinc-800  rounded-md top-20 mx-5 bg-btn'>
          <button className='text-2xl font-bold text-white text-center  bg-zinc-800 relative  btn'>Next</button>
        </div>
      </div>
    </div>
  )
}

export default Old