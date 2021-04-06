import React from 'react'

function Datepicker({startDate,setStartDate}) {
  return (
    <div className="ui centered grid">
    <div class="row" style={{color:'yellow'}}><h1>Enter the launching Year of your wish</h1></div>
      <div className="ui icon input">
        <input type="number" placeholder="Set launching Year..." value={startDate} onChange={(e)=>setStartDate(e.target.value)}/>
      </div>
    </div>
  )
}

export default Datepicker
