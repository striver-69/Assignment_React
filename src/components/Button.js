import React from 'react'

function Button({prop,setProp,val}) {
  return (
      <div className="ui center aligned container">
        <button className={`ui ${prop? "red":"green"} button`} onClick={()=>setProp(prev=>!prev)}>{val}</button>
      </div>
  )
}

export default Button
