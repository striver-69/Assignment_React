import React,{useEffect} from 'react'

useEffect(()=>{
  async function fetchData(){
    const request=await axios.get('https://api.spaceXdata.com/v3/launches',{params:{
      limit:limit,
      launch_success:success
    }})
    setResults(request.data)
    return request
  }
  fetchData()
},[limit])

function Results() {
  return (
    <div>
      
    </div>
  )
}

export default Results
