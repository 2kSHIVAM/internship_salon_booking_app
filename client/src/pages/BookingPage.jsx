import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import {
  Square3Stack3DIcon,
  UserCircleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import 'flowbite'
import Lottie from 'lottie-react'
import registerLottie from './../lottieFiles/details.json'
// import registerLottie from './../lottieFiles/salon_register.json'
import BookingMenu from "./BookingMenu";

const BookingPage = () => {
  return (
    <div>
    <div className='z-1 md:z-1 mb-30'>
    <section className=" mx-20 sm:mx-15">
        <div className="">
          {/* Left column container with background*/}
          <div className="g-2 flex h-full flex-wrap items-center justify-center lg:justify-between transition-all duration-200">
            {/* <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
              <img src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="w-full" alt="Sample image" />
            </div> */}
            <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-4/12 md:shrink-0 lg:w-4/12 xl:w-4/12">
                <Lottie animationData={registerLottie}/>
            </div>
            {/* Right column container */}
            <div className="mb-12 md:mb-30 md:w-7/12 lg:w-7/12 xl:w-7/12 mr-5 ml-5 relative text-yellow-500 ">
              <form className=' '>
                <BookingMenu/>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
    </div>
  );

}

export default BookingPage




