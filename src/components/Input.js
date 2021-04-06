import React from 'react'

function Input({limit,setLimit}) {
  return (
    <div className="ui inverted segment">
      <div className="ui two column centered grid">
      <div class="row" style={{color:'yellow'}}><h1>Enter Limits according to your wish</h1></div>
          <div className="ui inverted input">
            <input type="number" value={limit} onChange={(e)=>setLimit(e.target.value)} placeholder="Limit..."/>
          </div>
      </div>
    </div>
  )
}

export default Input

