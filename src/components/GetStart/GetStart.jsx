import React from "react";
import "./GetStart.css"; //import css
import logo from "../../assets/img/Getstarted-img .png";

//component below

const GetStart = () => {
  return (
    <div className="bg-mobile bg-no-repeat bg-cover test1 w-full h-screen justify-center bg-main flex flex-col items-center  pb-2">
      <div className="w-300 h-300  relative ">
     
        <div className="getStarted  cercle ">
        <img className=' object-cover rounded-full absolute get-Started_IMG' src={logo} alt="" />
        <div className="set-spin">

          <article className="NeonPink"/>
          <article className="NeonIndigo"/>
          </div>
        </div>

      </div>

<div>
  
</div>
      <h1 className="text-white font-semibold mt-4 text-4xl px-2">
        Welcome To Workout
      </h1>
      <h1 className="text-white font-semibold mt-4 text-4xl">
        start your journey
      </h1>
      <p className="text-white mt-4 mb-10">Create a workout planto stay fit </p>
      <button className="btn-color text-white text-base my-4 w-5/6 h-10 bg-blue-500 px-2 ">
        Get Stared !
      </button>
    </div>
  );
};

export default GetStart;
