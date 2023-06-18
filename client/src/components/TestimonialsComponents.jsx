import React from 'react'

const TestimonialsComponents = ({imageLink,name,heading,comment,star}) => {
    const goldArr=[];
    const silverArr=[];
    for(let i=0;i<Number(star);i++){
        goldArr.push(<svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>)
    }
    for(let i=0;i<5-Number(star);i++){
        silverArr.push(<svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>)
    }

  return (
    <div class="flex flex-row">
        <div className="ml-10 hover:shadow-lg hover:shadow-yellow-500/50 transition-all duration-300 max-w-md py-4 px-8 bg-black shadow-lg rounded-lg my-20">
            <div className="flex justify-center md:justify-end -mt-16">
            <img className="w-20 h-20 object-cover rounded-full border-2 border-yellow-500" src={imageLink} />
            </div>
            <div>
            <h2 className="text-white text-2xl font-semibold">{heading}</h2>
            <p className="mt-2 text-gray-400">{comment}</p>
            </div>
            <div class="flex items-center mt-2">
                {goldArr}
                {silverArr}
            </div>
            <div className="flex justify-end mt-4">
            <a href="#" className="text-xl font-medium text-yellow-500">{name}</a>
            </div>
            </div>
    </div>
  )
}

export default TestimonialsComponents