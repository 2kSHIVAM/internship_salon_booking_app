import React, { useState } from 'react'
import ServiceMainComponent from '../components/ServiceMainComponent'
import banner from './Capture.PNG'
import SearchService from '../components/SearchService'
import Not_found from '../components/Not_found'

const data=
  [
    {
      imageLink:banner,
      title:"People's Choice",
          heading:"Purus Hair Inceptos Nibh",
          description:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla",
          cost:'50,000',
          duration:"58",
          limit:"12",
          rating:"68",
          star:"5",
    },
    {
      imageLink:"https://c1.wallpaperflare.com/preview/405/255/732/expocosmetica-presentation-model-hairdresser-cut-hair.jpg",
      title:"NEW",
      heading:"Purus Hair Inceptos Nibh",
      description:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla",
      cost:'38,000',
      duration:"30",
      limit:"Unlimited",
      rating:"101",
      star:"5"
    },
    {
      imageLink:"https://c1.wallpaperflare.com/preview/510/773/86/barber-barbershop-hair-stylist-haircut.jpg",
      title:"NEW",
      heading:"Purus Facial Inceptos Nibh",
      description:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla",
      cost:'38,000',
      duration:"30",
      limit:"Unlimited",
      rating:"101",
      star:"5"
    },
    {
      imageLink:"https://c1.wallpaperflare.com/preview/405/255/732/expocosmetica-presentation-model-hairdresser-cut-hair.jpg",
      title:"HOT",
      heading:"Purus Facial Inceptos Nibh",
      description:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla",
      cost:'25,000',
      duration:"25",
      limit:"6",
      rating:"250",
      star:"2"
    },
    {
      imageLink:banner,
      title:"People's Choice",
      heading:"Purus beard Inceptos Nibh",
      description:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla",
      cost:'50,000',
      duration:"58",
      limit:"12",
      rating:"68",
      star:"3"
    },
    {
      imageLink:"https://c1.wallpaperflare.com/preview/510/773/86/barber-barbershop-hair-stylist-haircut.jpg",
      title:"NEW",
      heading:"Purus trim Inceptos Nibh",
      description:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla",
      cost:'38,000',
      duration:"30",
      limit:"Unlimited",
      rating:"101",
      star:"5"
    }
  ]
  let flag=0
const Services_main = () => {
  const [isFound,setIsFound]=useState("")
  const handleFound=()=>{
    setIsFound(document.getElementById("search-dropdown").value)
    console.log(isFound)
  }
  return (
    <div className='relative '>

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
            <a href="http://localhost:3000/" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-yellow-600 dark:text-gray-100 dark:hover:text-white">
              <svg aria-hidden="true" className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
              Home
            </a>
          </li>

          <li aria-current="page">
            <div className="flex items-center">
              <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
              <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Services</span>
            </div>
          </li>
        </ol>
      </nav>

        <div className=' text-center md:hover:text-yellow-500 '>
            <p className='text-[27px]'>Our TopCLASS Services</p>
            <p className="p-5 ">Lorem ipsum dolor sit amet, tenetur dolorem saepe repellat animi. Magnam ipsum hic quam consectetur sequi quisquam, ipsam porro inventore consequuntur a?</p>
        </div>

        <div className='mt-20'>
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
            <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-white bg-transparent rounded-r-lg border-yellow-500 border-2 outline-none border border-white focus:outline-none focus:border-white focus:border-3" placeholder="Search Services..." required onChange={handleFound}/>
            <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-yellow-700 rounded-r-lg border border-white-700 focus:outline-none ">
              <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
      </form>

        </div>

        <div className='mt-10'>
        <div className="container mx-auto ">
        <div className="flex flex-row flex-wrap justify-items-stretch justify-center ">

          {
            data.map((item,index)=>{
            
            if(item.heading.toUpperCase().includes(isFound.toUpperCase()))
            {
              return(
              <ServiceMainComponent
              imageLink={item.imageLink}
              title={item.title}
              heading={item.heading}
              description={item.description}
              cost={item.cost}
              duration={item.duration}
              limit={item.limit}
              rating={item.rating}
              star={item.star}
          />
            )}
            if(flag===0){
              flag=1
              return(
                <Not_found/>
             )
            }


            
          })}
          {/* <ServiceMainComponent
          imageLink={banner}
          title="People's Choice"
          heading="Purus Ullamcorper Inceptos Nibh"
          description="Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla"
          cost='50,000'
          duration="58"
          limit="12"
          rating="68"
          star="5"
          />

        <ServiceMainComponent
            imageLink="https://c1.wallpaperflare.com/preview/510/773/86/barber-barbershop-hair-stylist-haircut.jpg"
            title="NEW"
            heading="Purus Ullamcorper Inceptos Nibh"
            description="Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla"
            cost='38,000'
            duration="30"
            limit="Unlimited"
            rating="101"
            star="5"
          />
        
        <ServiceMainComponent
            imageLink="https://c1.wallpaperflare.com/preview/405/255/732/expocosmetica-presentation-model-hairdresser-cut-hair.jpg"
            title="HOT"
            heading="Purus Ullamcorper Inceptos Nibh"
            description="Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla"
            cost='25,000'
            duration="25"
            limit="6"
            rating="250"
            star="4"
        />

        <ServiceMainComponent
            imageLink="https://c1.wallpaperflare.com/preview/405/255/732/expocosmetica-presentation-model-hairdresser-cut-hair.jpg"
            title="HOT"
            heading="Purus Ullamcorper Inceptos Nibh"
            description="Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla"
            cost='25,000'
            duration="25"
            limit="6"
            rating="250"
            star="2"
        />

          <ServiceMainComponent
          imageLink={banner}
          title="People's Choice"
          heading="Purus Ullamcorper Inceptos Nibh"
          description="Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla"
          cost='50,000'
          duration="58"
          limit="12"
          rating="68"
          star="3"
          />


            <ServiceMainComponent
            imageLink="https://c1.wallpaperflare.com/preview/510/773/86/barber-barbershop-hair-stylist-haircut.jpg"
            title="NEW"
            heading="Purus Ullamcorper Inceptos Nibh"
            description="Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla"
            cost='38,000'
            duration="30"
            limit="Unlimited"
            rating="101"
            star="5"
          /> */}

        </div>
      </div>
    </div>

    </div>
  )
}

export default Services_main



// <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
//   <path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"></path>
//   <path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"></path>
// </svg>