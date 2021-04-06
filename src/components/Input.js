import React from 'react'

function Input({limit,setLimit}) {
  return (
    <div className="ui inverted segment">
      <div className="ui centered grid">
          <div className="ui inverted input">
            <input type="text" value={limit} onChange={(e)=>setLimit(e.target.value)} placeholder="Limit..."/>
          </div>
      </div>
    </div>
  )
}

export default Input

