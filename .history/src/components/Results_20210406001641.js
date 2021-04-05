import React from 'react'
function Results({limit,results}) {
  return (
    <div>
    {limit}
      {
        results.map((result)=>{
          return <li key={result.flight_number}>{result.launch_success*150}{result.launch_site.site_name}</li>
        })
      }
    </div>
  )
}

export default Results
