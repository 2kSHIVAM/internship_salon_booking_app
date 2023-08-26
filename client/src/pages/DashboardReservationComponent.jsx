import React from 'react'
import 'flowbite'
const hello = () => {
  return (
    <div>
        <h1 className="text-5xl flex items-center text-yellow-500 justify-center font-semibold  mt-8">Make a Reservation</h1>
        <div className='flex items-center justify-center mt-[50px]'>
            <div className='flex flex-col items-center justify-center gap-7 w-[500px] bg-gradient-to-b from-black to-yellow-800 rounded-lg shadow-lg shadow-gray-300'>
                <p className='text-[38px] font-bold text-white mt-10 '>Details</p>
                <div className='flex flex-row gap-3'>
                    <p className='text-[25px] mt-[20px] text-white font-bold'>Date</p>
                    <input type="date" className='bg-transparent mt-[20px] border-white rounded-[10px]'  id="" />
                </div>
                    <div className='flex flex-row mt-[10px]'>
                    <div>
                        <label htmlFor="underline_select" className="sr-only text-white">Underline select</label>
                        <select id="underline_select" className="block py-2.5 px-0 w-full text-[18px] text-white-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                        <option className='bg-black' selected>Choose a Service</option>
                        <option className='bg-black' value="US">Service 1</option>
                        <option className='bg-black' value="CA">Service 2</option>
                        <option className='bg-black' value="FR">Service 3</option>
                        <option className='bg-black' value="DE">Service 4</option>

                        </select>
                    </div>

                    </div>
                <p className='text-[20px] mt-[20px] font-bold'>Select a time</p>
                <div className='flex flex-row flex-wrap gap-2 p-2 items-center justify-center w-[180px] h-[250px] no-scrollbar overflow-y-auto rounded-[30px] bg-gradient-to-b from-white to-black'>
                    <div className='flex w-[85px] p-1 bg-gradient-to-b from-black to-yellow-800 rounded-lg text-white font-bold items-center justify-center'>
                        <p className='text-[15px]'>11:00 AM</p>
                    </div>
                    <div className='flex w-[85px] p-1 bg-gradient-to-b from-black to-yellow-800 rounded-lg text-white font-bold items-center justify-center'>
                        <p className='text-[15px]'>12:00 PM</p>
                    </div>
                    <div className='flex w-[85px] p-1 bg-gradient-to-b from-black to-yellow-800 rounded-lg text-white font-bold items-center justify-center'>
                        <p className='text-[15px]'>01:00 PM</p>
                    </div>
                    <div className='flex w-[85px] p-1 bg-gradient-to-b from-black to-yellow-800 rounded-lg text-white font-bold items-center justify-center'>
                        <p className='text-[15px]'>02:00 PM</p>
                    </div>

                    <div className='flex w-[85px] p-1 bg-gradient-to-b from-black to-yellow-800 rounded-lg text-white font-bold items-center justify-center'>
                        <p className='text-[15px]'>03:00 PM</p>
                    </div>
                    <div className='flex w-[85px] p-1 bg-gradient-to-b from-black to-yellow-800 rounded-lg text-white font-bold items-center justify-center'>
                        <p className='text-[15px]'>04:00 PM</p>
                    </div>
                    <div className='flex w-[85px] p-1 bg-gradient-to-b from-black to-yellow-800 rounded-lg text-white font-bold items-center justify-center'>
                        <p className='text-[15px]'>05:00 PM</p>
                    </div>
                </div>
                <div className='mt-[20px]'>
                    <button type="button" className='px-1 bg-white text-[25px] text-yellow-700 rounded-lg font-bold mb-[20px] shadow-lg shadow-black'>Submit</button>
                </div>

                
            </div>

        </div>

    </div>
  )
}

export default hello