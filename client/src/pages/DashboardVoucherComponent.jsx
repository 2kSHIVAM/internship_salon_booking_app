import React, { useEffect, useState } from 'react';
import Axios from 'axios';


const DashboardVoucherComponent = () => {
    const [editMode,setEditMode]=useState("show")

let name1=""
let duration1=0
let cost1=0
let limit1=0
let description1=""
    // const [details,setDetails]=useState({})
    const [name,setName]=useState("")
    const [start_date,setStartDate]=useState("")
    const [end_date,setEndDate]=useState("")
    const [duration,setDuration]=useState(0)
    const [codeVoucher,setCodeVoucher]=useState("")
    const [voucher_type,setVoucherType]=useState("")
    const [limit,setLimit]=useState(0)
    const [id,setId]=useState("")
    const [terms,setTerms]=useState("")
    const [amount,setAmount]=useState(0)
    const [active,setActive]=useState("")
    const [minSpend,setMinSpend]=useState("")
    const handleClick=(data)=>{
        // setDetails(data)
        setEditMode("editt")

        setName(data.name)
        setStartDate(data.start_date.substring(0, 10))
        setEndDate(data.end_date.substring(0,10))
        setDuration(data.duration)
        setCodeVoucher(data.code_voucher)
        setLimit(data.limit)
        setTerms(data.terms)
        setAmount(data.amount)
        setActive(data.active)
        setMinSpend(data.min_spend)
        setVoucherType(data.voucher_type)
        setId(data._id)
        // console.log(id)
        // duration=data.duration
        // cost=data.cost
        // limit=data.limit
        // description=data.description

        console.log(start_date)
        console.log("hello")
    }

    const handleVoucherStatus=async(service)=>{
        console.log("hello")
        if(service.active==="true")
        {
            const res=await Axios.patch(`http://localhost:3001/api/v1/voucher/updateVoucher/${service._id}`,{
                active:"false"
            })
        }
        else{
            const res=await Axios.patch(`http://localhost:3001/api/v1/voucher/updateVoucher/${service._id}`,{
                active:"true"
            })
        }
        Axios.get('http://localhost:3001/api/v1/voucher/getAllVouchers/')
        .then(res => {
          const data = res.data.data;
          setServiceList(data);
          console.log(data)
        })
        .catch(err => {
          console.log(err);
        });
    }

    const handleAddService=async()=>{
        console.log(voucher_type)
        const res=await Axios.post('http://localhost:3001/api/v1/voucher/addVoucher/',{
            name: name,
            duration: duration,
            limit: limit,
            active:active,
            start_date: start_date,
            end_date: end_date,
            code_voucher: codeVoucher,
            voucher_type: voucher_type,
            terms: terms,
            amount: amount,
            min_spend: minSpend,
        })
        console.log(res.data)
        alert("Service added successfully")
        const res2=await Axios.get('http://localhost:3001/api/v1/voucher/getAllVouchers/')
        //   setServiceList(res2.data.data);
          console.log(res2.data.data)
          setServiceList(res2.data.data);
          

    }
    const [serviceList, setServiceList] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/api/v1/voucher/getAllVouchers/')
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
    const res=await Axios.delete(`http://localhost:3001/api/v1/voucher/deleteVoucher/${idd}`)
    const res2=await Axios.get('http://localhost:3001/api/v1/voucher/getAllVouchers/')
    //   setServiceList(res2.data.data);
      console.log(res2.data.data)
      setServiceList(res2.data.data);
  }



  const handleSubmitChange = async (event) => {
    setSubmitButtonData("Processing..")
    // console.log(id)
    // console.log(duration)
    // console.log(cost)
    // console.log(limit)
    // console.log(description)
    try {
      event.preventDefault();
      // console.log("Default ANswers: ", defaultAnswers);
      // console.log("Dynamic Answers: ", answers);

      const res = await Axios.patch(
        `http://localhost:3001/api/v1/voucher/updateVoucher/${id}`,
        {
          name: name,
          duration: duration,
          limit: limit,
          active:active,
          start_date: start_date,
          end_date: end_date,
          code_voucher: codeVoucher,
          voucher_type:voucher_type,
          terms: terms,
          amount: amount,
          min_spend: minSpend,
        }
      );

      const res2=await Axios.get('http://localhost:3001/api/v1/voucher/getAllVouchers/')
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
        <h1 className="text-5xl flex items-center text-yellow-500 justify-center font-semibold  mt-8">Welcome to the Voucher Panel</h1>
        
            <div className='flex items-center justify-center'>
            <div className='flex flex-row w-[500px] mt-10 items-center justify-center rounded-[10px]  bg-gray-500 '>
                    <div className={`p-5 flex flex-auto hover:bg-yellow-700 cursor-pointer ${serviceType === "update" && "bg-yellow-500"}`} onClick={()=>setServiceType("update")}>
                            <p>Update Voucher</p>
                    </div>
                    <div className={`p-5 flex flex-auto hover:bg-yellow-700 cursor-pointer ${serviceType === "delete" && "bg-yellow-500"}`} onClick={()=>setServiceType("delete")}>
                            <p>Delete Voucher</p>

                    </div>
                    <div className={`p-5 flex flex-auto hover:bg-yellow-700 cursor-pointer ${serviceType === "add" && "bg-yellow-500"}`} onClick={()=>setServiceType("add")}>
                            <p>Add Voucher</p>

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
                            <div>
                            <div className='flex flex-row flex-wrap ml-8 mr-8 mb-20'>
                                <div className='w-[300px] h-[300px] flex flex-col rounded-[150px] bg-black-500 text-yellow-500 shadow-lg shadow-yellow-500 items-center justify-center p-3'>
                                    <div>
                                        <p className='text-[30px]'>Details</p>
                                    </div>
                                    <div className='flex flex-row gap-5 mt-5 mb-5'>
                                        <div className='flex flex-col text-white'>
                                            <p>Name:</p>
                                            <p>Type:</p>
                                            <p>Amount:</p>
                                            <p>Status:</p>
                                        </div>
                                        <div className='flex flex-col'>
                                            <p>{service.name}</p>
                                            <p>{service.voucher_type}</p>
                                            <p>{service.amount}</p>
                                            <p className={` font-bold ${service.active==="true"? "text-green-500":"text-red-700"} `}>
                                            {service.active ==="true"? 'Active' : 'Inactive'}

                                            </p>
                                            <input checked={service.active==="true"} onClick={()=>handleVoucherStatus(service)} className="ml-2 h-2.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-4 after:w-4 after:rounded-full after:border-none bg-red-500 after:bg-gray-400 after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-green-500 checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-4 checked:after:w-4 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0  focus:before:opacity-[0.12] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]" type="checkbox" role="switch" id="flexSwitchCheckDefault01" />

                                        </div>
                                    </div>

                                    <div className='mt-5'>
                                    <a href="#" onClick={()=>{handleClick(service)}} className={` ${serviceType!="update"&& "hidden"} inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-700 rounded-lg hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}>
                                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </a>
                                <a href="#" onClick={()=>{handleDelete(service)}} className={` ${serviceType!="delete"&& "hidden"} inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-700 rounded-lg hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}>
                                    <div className='text-white rounded'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                    </svg>
                                    </div>

                                </a>
                                    </div>
                                    
                                </div>
                
                            </div>
                        </div>
        )}
                    } )}

