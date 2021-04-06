import React from 'react'

function Button({prop,setProp,val}) {
  return (
      <div className="ui center aligned container">
        <div class="row" style={{color:'yellow'}}><h1>{`${prop?"":"Un"}Successfull ${val==="SetLaunch" ? "Lunching":"Landing"} `}</h1></div>
        <button className={`ui ${prop? "red":"green"} button`} onClick={()=>setProp(prev=>!prev)}>{val}</button>
      </div>
  )
}

export default Button
