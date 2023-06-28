import React from 'react'
import { useState } from 'react'
const DashboardBookingsComponent = () => {
  const [display,setDisplay]=useState("")
  const [activeBooking,setActiveBooking]=useState("")
  return (
    <div>
      <h1 className="text-5xl flex items-center text-yellow-500 justify-center font-semibold  mt-8">Bookings History</h1>
      <div >
        <div className=' flex flex-row items-center justify-center mt-10 gap-6'>
          <div className=' flex items-center justify-center bg-black shadow-lg py-5 shadow-yellow-500 w-[300px] h-[300px] rounded-[200px] hover:rounded-[50px] transition-all duration-200 hover:bg-gradient-to-b from-black to-yellow-800 overflow-y-auto no-scrollbar my-1'onMouseLeave={()=>setDisplay("")} onClick={()=>{
            if(display==="book1")
            setDisplay("")
            else if(display==="")
            setDisplay("book1")
          }} >
            <div className='flex flex-col '>
            <div className={` ${display!=="book1"?"":"hidden"}`}>
              <p className='text-[25px] font-bold mb-3'>Booking: 1</p>
              <div className='flex flex-row gap-5'>
                <div className='flex flex-col '>
                  <p>Name:</p>
                  <p>Cost:</p>
                  <p>Date:</p>
                </div>
                <div className='flex flex-col font-bold text-yellow-500'>
                  <p>Shivam</p>
                  <p>850</p>
                  <p>2023-06-27</p>
                </div>
              </div>
              <p className='mt-5'>Click for more info...</p>
            </div>
              <div className='flex flex-row '>
                
                <div className={`flex flex-col ${display==="book1"?"":"hidden"}`}>
                <p className='text-[25px] font-bold mb-3 mt-1'>More Details</p>
                <p className='flex text-[20px] items-center justify-center mt-2 border-b border-t'>Service 1</p>
              <div className='flex flex-row gap-5'>
                <div className='flex flex-col '>
                  <p>Name: </p>
                  <p>Cost: </p>
                  <p>Staff:</p>
                  <p>Time:</p>
                </div>
                <div className='flex flex-col text-yellow-500'>
                  <p>Head Shave</p>
                  <p>200</p>
                  <p>Yousef</p>
                  <p>02:20 PM</p>
                  <p></p>
                </div>
              </div>
              <p className='flex text-[20px] items-center justify-center mt-2 border-b border-t'>Service2</p>
              <div className='flex flex-row gap-5'>
                <div className='flex flex-col '>
                  <p>Name: </p>
                  <p>Cost: </p>
                  <p>Staff:</p>
                  <p>Time:</p>
                </div>
                <div className='flex flex-col text-yellow-500'>
                  <p>Hair Cut</p>
                  <p>150</p>
                  <p>Nour</p>
                  <p>01:00 PM</p>
                  <p></p>
                </div>
              </div>
                </div>
              </div>
            </div>
          </div>
        
          <div className=' flex items-center justify-center bg-black shadow-lg py-5 shadow-yellow-500 w-[300px] h-[300px] rounded-[200px] hover:rounded-[50px] transition-all duration-200 hover:bg-gradient-to-b from-gray-700 to-black overflow-y-auto no-scrollbar'onMouseLeave={()=>setDisplay("")} onClick={()=>{
            if(display==="book2")
            setDisplay("")
            else if(display==="")
            setDisplay("book2")
          }} >
            <div className='flex flex-col'>
            <div className={` ${display!=="book2"?"":"hidden"}`}>
              <p className='text-[25px] font-bold mb-3'>Booking: 2</p>
              <div className='flex flex-row gap-5'>
                <div className='flex flex-col '>
                  <p>Name:</p>
                  <p>Cost:</p>
                  <p>Date:</p>
                </div>
                <div className='flex flex-col font-bold text-yellow-500'>
                  <p>Pratham</p>
                  <p>300</p>
                  <p>2023-06-27</p>
                </div>
              </div>
              <p className='mt-5'>Click for more info...</p>
            </div>
              <div className='flex flex-row '>
                
                <div className={`flex flex-col ${display==="book2"?"":"hidden"}`}>
                <p className='text-[25px] font-bold mb-3 mt-1'>More Details</p>
                <p className='flex text-[20px] items-center justify-center mt-2 border-b border-t'>Service 1</p>
              <div className='flex flex-row gap-5'>
                <div className='flex flex-col '>
                  <p>Name: </p>
                  <p>Cost: </p>
                  <p>Staff:</p>
                  <p>Time:</p>
                </div>
                <div className='flex flex-col text-yellow-500'>
                  <p>Head Shave</p>
                  <p>200</p>
                  <p>Yousef</p>
                  <p>02:20 PM</p>
                  <p></p>
                </div>
              </div>
              <p className='flex text-[20px] items-center justify-center mt-2 border-b border-t'>Service2</p>
              <div className='flex flex-row gap-5'>
                <div className='flex flex-col '>
                  <p>Name: </p>
                  <p>Cost: </p>
                  <p>Staff:</p>
                  <p>Time:</p>
                </div>
                <div className='flex flex-col text-yellow-500'>
                  <p>Hair Cut</p>
                  <p>150</p>
                  <p>Nour</p>
                  <p>01:00 PM</p>
                  <p></p>
                </div>
              </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className=' flex items-center justify-center bg-black shadow-lg py-5 shadow-yellow-500 w-[300px] h-[300px] rounded-[200px] hover:rounded-[50px] transition-all duration-200 hover:bg-gradient-to-b from-gray-700 to-yellow-800 overflow-y-auto no-scrollbar'onMouseLeave={()=>setDisplay("")} onClick={()=>{
            if(display==="book3")
            setDisplay("")
            else if(display==="")
            setDisplay("book3")
          }} >
            <div className='flex flex-col'>
            <div className={` ${display!=="book3"?"":"hidden"}`}>
              <p className='text-[25px] font-bold mb-3'>Booking: 3</p>
              <div className='flex flex-row gap-5'>
                <div className='flex flex-col '>
                  <p>Name:</p>
                  <p>Cost:</p>
                  <p>Date:</p>
                </div>
                <div className='flex flex-col font-bold text-yellow-500'>
                  <p>Raghav</p>
                  <p>250</p>
                  <p>2023-06-27</p>
                </div>
              </div>
              <p className='mt-5'>Click for more info...</p>
            </div>
              <div className='flex flex-row '>
                
                <div className={`flex flex-col ${display==="book3"?"":"hidden"}`}>
                <p className='text-[25px] font-bold mb-3 mt-1'>More Details</p>
                <p className='flex text-[20px] items-center justify-center mt-2 border-b border-t'>Service 1</p>
              <div className='flex flex-row gap-5'>
                <div className='flex flex-col '>
                  <p>Name: </p>
                  <p>Cost: </p>
                  <p>Staff:</p>
                  <p>Time:</p>
                </div>
                <div className='flex flex-col text-yellow-500'>
                  <p>Head Shave</p>
                  <p>200</p>
                  <p>Yousef</p>
                  <p>02:20 PM</p>
                  <p></p>
                </div>
              </div>
              <p className='flex text-[20px] items-center justify-center mt-2 border-b border-t'>Service2</p>
              <div className='flex flex-row gap-5'>
                <div className='flex flex-col '>
                  <p>Name: </p>
                  <p>Cost: </p>
                  <p>Staff:</p>
                  <p>Time:</p>
                </div>
                <div className='flex flex-col text-yellow-500'>
                  <p>Hair Cut</p>
                  <p>150</p>
                  <p>Nour</p>
                  <p>01:00 PM</p>
                  <p></p>
                </div>
              </div>
                </div>
              </div>
            </div>
          </div>
          


        </div>
      </div>
    </div>
  )
}

export default DashboardBookingsComponent