</div></div>
    <div className={`${serviceType!="add"&&"hidden"} flex flex-row items-center justify-center`}>
    <div className=' gap-8 flex flex-col rounded-[30px] ml-10 mr-10 border-2 border-yellow-700 shadow-lg shadow-yellow-500 bg-black items-center justify-center mt-5 p-10 w-[600px] h-full'>
            <div className='flex flex-row gap-10'>
                <div className='flex flex-col mb-5 gap-7'>
                                <label className='text-xl mr-5' htmlFor="">Name</label>
                                <label className='text-xl mr-5' htmlFor="">Start Date</label>
                                <label className='text-xl mr-5' htmlFor="">End Date</label>
                                <label className='text-xl mr-5' htmlFor="">Duration</label>
                                <label className='text-xl mr-5' htmlFor="">Code </label>
                                <label className='text-xl mr-5' htmlFor="">Limit</label>
                                <label className='text-xl mr-5' htmlFor="">Voucher Type</label>
                                <label className='text-xl mr-5' htmlFor="">Amount </label>
                                <label className='text-xl mr-5' htmlFor="">Min. Spend </label>
                                <label className='text-xl mr-5' htmlFor="">Status</label>
                                <label className='text-xl mr-5' htmlFor="">Terms</label>

                            </div>
                            <div className='flex flex-col mb-5 gap-3'>
                            {/* <input className='text-black' type="text" id="lname" name="lname" value="Doe"/> */}

                                <input className='bg-gray-700 rounded-[10px]' type="text" name="" id="name" onChange={(e)=>setName(e.target.value)}/>
                                <input className='bg-gray-700 rounded-[10px]' type="date"  name="" id="start_date" onChange={(e)=>setStartDate(e.target.value)}/>
                                <input className='bg-gray-700 rounded-[10px]' type="date"  name="" id="end_date" onChange={(e)=>setEndDate(e.target.value)}/>
                                <input className='bg-gray-700 rounded-[10px]' type="text"  name="" id="duration" onChange={(e)=>setDuration(e.target.value)}/>
                                <input className='bg-gray-700 rounded-[10px]' type="text" name="" id="code" onChange={(e)=>setCodeVoucher(e.target.value)}/>
                                <input className='bg-gray-700 rounded-[10px]' type="text" name="" id="limit" onChange={(e)=>setLimit(e.target.value)}/>
                                <div className='flex flex-row my-4'>
                                    <label htmlFor="">Cashback</label>
                                    <input className='bg-gray-700 rounded-[10px] accent-yellow-500 mt-1 ml-2' checked={voucher_type=="Cashback"} value="Cashback" type="checkbox" name="" id="v_type" onClick={(e)=>setVoucherType(e.target.value)}/>
                                    <label className='ml-5' htmlFor="">Flat Discount</label>
                                    <input className='ml-2 mt-1 bg-gray-700 accent-yellow-500 rounded-[10px]' checked={voucher_type=="Flat Discount"}  value="Flat Discount" type="checkbox" name="" id="v_type" onClick={(e)=>setVoucherType(e.target.value)}/>
                                </div>
                                <input className='bg-gray-700 rounded-[10px]' type="text" name="" id="cost" placeholder={voucher_type=="Cashback"?"In Percentage":voucher_type=="Flat Discount"?"In Amount":""} onChange={(e)=>setAmount(e.target.value)}/>
                                <input className='bg-gray-700 rounded-[10px]' type="text" name="" id="cost" onChange={(e)=>setMinSpend(e.target.value)}/>
                                <div className='flex flex-row my-2'>
                                    <label htmlFor="">Active</label>
                                    <input className='bg-gray-700 rounded-[10px] accent-yellow-500 mt-1 ml-2' checked={active=="true"} value="true" type="checkbox" name="" id="active" onClick={(e)=>setActive(e.target.value)}/>
                                    <label className='ml-11' htmlFor="">Inactive</label>
                                    <input className='ml-2 mt-1 bg-gray-700 accent-yellow-500 rounded-[10px]' checked={active=="false"}  value="false" type="checkbox" name="" id="inactive" onClick={(e)=>setActive(e.target.value)}/>
                                </div>
                                <textarea className='bg-gray-700 rounded-[10px]' name="" id="terms" cols="30" rows="2" onChange={(e)=>setTerms(e.target.value)}></textarea>

                            </div>
            </div>
            <div>
                <button type="button" className='bg-yellow-500 p-2 rounded-lg ' onClick={handleAddService} >Add Service</button>
            </div>

            
        </div>

    </div>
    </div>:<div className='flex flex-col items-center justify-center mt-20'><div className=' gap-8 flex flex-col rounded-[30px] ml-10 mr-10 border-2 border-yellow-700 shadow-lg shadow-yellow-500 bg-black items-center justify-center mt-5 p-10 w-[600px] h-full'>
            <div className='flex flex-row'>
                <div className='flex flex-col mb-5 gap-7'>
                <label className='text-xl mr-5' htmlFor="">Name</label>
                                <label className='text-xl mr-5' htmlFor="">Start Date</label>
                                <label className='text-xl mr-5' htmlFor="">End Date</label>
                                <label className='text-xl mr-5' htmlFor="">Duration</label>
                                <label className='text-xl mr-5' htmlFor="">Code </label>
                                <label className='text-xl mr-5' htmlFor="">Limit</label>
                                <label className='text-xl mr-5' htmlFor="">Voucher Type</label>
                                <label className='text-xl mr-5' htmlFor="">Amount </label>
                                <label className='text-xl mr-5' htmlFor="">Min. Spend </label>
                                <label className='text-xl mr-5' htmlFor="">Status</label>
                                <label className='text-xl mr-5' htmlFor="">Terms</label>
                            </div>
                            <div className='flex flex-col mb-5 gap-3'>
                            {/* <input className='text-black' type="text" id="lname" name="lname" value="Doe"/> */}

                                <input className='bg-gray-700 rounded-[10px]' value={name} type="text" name="" id="name" onChange={(e)=>setName(e.target.value)}/>
                                <input className='bg-gray-700 rounded-[10px]' type="date" value={start_date} name="" id="startDate" onChange={(e)=>setStartDate(e.target.value)}/>
                                <input className='bg-gray-700 rounded-[10px]' type="date" value={end_date} name="" id="endDate" onChange={(e)=>setEndDate(e.target.value)}/>
                                <input className='bg-gray-700 rounded-[10px]' type="text" value={duration} name="" id="duration" onChange={(e)=>setDuration(e.target.value)}/>
                                <input className='bg-gray-700 rounded-[10px]' type="text" value={codeVoucher} name="" id="codeVoucher" onChange={(e)=>setCodeVoucher(e.target.value)}/>
                                <input className='bg-gray-700 rounded-[10px]' type="text" value={limit} name="" id="limit" onChange={(e)=>setLimit(e.target.value)}/>
                                <div className='flex flex-row my-4'>
                                    <label htmlFor="">Cashback</label>
                                    <input className='bg-gray-700 rounded-[10px] accent-yellow-500 mt-1 ml-2' checked={voucher_type=="Cashback"} value="Cashback" type="checkbox" name="" id="v_type" onClick={(e)=>setVoucherType(e.target.value)}/>
                                    <label className='ml-5' htmlFor="">Flat Discount</label>
                                    <input className='ml-2 mt-1 bg-gray-700 accent-yellow-500 rounded-[10px]' checked={voucher_type=="Flat Discount"}  value="Flat Discount" type="checkbox" name="" id="v_type" onClick={(e)=>setVoucherType(e.target.value)}/>
                                </div>
                                <input className='bg-gray-700 rounded-[10px]' type="text" value={amount} name="" id="amount" placeholder={voucher_type=="Cashback"?"In Percentage":voucher_type=="Flat Discount"?"In Amount":""} onChange={(e)=>setAmount(e.target.value)}/>
                                <input className='bg-gray-700 rounded-[10px]' type="text" name="" id="cost" value={minSpend} onChange={(e)=>setMinSpend(e.target.value)}/>
                                <div className='flex flex-row my-2'>
                                    <label htmlFor="">Active</label>
                                    <input className='bg-gray-700 rounded-[10px] accent-yellow-500 mt-1 ml-2' checked={active=="true"} value="true" type="checkbox" name="" id="active" onClick={(e)=>setActive(e.target.value)}/>
                                    <label className='ml-11' htmlFor="">Inactive</label>
                                    <input className='ml-2 mt-1 bg-gray-700 accent-yellow-500 rounded-[10px]' checked={active=="false"}  value="false" type="checkbox" name="" id="inactive" onClick={(e)=>setActive(e.target.value)}/>
                                </div>
                                <textarea className='bg-gray-700 rounded-[10px]' value={terms} name="" id="terms" cols="30" rows="2" onChange={(e)=>setTerms(e.target.value)}></textarea>
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

export default DashboardVoucherComponent