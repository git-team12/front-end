import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Register.css'  //import css
//component below 
import Data from './Data';
import Addprofile from './Addprofile';
import Gender from './Gender';
import Height from './Height';
import Wieght from './Wieght';

// IoMaleSharp
const Register = () => {


  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [password2, setPassword2] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [file, setFile] = useState("../src/assets/img/person.png")
  const [gender, setGender] = useState("")
  const [height, setHeight] = useState(150)
  const [weight, setWeight] = useState(40)
  const [selected, setSelected] = useState(false)
  const [date, setDate] = useState("")
  const [step, setStep] = useState(1);

  const userData = [
    {username,password,firstName,lastname,email,gender,height,weight,date,file}
  ]
  console.log(userData)


  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };


  const selectGender = (e) => {
    setGender(e.target.value)
    setSelected(!selected)
  }

  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  const checkPass = () => {
    if (password === password2) {

    }
    return <p className='p-3 border-red-600 bg-red-300 font-bold'> Password is not match </p>
  }

  return (
    <section className='h-screen  bg-cover bg-[url("./assets/img/20-SON01830.jpg")] bg-center'>
      <form action="" method="post">
        {step === 1 && (
          <Data
            nextStep={nextStep}
            username={username}
            setUsername={setUsername}
            password={password}
            password2={password2}
            setPassword={setPassword}
            setPassword2={setPassword2}
            email={email}
            setEmail={setEmail}
            checkPass={checkPass} />
        )}
        {step === 2 && (
          <Addprofile
            firstName={firstName}
            setFirstName={setFirstName}
            lastname={lastname}
            setLastname={setLastname}
            file={file}
            handleChange={handleChange}
            date={date}
            setDate={setDate} />
        )}
        {step === 3 && (
          <Gender setGender={setGender} />
        )}

        {step === 4 && (
          <Height setHeight={setHeight} height={height} />
        )}
        {step === 5 && (
          <Wieght setWeight={setWeight} weight={weight} />
        )}

        <div className={step === 1? 'mt-10 mx-5 justify-center':'flex mt-10 mx-5  justify-between'}>
          {step > 1 && (
            <div className=' relative bg-zinc-800  rounded-md  bg-btn'>
              <button onClick={prevStep} type='button' className='prev-button text-2xl font-bold text-white text-center  bg-zinc-800 relative  btn '>
                Back
              </button>
            </div>
          )}
          {step < 5 ? (
            <div className=' relative bg-zinc-800  rounded-md  bg-btn '>
              <button onClick={nextStep} type='button' className='next-button text-2xl font-bold text-white text-center bg-zinc-800 relative btn '>
                Next
              </button>
            </div>
          ) : (
            <div className=' relative bg-zinc-800  rounded-md  bg-btn '>
            <Link to='/login'><button className='submit-button text-2xl font-bold text-white text-center bg-zinc-800 relative btn  ' type='button' >Login Now!</button></Link>
            </div>
          )}
        </div>
      </form>
    </section>
  )
}

export default Register