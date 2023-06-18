import React from 'react'
import { useState,useEffect } from 'react'
import useScript from '../hooks/useScript';
import 'flowbite'
import logo from './salon_logo.png'
// import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  // useScript('')
  const [showModal, setShowModal] = useState(false);
  const [isCopy,setIsCopy] = useState(false);
  const handleCopy = () =>{
    navigator.clipboard.writeText("XXXX-XXXX-XXXXX");
    setIsCopy(true);
  }
  // const navigate = useNavigate();

  const handleNavi=async(path)=>{
  // navigate(path)
  }

  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    // Delay in milliseconds
      const delay = 1000;

    // Add the "triggered" class after the specified delay
    const timeout = setTimeout(() => {
      setTriggered(true);
    }, delay);

    // Trigger the animation on page load
    window.addEventListener('load', () => {
      setTriggered(true);
    });

    // Clear the timeout on component unmount
    return () => clearTimeout(timeout);
    
  }, []);

    return (
      <>
            <nav class="bg-transparent border-gray-200 dark:bg-gray-900">
        <div>
        <div class="max-w-screen-xl flex flex-row flex-wrap items-center justify-between mx-auto p-2">
          <div className='animation-container overflow-visible z-50'>
          <a href="/" class="flex animation-container perspective-1000">
              <img src={logo} class={`animated-image h-20 w-30 mr-3 ${triggered ? 'triggered' : ''}`} alt="Flowbite Logo" />
              {/* <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">noidolsbarber</span> */}
          </a>
          </div>
          <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent  ">
              <li>
                {/* <Link to="/" class="block py-2 pl-3 pr-4 text-yellow-600 bg-white-700 rounded hover:bg-gray-100 md:bg-transparent md:text-yellow-600 md:p-0 dark:text-white md:dark:text-white-500 " aria-current="page">About</Link> */}
                <a href="http://localhost:3000/" class="block py-2 pl-3 pr-4 text-white-900 bg-transparent rounded md:bg-transparent md:p-0 hover:text-yellow-500 " aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" class="block py-2 pl-3 pr-4 text-white-900 rounded hover:bg-yellow-500 md:hover:bg-transparent md:border-0 md:hover:text-yellow-500 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
              </li>
              <li>
                <a href="http://localhost:3000/services" class="block py-2 pl-3 pr-4 text-white-900 active:text-yellow-700 rounded hover:bg-yellow-500 md:hover:bg-transparent md:border-0 md:hover:text-yellow-500 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
              </li>
              <li>
                <a href="#" class="block py-2 pl-3 pr-4 text-white-900 rounded hover:bg-yellow-500 md:hover:bg-transparent md:border-0 md:hover:text-yellow-500 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
              </li>
              <li>
                <a href="#" class="block py-2 pl-3 pr-4 text-white-900 rounded hover:bg-yellow-500 md:hover:bg-transparent md:border-0 md:hover:text-yellow-500 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
              </li>
              <li>
                <a href="http://localhost:3000/register" class="block py-2 pl-3 pr-4 text-white-900 rounded hover:bg-yellow-500 md:hover:bg-transparent md:border-0 md:hover:text-yellow-500 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Register Now</a>
              </li>

              <li>
                <div>
                <a href="#" class="md:animate-bounce block py-2 pl-3 pr-4 text-yellow-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-500 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" onClick={() => setShowModal(true)}>Vouchers</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        </div>
      </nav>


      { showModal ? (
                <>
            <div class="fixed  inset-0 z-50 overflow-y-auto " >

            <div class="  border-yellow-600 flex items-center justify-center min-h-screen text-center ">

                <div class="fixed inset-0 ">
                <div class="absolute inset-0 bg-black opacity-50" onClick={() => setShowModal(false)}></div>
                </div>


                <div
                class="animate-model hover:shadow-lg hover:shadow-yellow-500/50 border border-yellow-600 inline-block px-2 py-6 overflow-hidden text-left align-bottom transition-all transform bg-black rounded-[20px] shadow-xl lg:w-2xl sm:my-8 sm:align-middle sm:max-w-sm sm:w-full"
                role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                <div class="pb-2 bg-gray-800 rounded-[30px]">
                    <div class="flex-col items-center sm:flex">
                    <div
                        class="flex items-center justify-center flex-shrink-0 w-12 h-12 p-4 mx-auto bg-yellow-300 rounded-full sm:mx-0 sm:h-16 sm:w-16">
                        <svg class="w-full h-full text-yellow-600" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="19" y1="5" x2="5" y2="19"></line>
                        <circle cx="6.5" cy="6.5" r="2.5"></circle>
                        <circle cx="17.5" cy="17.5" r="2.5"></circle>
                        </svg>
                    </div>
                    <div class="mt-3 mb-1 text-center sm:ml-4 sm:text-left">
                        <h3 class="pt-1 text-3xl font-black leading-6 text-yellow-500" id="modal-headline">
                        Discount
                        </h3>
                    </div>
                    </div>
                </div>
                <div class="w-full text-base text-center text-yellow-500 py-2">
                    use the coupon code below
                </div>
                <div class="flex flex-row px-4 pt-1 pt-3 text-xs bg-gray-800 sm:px-6 sm:flex sm:flex-row-reverse rounded-[30px]">
                  {
                    isCopy?(<>
                    <div
                        class=" w-full p-4 my-3 font-mono text-lg text-center text-yellow-500 border-4 border-yellow-400 border-dashed rounded select-all">
                        Copied </div>
                    </>):(<div
                        class=" w-full p-4 my-3 font-mono text-lg text-center text-yellow-500 border-4 border-yellow-400 border-dashed rounded select-all" onClick={() => handleCopy()}>
                        XXXX-XXXX-XXXXX </div>)
                  }
                      
                </div>

                <div class="justify-center w-full px-4 mt-2 font-sans text-xs leading-6 text-center text-gray-500">
                    <a href="#_">Terms and conditions apply</a>
                </div>
                <div className="flex justify-end relative mr-1">
                <button
                    className="mt-2 p-2.5 text-white bg-yellow-500 rounded-md outline-none border ring-offset-2 focus:ring-2"
                         onClick={() =>
                            setShowModal(false)
                        }
                        >
                            Cancel
                        </button>
                </div>
                </div>
            </div>
            </div>    
                </>
            ) : null}

      </>
    
    
        )
      
  // }
}

export default Navbar