import React from 'react'
import {Link} from 'react-router-dom'
const ServicesComponents = ({imageLink,header,content}) => {
  return (
    <div>
            <div class="hover:shadow-lg hover:shadow-yellow-500/50 transition-all duration-200 max-w-xs bg-black border border-gray-600 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ml-10 mt-5" >
            {/* <a href="#">
            <img class="rounded-t-lg" src={imageLink} alt="" />
            </a> */}
            <Link to="/services" >
            <img class="rounded-t-lg" src={imageLink} alt="" />
            </Link>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-white-900 dark:text-white">{header}</h5>
                </a>
                <p class="mb-3 font-normal text-gray-400 dark:text-gray-400">{content}</p>
                <Link to="/services" >
                  <div class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-700 rounded-lg hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" aria-current="page">
                  Book Now
                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </div>
                </Link>
                {/* <a href="/services" class="lg:hover:animate-bounce inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-700 rounded-lg hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Book Now
                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a> */}
            </div>
            </div>
    </div>
  )
}

export default ServicesComponents