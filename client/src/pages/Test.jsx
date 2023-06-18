import React from 'react'
import DatePicker,{ CalendarContainer } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';

const Test = () => {
    const [startDate, setStartDate] = useState(new Date());
    const MyContainer = ({ className, children }) => {
        return (
          <div style={{ padding: "16px", background: "black", color: "#fff" }}>
            <CalendarContainer className={className}>
              <div style={{ background: "yellow" }}>
                What is your favorite day?
              </div>
              <div style={{background: "black", position: "relative" }}>{children}</div>
            </CalendarContainer>
          </div>
        );
      };
    
  
  return (
    <div>
                                <DatePicker className='h-full w-full relative' selected={startDate} onChange={(date) => setStartDate(date) } inline calendarContainer={MyContainer}/>

    </div>
  )
}

export default Test