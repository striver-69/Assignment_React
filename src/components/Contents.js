import React from 'react'

function Contents({result}) {
  console.log(result)
  return (
    <div className="content">
      <div className="ui sizer vertical segment">
        <div className="ui yellow huge header">
          Description
          <div className="ui text container">
            <p style={{color:'white'}}>{result.details}</p>
          </div>
        </div>
        <div className="ui divider"></div>
        <div className="ui yellow huge header">
          Launch Details
          <div className="ui text container">
            <p style={{color:'white'}}>{`The sight of the launch was ${result.launch_site.site_name} (${result.launch_site.site_name_long}). The status of the launch was ${result.launch_success ? 'Success':"Failure"}, Launch date was ${result.launch_date_utc.toString()} `}</p>
          </div>
        </div>
        <div className="ui divider"></div>
        <div class="ui yellow huge header">
          Mission and Rockets
          <div className="ui text container">
            <p style={{color:'white'}}>{`The name of the Rocket was ${result.rocket.rocket_name} and it's type was ${result.rocket.rocket_type} The name of the mission was ${result.mission_name}` }</p>
          </div>
        </div>
        <div className="ui divider"></div>
      </div>
    </div>
  )
}

export default Contents
