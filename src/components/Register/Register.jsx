import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Register.css'  //import css
//component below 
import Data from './Data';
import Addprofile from './Addprofile';
import Gender from './Gender';
import Height from './Height';
import Wieght from './Wieght';
import profileDefault from '/src/assets/img/person.png';
import axios from 'axios';

// IoMaleSharp
const Register = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [password2, setPassword2] = useState("")
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [image, setImage] = useState(profileDefault)
  const [gender, setGender] = useState("")
  const [height, setHeight] = useState(150)
  const [weight, setWeight] = useState(40)
  const [selected, setSelected] = useState(false)
  const [birthday, setBirthday] = useState("")
  const [step, setStep] = useState(1);

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
  
  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const base64Image = e.target.result;
        setImage(base64Image);
      };

      reader.readAsDataURL(selectedImage);
    }
  };

  const createUser = async (username, password, firstname, lastname, email, gender, height, weight, birthday, image) => {
    const requestData = {
      username: username,
      password: password,
      firstname: firstname,
      lastname: lastname,
      email: email,
      gender: gender,
      height: height,
      weight: weight,
      birthday: birthday,
      image: image
    }

    const form = new FormData();
    for (const key in requestData) {
      form.append(key, requestData[key]);
    }
  

    const response = await axios.post('http://localhost:5000/register', requestData)
    console.log(requestData)
    console.log(response)
  }
  const checkPass = () => {
    if (password === password2) {

    }
    return <p className='p-3 border-red-600 bg-red-300 font-bold'> Password is not match </p>
  }

 

  return (
    <section className='h-screen  bg-cover bg-[url("./assets/img/20-SON01830.jpg")] bg-center'>
      <form action="/register" method="POST">
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
            firstname={firstname}
            setFirstname={setFirstname}
            lastname={lastname}
            setLastname={setLastname}
            image={image}
            handleImageChange={handleImageChange}
            birthday={birthday}
            setBirthday={setBirthday} />
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

        <div className={step === 1 ? 'mt-10 mx-5 justify-center' : 'flex mt-10 mx-5  justify-between'}>
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
              <button onClick={() => createUser(username, password, firstname, lastname, email, gender, height, weight, birthday, image)} className='submit-button text-2xl font-bold text-white text-center bg-zinc-800 relative btn  ' type='button'>Login Now!</button>
            </div>
          )}
        </div>
      </form>
    </section>
  )
}

export default Register