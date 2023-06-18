import React from 'react'
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import {
  Square3Stack3DIcon,
  UserCircleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

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
      const [barber, setBarber] = React.useState('barber 1');
      const [service, setService] = React.useState('service 1');
      const [staff, setStaff] = React.useState('staff 1');
      const handleBarber=(event)=>{
        setBarber(event.target.value)
      }
      const handleService=(event)=>{
        setService(event.target.value)
      }
      const handleStaff=(event)=>{
        setStaff(event.target.value)
      }
      const [startDate, setStartDate] = useState(new Date());
    //   const [services, addServices] = useState([""]);

      const [timee,setTime]=useState("")
      const handleTime = (value) => {
        setTime(value);
        console.log(value)
      };

      const [services, setServices] = useState([]);

      const addServices = () => {
        setServices((prevServices) => [...prevServices, `You booked Service: ${service}  Time: ${timee} Branch: ${branch}`]);
      };

      const handleDelete=(index)=>{
        setServices((prevServices) => {
            const updatedServices = [...prevServices];
            updatedServices.splice(index, 1);
            return updatedServices;
          });
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

    const [stripePromise, setStripePromise] = useState(null);
    const [clientSecret, setClientSecret] = useState("");
    useEffect(() => {
      fetch("http://localhost:5252/config").then(async (r) => {
        const { publishableKey } = await r.json();
        setStripePromise(loadStripe(publishableKey));
      });
    }, []);
  
    useEffect(() => {
      fetch("http://localhost:5252/create-payment-intent", {
        method: "POST",
        body: JSON.stringify({}),
      }).then(async (result) => {
        var { clientSecret } = await result.json();
        setClientSecret(clientSecret);
      });
    }, []);

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
                <div className="flex flex-row gap-12 flex-wrap">
                   <label className="flex flex-col">
                        <div className="justify-center">
                        <p >Branch</p>
                        </div>
                        <div className="">
                            <select className="w-[100px] h-[20px] text-yellow-500 bg-gray-700 rounded" value={branch} onChange={handleBranch}>
                                <option value="branch 1" className="hover:text-yellow-500 hover:bg-black">branch 1</option>
                                    <option value="branch 2">branch 2</option>
                                    <option value="branch 3">branch 3</option>
                            </select>
                        </div>
                        <div className="bg-gray-700 mx-auto px-4 rounded justify-center">
                        <p className="text-yellow-700 font-bold">{branch}</p>
                        </div>
                   </label>
                   <label className="flex flex-col ">
                        <p>Barber</p>
                        <div className="">
                            <select className="w-[100px] h-[20px] text-yellow-500 bg-gray-700 rounded" value={barber} onChange={handleBarber}>
                                <option value="barber 1" className="hover:text-yellow-500 hover:bg-black">barber 1</option>
                                    <option value="barber 2">barber 2</option>
                                    <option value="barber 3">barber 3</option>
                            </select>
                        </div>
                        <div className="bg-gray-700 mx-auto px-4 rounded justify-center">
                        <p className="text-yellow-700 font-bold">{barber}</p>
                        </div>
                   </label>

                   <label className="flex flex-col ">
                        <p>Service</p>
                        <div className="">
                            <select className="w-[100px] h-[20px] text-yellow-500 bg-gray-700 rounded" value={service} onChange={handleService}>
                                <option value="service 1" className="hover:text-yellow-500 hover:bg-black">service 1</option>
                                    <option value="service 2">service 2</option>
                                    <option value="service 3">service 3</option>
                            </select>
                        </div>
                        <div className="bg-gray-700 mx-auto px-4 rounded justify-center">
                        <p className="text-yellow-700 font-bold">{service}</p>
                        </div>
                   </label>

                   <label className="flex flex-col ">
                        <p>Staff</p>
                        <div className="">
                            <select className="w-[100px] h-[20px] text-yellow-500 bg-gray-700 rounded" value={staff} onChange={handleStaff}>
                                <option value="staff a" className="hover:text-yellow-500 hover:bg-black">staff a</option>
                                    <option value="staff b">staff b</option>
                                    <option value="staff c">staff c</option>
                            </select>
                        </div>
                        <div className="bg-gray-700 mx-auto px-4 rounded justify-center">
                        <p className="text-yellow-700 font-bold">{staff}</p>
                        </div>
                   </label>
                   {/* <div className="w-full h-full">
                       
                   </div> */}
                   </div>
                   <div className="flex flex-row mt-10 text-yellow-700 font-bold mr-10 gap-5">
                        <label className="flex flex-col bg-black p-1 rounded-[10px]">
                                        <p className='mb-2 text-xl'>Service Date</p>
                            { 
                            /*<input className=" h-[20px] text-yellow-500 bg-gray-700 rounded" type="date" id="start" name="trip-start" onChange={handleDate}
                            value={date}
                            min="2023-01-01" max="2023-06-13"></input> */}
                                <DatePicker className='flex h-full w-full ' selected={startDate} onChange={(date) => setStartDate(date) } inline calendarContainer={MyContainer} minDate={new Date()} filterDate = {date=> date.getDay()!== 6 && date.getDay()!== 0} showYearDropdown scrollableMonthYearDropdown/>
                                <p>{startDate.getDate()}-{startDate.getMonth()}-{startDate.getFullYear()}</p>

                            </label>    
                            <label className="flex bg-black w-full h-full rounded-[10px] mr-6">
                                        <div className='flex flex-col  '>
                                            <div className='flex'>
                                            <p className='mb-10 text-xl'>Time</p>
                                            </div>
                                            <div className='flex flex-wrap gap-3 justify-center relative items-center overflow-auto h-[350px] pb-3'>
                                            <div
      className={`hover:bg-yellow-700 bg-gray-700 text-white font-bold ${
        timee==="01:50 AM" ? 'bg-yellow-600' : ''
      } focus:outline-none focus:ring focus:ring-violet-300 py-2 px-4 rounded`}
      onClick={() => handleTime('01:50 AM')}
    >
      01:50 AM
    </div>
    <div
      className={`hover:bg-yellow-700 bg-gray-700 text-white font-bold ${
        timee==="02:50 AM" ? 'bg-yellow-600' : ''
      } focus:outline-none focus:ring focus:ring-violet-300 py-2 px-4 rounded`}
      onClick={() => handleTime('02:50 AM')}
    >
      02:50 AM
    </div>
    <div
      className={`hover:bg-yellow-700 bg-gray-700 text-white font-bold ${
        timee==="03:50 AM" ? 'bg-yellow-600' : ''
      } focus:outline-none focus:ring focus:ring-violet-300 py-2 px-4 rounded`}
      onClick={() => handleTime('03:50 AM')}
    >
      03:50 AM
    </div>
    <div
      className={`hover:bg-yellow-700 bg-gray-700 text-white font-bold ${
        timee==="04:50 AM" ? 'bg-yellow-600' : ''
      } focus:outline-none focus:ring focus:ring-violet-300 py-2 px-4 rounded`}
      onClick={() => handleTime('04:50 AM')}
    >
      04:50 AM
    </div>
                  <div
      className={`hover:bg-yellow-700 bg-gray-700 text-white font-bold ${
        timee==="04:15 AM" ? 'bg-yellow-600' : ''
      } focus:outline-none focus:ring focus:ring-violet-300 py-2 px-4 rounded`}
      onClick={() => handleTime('04:15 AM')}
    >
      04:15 AM
    </div>
    <div
      className={`hover:bg-yellow-700 bg-gray-700 text-white font-bold ${
        timee==="04:30 AM" ? 'bg-yellow-600' : ''
      } focus:outline-none focus:ring focus:ring-violet-300 py-2 px-4 rounded`}
      onClick={() => handleTime('04:30 AM')}
    >
      04:30 AM
    </div>
    <div
      className={`hover:bg-yellow-700 bg-gray-700 text-white font-bold ${
        timee==="04:45 AM" ? 'bg-yellow-600' : ''
      } focus:outline-none focus:ring focus:ring-violet-300 py-2 px-4 rounded`}
      onClick={() => handleTime('04:45 AM')}
    >
      04:45 AM
    </div>
    <div
      className={`hover:bg-yellow-700 bg-gray-700 text-white font-bold ${
        timee==="05:00 AM" ? 'bg-yellow-600' : ''
      } focus:outline-none focus:ring focus:ring-violet-300 py-2 px-4 rounded`}
      onClick={() => handleTime('05:00 AM')}
    >
      05:00 AM
    </div>

    <div
      className={`hover:bg-yellow-700 bg-gray-700 text-white font-bold ${
        timee==="05:15 AM" ? 'bg-yellow-600' : ''
      } focus:outline-none focus:ring focus:ring-violet-300 py-2 px-4 rounded`}
      onClick={() => handleTime('05:15 AM')}
    >
      05:15 AM
    </div>
    <div
      className={`hover:bg-yellow-700 bg-gray-700 text-white font-bold ${
        timee==="05:30 AM" ? 'bg-yellow-600' : ''
      } focus:outline-none focus:ring focus:ring-violet-300 py-2 px-4 rounded`}
      onClick={() => handleTime('05:30 AM')}
    >
      05:30 AM
    </div>
    <div
      className={`hover:bg-yellow-700 bg-gray-700 text-white font-bold ${
        timee==="05:45 AM" ? 'bg-yellow-600' : ''
      } focus:outline-none focus:ring focus:ring-violet-300 py-2 px-4 rounded`}
      onClick={() => handleTime('05:45 AM')}
    >
      05:45 AM
    </div>
    <div
      className={`hover:bg-yellow-700 bg-gray-700 text-white font-bold ${
        timee==="06:00 AM" ? 'bg-yellow-600' : ''
      } focus:outline-none focus:ring focus:ring-violet-300 py-2 px-4 rounded`}
      onClick={() => handleTime('06:00 AM')}
    >
      06:00 AM
    </div>
    <div
      className={`hover:bg-yellow-700 bg-gray-700 text-white font-bold ${
        timee==="06:15 AM" ? 'bg-yellow-600' : ''
      } focus:outline-none focus:ring focus:ring-violet-300 py-2 px-4 rounded`}
      onClick={() => handleTime('06:15 AM')}
    >
      06:15 AM
    </div>                                        
    <div
      className={`hover:bg-yellow-700 bg-gray-700 text-white font-bold ${
        timee==="06:30 AM" ? 'bg-yellow-600' : ''
      } focus:outline-none focus:ring focus:ring-violet-300 py-2 px-4 rounded`}
      onClick={() => handleTime('06:30 AM')}
    >
      06:30 AM
    </div>
    <div
      className={`hover:bg-yellow-700 bg-gray-700 text-white font-bold ${
        timee==="06:45 AM" ? 'bg-yellow-600' : ''
      } focus:outline-none focus:ring focus:ring-violet-300 py-2 px-4 rounded`}
      onClick={() => handleTime('06:45 AM')}
    >
      06:45 AM
    </div>
    <div
      className={`hover:bg-yellow-700 bg-gray-700 text-white font-bold ${
        timee==="07:00 AM" ? 'bg-yellow-600' : ''
      } focus:outline-none focus:ring focus:ring-violet-300 py-2 px-4 rounded`}
      onClick={() => handleTime('07:00 AM')}
    >
      07:00 AM
    </div>
    <div
      className={`hover:bg-yellow-700 bg-gray-700 text-white font-bold ${
        timee==="08:00 AM" ? 'bg-yellow-600' : ''
      } focus:outline-none focus:ring focus:ring-violet-300 py-2 px-4 rounded`}
      onClick={() => handleTime('08:00 AM')}
    >
      08:00 AM
    </div>
    <div
      className={`hover:bg-yellow-700 bg-gray-700 text-white font-bold ${
        timee==="09:00 AM" ? 'bg-yellow-600' : ''
      } focus:outline-none focus:ring focus:ring-violet-300 py-2 px-4 rounded`}
      onClick={() => handleTime('09:00 AM')}
    >
      09:00 AM
    </div>

</div>

                                        </div>

                            { 
                            /*<input className=" h-[20px] text-yellow-500 bg-gray-700 rounded" type="date" id="start" name="trip-start" onChange={handleDate}
                            value={date}
                            min="2023-01-01" max="2023-06-13"></input> */}
                                {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date) } inline/> */}

                            </label>   

                    
                   </div>


                   <div className='flex mt-5'>
        <div
          className='hover:bg-yellow-700 p-2 bg-yellow-700 text-white font-bold w-[100px] rounded-lg cursor-pointer'
          onClick={addServices}
        >
          Add More
        </div>
      </div>

      <div className="p-1 flex flex-col items-start justify-center text-sm font-bold text-yellow-400 mt-10 bg-gray-700 p-5 rounded-[20px] mr-20">
        {services.map((element, index) => (
          <div key={index}>
            <div className='flex flex-row mb-5'>
                <p className='flex '>{index+1}. {element}</p>
                <div className='flex text-red-700 ml-12 justify-center items-center cursor-pointer ' onClick={()=>{handleDelete(index)}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>

                </div>
            </div>
          </div>
        ))}
      </div>

          </TabPanel>
          <TabPanel key={"profile1"} value={"profile1"} className="py-0">
            <div className='flex flex-col justify-center items-center mt-10 mr-10 '>
                <div className='flex flex-row flex-wrap gap-5'>
                    <div className='flex flex-col'>
                        <p className='text-yellow-700 font-bold text-lg'>Name</p>
                        <input className='bg-black rounded-[20px] focus:outline-none hover:border-yellow-700' type="text"  required/>
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-yellow-700 font-bold text-lg'>Email</p>
                        <input className='bg-black rounded-[20px] focus:outline-none hover:border-yellow-700' type="email" name=""  id="" required/>
                    </div>
                </div>

            </div>
            <div className='flex flex-col justify-center items-center mt-10 mr-10 '>
                <div className='flex flex-row flex-wrap gap-5'>
                <div className='flex flex-col'>
                        <p className='text-yellow-700 font-bold text-lg'>Phone</p>
                        <input className='bg-black rounded-[20px] focus:outline-none hover:border-yellow-700' type="number"  required/>
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-yellow-700 font-bold text-lg'>State</p>
                        <input className='bg-black rounded-[20px] focus:outline-none hover:border-yellow-700' type="text" name="" id="" required/>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center mt-10 mr-10 '>
                <div className='flex flex-row flex-wrap gap-5'>
                <div className='flex flex-col'>
                        <p className='text-yellow-700 font-bold text-lg'>Country</p>
                        <input className='bg-black rounded-[20px] focus:outline-none hover:border-yellow-700' type="text" required/>
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-yellow-700 font-bold text-lg'>Postal Code</p>
                        <input className='bg-black rounded-[20px] focus:outline-none hover:border-yellow-700' type="number" name="" id="" required/>
                    </div>
                </div>

            </div>
            <div className='flex flex-col justify-center items-center mt-10 mr-10 '>
                <div className='flex flex-row flex-wrap gap-5'>
                <div className='flex flex-col'>
                        <p className='text-yellow-700 font-bold text-lg'>Street Address</p>
                        <textarea className='bg-black rounded-[20px] focus:outline-none hover:border-yellow-700' name="" id="" placeholder='Street Address' cols="45" rows="2"></textarea>
                    </div>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center mt-10 mr-10 '>
                <div className='flex flex-row flex-wrap gap-5'>
                    <div className='flex flex-col'>
                        <p className='text-yellow-700 font-bold text-lg'>Service Remarks</p>
                        <textarea className='bg-black rounded-[20px] focus:outline-none hover:border-yellow-700' name="" id="" placeholder='Service Remarks' cols="45" rows="2"></textarea>
                    </div>
                </div>

            </div>
          </TabPanel>
          <TabPanel key={"profile2"} value={"profile2"} className="py-0">
          <div className='flex flex-col items-center justify-between'>
            <Payment/>
          </div>
          </TabPanel>
          <TabPanel key={"profile3"} value={"profile3"} className="py-0">
            <div className='flex flex-row flex-wrap'>
              <div className='w-[300px] bg-black rounded-[30px] items-center justify-between mt-10 p-5 mr-2'>
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
                
              </div>
              <div className='w-[300px] bg-black rounded-[30px] items-center justify-between mt-10 p-5 mr-2'>
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
              
            </div>

            <div className='w-[300px] bg-black rounded-[30px] items-center justify-between mt-10 p-5 mr-2'>
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
                  <p className='p-2 text-yellow-500 font-bold'>Availed </p>
                </div>
                <div>

                </div>
              </div>
              
            </div>
            </div>
          </TabPanel>

      </TabsBody>
      
    </Tabs>
    </div>
  )
}

export default BookingMenu