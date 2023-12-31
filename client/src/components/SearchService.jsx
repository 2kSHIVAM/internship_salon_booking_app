import React from 'react'
import 'flowbite'
const SearchService = () => {
  return (
    <div>
    <form>
        <div className="flex w-50 justify-end mr-20">
          <label htmlFor="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
          <button id="dropdown-button" data-dropdown-toggle="dropdown" className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-yellow-500 bg-gray-700 border border-gray-300 rounded-l-lg hover:bg-black focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">All categories <svg aria-hidden="true" className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg></button>
          <div id="dropdown" className="z-10 hidden bg-black divide-y divide-gray-100 rounded-lg shadow w-44 ">
            <ul className="py-2 text-sm text-yellow" aria-labelledby="dropdown-button">
              <li>
                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-500 dark:hover:bg-gray-600  ">Hair</button>
              </li>
              <li>
                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-500 dark:hover:bg-gray-600 dark:hover:text-white">Beard</button>
              </li>
              <li>
                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-500 dark:hover:bg-gray-600 dark:hover:text-white">Facial</button>
              </li>
              <li>
                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-500 dark:hover:bg-gray-600 dark:hover:text-white">Fading</button>
              </li>
            </ul>
          </div>
          <div className="relative w-[300px] outline-none focus:outline-none">
            <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-white bg-transparent rounded-r-lg border-yellow-500 border-2 outline-none border border-white focus:outline-none focus:border-white focus:border-3" placeholder="Search Services..." required />
            <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-yellow-700 rounded-r-lg border border-white-700 focus:outline-none ">
              <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
      </form>

    </div>
  )
}

export default SearchService