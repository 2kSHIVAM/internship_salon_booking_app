import React from 'react'
import Axios from 'axios'
import Lottie from 'lottie-react'
import {useState,useEffect} from 'react'
import Search_empty from './../lottieFiles/search_empty.json'
const DashboardRequestsComponent = () => {

    const handleGrant = async(index) =>{
        const s_date=document.getElementById('start_date').value
        const e_date=document.getElementById('end_date').value
        // console.log(element.from)
        console.log(s_date+","+e_date)
        try{
            const res=await Axios.post('http://localhost:3001/api/v1/team/grantLeave',{
            from:requests[index].from,
            start_date:requests[index].start_date,
            end_date:requests[index].end_date
        })
        const res2=await Axios.post('http://localhost:3001/api/v1/team/addRequest',{
            from:requests[index].from,
            start_date:requests[index].start_date,
            end_date:requests[index].end_date
        })
            const result=await Axios.patch('http://localhost:3001/api/v1/user/deleteRequest',{
                name:"shivam singh",
                requestId:requests[index]._id
            })
            const response = await Axios.post('http://localhost:3001/api/v1/user/getAllRequests', {
              name: 'shivam singh',
            });
            const data = response.data.data.data;
            setRequests(data)

        alert('Leave Granted Successfully')
        }catch{
            alert('Unexpected error occurred')
        }
    }


    const handleReject=async(index)=>{
        try{
            const result=await Axios.patch('http://localhost:3001/api/v1/user/deleteRequest',{
                name:"shivam singh",
                requestId:requests[index]._id
            })
            const response = await Axios.post('http://localhost:3001/api/v1/user/getAllRequests', {
              name: 'shivam singh',
            });
            const data = response.data.data.data;
            setRequests(data)
            alert('Application rejected Successfully')
        }
        catch{
            alert("Unexpected Error occured while deleting request")
        }
        
    }



    const [requests,setRequests]=useState([])

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await Axios.post('http://localhost:3001/api/v1/user/getAllRequests', {
              name: 'shivam singh',
            });
            const data = response.data.data.data;
            setRequests(data)
            console.log(data);
          } catch (error) {
            console.log(error);
          }
        };
    
        fetchData();
      }, []);
      return (
<div>
  <h1 className="text-5xl flex items-center text-yellow-500 justify-center font-semibold mt-8">Requests from Employee</h1>
  <div className='flex flex-row items-center justify-center flex-wrap mt-20 gap-9'>
    {requests.map((element, index) => (
      <div className={`flex flex-col items-center justify-center ${index % 2 === 0 ? "bg-gradient-to-b from-gray-700 to-black" : "bg-gradient-to-b from-gray-700 to-yellow-800"} w-[350px] rounded-[10px]`} key={index}>
        <p className='text-[28px] font-bold mb-5'>Leave Application {index + 1}</p>
        <div className='flex flex-row gap-4 items-center justify-center'>
          <div className='flex flex-col gap-7 items-center justify-center'>
            <p className='text-[21px] mt-1'>
              From
            </p>
            <p className='text-[21px] '>
              Start Date
            </p>
            <p className='text-[21px]'>
              End Date
            </p>
          </div>
          <div className='flex flex-col gap-4'>
            <p className='text-[21px] mt-1 text-yellow-500'>{element.from}</p>
            <input
              type="date"
              name="start_Date"
              id="start_date"
              value={element.start_date}
              className="bg-transparent text-white border border-white"
              onChange={(e) => {
                const updatedRequests = [...requests];
                updatedRequests[index].start_date = e.target.value;
                setRequests(updatedRequests);
              }}
            />
            <input
              type="date"
              name="end_date"
              id="end_date"
              value={element.end_date}
              className='bg-transparent text-white border border-white'
              onChange={(e) => {
                const updatedRequests = [...requests];
                updatedRequests[index].end_date = e.target.value;
                setRequests(updatedRequests);
              }}
            />
          </div>
        </div>
        <p className="font-bold text-[25px] mt-10">Purpose</p>
        <div className={`w-[280px] rounded-lg mb-[10px] ${index % 2 === 0 ? "bg-gradient-to-b from-gray-700 to-black" : "bg-gradient-to-b from-gray-700 to-yellow-800"} to-black h-[150px] overflow-y-scroll scrollbar-thumb-blue-500 scrollbar-track-blue-100 p-2`}>
          <p>{element.purpose}</p>
        </div>
        <div className='flex flex-row items-center justify-center'>
          <button type="button" className={`text-[22px] mb-10 mt-[20px] px-3 bg-transparent rounded-[10px] border border-white`} onClick={() => handleGrant(index)}>Grant</button>
          <button type="button" className={`text-[22px] mb-10 mt-[20px] px-3 bg-transparent rounded-[10px] border border-white text-red-500 ml-[10px]`} onClick={()=>handleReject(index)}>Reject</button>
        </div>
      </div>
    ))
    
    }
    <div className={`${requests.length===0?"":"hidden"}`}>
    <Lottie className="" animationData={Search_empty} />
    </div>
  </div>
</div>
  )
}

export default DashboardRequestsComponent