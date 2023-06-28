import React from 'react'
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Lottie from 'lottie-react';
import LoadingLottie from './../lottieFiles/Loading .json'
import {
  Square3Stack3DIcon,
  UserCircleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import Axios from 'axios'
import 'flowbite'
import Payment from './Payment.js'
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import  {useState,useEffect} from "react";
import DatePicker,{ CalendarContainer } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// servicesAdded.push("hello");
// servicesAdded.push("world");
const BookingMenu = () => {
    
    const data = [
        {
          label: "Dashboard",
          value: "dashboard",
          icon: Square3Stack3DIcon,
          desc: `It really matters and then like it really doesn't matter.
          What matters is the people who are sparked by it. And the people 
          who are like offended by it, it doesn't matter.`,
        },
        {
          label: "Profile",
          value: "profile",
          icon: UserCircleIcon,
          desc: `Because it's about motivating the doers. Because I'm here
          to follow my dreams and inspire other people to follow their dreams, too.`,
        },
        {
          label: "Settings",
          value: "settings",
          icon: Cog6ToothIcon,
          desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly trying to express ourselves and actualize our dreams.`,
        },
        {
            label: "Settings",
            value: "ettings",
            icon: Cog6ToothIcon,
            desc: `We're not always in the position that we want to be at.
            We're constantly growing. We're constantly making mistakes. We're
            constantly trying to express ourselves and actualize our dreams.`,
        },
        {
            label: "Settings",
            value: "ttings",
            icon: Cog6ToothIcon,
            desc: `We're not always in the position that we want to be at.
            We're constantly growing. We're constantly making mistakes. We're
            constantly trying to express ourselves and actualize our dreams.`,
        }
      ];
      const [branch, setBranch] = React.useState('branch 1');
    
      const handleBranch = (event) => {
        setBranch(event.target.value);
      };
      const [barber, setBarber] = React.useState('-----');
      const [service, setService] = React.useState('-----');
      const [staff, setStaff] = React.useState('-----');
      const handleBarber=(event)=>{
        setBarber(event.target.value)
      }

      const [finalPrice,setFinalPrice] = useState(0)


      const [personList, setPersonList] = useState([])
      const handleEmploee=async(service1)=>{
        const persons = await Axios.post('http://localhost:3001/api/v1/team/getPersonByService',{
          service:service1
        })
        const data=persons.data.data
        setPersonList(data)
        if(data.length==0)
        setStaff("Unavailable")
        else
        setStaff(data[0].name)
        console.log(personList)
      }


      const [riskTime,setRiskTime]=useState([])
      const [riskDate,setRiskDate]=useState([])
      const [newRiskTime,setNewRiskTime]=useState([])
      const [duration,setDuration]=useState()
      const [displayLoading,setDisplayLoading]=useState(true)
      const handleService=async(event)=>{
        setService(event.target.value)
        for(let i=0;i<serviceList.length;i++)
        {
          if(serviceList[i].name===event.target.value)
          {
            setDuration(serviceList[i].duration)
            console.log(serviceList[i].duration)
          }
        }
        // console.log(event.target.value)
        handleEmploee(event.target.value)
      }
      let sol=[]
      const handleFalseTime=()=>{
        // console.log("helo")
        setDisplayLoading(false)
        sol=[]
        let jump=Math.ceil(duration/20)
        console.log(`${jump} jump baby jump`)
        // console.log(jump)
        for(let k=0;k<riskTime.length;k++)
        {
          let element=riskTime[k]
          for(let i=0;i<timeAvaliable.length;i++)
          {
            if(timeAvaliable[i]===element)
            {
              // console.log("shivam")
              for(let j=1;j<=jump;j++)
              {
                let idx=j+i;
                if(idx<timeAvaliable.length)
                {
                  sol.push(timeAvaliable[idx]);
                }
              }
            }
          }
          // console.log("hellow")
        }
        console.log(sol.length)
        setNewRiskTime([...riskTime,...sol])

          console.log("shivam")
          console.log(riskTime)
      }
      const handleTimeManagement=async(data)=>
      {
        // console.log("hellllo")
        const person=await Axios.post('http://localhost:3001/api/v1/team/getPersonByName',{
          name:data
        })
        // console.log(person.data.data[0].booking.timeSlots)
        setRiskTime(person.data.data[0].booking.timeSlots)

        setRiskDate(person.data.data[0].booking.dateSlots)
        // handleFalseTime()
      }


      const timeAvaliable=["11:00 AM","11:20 AM", "11:40 AM", "12:00 PM", "12:20 PM","12:40 PM","01:00 PM","01:20 PM","01:40 PM","02:00 PM","02:20 PM","02:40 PM","03:00 PM","03:20 PM","03:40 PM","04:00 PM","04:20 PM","04:40 PM","05:00 PM","05:20 PM","05:40 PM","06:00 PM","06:20 PM","06:40 PM","07:00 PM"] 
      // let timeAvaliable=[]

      const handleStaff=(event)=>{
        setStaff(event.target.value)
        handleTimeManagement(event.target.value)
        setDisplayLoading(true)
        // timeAvaliable=timeAvaliable1
        // console.log(riskTime)
        // console.log(riskDate)
      }


      const [startDate, setStartDate] = useState(new Date());

      const [timee,setTime]=useState("")



      const handleTime = (value) => {
        setTime(value);
        // console.log(timee)
      };

      const [costSlots,setCostSlots]=useState([])
      const [services, setServices] = useState([]);
      const [dateSlots,setDateSlots] = useState([]);
      const [timeSlots, setTimeSlots] = useState([])
      const [employeeSelected, setEmployeeSelected] = useState([])
      const [totalPrice, setTotalPrice] = useState(0)


      const addServices = async() => {
        let c
        serviceList.map((service1,index)=>{
          if(service1.name===service)
          c=service1.cost
        })
        if(staff==="Unavailable")
        {
          alert("Service/Employee not available")
        }
        else if(!(service&&timee&&staff&&c))
        {
          alert("Please select all fields")
        }
        else
        {setServices((prevServices) => [...prevServices, `${service}`]);
         setTimeSlots((prevTimeSlots) => [...prevTimeSlots,`${timee}`]);
         setDateSlots((prevDateSlots) => [...prevDateSlots,`${startDate}`]);
         setEmployeeSelected((prevEmployeeSelected) => [...prevEmployeeSelected,`${staff}`]);
         setCostSlots((prevCostSlots) => [...prevCostSlots,`${c}`]);
         setTotalPrice(totalPrice+c)
         setFinalPrice(totalPrice+c)
        //  console.log(totalPrice)
        }
      };


      const handleDelete=(index)=>{
        let c=costSlots[index];
        setTotalPrice(totalPrice-c)
        setFinalPrice(totalPrice-c)
        setServices((prevServices) => {
            const updatedServices = [...prevServices];
            updatedServices.splice(index, 1);
            return updatedServices;
          });
          setCostSlots((prevCost) => {
            const updatedCosts = [...prevCost];
            updatedCosts.splice(index, 1);
            return updatedCosts;
          });
          setEmployeeSelected((prevEmployee) => {
            const updatedEmployee = [...prevEmployee];
            updatedEmployee.splice(index, 1);
            return updatedEmployee;
          });
          setTimeSlots((prevTime) => {
            const updatedTime = [...prevTime];
            updatedTime.splice(index, 1);
            return updatedTime;
          });
          setDateSlots((prevDate) => {
            const updatedDate = [...prevDate];
            updatedDate.splice(index, 1);
            return updatedDate;
          });
          setVoucher()
          setPromocode()
            }
    //   const handleAdd=()=>{
    //     console.log(startDate)

    //   }

    const MyContainer = ({ className, children }) => {
      return (
        <div className='' style={{ padding: "10px", background: "black", color: "#fff" }}>
          <CalendarContainer className={className}>
            <div className='bg-gray-700 text-yellow-700 text-md' style={{ }}>
              Please select a Date :)
            </div>
            <div style={{background: "black", position: "relative"}}>{children}</div>
          </CalendarContainer>
        </div>
      );
    };

    // const [stripePromise, setStripePromise] = useState(null);
    // const [clientSecret, setClientSecret] = useState("");
    // useEffect(() => {
    //   fetch("http://localhost:5252/config").then(async (r) => {
    //     const { publishableKey } = await r.json();
    //     setStripePromise(loadStripe(publishableKey));
    //   });
    // }, []);
  
    // useEffect(() => {
    //   fetch("http://localhost:5252/create-payment-intent", {
    //     method: "POST",
    //     body: JSON.stringify({}),
    //   }).then(async (result) => {
    //     var { clientSecret } = await result.json();
    //     setClientSecret(clientSecret);
    //   });
    // }, []);
    const [paymentMethod,setPaymentMethod] =useState("")
    const [promocode,setPromocode] = useState("")
    const [voucher,setVoucher] = useState()
    const [discount,setDiscount]=useState(0)
    const validatePromocode=async()=>{
      // validate the promo using the voucher DB, whether code correct and min spend
      // do mention what type of offer cashback or flat
      const resVoucher=await Axios.post('http://localhost:3001/api/v1/voucher/getVoucherByCode',{
        code_voucher:document.getElementById('promocode').value
      })
      // if(spend>min_spend) then only valid
      setFinalPrice(totalPrice)
      if(resVoucher.data.data&&totalPrice>=resVoucher.data.data.min_spend)
      {setPromocode("true")

      setDiscount(resVoucher.data.data.amount)
      setVoucher(resVoucher.data.data)
      if(resVoucher.data.data.voucher_type==="Cashback"){
        setFinalPrice(totalPrice-(0.01)*resVoucher.data.data.amount*totalPrice)
        
      }
      else if(resVoucher.data.data.voucher_type==="Flat Discount"){
        setFinalPrice(totalPrice-resVoucher.data.data.amount)
      }
      
      // console.log(voucher.voucher_type)
    }
    
    
      else{
        {setPromocode("false")
        setVoucher(null)
        console.log(voucher)}
      }
    }

    const [serviceList, setServiceList] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/api/v1/service/getAllServices')
          .then(res => {
            const data = res.data.data;
            setServiceList(data);
            setService(data[0].name)
            handleEmploee(data[0].name)
          })
          .catch(err => {
            console.log(err);
          });
      },
      []);


      const [name,setName]=useState("")
      const [email,setEmail]=useState("")
      const [phone,setPhone]=useState("")
      const [address,setAddress]=useState("")
      const [state,setState]=useState("")
      const [country,setCountry]=useState("")
      const [postalCode,setPostalCode]=useState("")
      const [instruction,setInstruction]=useState("") 

      const handleUserBookingDetails=()=>{
        alert("Details saved...  Please continue with Booking")
      }

      const [status,setStatus]=useState([])

      const handleBookingCheckout=async()=>{
        if(!name)
         alert("Please provide name...")
         else if(!phone)
         alert("Please provide phone number...")
         else if(!email)
         alert("Please provide email address...")
         else if(!paymentMethod)
         alert("Please provide payment method...")
         else{
          const res=await Axios.post("http://localhost:3000/api/v1/user/addBooking",{
            email:email,
            booking:{
              state:state,
              payment:paymentMethod,
              country:country,
              employeeName:employeeSelected,
              branch:"branch1",
              serviceName:services,
              cost:costSlots,
              time:timeSlots,
              finalPrice:finalPrice
            }
          })
         alert("Congratulations..🎉🎉 Booking Confirmed...")
         setStatus(res.data.data.newConsumer)
         
         const res2=await Axios.post("http://localhost:3000/api/v1/team/addBooking",{
          booking:{
            email:email,
            employeeName:employeeSelected,
            serviceName:services,
            times:timeSlots,
            dates:dateSlots
          }
         })
        }

        console.log(dateSlots)
         
        //  console.log(res.data.data.newConsumer)

      }
  return (
        <div className="relative flex flex-col w-full bg-gray-900 rounded-[30px]  p-10 border-1 shadow-lg shadow-yellow-500/50 mr-20 ml-10 mt-20 h-full items-center">
<Tabs value="dashboard flex flex-col items-center w-full" orientation="horizontal">
      <TabsHeader className=" flex f w-full text-white border-1 justify-between items-center rounded bg-black p-5 rounded-[20px] border-2 border-yellow-700">
        {/* {data.map(({ label, value, icon }) => (
          <Tab key={value} value={value} className="place-items-start hover:bg-gray-700 ">
            <div className="flex items-center gap-2 text-black-700">
              {React.createElement(icon, { className: "w-5 h-5" })}
              {label}
            </div>
          </Tab>
        ))} */}
        <Tab key="profile" value="profile" className="place-items-start hover:bg-gray-700 hover:rounded-lg ">
            <div className="flex items-center gap-2 text-black-700 text-yellow-700 active">
              {React.createElement(Square3Stack3DIcon, { className: "w-5 h-5" })}
              {"Service"}
            </div>
        </Tab>
        <Tab key="profile1" value="profile1" className="place-items-start hover:bg-gray-700 hover:rounded-lg">
            <div className="flex items-center gap-2 text-black-700 text-yellow-700">
              {React.createElement(Square3Stack3DIcon, { className: "w-5 h-5" })}
              {"Details"}
            </div>
        </Tab>
        <Tab key="profile2" value="profile2" className="place-items-start hover:bg-gray-700 hover:rounded-lg">
            <div className="flex items-center gap-2 text-black-700 text-yellow-700">
              {React.createElement(Square3Stack3DIcon, { className: "w-5 h-5" })}
              {"Payment"}
            </div>
        </Tab>
        <Tab key="profile3" value="profile3" className="place-items-start hover:bg-gray-700 hover:rounded-lg">
            <div className="flex items-center gap-2 text-black-700 text-yellow-700">
              {React.createElement(Square3Stack3DIcon, { className: "w-5 h-5" })}
              {"Status"}
            </div>
        </Tab>

      </TabsHeader>
      <TabsBody className="relative gap-12 ml-20 w-full">
        {/* {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value} className="py-0">
            {desc}
          </TabPanel>
        ))} */}
        <TabPanel key={"profile"} value={"profile"} className="py-5">
                <div className="flex flex-row gap-8 flex-wrap">
                   <label className="flex flex-col">
                        <div className="justify-center">
                        <p className='text-[20px]'>Branch</p>
                        </div>
                        <div className="">
                            <select className="w-[100px] h-[20px] text-yellow-500 bg-gray-700 rounded" value={branch} onChange={handleBranch}>
                                <option value="branch 1" className="hover:text-yellow-500 hover:bg-black">branch 1</option>
                                    {/* <option value="branch 2">branch 2</option>
                                    <option value="branch 3">branch 3</option> */}
                            </select>
                        </div>
                        <div className="bg-gray-700 mx-auto px-4 rounded justify-center">
                        <p className="text-yellow-500 font-bold">{branch}</p>
                        </div>
                   </label>
                   <label className="flex flex-col ">
                        <p className='text-[20px]'>Barber</p>
                        <div className="">
                            <select className="w-[100px] h-[20px] text-yellow-500 bg-gray-700 rounded" value={barber} onChange={handleBarber}>
                                <option value="barber 1" className="hover:text-yellow-500 hover:bg-black">barber 1</option>
                                    <option value="barber 2">barber 2</option>
                                    <option value="barber 3">barber 3</option>
                            </select>
                        </div>
                        <div className="bg-gray-700 mx-auto px-4 rounded justify-center">
                        <p className="text-yellow-500 font-bold">{barber}</p>
                        </div>
                   </label>

                   <label className="flex flex-col ">
                   <p className="text-[20px]">Service</p>
      <div className="">
        <select className="w-[100px] h-[20px] text-yellow-500 bg-gray-700 rounded" value={service} onChange={handleService}>
          {serviceList.map((service, index) => (
            <option key={index} value={service.name} className="hover:text-yellow-500 hover:bg-black">
              {service.name}
            </option>
          ))}
        </select>
      </div>
      <div className="bg-gray-700 w-[150px] mx-auto px-4 rounded justify-center flex flex-wrap">
        <p className="text-yellow-500 font-bold">{service}</p>
      </div>

                   </label>

                   <label className="flex flex-col ">
                        <p className='text-[20px]'>Staff</p>
                        <div className="">
                            <select className="w-[100px] h-[20px] text-yellow-500 bg-gray-700 rounded" onChange={handleStaff}>
                                {
                                  personList.map((person,index)=>{
                                    return(
                                    <option key={index} value={person.name} className="">{person.name}</option>)
                                  })
                                }
                                    
                            </select>
                        </div>
                        <div className="bg-gray-700 w-[120px] mx-auto px-4 rounded justify-center">
                        <p className="text-yellow-500 font-bold">{staff}</p>
                        </div>
                   </label>
                   {/* <div className="w-full h-full">
                       
                   </div> */}
                   </div>
                   <div className="flex flex-row mt-10 text-yellow-700 font-bold mr-10 gap-5">
                        <label className="flex flex-col bg-black p-1 rounded-[10px] hover:shadow-lg hover:shadow-yellow-500">
                                        <p className='mb-2 text-xl'>Service Date</p>
                            { 
                            /*<input className=" h-[20px] text-yellow-500 bg-gray-700 rounded" type="date" id="start" name="trip-start" onChange={handleDate}
                            value={date}
                            min="2023-01-01" max="2023-06-13"></input> */}
                                <DatePicker className='flex h-full w-full ' selected={startDate} onChange={(date) => setStartDate(date) } inline calendarContainer={MyContainer} minDate={new Date()} filterDate = {date=> date.getDay()!== 6 && date.getDay()!== 0} showYearDropdown scrollableMonthYearDropdown/>
                                <p>{startDate.getDate()}-{startDate.getMonth()}-{startDate.getFullYear()}</p>
                            </label>    
                            <div className="flex bg-black rounded-[10px] hover:shadow-lg hover:shadow-yellow-500">
                              <div className="flex flex-col">
                                <p className="mb-10 text-xl">Time</p>
                                <div className="flex flex-row items-center justify-center">
                                  <button
                                    type="button"
                                    className="flex items-center rounded-[10px] hover:shadow-lg hover:shadow-gray-500 justify-center w-[200px] text-[20px] bg-white mb-5"
                                    onClick={handleFalseTime}
                                  >
                                    Check Slots
                                  </button>
                                </div>
                                <div className="flex flex-wrap gap-3 justify-center relative items-center overflow-auto h-[350px] pb-3">
                                  {displayLoading && <Lottie className="" animationData={LoadingLottie} />}
                                  {!displayLoading &&
                                    timeAvaliable.map((element, index) => (
                                      <div
                                        key={index}
                                        className={`hover:bg-yellow-700 w-[85px] ${newRiskTime.includes(element) ? "hidden" : ""} bg-gray-700 text-white font-bold ${
                                          timee === element ? "bg-yellow-600" : ""
                                        } focus:outline-none focus:ring focus:ring-violet-300 py-2 px-1 rounded`}
                                        onClick={() => handleTime(element)}
                                      >
                                        {element}
                                      </div>
                                    ))}
                                </div>
                              </div>
</div>


                    
                   </div>
                   <div className='flex mt-5'>
        <div
          className='hover:bg-yellow-700 p-2 bg-yellow-700 text-white font-bold w-[100px] rounded-lg cursor-pointer'
          onClick={addServices}
        >
          Add More
        </div>
      </div>

       <div className="p-1 flex flex-row items-start gap-10 justify-center text-sm font-bold text-yellow-400 mt-10 bg-gray-700 p-5 rounded-[20px] mr-20 h-[150px] overflow-y-auto">
       <div className='flex flex-col'>
        {services.map((element, index) => (
          <div key={index}>
            <div className='flex flex-row mb-5'>
                <p className='flex '>{index+1}. {element}</p>
            </div>
          </div>
        ))}
        </div>
        <div className='flex flex-col '>
        {employeeSelected.map((element, index) => (
          <div key={index}>
            <div className='flex flex-row mb-5'>
                <p className='flex '>{element}</p>
            </div>
          </div>
        ))}
        </div>


        <div className='flex flex-col '>
        {costSlots.map((element, index) => (
          <div key={index}>
            <div className='flex flex-row mb-5'>
                <p className='flex '>{element}</p>
            </div>
          </div>
        ))}


        </div>

        <div className='flex flex-col '>
        {timeSlots.map((element, index) => (
          <div key={index}>
            <div className='flex flex-row mb-5'>
                <p className='flex '>{element}</p>
            </div>
          </div>
        ))}

        </div>



        <div className='flex flex-col '>
          {services.map((element, index) => (
            <div key={index}>
              <div className='flex flex-row mb-4'>
                  <div className='flex text-red-700 ml-12 justify-center items-center cursor-pointer ' onClick={()=>{handleDelete(index)}}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>
                  </div>
              </div>
            </div>
          ))}
        </div> 



        {/* {services.map((element, index) => (
          <div key={index}>
            <div className='flex flex-row mb-5'>
                <p className='flex '>{index+1}. {element}</p>
                <div className='flex flex-1  text-red-700 ml-12 justify-end items-center cursor-pointer ' onClick={()=>{handleDelete(index)}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>

                </div>
            </div>
          </div>
        ))} */}
      </div>

          </TabPanel>
          <TabPanel key={"profile1"} value={"profile1"} className="py-0">
            <div className='flex flex-col justify-center items-center mt-10 mr-10 '>
                <div className='flex flex-row flex-wrap gap-5'>
                    <div className='flex flex-col'>
                        <p className='text-yellow-700 font-bold text-lg'>Name</p>
                        <input className='bg-black rounded-[20px] focus:outline-none hover:border-yellow-700' value={name} onChange={()=>{setName(document.getElementById('name').value)}} id='name' type="text"  required/>
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-yellow-700 font-bold text-lg'>Email</p>
                        <input className='bg-black rounded-[20px] focus:outline-none hover:border-yellow-700' type="email" value={email} onChange={()=>{setEmail(document.getElementById('email').value)}} name=""  id="email" required/>
                    </div>
                </div>

            </div>
            <div className='flex flex-col justify-center items-center mt-10 mr-10 '>
                <div className='flex flex-row flex-wrap gap-5'>
                <div className='flex flex-col'>
                        <p className='text-yellow-700 font-bold text-lg'>Phone</p>
                        <input className='bg-black rounded-[20px] focus:outline-none hover:border-yellow-700' id='phone' onChange={()=>{setPhone(document.getElementById('phone').value)}} type="number"  required/>
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-yellow-700 font-bold text-lg'>State</p>
                        <input className='bg-black rounded-[20px] focus:outline-none hover:border-yellow-700' type="text" name="" id="state" onChange={()=>{setState(document.getElementById("state").value)}} required/>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center mt-10 mr-10 '>
                <div className='flex flex-row flex-wrap gap-5'>
                <div className='flex flex-col'>
                        <p className='text-yellow-700 font-bold text-lg'>Country</p>
                        <input className='bg-black rounded-[20px] focus:outline-none hover:border-yellow-700' id='country' onChange={()=>setCountry(document.getElementById("country").value)} type="text" required/>
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-yellow-700 font-bold text-lg'>Postal Code</p>
                        <input className='bg-black rounded-[20px] focus:outline-none hover:border-yellow-700' type="number" name="" id="postalCode" onChange={()=>setPostalCode(document.getElementById('postalCode').value)} required/>
                    </div>
                </div>

            </div>
            <div className='flex flex-col justify-center items-center mt-10 mr-10 '>
                <div className='flex flex-row flex-wrap gap-5'>
                <div className='flex flex-col'>
                        <p className='text-yellow-700 font-bold text-lg'>Street Address</p>
                        <textarea className='bg-black rounded-[20px] focus:outline-none hover:border-yellow-700' name="" id="address" onChange={()=>setAddress(document.getElementById('address').value)} placeholder='Street Address' cols="45" rows="2"></textarea>
                    </div>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center mt-10 mr-10 '>
                <div className='flex flex-row flex-wrap gap-5'>
                    <div className='flex flex-col'>
                        <p className='text-yellow-700 font-bold text-lg'>Service Instructions</p>
                        <textarea className='bg-black rounded-[20px] focus:outline-none hover:border-yellow-700' name="" id="instruction" placeholder='Service Instructions' onChange={()=>setInstruction(document.getElementById('instruction').value)} cols="45" rows="2"></textarea>
                    </div>
                </div>

            </div>
            <div className='flex flex-col justify-center items-center mt-10 mr-10 '>
                <div className='flex flex-row flex-wrap gap-5'>
                <div className='flex flex-col'>
                  {/* <button ></button> */}
                <button className='items-center justify-center px-2 rounded-lg bg-white text-yellow-500 text-[20px]' type="button" onClick={handleUserBookingDetails}>Submit</button>
                    </div>
                </div>
            </div>

            <div className=''>
            </div>
          </TabPanel>
          <TabPanel key={"profile2"} value={"profile2"} className="py-0">
          <div className='flex flex-col '>
            {/* <Payment/> */}
            <div className='flex flex-col'>
                <div className='flex justify-center items-center mr-10'>
                  <p className='text-white justify-center items-center text-[25px] mt-10'>Choose mode of payment </p>
                </div>
                <div className='flex flex-row cursor-pointer mt-4'>
                  <div className='' onClick={()=>setPaymentMethod("Stripe")}>
                    <p className={`px-2 text-[20px] hover:bg-gray-500 ${paymentMethod==="Stripe"?"bg-white hover:bg-white":"bg-transparent"}`}>Stripe</p>
                  </div>
                  <div className='' onClick={()=>setPaymentMethod("Cash")}>
                  <p className={`px-2 text-[20px] hover:bg-gray-500 ${paymentMethod==="Cash"?"bg-white hover:bg-white":"bg-transparent"}`}>Cash</p>
                  </div>
                </div>

                <div className='mt-7'>
                  <p className='text-[20px]'>Have a Promocode ? </p>
                </div>
                <div className='flex flex-row flex-wrap gap-3 mt-3'>
                  <input className='bg-transparent text-white' type="text" name="" id="promocode" />
                  <button type="button" className='text-[20px] px-3 bg-white rounded-lg' onClick={validatePromocode}>Apply</button>
                </div>
                <div>
                  {
                    promocode=="true"?<div>
                      <p className='text-green-500 italic'>Applied Successfully</p>
                    </div>:promocode=="false"?<div>
                    <p className='text-red-500 text-red-500 italic'>Invalid Code</p>
                    </div>:""
                  }
                </div>
                <div className='mt-10'>
                  <p className='text-white text-[25px] items-center justify-center'>Details</p>
                </div>
                <div className='mt-5 flex flex-row gap-3'>
                  <div className='flex flex-col text-yellow-500 font-bold gap-2'>
                    <p>Name:</p>
                    <p>Phone:</p>
                    <p>Email:</p>
                  </div>
                  <div className='flex flex-col text-white font-bold gap-2'>
                    <p>{name}</p>
                    <p>{phone}</p>
                    <p>{email}</p>
                  </div>
                </div>

                <div className='mt-5 flex flex-row gap-20'>
                  <div className='flex flex-col text-yellow-500 font-bold gap-2'>
                    <p className='text-white text-[20px]'>Services</p>
                    {
                      services.map((element,index)=>(
                        <p>{index+1}. {element} ({employeeSelected[index]})</p>
                      ))
                    }
                    <p className='border-b '></p>

                    <p className='italic text-white'>Total Price</p>
                    <p className='border-b '></p>

                    {
                      voucher?<div>
                        {voucher.voucher_type==="Cashback"?<div>
                        <p>Voucher Type</p>
                      <p>OFF</p>
                      <p className='border-b '></p>

                      </div>:<div>
                      <p>Voucher Type</p>
                      <p>Discount</p>
                      <p className='border-b '></p>

                      </div>}
                      </div>:""
                    }
                    <p className='italic text-white'>Final Price</p>
                    <p className='border-b '></p>


                  </div>
                  <div className='flex flex-col text-white font-bold gap-2'>
                    <p className='text-white text-[20px]'>Cost</p>
                    {
                      costSlots.map((element,index)=>(
                        <p>{element}</p>
                      ))
                    }
                    <p className='border-b '></p>
                    <p className='italic text-yellow-500'>{totalPrice}</p> 
                    <p className='border-b '></p>

                    {
                      voucher?<div className='text-green-500'>
                        {voucher.voucher_type==="Cashback"?<div>
                        <p >Cashback</p>
                      <p>{discount}%</p>
                      <p className='border-b '></p>

                      </div>:<div className='text-green-500'>
                      <p >Flat Discount</p>
                      <p >-{discount}</p>
                      <p className='border-b '></p>

                      </div>}
                      </div>:""
                    }
                    <p className='italic text-yellow-500'>{finalPrice}</p>
                    <p className='border-b '></p>

                  </div>
                </div>
                <div className='items-center justify-center'>
                  <button className='px-2 font-bold bg-white mt-5 rounded-lg items-center justify-center' type="button" onClick={handleBookingCheckout}>Confirm Booking</button>
                </div>

            </div>
          </div>
          </TabPanel>
          <TabPanel key={"profile3"} value={"profile3"} className="py-0">
            <div className='flex flex-row flex-wrap'>
              {/* <div className='w-[300px] bg-black rounded-[30px] items-center justify-between mt-10 p-5 mr-2'>
                <div className="flex flex-row gap-10">
                  <div className='flex flex-col item-center items-center justify-between bg-black mb-2 '>
                    <p className='text-white font-bold p-2'>Service  </p>
                    <p className='text-white font-bold p-2'>Branch  </p>
                    <p className='text-white font-bold p-2'>Date  </p>
                    <p className='text-white font-bold p-2'>Status  </p>
                  </div>
                  <div className='flex flex-col item-center items-center justify-between bg-black mb-2 '>
                    <p className='text-yellow-500 p-2'>Service 1</p>
                    <p className='text-yellow-500 p-2'>Branch 1</p>
                    <p className='text-yellow-500 p-2'>Date 1</p>
                    <p className='text-green-500 p-2'>Confirmed </p>
                  </div>
                  <div>

                  </div>
                </div>
                
              </div> */}
              <div className='w-[500px] bg-black rounded-[30px] items-center justify-between mt-10 p-5 mr-2'>
              <div className='flex flex-row items-center justify-center'>
                  <p className="text-white font-bold p-2 mr-5">Booking  Details</p>
                </div>
              <div className="flex flex-row gap-20 items-center justify-center">
                
                <div className='flex flex-col item-center items-center justify-between bg-black mb-1 '>
                  <p className='text-white font-bold p-1'>Name :  </p>
                  <p className='text-white font-bold p-1'>email:  </p>
                  <p className='text-white font-bold p-1'>phone:  </p>
                  <p className='text-white font-bold p-1'>Total Cost:  </p>
                  <p className='text-white font-bold p-1'>Status  </p>

                </div>
                <div className='flex flex-col item-center items-center justify-between bg-black mb-1 '>
                  <p className='text-yellow-500 p-1'>{name}</p>
                  <p className='text-yellow-500 p-1'>{email}</p>
                  <p className='text-yellow-500 p-1'>{phone}</p>
                  <p className='text-yellow-500 p-1'>{finalPrice}</p>
                  <p className='text-green-500 p-1'>Confirmed </p>
                  

                </div>
              </div>
              <div className='flex flex-row gap-10 ml-10 mt-10'>
                <div className='flex flex-col item-center items-center ml-[30px] justify-between mb-1'>
                <p className='text-white font-bold p-1'>Services:  </p>
                </div>
                <div className='flex flex-col w-[200px] h-[120px] shadow-lg shadow-yellow-500 item-center rounded-[10px] items-center justify-between mb-1 overflow-y-auto'>
                  {
                    services.map((element,index)=>{
                      return(
                        <p className='text-white border-b rounded-[10px] p-1 mb-1'>{element}  </p>
                      )
                    })
                  }
{/*                   
                  <p className='text-white border-b rounded-[10px] p-1 '>hellow  </p>
                  <p className='text-white border-b rounded-[10px] p-1 '>hellow  </p> */}

                </div>
              </div>
              <div className='flex flex-row items-center justify-center'>
                  <div>
                    <p className="text-yellow-500 p-2 mt-10">Wanna see history? </p>
                    </div>
                    <button className='mt-10 text-white' type="button">Dashboard..</button>
                  
                </div>
              
            </div>

            {/* <div className='w-[300px] bg-black rounded-[30px] items-center justify-between mt-10 p-5 mr-2'>
              <div className="flex flex-row gap-10">
                <div className='flex flex-col item-center items-center justify-between bg-black mb-2 '>
                  <p className='text-white border-b rounded-[10px] p-2'>Service  </p>
                  <p className='text-white font-bold p-2'>Branch  </p>
                  <p className='text-white font-bold p-2'>Date  </p>
                  <p className='text-white font-bold p-2'>Status  </p>
                </div>
                <div className='flex flex-col item-center items-center justify-between bg-black mb-2 '>
                  <p className='text-yellow-500 p-2'>Service 1</p>
                  <p className='text-yellow-500 p-2'>Branch 1</p>
                  <p className='text-yellow-500 p-2'>Date 1</p>
                  <p className='p-2 text-yellow-500 font-bold'>Availed </p>
                </div>
                <div>

                </div>
              </div>
              
            </div> */}
            </div>
          </TabPanel>

      </TabsBody>
      
    </Tabs>
    </div>
  )
}

export default BookingMenu