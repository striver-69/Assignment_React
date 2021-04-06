import React from 'react'

function Button({prop,setProp}) {
  return (
    <div>
      <button className={`ui ${prop? "red":"green"} button`} onClick={()=>setProp(prev=>!prev)}>Launch</button>
    </div>
  )
}

export default Button
