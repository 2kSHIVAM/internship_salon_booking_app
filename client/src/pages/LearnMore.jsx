import React from 'react'
import CustomButton from '../components/CustomButton'
import CountBox from '../components/CountBox'
import banner2 from './banner2.PNG'
import banner from './Capture.PNG'
import { Link,useLocation, useNavigate } from 'react-router-dom';
import ServicesComponents from '../components/ServicesComponents'
const LearnMore = () => {
    const navigate = useNavigate();

    const handleNavi=()=>{
        navigate('/booking')
    }
  return (
    <div className='flex flex-col relative'>
        <div className="rounded-lg w-full h-[400px] mb-5 z-1 md:z-1">
        <div className="relative w-full h-full">
            <img
            src={banner}
            className="absolute inset-0 object-cover w-full h-full"
            alt="..."
            />
        </div>
        </div>
        <nav className="flex px-5 py-3 text-gray-500 rounded-lg dark:bg-gray-800 justify-center mb-10" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
          <Link to="/" >
            <div class="inline-flex items-center text-sm font-medium text-gray-500 hover:text-yellow-600 dark:text-gray-100 dark:hover:text-white" aria-current="page">
            <svg aria-hidden="true" className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
              Home
            </div>
          </Link>
            {/* <a href="http://localhost:3000/" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-yellow-600 dark:text-gray-100 dark:hover:text-white">
              <svg aria-hidden="true" className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
              Home
            </a> */}
          </li>
          <li className="inline-flex items-center">
            <Link to="/services" >
              <div class="inline-flex items-center text-sm font-medium text-gray-500 hover:text-yellow-600 dark:text-gray-100 dark:hover:text-white" aria-current="page">
              <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                Service
              </div>
            </Link>

            {/* <a href="http://localhost:3000/services" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-yellow-600 dark:text-gray-100 dark:hover:text-white">
            <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
              Service
            </a> */}
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
              <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Learn More</span>
            </div>
          </li>
        </ol>
      </nav>

        <div className='bg-black mt-[100px] py-10'>
            <p className='flex justify-center items-center text-9xl text-yellow-700 '>
                CAVIAR
            </p>
        </div>

    <div className="w-full flex md:flex-row flex-col mt-[100px] gap-[20px] justify-center ">
            <div className='justify-between gap-[25px]'>
                <p className=' flex transform -rotate-12 items-center justify-center p-4 flex text-8xl opacity-30 hover:text-yellow-700 hover:opacity-50 mt-20'>
                Caviar
                </p>
            </div>
        <div className=" flex-col">
            <img src={banner2} alt="campaign" className="w-full h-[410px] object-contain rounded-xl"/>
        </div>

        <div className="flex md:w-[150px] w-full flex-wrap justify-between gap-[25px]">
            <CountBox title="Duration" value={"52 Minutes"} />
            <CountBox title={`Limit`} value={"6 times/day"} />
            <CountBox title="Cost" value={"38,000"} />        
        </div>
      <div>

      </div>
    </div>
    <div className='flex justify-center items-center'>
        <p className='w-50 h-50 bg-black ml-10 mr-10 mt-10 p-10 rounded-[30px] border-2 border-yellow-700 shadow-md text-gray-500 shadow-lg shadow-yellow-500/50 w-8/12 justify-end'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eum maiores accusamus praesentium numquam sed temporibus cumque nisi. Sed quidem alias delectus odio sunt exercitationem. Debitis illum hic consequuntur repudiandae?</p>
        
    </div>
    <div className='flex justify-center items-center'>
        <CustomButton 
                btnType="button"
                title="Book Now"
                styles="bg-yellow-500  md:animate-bounce"
                handleClick={handleNavi}

        />
    </div>
    <div className='flex justify-center items-center mt-[100px]'>
        <p className='text-3xl hover:text-yellow-700 '>Other Popular Services</p>
    </div>
<div className='flex flex-row flex-wrap justify-center justify-items-stretch mr-10 mt-20'>

<ServicesComponents
imageLink="https://c1.wallpaperflare.com/preview/510/773/86/barber-barbershop-hair-stylist-haircut.jpg"
header="Noteworthy technology acquisitions 2021"
content="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
/>
<ServicesComponents
imageLink="https://c1.wallpaperflare.com/preview/405/255/732/expocosmetica-presentation-model-hairdresser-cut-hair.jpg"
header="Noteworthy technology acquisitions 2021"
content="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
/>
<ServicesComponents
imageLink="https://c0.wallpaperflare.com/preview/112/112/29/woman-hair-clipping-man-s-hair.jpg"
header="Noteworthy technology acquisitions 2021"
content="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
/>
<ServicesComponents
imageLink="https://c1.wallpaperflare.com/preview/405/255/732/expocosmetica-presentation-model-hairdresser-cut-hair.jpg"
header="Noteworthy technology acquisitions 2021"
content="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
/>

</div>


  </div>

  )
}

export default LearnMore