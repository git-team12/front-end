import React, { useState } from 'react'
import './Register.css'  //import css
//component below 
import Data from './Data';
import Gender from './Gender';
import Old from './Old';
import Height from './Height';
import Wieght from './Wieght';

// IoMaleSharp
const Register = () => {

  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const [password2,setPassword2] = useState("")
  const [firstName,setFirstName] = useState("")
  const [lastname,setLastname] = useState("")
  const [email,setEmail] = useState("")
  const [file, setFile] = useState("../src/assets/img/person.png")
  const [gender, setGender] = useState("")
  const [age, setAge] = useState(18)
  const [height , setHeight] = useState(150)
  const [weight,setWeight] = useState(40)
  const [hide, setHide] = useState(true)
  const [selected , setSelected] = useState(false)


  
  const showContent = () => {
    setHide(!hide)
  }

  const selectGender = (e) =>{
    setGender(e.target.value)
    setSelected(!selected)
  }

  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  const checkPass = () =>{
    if (password === password2){
      
    }
    return <p className='p-3 border-red-600 bg-red-300 font-bold'> Password is not match </p>
  }

  return (
    <section className='h-screen bg-[url(".\assets\img\20-SON01830.jpg")] bg-cover bg-center'>
      <Data 
      username = {username}
      setUsername = {setUsername} 
      password = {password}
      password2 = {password2}
      setPassword={setPassword} 
      setPassword2={setPassword2} 
      email = {email}
      setEmail = {setEmail}
      firstName = {firstName}
      setFirstName={setFirstName} 
      lastname = {lastname}
      setLastname ={setLastname} 
      file={file} 
      handleChange={handleChange} 
      checkPass = {checkPass}/>

      <Gender setGender = {setGender} />
      <Old setAge = {setAge} age={age} />
      <Height setHeight={setHeight} height={height}  />
      <Wieght setWeight={setWeight} weight={weight} />
    </section>
  )
}

export default Register