import React from 'react'
function Results({limit,results}) {
  return (
    <div>
    {limit}
      {
        results.map((result)=>{
          return <li>{result.launch_year}</li>
        })
      }
    </div>
  )
}

export default Results
