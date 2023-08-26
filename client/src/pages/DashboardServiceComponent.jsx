import React, { useEffect, useState } from 'react';
import Axios from 'axios';
// import ServicesComponents from '../components/ServicesComponents'
// import ServiceComponentShow from './ServiceComponentShow'
// import EditServiceForm from './EditServiceForm'
const DashboardServiceComponent = () => {
    const [editMode,setEditMode]=useState("show")

let name1=""
let duration1=0
let cost1=0
let limit1=0
let description1=""
    // const [details,setDetails]=useState({})
    const [name,setName]=useState("")
    const [duration,setDuration]=useState()
    const [cost,setCost]=useState(0)
    const [limit,setLimit]=useState(0)
    const [id,setId]=useState("")
    const [description,setDescription]=useState("")
    const [image,setImage]=useState("")
    const handleClick=(data)=>{
        // setDetails(data)
        setEditMode("editt")
        // name=data.name
        // duration=data.duration
        // cost=data.cost
        // limit=data.limit
        // description=data.description
        // console.log(duration1)
        // console.log(cost1)
        // console.log(name1)
        setName(data.name)
        setDescription(data.description)
        setDuration(data.duration)
        setCost(data.cost)
        setLimit(data.limit)
        setImage(data.image)
        setId(data._id)

        
    }


    const handleAddService=async()=>{
        const res=await Axios.post('http://localhost:3001/api/v1/service/addService',{
            name:name,
            duration: duration,
            limit: limit,
            cost: cost,
            description: description,
            imageLink:image
        })
        console.log(res.data)
        alert("Service added successfully")
        const res2=await Axios.get('http://localhost:3001/api/v1/service/getAllServices')
        //   setServiceList(res2.data.data);
          console.log(res2.data.data)
          setServiceList(res2.data.data);
          

    }
    const [serviceList, setServiceList] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/api/v1/service/getAllServices')
          .then(res => {
            const data = res.data.data;
            setServiceList(data);
            console.log(data)
          })
          .catch(err => {
            console.log(err);
          });
      }, []);
      const [isFound,setIsFound]=useState("")
  const handleFound=()=>{
    setIsFound(document.getElementById("search-dropdown").value)
    console.log(isFound)
  }

  const [submitButtonData,setSubmitButtonData]=useState("Save Changes")

  const handleDelete=async(data)=>{
    let idd=data._id
    const res=await Axios.delete(`http://localhost:3001/api/v1/service/deleteService/${idd}`)
    const res2=await Axios.get('http://localhost:3001/api/v1/service/getAllServices')
    //   setServiceList(res2.data.data);
      console.log(res2.data.data)
      setServiceList(res2.data.data);
  }

  const handleSubmitChange = async (event) => {
    setSubmitButtonData("Processing..")
    console.log(id)
    console.log(duration)
    console.log(cost)
    console.log(limit)
    console.log(description)
    try {
      event.preventDefault();
      // console.log("Default ANswers: ", defaultAnswers);
      // console.log("Dynamic Answers: ", answers);

      const res = await Axios.patch(
        `http://localhost:3001/api/v1/service/updateService/${id}`,
        {
          name: name,
          duration: duration,
          limit: limit,
          cost: cost,
          description: description,
        }
      );

      const res2=await Axios.get('http://localhost:3001/api/v1/service/getAllServices')
    //   setServiceList(res2.data.data);
      console.log(res2.data.data)
      setServiceList(res2.data.data);
      console.log(serviceList)
    //   console.log(res.data);
      // handle form submission here
    } catch (error) {
      console.error(error)
    }
    // setTimeout(() => {
    //   }, 20000);
    alert("Changes have updated successfully")
    setSubmitButtonData("Updated")
        setTimeout(() => {
            setSubmitButtonData("Save Changes")
      }, 2000);
  };

  const [serviceType,setServiceType]=useState("update")
  return (
    <div>
        <h1 className="text-5xl flex items-center text-yellow-500 justify-center font-semibold  mt-8">Welcome to the Service Panel</h1>
        
            <div className='flex items-center justify-center'>
            <div className='flex flex-row w-[500px] mt-10 items-center justify-center rounded-[10px]  bg-gray-500 '>
                    <div className={`flex flex-auto hover:bg-yellow-700 p-5 cursor-pointer ${serviceType === "update" && "bg-yellow-500"}`} onClick={()=>setServiceType("update")}>
                        <p>Update Service</p>
                    </div>
                    <div className={`flex flex-auto hover:bg-yellow-700 p-5 cursor-pointer ${serviceType === "delete" && "bg-yellow-500"}`} onClick={()=>setServiceType("delete")}>
                        <p>Delete Service</p>
                    </div>
                    <div className={`flex flex-auto hover:bg-yellow-700 p-5 cursor-pointer ${serviceType === "add" && "bg-yellow-500"}`} onClick={()=>setServiceType("add")}>
                    <p>Add Service</p>
                    </div>
                </div>
            </div>
            {
                editMode ==="show" ? <div >
                    <div className={`${serviceType==="add"&&"hidden"}`}>
                             <div className='flex items-center justify-end mt-10 '>
                             <div className=" flex items-center relative w-[300px] outline-none focus:outline-none">
                            <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-white bg-transparent rounded-r-lg border-yellow-500 border-2 outline-none border border-white focus:outline-none focus:border-white focus:border-3" placeholder="Search Services..." required onChange={handleFound}/>
                            <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-yellow-700 rounded-r-lg border border-white-700 focus:outline-none ">
                            <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            <span className="sr-only">Search</span>
                            </button>
                        </div>
                             </div>
                <div className="flex flex-row flex-wrap justify-center justify-items-stretch mr-10 mt-10 mb-[5px]">
                    {serviceList.map((service, index) =>{
                                    if(service.name.toUpperCase().includes(isFound.toUpperCase()))
                                    {
                        return(
                            <div class="hover:shadow-lg hover:shadow-yellow-500/50 transition-all duration-200 max-w-xs bg-black border border-gray-600 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ml-10 mt-5" >
                            <a href="#">
                            <img class="rounded-t-lg" src={service.imageLink} alt="" />
                            </a>
                            <div class="p-5">
                                <a href="#">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-white-900 dark:text-white">{service.name}</h5>
                                </a>
                                <p class="mb-3 font-normal text-gray-400 dark:text-gray-400"></p>
                                <a href="#" onClick={()=>{handleClick(service)}} className={` ${serviceType!="update"&& "hidden"} inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-700 rounded-lg hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}>
                                    Make Changes
                                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </a>
                                <a href="#" onClick={()=>{handleDelete(service)}} className={` ${serviceType!="delete"&& "hidden"} inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-700 rounded-lg hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}>
                                    Delete  
                                    <div className='text-white rounded ml-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                    </svg>
                                    </div>
                                </a>
                            </div>
                        </div>
        )}
                    } )}

</div></div>
    <div className={`${serviceType!="add"&&"hidden"} flex flex-row items-center justify-center`}>
    <div className=' gap-8 flex flex-col rounded-[30px] ml-10 mr-10 border-2 border-yellow-700 shadow-lg shadow-yellow-500 bg-black items-center justify-center mt-5 p-10 w-[600px] h-full'>
            <div className='flex flex-row'>
                <div className='flex flex-col mb-5 gap-8'>
                                <label className='text-xl mr-5' htmlFor="">Name</label>
                                <label className='text-xl mr-5' htmlFor="">Duration</label>
                                <label className='text-xl mr-5' htmlFor="">limit</label>
                                <label className='text-xl mr-5' htmlFor="">Cost</label>
                                <label className='text-xl mr-5' htmlFor="">Description</label>
                                <label className='text-xl mr-5' htmlFor="">ImageLink</label>
                            </div>
                            <div className='flex flex-col mb-5 gap-3'>
                            {/* <input className='text-black' type="text" id="lname" name="lname" value="Doe"/> */}

                                <input className='bg-gray-700 rounded-[10px]' type="text" name="" id="name" onChange={(e)=>setName(e.target.value)}/>
                                <input className='bg-gray-700 rounded-[10px]' type="text"  name="" id="duration" onChange={(e)=>setDuration(e.target.value)}/>
                                <input className='bg-gray-700 rounded-[10px]' type="text" name="" id="limit" onChange={(e)=>setLimit(e.target.value)}/>
                                <input className='bg-gray-700 rounded-[10px]' type="text" name="" id="cost" onChange={(e)=>setCost(e.target.value)}/>
                                <textarea className='bg-gray-700 rounded-[10px]' name="" id="descrip" cols="30" rows="2" onChange={(e)=>setDescription(e.target.value)}></textarea>
                                <input className='bg-gray-700 rounded-[10px]' type="text" name="" id="cost" onChange={(e)=>setImage(e.target.value)}/>

                            </div>
            </div>
            <div>
                <button type="button" className='bg-yellow-500 p-2 rounded-lg ' onClick={handleAddService} >Add Service</button>
            </div>

            
        </div>

    </div>
    </div>:<div className='flex flex-col items-center justify-center mt-20'><div className=' gap-8 flex flex-col rounded-[30px] ml-10 mr-10 border-2 border-yellow-700 shadow-lg shadow-yellow-500 bg-black items-center justify-center mt-5 p-10  w-[600px] h-full'>
            <div className='flex flex-row'>
                <div className='flex flex-col mb-5 gap-6'>
                                <label className='text-2xl mr-5' htmlFor="">Name</label>
                                <label className='text-2xl mr-5' htmlFor="">Duration</label>
                                <label className='text-2xl mr-5' htmlFor="">limit</label>
                                <label className='text-2xl mr-5' htmlFor="">Cost</label>
                                <label className='text-xl mr-5' htmlFor="">ImageLink</label>
                                <label className='text-2xl mr-5' htmlFor="">Description</label>
                            </div>
                            <div className='flex flex-col mb-5 gap-3'>
                            {/* <input className='text-black' type="text" id="lname" name="lname" value="Doe"/> */}

                                <input className='bg-gray-700 rounded-[10px]' value={name} type="text" name="" id="name" onChange={(e)=>setName(e.target.value)}/>
                                <input className='bg-gray-700 rounded-[10px]' type="text" value={duration} name="" id="duration" onChange={(e)=>setDuration(e.target.value)}/>
                                <input className='bg-gray-700 rounded-[10px]' type="text" value={limit} name="" id="limit" onChange={(e)=>setLimit(e.target.value)}/>
                                <input className='bg-gray-700 rounded-[10px]' type="text" value={cost} name="" id="cost" onChange={(e)=>setCost(e.target.value)}/>
                                <input className='bg-gray-700 rounded-[10px]' type="text" value={image} name="" id="cost" onChange={(e)=>setImage(e.target.value)}/>
                                <textarea className='bg-gray-700 rounded-[10px]' value={description} name="" id="descrip" cols="30" rows="2" onChange={(e)=>setDescription(e.target.value)}></textarea>
                            </div>
            </div>
            <div>
                <button type="button" className='bg-yellow-500 p-2 rounded-lg mr-10' onClick={()=>{setEditMode("show")}}>Go Back</button>
                <button type="button" className='bg-yellow-500 p-2 rounded-lg ' onClick={handleSubmitChange} >{submitButtonData}</button>
            </div>

            
        </div></div>

            }

    </div>
  )
}

export default DashboardServiceComponent