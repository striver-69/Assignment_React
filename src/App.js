import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import Results from './components/Results';

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

  console.log(results)
  console.log(startDate)
  return (  
    <div className='ui celled grid'>
      <div className="ui three column divided grid">
      <h2 class="ui header">
        <i class="space shuttle icon"></i>
          <div class="content">Rockets for the future!</div>
      </h2>
      <label>
      Limit:
      <input type="number" value={limit} onChange={(e)=>setLimit(e.target.value)}/>
      </label>
      <button className={`ui ${launch? "red":"green"} button`} onClick={()=>setLaunch(prev=>!prev)}>Launch</button>
      <button className={`ui ${land? "red":"green"} button`} onClick={()=>setLand(prev=>!prev)}>Land</button>
      <DatePicker
      selected={startDate}
      onChange={date => setStartDate(date)}
      showYearPicker
      dateFormat="yyyy"
      yearItemNumber={9}
    />
      <Results limit={limit} results={results}/>
      </div>
    </div>
  );
};

export default App;
