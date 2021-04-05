import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import Results from './components/Results';

const App = () => {
  const [limit,setLimit]=useState(0)
  const[launch,setLaunch]=useState(false)
  const [results, setResults] = useState([]);

  useEffect(()=>{
    async function fetchData(){
      const request=await axios.get('https://api.spaceXdata.com/v3/launches',{params:{
        limit:limit,
        launch_success:launch
      }})
      setResults(request.data)
      console.log(limit)
    }
    
      const timeoutId=setTimeout(()=>{
        if(limit){
          fetchData()
        }
      },500)
  
      return ()=>{
        clearTimeout(timeoutId)
      }
      
  },[limit])

  
  return (  
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>My Blog</h1>
      <button onClick={()=>setLimit(prev=>prev+1)}>ADD</button>
      <button onClick={()=>setLaunch(prev=>!prev)}>Launch</button>
      <Results limit={limit} results={results}/>
    </div>
  );
};

export default App;
