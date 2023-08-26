import React from 'react'
import banner from './../pages/dddd.jpeg'
import banner2 from './../pages/banner2.PNG'
import 'flowbite'
import Split from 'react-split'
import {useEffect} from 'react'
const Carousel = () => {
  useEffect(() => {
    const showAlert = localStorage.getItem('showAlert');

    if (!showAlert) {
      alert(
        "This project is a solo effort created as part of my internship. It serves as a frontend showcase and doesn't have backend integration for security reasons,it is demo. The website uses dummy data and hides certain functionalities like the backend dashboard and registration."
      );
      localStorage.setItem('showAlert', 'true');
    }
  }, []);

  return (
        // <div className="carousel w-full h-100">
        //     <div id="slide1" className="carousel-item relative w-full">
        //         <img src="https://c1.wallpaperflare.com/preview/510/773/86/barber-barbershop-hair-stylist-haircut.jpg" className="w-full" />
        //         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        //         <a href="#slide4" className="btn btn-circle">❮</a> 
        //         <a href="#slide2" className="btn btn-circle">❯</a>
        //         </div>
        //     </div> 
        //     <div id="slide2" className="carousel-item relative w-full">
        //         <img src="https://c1.wallpaperflare.com/preview/405/255/732/expocosmetica-presentation-model-hairdresser-cut-hair.jpg" className="w-full" />
        //         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        //         <a href="#slide1" className="btn btn-circle">❮</a> 
        //         <a href="#slide3" className="btn btn-circle">❯</a>
        //         </div>
        //     </div> 
        //     <div id="slide3" className="carousel-item relative w-full">
        //         <img src="https://c0.wallpaperflare.com/preview/112/112/29/woman-hair-clipping-man-s-hair.jpg" className="w-full" />
        //         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        //         <a href="#slide2" className="btn btn-circle">❮</a> 
        //         <a href="#slide4" className="btn btn-circle">❯</a>
        //         </div>
        //     </div> 
        //     <div id="slide4" className="carousel-item relative w-full">
        //         <img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
        //         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        //         <a href="#slide3" className="btn btn-circle">❮</a> 
        //         <a href="#slide1" className="btn btn-circle">❯</a>
        //         </div>
        //     </div>
// </div>
<div>
<div id="indicators-carousel" className="z-1 md:z-1 relative w-full" data-carousel="static">
        {/* Carousel wrapper */}
        <div className="relative overflow-hidden rounded-lg w-full h-screen">
          {/* Item 1 */}
          <div className="duration-700 ease-in-out overflow-hidden justify-center" data-carousel-item>
            <img src={banner2} className=" absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
            <div className='flex flex-col slide-text pt-10 pl-40 align-right'>
            <p className='  md:text-9xl  sm:text-7xl xs:text-3xl font-bold text-white-700 opacity-20 '>SALON</p>
            <p className=" pl-20 text-white-500 font-bold md:text-5xl sm:text-5xl xs:text-2xl opacity-60">Best Salon Provider</p>
            </div>
          </div>
          {/* Item 2 */}
          <div className="duration-700 ease-in-out" data-carousel-item>
            <img src={banner} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
            <div className='flex flex-col slide-text pt-10 pl-40 slide-text-right' > 
            <p className='  md:text-9xl  sm:text-7xl xs:text-3xl font-bold text-white-700  opacity-20 '>SALON</p>
            <p className=" pl-20 text-white-500 font-bold md:text-5xl sm:text-5xl xs:text-2xl opacity-60">Best Salon Provider</p>
            </div>
          </div>
          {/* Item 3 */}
          <div className="duration-700 ease-in-out" data-carousel-item>
            {/* <img src="https://c1.wallpaperflare.com/preview/405/255/732/expocosmetica-presentation-model-hairdresser-cut-hair.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." /> */}
          </div>
          {/* Item 4 */}
          <div className="duration-700 ease-in-out" data-carousel-item>
            <img src="" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>
          {/* Item 5 */}
          <div className="duration-700 ease-in-out" data-carousel-item>
            <img src="" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>
        </div>
        {/* Slider indicators */}
        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to={0} />
          <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to={1} />
          <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to={2} />
          <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to={3} />
          <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to={4} />
        </div>
        {/* Slider controls */}
        <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>

</div>
  )
}

export default Carousel