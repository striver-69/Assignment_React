import React from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

function Datepicker({startDate,setStartDate}) {
  
  return (
    <div>
      <DatePicker
      selected={startDate}
      onChange={date => setStartDate(date)}
      showYearPicker
      dateFormat="yyyy"
      yearItemNumber={9}
    />
    </div>
  )
}

export default Datepicker
