import React from 'react'
function Results({limit,results}) {
  return (
    <div>
    {limit}
      {
        results.map((result)=>{
          console.log(result.links.flickr_images[0])
          return <div key={result.flight_number}>{result.launch_success*150}{result.launch_site.site_name}
          <div className="ui small images">
            <img src={`${result.links.flickr_images[0]}` } alt=""/>
          </div>
          </div>
        })
      }
    </div>
  )
}

export default Results
