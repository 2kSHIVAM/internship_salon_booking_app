import { useState } from "react";
import controlImage from './control.png'
import logoImage from './logo.png'
import DashboardServiceComponent from './DashboardServiceComponent'
import DashboardTeamComponent from "./DashboardTeamComponent";
import DashboardVoucherComponent from './DashboardVoucherComponent';
import DashboardBookingsComponent from "./DashboardBookingsComponent";
// import 'flowbite'
const Dashboard = () => {
  const [open, setOpen] = useState(true);
  const [choice,setChoice]=useState("home")


  const Menus = [
    { title: "Service", src: "./../assets/Chart_fill",gap: true },
    { title: "Inbox", src: "./../assets/Chat",gap: true },
    { title: "Accounts", src: "./../assets/User", gap: true },
    { title: "Bookings", src: "./../assets/Search",gap: true },
    { title: "Teams", src: "./../assets/Chart",gap: true },
    { title: "Vouchers", src: "",gap: true},
    { title: "Setting", src: "./../assets/Setting",gap: true },
  ];

  const handleClick = (value) => {
    // setChoice(value)
    // console.log(value)
    setChoice(value)
    console.log(choice)
    console.log("hello")
  }

  return (
    <div className="flex mt-10">
      <div
        className={` ${
          open ? "w-60" : "w-20 "
        } bg-gradient-to-b from-gray-700 to-yellow-700 rounded-[20px] ml-5 h-[590px] p-5  pt-8 fixed  duration-300 z-0`}
      >
        <img
          src={controlImage}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-yellow-700
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={logoImage}
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Admin
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
          <div onClick={()=>{handleClick(Menu.title)}}>
           <li
           key={index}
           className={`flex rounded-md p-2 cursor-pointer bg-transparent hover:bg-black hover:text-yellow-400 focus:text-yellow-500 text-white border-2 border-white text-sm items-center gap-x-4 
           ${Menu.gap ? "mt-5" : "mt-2"} ${index === 0 && "bg-light-white"}`}
         >
           
             {/* <img src={`${Menu.src}.png`} /> */}
             <span className={`${!open && "hidden"} origin-left duration-200 text-[15px]`}>
               {Menu.title}
             </span>
          
         </li> </div>
          ))}
         
        </ul>
      </div>
      <div className="h-full flex flex-col flex-1 p-7 ml-20">
        {
            choice==="home"?<h1 className="text-5xl flex items-center text-yellow-500 justify-center font-semibold ">Welcome to the Dashboard</h1>:choice==="Service"? <DashboardServiceComponent/>:choice==="Teams"?<DashboardTeamComponent/>:choice==="Vouchers"?<DashboardVoucherComponent/>:choice==="Bookings"?<DashboardBookingsComponent/>:""
        }
      </div>
    </div>
  );
};
export default Dashboard;