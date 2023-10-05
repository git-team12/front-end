import React from 'react'

const Wieght = ({setWeight,weight}) => {
  return (
    <div>
        <div className='hidden'>
        <div className='relative top-20 ' >
          <h2 className='text-3xl text-white text-center'>What’s your weight?</h2>
          <p className='text-center text-zinc-500'>You can always change this later</p>
        </div>

        <div className='relative top-40 flex justify-center  align-middle items-end'>
          <p className='text-center text-8xl text-white '> {weight} </p>
          <p className='text-xl  text-white pb-4'>kg</p>
        </div>

        <div className='relative top-48 px-5'>
          <input type="range" name="" id="" onChange={(e)=>setWeight(e.target.value)} value={weight} min="0" max="100" step="0.1" className='w-full range_bar_weigth' />
          <div className='scale_weight'>
            
          </div>
        </div>
        <div className=' relative bg-zinc-800  rounded-md top-96 mx-5 bg-btn'>
          <button className='text-2xl font-bold text-white text-center  bg-zinc-800 relative  btn'>Next</button>
        </div>
      </div>
    </div>
  )
}

export default Wieght