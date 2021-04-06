import React from 'react'

function Input({limit,setLimit}) {
  return (
    <div className="ui big icon input">
      <input type="text" value={limit} onChange={(e)=>setLimit(e.target.value)} placeholder="Limit..."/>
    </div>
  )
}

export default Input

