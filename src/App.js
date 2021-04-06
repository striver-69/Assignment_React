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
  const [startDate, setStartDate] = useState(2020);
  const [first,setFirst]=useState(0)

  useEffect(()=>{
    if(first!==0)
    {
      async function fetchData(){
        const request=await axios.get('https://api.spaceXdata.com/v3/launches',{params:{
          limit:limit,
          launch_success:launch,
          land_success:land,
          launch_year:startDate
        }})
        setResults(request.data)
      }
  
        const timeoutId=setTimeout(()=>{
          if(limit){
            fetchData()
          }
        },500)
    
        return ()=>{
          clearTimeout(timeoutId)
        }
    }
    else{
      async function fetchData(){
        const request=await axios.get('https://api.spaceXdata.com/v3/launches',{params:{
          limit:limit
        }})
        setResults(request.data)
      }
      fetchData()
      setFirst(first+1)
    }
  },[limit,launch,land,startDate])

  return (  
    <div className='ui container'>
      <div className="ui inverted segment">
      <Header/>
      <div className="ui divider"></div>
      <Input limit={limit} setLimit={setLimit}/>
      <div className="ui divider"></div>
      <div className="ui inverted segment">
        <div className="ui two column very relaxed grid">
          <div className="column">
            <Button prop={launch} setProp={setLaunch} val="SetLaunch"/>
          </div>
          <div className="column">
            <Button prop={land} setProp={setLand} val="SetLand"/>
          </div>
        </div>
        <div className="ui vertical divider">OR</div>
      </div>
      <div className="ui divider"></div>
      <Datepicker startDate={startDate} setStartDate={setStartDate}/>
      <div className="ui divider"></div>
      <div className="ui segment">
        <Results results={results}/>
      </div>
      </div>
    </div>
  );
};

export default App;
