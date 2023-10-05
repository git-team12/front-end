import React from 'react'

const Data = (
  {
    setUsername,
    username,
    setPassword,
    setPassword2,
    password,
    password2,
    setEmail,
    email,
    setFirstName,
    firstName,
    setLastname,
    lastname,
    file,
    handleChange,
    checkPass
  
  }) => {
  return (
    <div>
        <div className=''>
        <div className=' relative top-32'>
          <h1 className='text-white text-center text-3xl'>Create new account</h1>
          <p className='text-zinc-500 text-center '>join with us in Healthy Impress !</p>
        </div>

        <div className='relative top-48'>
          <form className='px-5 flex flex-col gap-5'>
            <input type="text" className='input_text block w-full  text-xl bg-zinc-700 bg-opacity-60 text-white p-4 rounded-md' placeholder='Enter your username' required value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="email" className='input_text block w-full  text-xl bg-zinc-700 bg-opacity-60 text-white p-4 rounded-md' placeholder='Enter your email' required value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" className=' input_text block w-full  text-xl bg-zinc-700 bg-opacity-60 text-white p-4 rounded-md' placeholder='Enter your password' required value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="password" className=' input_text block w-full  text-xl bg-zinc-700 bg-opacity-60 text-white p-4 rounded-md' placeholder='Confirm your password' required value={password2} onChange={(e) => setPassword2(e.target.value)} />
          </form>

          <p className='text-white text-center mt-10 text'>Already have account ? <span className='text-[color:#D23D94]'>Sign In</span></p>
        </div>

        <div className=' relative bg-zinc-800  rounded-md top-60 mx-5 bg-btn'>
          <button className='text-2xl font-bold text-white text-center  bg-zinc-800 relative  btn' onClick={checkPass}>Next</button>
        </div>
      </div>

      <div className='hidden'>
        <form>
          <div className='relative top-20 border w-[102px] h-[102px] mx-auto rounded-md bg-zinc-600 bg-opacity-60'>
            <img src={file} alt="profile_user" className='w-[100px] h-[100px] object-cover rounded-md input_img ' />
            <input type="file" className='custom-file-input w-[120px] ' onChange={handleChange} />
          </div>

          <div className='relative top-40 mx-5 flex flex-col gap-5'>
            <input type="text" className='input_text block w-full  text-xl bg-zinc-700 bg-opacity-60 text-white p-4 rounded-md' placeholder='Enter your Firstname' required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <input type="text" className='input_text block w-full  text-xl bg-zinc-700 bg-opacity-60 text-white p-4 rounded-md' placeholder='Enter your Lastname' required value={lastname} onChange={(e) => setLastname(e.target.value)} />
            <input type="date" className=' text input_text block w-full  text-xl bg-zinc-700 bg-opacity-60 text-white p-4 rounded-md' value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
        </form>

        <div className=' relative bg-zinc-800  rounded-md top-80 mx-5 bg-btn'>
          <button className='text-2xl font-bold text-white text-center  bg-zinc-800 relative  btn'>Next</button>
        </div>

      </div>
    </div>
  )
}

export default Data