import React from 'react'

function Button({prop,setProp,val}) {
  return (
      <div className="ui center aligned container">
        <div class="row" style={{color:'yellow'}}><h2>{`${prop?"":"Un"}Successfull ${val==="SetLaunch" ? "Lunching":"Landing"} `}</h2></div>
        <button className={`ui ${prop? "green":"red"} button`} onClick={()=>setProp(prev=>!prev)}>{val}</button>
      </div>
  )
}

export default Button
