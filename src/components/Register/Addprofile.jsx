import React from 'react'

const Addprofile = ({
    setFirstName,
    firstName,
    setLastname,
    lastname,
    file,
    date,
    setDate,
    handleChange,}) => {
  return (
    <div className='pt-20'>
          <div className='border w-[102px] h-[102px] mx-auto rounded-md bg-zinc-600 bg-opacity-60'>
            <img src={file} alt="profile_user" className='w-[100px] h-[100px] object-cover rounded-md input_img ' />
            <input type="file" className='custom-file-input w-[120px] color' onChange={handleChange} />
          </div>

          <div className=' mx-5 mt-20 flex flex-col gap-5'>
            <input type="text" className='input_text block w-full  text-xl bg-zinc-700 bg-opacity-60 text-white p-4 rounded-md' placeholder='Enter your Firstname' required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <input type="text" className='input_text block w-full  text-xl bg-zinc-700 bg-opacity-60 text-white p-4 rounded-md' placeholder='Enter your Lastname' required value={lastname} onChange={(e) => setLastname(e.target.value)} />
            <input type="date" className=' text input_text block w-full  text-xl bg-zinc-700 bg-opacity-60 text-white p-4 rounded-md' value={date} onChange={(e) => setDate(e.target.value)} />
          </div>
      </div>
  )
}

export default Addprofile