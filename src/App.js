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
    <div className='ui container'>
      <Header/>
      <div className="ui divider"></div>
      <Input limit={limit} setLimit={setLimit}/>
      <div className="ui divider"></div>
      <div className="ui segment">
        <div className="ui two column very relaxed grid">
          <div className="column">
            <Button prop={launch} setProp={setLaunch} val="launch"/>
          </div>
          
          <div className="column">
            <Button prop={land} setProp={setLand} val="land"/>
          </div>
        </div>
        <div className="ui vertical divider"></div>
      </div>
      <div className="ui divider"></div>
      <Datepicker startDate={startDate} setStartDate={setStartDate}/>
      <div className="ui divider"></div>
      <div className="ui three column grid">
        <Results limit={limit} results={results}/>
      </div>
    </div>
  );
};

export default App;
