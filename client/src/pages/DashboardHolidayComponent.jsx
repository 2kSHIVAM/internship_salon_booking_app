import React from 'react'
import {useState,useEffect} from 'react'
import Axios from 'axios'

const DashboardHolidayComponent = () => {
    const handleLeaveClick = async() => {
        const start_date = document.getElementById('s_date').value;
        const end_date = document.getElementById('e_date').value;
        const purpose = document.getElementById('purpose').value;
      
        if (start_date === '') {
          alert('Please provide a start date');
        } else if (end_date === '') {
          alert('Please provide an end date');
        } else if (new Date(start_date) > new Date(end_date)) {
          alert('Invalid dates selected');
        } else if (purpose === '') {
          alert('Please provide a purpose');
        } else {
          console.log(start_date);
          console.log(end_date);
          console.log(purpose);
          console.log(document.getElementById('underline_select').value);
          const name=document.getElementById('underline_select').value
          try{
            const res=await Axios.post('http://localhost:3001/api/v1/user/requestToAdmin',{
            name:name,
            from:'hero',
            start_date:start_date,
            end_date:end_date,
            purpose:purpose
            
          })
          const res2=await Axios.post('http://localhost:3001/api/v1/team/addRequest',{
            from:'hero',
            start_date:start_date,
            end_date:end_date,
            // purpose:purpose
            
          })
          alert('Request sent successfully')
          
          }catch{
            alert('An unexpected error occurred')
          }
        }
      };
      const [users,setUsers]=useState([])

      useEffect(()=>{
        Axios.get('http://localhost:3001/api/v1/user/getAllAdmins').then(res => {
          const data = res.data.data;
          setUsers(data.users)
          console.log(data.users)
        })
        .catch(err => {
          console.log(err);
        });
      },[])

        return (
    <div>
        <h1 className="text-5xl flex items-center text-yellow-500 justify-center font-semibold  mt-8">Leave Request</h1>
        <div className='flex items-center justify-center mt-20'>
            <div className='flex flex-col shadow-lg rounded-lg shadow-yellow-500 bg-gradient-to-b from-gray-700 to-black p-2 w-[500px] p-4 items-center justify-center'>
                <div className=' flex flex-col'>
                    <p className='text-[25px] text-yellow-500'>Start Date: </p>
                    <input type="date" className='bg-transparent border-yellow-500' name="" id="s_date" />
                    <p className='text-[25px] text-yellow-500 mt-8'>End Date</p>
                    <input type="date" className='bg-transparent border-yellow-500' name="" id="e_date" />
                    <p className='text-[25px] text-yellow-500 mt-8'>Purpose</p>
                    <textarea className='  bg-transparent border-yellow-500 rounded-lg' name="" id="purpose" cols="30" rows="5"></textarea>
                    <div className='mt-8'>
                            <label htmlFor="underline_select" id="name_selected" className="sr-only text-white">Underline select</label>
                            <select id="underline_select" className="block py-2.5 px-0 w-full text-[18px] text-white-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                            <option className='bg-black' selected disabled>Send To .....</option>
                            {
                              users.map((element,index)=>{
                                return(
                                  <option className='bg-black'>{element.name}</option>
                                )
                              })
                            }
    
                            </select>
                    </div>
                    <button type="button" className='text-white mt-12 text-[26px] bg-yellow-500 w-auto rounded-lg' onClick={handleLeaveClick}>Submit</button>
                    

                </div>
            </div>
        </div>
    </div>
  )
}

export default DashboardHolidayComponent