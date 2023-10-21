import { useState } from "react";
import Logo from "../../assets/img/Logo.png";
import { IoPersonSharp } from "react-icons/io5";
import { IoLockClosedSharp } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// Style 
import { inputStyles } from "./inputStyles"; // Import the styles
import "./Login.css";

const Login = () => {
  const [Urusername, setUserName] = useState("");
  const [Urpassword, setPassword] = useState("");
  const navigate = useNavigate();

  const checkLogin = () => {
    const data = {
      username: "Admin",
      password: 123456,
    };
    console.log(data);
    if (data.username === Urusername || data.password === Urpassword) {
      navigate("/home");
    } else {
      console.log(data.username, Urusername);
      alert("Invalid name or password");
          // Refresh the page
    window.location.reload();
    }
  };
  return (
    <div className='h-screen bg-[url(".\assets\img\20-SON01830.jpg")] bg-cover bg-center flex'>
      <main className={`${inputStyles.mainSection}`}>
        <img src={Logo} alt="logo" />

        <section id="form-login" className="grid gap-4 w-full">
          <form className="flex flex-col xl:max-w-4xl xl:text-base">
          <label className={`${inputStyles.label}`}>Username</label>
            <div className="relative">
              <IoPersonSharp className="absolute left-3 top-1/2 transform -translate-y-1/2 fill-white" />
              <input
                type="text"
                placeholder="Enter Your Username"
                className={`${inputStyles.base} ${inputStyles.focus}`}
                value={Urusername}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
          </form>
          <form className="flex flex-col xl:max-w-4xl">
            <label className={`${inputStyles.label}`}>Password</label>
            <div className="relative">
              <IoLockClosedSharp className="absolute left-3 top-1/2 transform -translate-y-1/2 fill-white text-lg sm:text-xl" />
              <input
                type="password"
                placeholder="Enter Your Password"
                className={`${inputStyles.base} ${inputStyles.focus}`}

                value={Urpassword}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </form>

          <span className="text-white text-base text-end sm:text-xl">
            <Link to="/reset">Forget your password</Link>
          </span>
        </section>

        {/* Button */}
        <section className="w-full gap-4 grid ">
          <article className="w-full overflow-hidden rounded-md">
            <button
              className="btn_button fade-in p-3  w-full text-white text-xl"
              onClick={checkLogin}
              type="button"
            >
              Login
            </button>
          </article>

          <article className="w-full overflow-hidden rounded-md">
            <button
              className="btn_button fade-in p-3  w-full text-white text-xl flex align-center items-center justify-center"
              onClick={checkLogin}
              type="button"
            >
              <FcGoogle className="w-10" />
              Continues with google
            </button>
          </article>
          
        </section>

        <section className="text-center">
          <span className="text-white ">
            Don't have any account?{" "}
            <Link to="/register" className="text-pink-400 font-bold">
              Sign up
            </Link>{" "}
          </span>
        </section>
      </main>
    </div>
  );
};

export default Login;
