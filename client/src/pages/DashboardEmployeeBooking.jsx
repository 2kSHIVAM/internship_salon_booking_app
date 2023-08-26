import React from 'react'
import Lottie from 'lottie-react'
import {useState,useEffect} from 'react'
import EmployeeLoading from './../lottieFiles/Paperplane.json'
import Search_empty from './../lottieFiles/search_empty.json'
import Axios from 'axios'


const DashboardEmployeeBooking = () => {
    const [persons,setPersons]=useState([])
useEffect(()=>{
    Axios.get('http://localhost:3001/api/v1/team/getTeam')
    .then(res => {
      const data = res.data.data;
      setPersons(data)
      console.log(data)
    })
    .catch(err => {
      console.log(err);
    });
},[])
    const [finalService,setFinalService]=useState([])
    const [finalTime,setFinalTime]=useState([])
    const [finalDuration,setFinalDuration]=useState([])
    const handleChangeEmployee=async(event)=>{
        const d_selected=document.getElementById('date_selected').value
        const n_selected=document.getElementById('underline_select').value
        console.log(n_selected)
        // console.log(document.getElementById('date_selected').value)
        // console.log(document.getElementById('underline_select').value)
        if(d_selected===''||n_selected==='Choose a Employee')
        {
            alert('Please provide date/employee name')
        }
        else{
            console.log(d_selected)
        let data
        for(let i=0;i<persons.length;i++)
        {
            if(persons[i].name===n_selected)
            {
                data=persons[i].booking
            }
        }
        console.log(data)
        let service_names=[]
        let time_slot=[]
        let instructions=[]
        let duration=[]



        for(let i=0;i<data.dateSlots.length;i++)
        {
            const date1 = new Date(data.dateSlots[i]);
            const date2 = new Date(d_selected);
            const options = { year: 'numeric', month: '2-digit', day: '2-digit' };

            const formattedDate1 = date1.toLocaleDateString('en', options);
            const formattedDate2 = date2.toLocaleDateString('en', options);

            if(formattedDate1===formattedDate2)
            {
                service_names.push(data.services[i])
                time_slot.push(data.timeSlots[i])
                duration.push(data.durationSlots[i])
            }
           
        }
        setFinalService([...service_names])
        setFinalTime([...time_slot])
        setFinalDuration([...duration])
        console.log(time_slot)
        setDisplay(false)
        }
    }
    const [display,setDisplay]=useState(true)
  return (
    <div>
        <h1 className="text-5xl flex items-center text-yellow-500 justify-center font-semibold  mt-8">Get Bookings Status</h1>
        <div className={`${display ? "hidden" : ""} flex items-center justify-center cursor-pointer hover:shadow-lg shadow-white fixed right-20 flex ml-auto bg-yellow-500 mx-2 w-[120px] rounded-full text-white`} onClick={() => setDisplay(!display)}>
  {/*?xml version="1.0" ?*/}
  <svg height="50px" id="Layer_1" className="text-white" version="1.1" viewBox="0 0 512 512" width="512px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <path d="M189.3,128.4L89,233.4c-6,5.8-9,13.7-9,22.4c0,8.7,3,16.5,9,22.4l100.3,105.4c11.9,12.5,31.3,12.5,43.2,0  c11.9-12.5,11.9-32.7,0-45.2L184.4,288h217c16.9,0,30.6-14.3,30.6-32c0-17.7-13.7-32-30.6-32h-217l48.2-50.4  c11.9-12.5,11.9-32.7,0-45.2C220.6,115.9,201.3,115.9,189.3,128.4z" fill="white" />
  </svg>
  <p className='text-[20px] font-bold mr-2'>Back</p>
</div>
        <div className='flex flex-col items-center justify-center '>
            {
                display==true?<div className='flex items-center justify-center mt-[50px]'>
                <div className='flex flex-col items-center justify-center gap-7 w-[400px] bg-gradient-to-b from-black to-yellow-800 rounded-lg shadow-lg shadow-gray-300'>
                    <p className='text-[30px] font-bold text-white mt-10 '>Give Details</p>
                    <div className='flex flex-row gap-3'>
                        <p className='text-[20px] mt-[23px] text-white font-bold'>Date</p>
                        <input type="date" className='bg-transparent mt-[20px] border-white rounded-[10px]' id="date_selected" />
                    </div>
                        <div className='flex flex-row mt-[10px]'>
                        <div>
                            <label htmlFor="underline_select" id="name_selected" className="sr-only text-white">Underline select</label>
                            <select id="underline_select" className="block py-2.5 px-0 w-full text-[18px] text-white-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                            <option className='bg-black' selected disabled>Choose a Employee</option>
                            {
                                persons.map((element,index)=>{
                                    return(
                                            <option className='bg-black' value={element.name}>{element.name}</option>
                                    )
                                })
                            }
    
                            </select>
                        </div>
                        </div>
                    
                    <div className='mt-[20px]'>
                        <button type="button" className='px-1 bg-white text-[25px] text-yellow-700 rounded-lg font-bold mb-[20px] shadow-lg shadow-black' onClick={handleChangeEmployee}>Submit</button>
                    </div>
                    <div>
                    
    
                    </div>
                    
                </div>
                <div>
                    <Lottie className="" animationData={EmployeeLoading} />
                </div>
    
            </div>:<div className='flex flex-row flex-wrap gap-4'>
  {
    finalService.length !== 0 ? (
      finalService.map((element, index) => {
        return (
          <div className='flex flex-row w-[300px] mt-20 bg-gradient-to-b from-gray-700 to-black p-2 rounded-[10px]'>
            <div className='flex flex-col justify-center w-full'>    
              <div className='pb-2 bg-gray-900 w-200 rounded-[30px] mt-3'>
                <div className='flex flex-col items-center justify-center'>
                  <p className='text-[20px]'>Service {index+1}</p>
                </div>
              </div>
                              
              <div className='flex flex-row gap-4 items-center justify-center mt-3'>
                <div className='flex flex-col gap-2 text-[17px] text-yellow-500'>
                  <p>Name</p>
                  <p>Time</p>
                  <p>Duration</p>
                </div>
                <div className='flex flex-col gap-2 text-[17px]'>
                  <p>{element}</p>
                  <p>{finalTime[index]}</p>
                  <p>{finalDuration[index]}</p>
                </div>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <div className='flex justify-center mt-7'>
                  <p className='text-[22px]'>Instructions</p>
                </div>
                <div className='flex items-center rounded-[10px] no-scrollbar border overflow-y-auto justify-center mt-4 w-[250px] bg-gray-500'>
                  <div className='h-[140px] p-2 mb-4'>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus quia veniam maxime ratione quos provident distinctio, aliquam tenetur veritatis blanditiis incidunt temporibus eaque nihil delectus sit. Impedit accusantium corporis quis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })
    ) : (
      <div className=' flex flex-col items-center justify-center mt-20 text-white font-bold text-[32px] '>
        <p>No Bookings Yet</p>
        <Lottie className="" animationData={Search_empty} />
      </div>
    )
  }
</div>




            }
        <div>

        </div>

        </div>
    </div>
  )
}

export default DashboardEmployeeBooking