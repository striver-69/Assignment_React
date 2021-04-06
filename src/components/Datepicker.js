import React from 'react'

function Datepicker({startDate,setStartDate}) {
  return (
    <div className="ui centered grid">
      <div className="ui icon input">
        <input type="number" placeholder="Set launching Year..." value={startDate} onChange={(e)=>setStartDate(e.target.value)}/>
      </div>
    </div>
  )
}

export default Datepicker
