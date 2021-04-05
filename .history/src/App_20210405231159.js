import React, { useState, useEffect } from 'react';
// import Posts from './components/Posts';
// import Pagination from './components/Pagination';
// import axios from 'axios';
// import axios from './components/axios'
import axios from 'axios'
import './App.css';

const App = () => {
  const [limit,setLimit]=useState(100)
  const [success,setSuccess]=useState(true)
  const [launchFilter,setLaunchFilter]=useState(false)
  const [landFilter,useLandFilter]=useState(false)
  const [results, setResults] = useState([]);
  

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

  console.log(results)
  return (  
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>My Blog</h1>
      <input type="number" min="1" max="100"value={limit} onChange={(e)=>setLimit(e.target.value)}/>
    </div>
  );
};

export default App;