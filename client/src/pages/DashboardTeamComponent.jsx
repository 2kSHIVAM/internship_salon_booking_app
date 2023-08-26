import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import ServicesComponents from '../components/ServicesComponents'
import ServiceComponentShow from './ServiceComponentShow'
import EditServiceForm from './EditServiceForm'
const DashboardTeamComponent = () => {
  const [editMode,setEditMode]=useState("show")

  let name1=""
  let duration1=0
  let cost1=0
  let limit1=0
  let description1=""
      // const [details,setDetails]=useState({})
      const [name,setName]=useState("")
      const [email,setEmail]=useState("")
      const [salary,setSalary]=useState(0)
      const [phone,setPhone]=useState(0)
      const [experience,setExperience]=useState(0)
      const [id,setId]=useState("")
      const [address,setAddress]=useState("")
      const [image,setImage]=useState("")
      const [servicesProvided,setServicesProvided]=useState([])
      const [serviceSelected,setServiceSelected]=useState([])
      const [leave_start_date,setLeaveStartDate]=useState("")
      const [leave_end_date,setLeaveEndDate]=useState("")
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
          setEmail(data.email)
          setAddress(data.address)
          setSalary(data.salary)
          setPhone(data.phone)
          setExperience(data.experience_years)
          setServiceSelected(data.services)
          setImage(data.image)
          setId(data._id)
          const currentDate = new Date();
          const year = currentDate.getFullYear();
          const month = String(currentDate.getMonth() + 1).padStart(2, '0');
          const day = String(currentDate.getDate()).padStart(2, '0');
          
          const formattedDate = `${year}-${month}-${day}`;
          console.log(formattedDate);
          
          const currentDateObj = new Date(formattedDate);
          const leaveStartObj = new Date(data.leave_start);
          const leaveEndObj = new Date(data.leave_end);
          
          if (currentDateObj >= leaveStartObj && currentDateObj <= leaveEndObj) {
            setLeaveStartDate(data.leave_start);
            setLeaveEndDate(data.leave_end);
          }
          else{
            console.log("aaaaaaaaaaaa")
          }
          // console.log(id)
          // duration=data.duration
          // cost=data.cost
          // limit=data.limit
          // description=data.description
          // console.log(duration)
      }
  
  
      const handleAddService=async()=>{
          const res=await Axios.post('http://localhost:3001/api/v1/team/addPerson/',{
              name:name,
              email: email,
              salary: salary,
              phone: phone,
              address: address,
              imageLink:image,
              password:"123456789",
              confirmPassword:"123456789",
              experience_years:experience,
              services:serviceSelected,
          })
          console.log(res.data)
          alert("Employee added successfully")
          const res2=await Axios.get('http://localhost:3001/api/v1/team/getTeam/')
          //   setServiceList(res2.data.data);
            console.log(res2.data.data)
            setServiceList(res2.data.data);
      }
      const [serviceList, setServiceList] = useState([]);
  
      useEffect(() => {
          Axios.get('http://localhost:3001/api/v1/team/getTeam/')
            .then(res => {
              const data = res.data.data;
              setServiceList(data);
              console.log(serviceList)
            })
            .catch(err => {
              console.log(err);
            });


            Axios.get('http://localhost:3001/api/v1/service/getAllServices')
            .then(res2 => {
              const data1 = res2.data.data;
              setServicesProvided(data1);
              console.log(servicesProvided)
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
      const res=await Axios.delete(`http://localhost:3001/api/v1/team/deletePerson/${idd}`)
      const res2=await Axios.get('http://localhost:3001/api/v1/team/getTeam/')
      //   setServiceList(res2.data.data);
        console.log(res2.data.data)
        setServiceList(res2.data.data);
    }
  
    const handleSubmitChange = async (event) => {
      setSubmitButtonData("Processing..")

      try {
        event.preventDefault();
        // console.log("Default ANswers: ", defaultAnswers);
        // console.log("Dynamic Answers: ", answers);
  
        const res = await Axios.patch(
          `http://localhost:3001/api/v1/team/updatePerson/${id}`,
          {
            name: name,
            email:email,
            phone:phone,
            experience_years:experience,
            imageLink:image,
            address: address,
            salary: salary,
            services:serviceSelected,
            leave_start:leave_start_date,
            leave_end:leave_end_date
          }
        );
  
        const res2=await Axios.get('http://localhost:3001/api/v1/team/getTeam/')
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

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;

    console.log(formattedDate);
  
    const [serviceType,setServiceType]=useState("update")
    return (
      <div>
          <h1 className="text-5xl flex items-center text-yellow-500 justify-center font-semibold  mt-8">Welcome to the Team Panel</h1>
          
              <div className='flex items-center justify-center'>
              <div className='flex flex-row w-[500px] mt-10 items-center justify-center rounded-[10px]  bg-gray-500 '>
                      <div className={`flex flex-auto hover:bg-yellow-700 p-5 cursor-pointer ${serviceType === "update" && "bg-yellow-500"}`} onClick={()=>setServiceType("update")}>
                          <p>Update Employee</p>
                      </div>
                      <div className={`flex flex-auto hover:bg-yellow-700 p-5 cursor-pointer ${serviceType === "delete" && "bg-yellow-500"}`} onClick={()=>setServiceType("delete")}>
                          <p>Delete Employee</p>
                      </div>
                      <div className={`flex flex-auto hover:bg-yellow-700 p-5 cursor-pointer ${serviceType === "add" && "bg-yellow-500"}`} onClick={()=>setServiceType("add")}>
                      <p>Add Employee</p>
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
                                <div className="relative">
                                  <div
                                    className={`absolute ${
                                      
                                      new Date(formattedDate) <= new Date(service.leave_end) && new Date(service.leave_start) <= new Date(formattedDate)
                                        ? 'bg-red-700'
                                        : 'bg-green-700'
                                    } top-0 right-0 h-14 w-14 flex items-center justify-center rounded-bl-full rounded-tr-lg`}
                                  >
                                    <span className="text-white text-lg font-bold"></span>
                                  </div>
                                  <img className="rounded-t-lg" src={service.imageLink} alt="" />
                                </div>
                              </a>
                              <div class="p-5">
                                  <a href="#">
                                  <div className='flex flex-row gap-10 flex-wrap items-center mb-2'>
                                    <div className='flex justify-start'>
                                      <h5 className="text-2xl font-bold tracking-tight text-white-900 dark:text-white">
                                        {service.name}
                                      </h5>
                                    </div>
                                    <div className='flex gap-2 items-center ml-auto'>
                                      <p className='text-[20px]'>Status:</p>
                                      {new Date(formattedDate) <= new Date(service.leave_end) &&
                                      new Date(service.leave_start) <= new Date(formattedDate) ? (
                                        <div>
                                          <p className='text-red-500 mt-1 font-bold'>Absent</p>
                                        </div>
                                      ) : (
                                        <div>
                                          <p className='text-green-500 mt-1 font-bold'>Present</p>
                                        </div>
                                      )}
                                    </div>
                                  </div>

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
                  <div className='flex flex-col mb-5 gap-7'>
                                  <label className='text-xl mr-5' htmlFor="">Name</label>
                                  <label className='text-xl mr-5' htmlFor="">Email</label>
                                  <label className='text-xl mr-5' htmlFor="">Experience</label>
                                  <label className='text-xl mr-5' htmlFor="">Salary</label>
                                  <label className='text-xl mr-5' htmlFor="">Phone</label>
                                  <label className='text-xl mr-5' htmlFor="">Address</label>
                                  <label className='text-xl mr-5 mt-3' htmlFor="">Image Link</label>
                                  <label className='text-2xl mr-5 mt-5' htmlFor="">Select Services</label>

                              </div>
                              <div className='flex flex-col mb-5 gap-3'>
                              {/* <input className='text-black' type="text" id="lname" name="lname" value="Doe"/> */}
                                  <input className='bg-gray-700 rounded-[10px]' type="text" name="" id="name" onChange={(e)=>setName(e.target.value)}/>
                                  <input className='bg-gray-700 rounded-[10px]' type="email"  name="" id="email" onChange={(e)=>setEmail(e.target.value)}/>
                                  <input className='bg-gray-700 rounded-[10px]' type="text" name="" id="experience" onChange={(e)=>setExperience(e.target.value)}/>
                                  <input className='bg-gray-700 rounded-[10px]' type="text" name="" id="salary" onChange={(e)=>setSalary(e.target.value)}/>
                                  <input className='bg-gray-700 rounded-[10px]' type="text" name="" id="phone" onChange={(e)=>setPhone(e.target.value)}/>
                                  <textarea className='bg-gray-700 rounded-[10px]' name="" id="descrip" cols="30" rows="2" onChange={(e)=>setAddress(e.target.value)}></textarea>
                                  <input className='bg-gray-700 rounded-[10px]' type="text" name="" id="cost" onChange={(e)=>setImage(e.target.value)}/>
                                  <div className='bg-gray-700 h-[140px] overflow-y-auto rounded-[10px] '>
                                    <div className='flex flex-col gap-1 items-center justify-center p-1 text-[18px] w-60'>
                                      {
                                        servicesProvided.map((serviceProv,index)=>{
                                          return(
                                            <p className={`flex flex-row flex-1 hover:border-b p-1 rounded-lg border-white cursor-pointer ${serviceSelected.includes(serviceProv.name)?"bg-yellow-600 hover:bg-yellow-600":"hover:bg-yellow-900"}`} onClick={() => {
                                                if (serviceSelected.includes(serviceProv.name)) {
                                                  setServiceSelected(serviceSelected.filter((name) => name !== serviceProv.name));
                                                } else {
                                                  setServiceSelected([...serviceSelected, serviceProv.name]);
                                                }
                                              }}
                                              >
                                            {serviceProv.name}
                                          </p>
                                          )
                                        })
                                      }
                                    </div>
                                  </div>

                              </div>
              </div>
              <div>
                  <button type="button" className='bg-yellow-500 p-2 rounded-lg ' onClick={handleAddService} >Add Service</button>
              </div>
  
              
          </div>
  
      </div>
      </div>:<div className='flex flex-col items-center justify-center mt-20'><div className=' gap-8 flex flex-col rounded-[30px] border-2 border-yellow-700 shadow-lg shadow-yellow-500 bg-black items-center justify-center mt-5 p-10 w-[600px] h-full'>
              <div className='flex flex-row'>
                  <div className='flex flex-col mb-5 gap-6'>
                                  <label className='text-2xl mr-5' htmlFor="">Name</label>
                                  <label className='text-2xl mr-5' htmlFor="">Email</label>
                                  <label className='text-2xl mr-5' htmlFor="">Experience</label>
                                  <label className='text-2xl mr-5' htmlFor="">Salary</label>
                                  <label className='text-2xl mr-5' htmlFor="">Phone</label>
                                  <label className='text-2xl mr-5' htmlFor="">Address</label>
                                  <label className='text-2xl mr-5 mt-5' htmlFor="">Select Services</label>
                                  {/* <label className='text-2xl mr-5' htmlFor="">Image Link</label> */}

                              </div>

                              <div className='flex flex-col mb-5 gap-3'>

                              {/* <input className='text-black' type="text" id="lname" name="lname" value="Doe"/> */}
  
                                  <input className='bg-gray-700 rounded-[10px]' value={name} type="text" name="" id="name" onChange={(e)=>setName(e.target.value)}/>
                                  <input className='bg-gray-700 rounded-[10px]' type="text" value={email} name="" id="duration" onChange={(e)=>setEmail(e.target.value)}/>
                                  <input className='bg-gray-700 rounded-[10px]' type="text" value={experience} name="" id="limit" onChange={(e)=>setExperience(e.target.value)}/>
                                  <input className='bg-gray-700 rounded-[10px]' type="text" value={salary} name="" id="cost" onChange={(e)=>setSalary(e.target.value)}/>
                                  <input className='bg-gray-700 rounded-[10px]' type="text" value={phone} name="" id="cost" onChange={(e)=>setPhone(e.target.value)}/>
                                  <textarea className='bg-gray-700 rounded-[10px]' value={address} name="" id="descrip" cols="30" rows="2" onChange={(e)=>setAddress(e.target.value)}></textarea>
                                  <div className='bg-gray-700 h-[140px] overflow-y-auto rounded-[10px] '>
                                    <div className='flex flex-col gap-1 items-center justify-center p-1 text-[18px] w-60'>
                                      {
                                        servicesProvided.map((serviceProv,index)=>{
                                          return(
                                            <p className={`flex flex-row flex-1 hover:border-b p-1 rounded-lg border-white cursor-pointer ${serviceSelected.includes(serviceProv.name)?"bg-yellow-600 hover:bg-yellow-600":"hover:bg-yellow-900"}`} onClick={() => {
                                                if (serviceSelected.includes(serviceProv.name)) {
                                                  setServiceSelected(serviceSelected.filter((name) => name !== serviceProv.name));
                                                } else {
                                                  setServiceSelected([...serviceSelected, serviceProv.name]);
                                                }
                                              }}
                                              >
                                            {serviceProv.name}
                                          </p>
                                          )
                                        })
                                      }
                                    </div>
                                  </div>

                                  
                                  
                              </div>
                              </div>
                              <div className='flex flex-col gap-2'>
                                <div className='flex items-center justify-center'>
                                  <p className='text-[35px] bg-gray-800 px-3 font-bold'>Leave Section</p>
                                </div>
                                  <div className='flex flex-row gap-3 items-center justify-center mt-10'>
                                    <div className='flex flex-col gap-6 text-[20px]'>
                                      <p>Start Date</p>
                                      <p>End Date</p>
                                    </div>
                                    <div className='flex flex-col gap-3'>
                                      <input type="date" className='bg-gray-700 rounded-[10px]' value={leave_start_date} onChange={(e)=>setLeaveStartDate(e.target.value)} name="leave_start_date" id="" />
                                      <input type="date" className='bg-gray-700 rounded-[10px]' value={leave_end_date} onChange={(e)=>setLeaveEndDate(e.target.value)} name="leave_start_date" id="" />
                                    </div>
                                  </div>
                              </div>
              <div>
                  <button type="button" className='bg-yellow-500 p-2 rounded-lg mr-10' onClick={()=>{
                    setEditMode("show")
                    setServiceSelected([])
                    }}>Go Back</button>
                  <button type="button" className='bg-yellow-500 p-2 rounded-lg ' onClick={handleSubmitChange} >{submitButtonData}</button>
              </div>
              </div>
          </div>
  
              }
  
      </div>
    )
  }

export default DashboardTeamComponent