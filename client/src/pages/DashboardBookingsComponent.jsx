import React from 'react'
import { useState,useEffect } from 'react'
import Axios from 'axios'
const DashboardBookingsComponent = () => {

  const [allUser,setAllUser]=useState([])
  useEffect(() => {
    Axios.get('http://localhost:3001/api/v1/user/getAllUsers')
      .then(res => {
        const data = res.data.data;
        console.log(res.data.data.users[6].booking)
        setAllUser(res.data.data.users)
      })
      .catch(err => {
        console.log(err);
      });
  },
  []);
  const [showModal,setShowModal]=useState(false)
  const [showShadow,setShowShadow]=useState(true)
  const [display,setDisplay]=useState(-1)
  const [activeBooking,setActiveBooking]=useState("")
  const [deleteIt,setDeleteIt]=useState(false)
 const [idd,setId]=useState("")
 const [userId,setUserId]=useState("")
  const [data,setData]=useState()
  const handleModal=(booking)=>{
    setShowShadow(!showShadow)
    setShowModal(!showModal)
    console.log(booking)
    setData(booking)
    console.log(booking.serviceName)
  }
  let count=0
  const handleBookingStatus=async()=>{
    setDeleteIt(!deleteIt)
    const res=await Axios.patch("http://localhost:3001/api/v1/user/setBookingInactive",{
      id:userId,
      b_id:idd
    })
    Axios.get('http://localhost:3001/api/v1/user/getAllUsers')
      .then(res => {
        const data = res.data.data;
        console.log(res.data.data.users[6].booking)
        setAllUser(res.data.data.users)
      })
      .catch(err => {
        console.log(err);
      });
    console.log(res)
  }

  const handleSetId=(id1,id2)=>{
    setUserId(id1)
    setId(id2)
  }

  return (
    <div>
      <h1 className="text-5xl flex items-center text-yellow-500 justify-center font-semibold mt-8">
        Bookings History
      </h1>
      <div>
        <div className="flex flex-row flex-wrap items-center justify-center mt-10 gap-6 py-2">
          {allUser.map((user, index) => {
            if (user.booking.length === 0) return null;
            return (
              <div
                className={`flex items-center justify-center bg-black py-5 ${showShadow?"shadow-lg shadow-yellow-500":""} w-[300px] h-[300px] rounded-[200px] hover:rounded-[50px] transition-all duration-200 ${(index)%3==1?"hover:bg-gradient-to-b from-black to-yellow-800":(index)%3==2?"hover:bg-gradient-to-b from-gray-700 to-black":"hover:bg-gradient-to-b from-gray-700 to-yellow-800"} overflow-y-auto no-scrollbar my-1 mt-5 top-0`}         
                key={index}
              >
                <div className="flex flex-col">
                  {user.booking.map((element, index1) => (
                    <div>
                    <div>
                      <p className="text-[25px] font-bold mb-3">
                        Booking: {++count}
                      </p>
                      {
                        element.status=="true"?<div>
                          <div className="flex flex-row gap-5">
                          <div className="flex flex-col">
                            <p>Name:</p>
                            <p>Cost:</p>
                            <p>Date:</p>
                          </div>
                          <div className="flex flex-col font-bold text-yellow-500">
                            <p>{element.name}</p>
                            <p>{element.finalPrice}</p>
                            <p>{element.date}</p>
                          </div>
                          </div>
                        </div>:<div>
                          <p className='font-bold text-[25px] text-red-500'>Cancelled</p>
                        </div>
                      }
                      <p className="mt-5 cursor-pointer" onClick={()=>handleModal(element)}>Click here more info...</p>
                      <div className='flex items-center justify-center mt-2' >
                        {
                          element.status==="true"?<div>
                            {
                              deleteIt==false||idd!==element._id?<div>
                              <button  type="button" className='' onClick={()=>{
                                setDeleteIt(!deleteIt)
                                handleSetId(user._id,element._id)}}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>
                              </button>
                            </div>:<div className='flex flex-row gap-5'>
                              <button className='bg-red-500 text-white px-1 w-[25px] rounded-full' onClick={handleBookingStatus} type="button">✓</button>
                              <button className='bg-green-500 text-white w-[25px] rounded-full' type="button" onClick={()=>setDeleteIt(!deleteIt)}>X</button>
                            </div>
                            }
                          </div>:""
                        }
                      
                      </div>
                      </div>
                    
                    </div>
                  ))}

                </div>
              </div>
            );
          })}
        </div>
      </div>
      {
        showModal?<div>
          <div className='fixed inset-0 z-50 overflow-y-true'>
            <div className='border-yellow-600 flex items-center justify-center w-full h-full text-center'>
              <div className='fixed inset-0 '>
                  <div class="absolute inset-0 bg-black opacity-90" onClick={() =>{ 
                    setShowModal(false)
                    setShowShadow(true)
                    }}></div>
              </div>
              <div
                class="animate-model shadow-lg shadow-yellow-500/50 inline-block px-2 py-6 overflow-hidden text-left align-bottom transition-all transform bg-black rounded-[20px] shadow-xl w-auto md:mx-[300px] sm:[100px] xs:[40px]"
                role="dialog" aria-modal="true" aria-labelledby="modal-headline">
               <div className='flex flex-row gap-3 items-center justify-center flex-wrap my-[10px]'>

                {
                  data.serviceName.map((e,index)=>{
                    return(
                      <div>
                      <div className='flex flex-col w-[250px] bg-gradient-to-b from-gray-700 to-black p-2 rounded-[10px]'>
                        <div class="pb-2 bg-gray-800 rounded-[30px] mt-3">
                            <div className='flex flex-col items-center justify-center'>
                              <p className='text-[20px]'>Service {index+1}</p>
                              <div className='flex flex-row items-center justify-center'>
                                <p className='flex items-center justify-center text-[20px] text-yellow-500'>Date: </p>
                                <p className='text-[18px] flex items-center justify-center ml-3 text-yellow-500'>{data.chosenDate[index].substring(0,10)}</p>
                              </div>
                              
                            </div>
                          </div>
                          <div className='flex flex-row gap-4 items-center justify-center mt-3'>
                              <div className='flex flex-col gap-2 text-[17px] text-yellow-500'>
                                <p>Name</p>
                                <p>Cost</p>
                                <p>Staff</p>
                                <p>Time</p>
                              </div>
                              <div className='flex flex-col gap-2 text-[17px]'>
                                <p>{e}</p>
                                <p>{data.cost[index]}</p>
                                <p>{data.employeeName[index]}</p>
                                <p>{data.time[index]}</p>
                              </div>
                            </div>
                        </div>
                    </div>
                    )
                  })
                }


               </div>
              <div class="justify-center w-full px-4 mt-2 font-sans text-xs leading-6 text-center text-gray-500">
                    <a href="#_" className='text-[17px] hover:border-b mt-[10px]'>Contact Us</a>
                </div>
                <div className="flex justify-end relative mr-1">
                <button
                    className="mt-2 p-2.5 text-white bg-yellow-500 rounded-md outline-none border ring-offset-2 focus:ring-2"
                         onClick={() =>{
                          setShowModal(false)
                          setShowShadow(true)
                         }
                        }
                        >
                            Cancel
                        </button>
                </div>
                </div>
            </div>
          </div>
        </div>:""
      }
    </div>
  );              
}

export default DashboardBookingsComponent

