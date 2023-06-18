import React from 'react'
// import {
//     Input,
//     Ripple,
//     initTE,
//   } from "tw-elements";
  import "flowbite"
  
import Lottie from 'lottie-react'
import registerLottie from './../lottieFiles/salon_regis.json'
import LoginComponent from '../components/LoginComponent'
import SignupComponent from '../components/SignupComponent'
import { useState } from 'react'

// initTE({ Input, Ripple });


const Register = () => {
  const [isSignUP,setIsSignUp] = useState(false)
  const handleSign=()=>{
    setIsSignUp(true)
  }
  return (
    
    <div className='z-1 md:z-1 mb-30'>
    <section className=" mx-20 sm:mx-15">
        <div className="">
          {/* Left column container with background*/}
          <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between transition-all duration-200">
            {/* <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
              <img src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="w-full" alt="Sample image" />
            </div> */}
            <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                <Lottie animationData={registerLottie}/>
            </div>
            {/* Right column container */}
            <div className="mb-12 md:mb-30 md:w-8/12 lg:w-5/12 xl:w-5/12 mr-5 ml-5 absolue text-yellow-500 ">
              <form className='bg-black rounded-lg shadow-[0_4px_9px_-4px_#DAA520] '>
                {!isSignUP && <LoginComponent/>}
                {isSignUP && <SignupComponent/>}
              </form>
              <p className="mb-0 mt-2 pt-1 text-m font-semibold text-white justify-center">
                    Don't have an account?
                    <a href="#!" className="text-yellow-500 transition duration-150 ease-in-out hover:text-yellow-600 focus:text-danger-600 active:text-danger-700" onClick={handleSign}> Register</a>
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Register



