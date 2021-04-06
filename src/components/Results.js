import React from 'react'
function Results({limit,results}) {
  return (
    <div className="column">
    {limit}
      {
        results.map((result)=>{
          return (<div key={result.flight_number} className="ui fluid card">
          <div className="image">
            <img src={`${result.links.flickr_images[0]}` } alt=""/>
          </div>
            <div className="content">{result.launch_site.site_name}</div>
          </div>)
        })
      }
    </div>
  )
}

export default Results
