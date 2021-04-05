import React, { useState, useEffect } from 'react';
// import Posts from './components/Posts';
// import Pagination from './components/Pagination';
// import axios from 'axios';
import axios from './components/axios'
import './App.css';

const App = () => {
  const [limit,setLimit]=useState(100)
  const [success,setSuccess]=useState(false)
  const [launchFilter,setLaunchFilter]=useState(false)
  const [landFilter,useLandFilter]=useState(false)
  const [results, setResults] = useState([]);
  

  useEffect(()=>{
    async function fetchData(){
      const request=await axios.get({limit:100})
      setPosts(request.data)
      return request
    }
    fetchData()
  },[text])

  useEffect

  console.log(posts)
  return (  
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>My Blog</h1>
      <input type="number" min="1" max="100"value={text} onChange={(e)=>setText(e.target.value)}/>
    </div>
  );
};

export default App;
