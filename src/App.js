import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import Results from './components/Results';
import Input from './components/Input';
import Header from './components/Header';
import Button from './components/Button';
import Datepicker from './components/Datepicker';

const App = () => {
  const [limit,setLimit]=useState(100)
  const [launch,setLaunch]=useState(false)
  const [land,setLand]=useState(false)
  const [results, setResults] = useState([]);
  const [startDate, setStartDate] = useState(new Date());

  useEffect(()=>{
    async function fetchData(){
      const request=await axios.get('https://api.spaceXdata.com/v3/launches',{params:{
        limit:limit,
        launch_success:launch,
        land_success:land,
        launch_year:startDate.getFullYear()
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
      
  },[limit,launch,land,startDate])

  return (  
    <div className='ui celled grid'>
      <div className="ui three column divided grid">
      <Header/>
      <Input limit={limit} setLimit={setLimit}/>
      <Button prop={launch} setProp={setLaunch}/>
      <Button prop={land} setProp={setLand}/>
      <Datepicker startDate={startDate} setStartDate={setStartDate}/>
      <Results limit={limit} results={results}/>
      </div>
    </div>
  );
};

export default App;
