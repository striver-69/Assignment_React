import React from 'react'
import Contents from './Contents'
function Results({results}) {
  return (
    <div className="ui inverted segment">
    <div className="ui relaxed middle aligned animated list">
      {
        results.slice(0).reverse().map((result)=>{
          return (
            <div key={result.flight_number} className="item">
            <img className="ui small image" src={`${result.links.flickr_images[0]}` } onerror="https://live.staticflickr.com/65535/50500804918_eb1187e1b2_o.jpg" alt=""/>
            <Contents result={result}/>
          </div>
            
          )
        })
      }
    </div>
    </div>
  )
}

export default Results
