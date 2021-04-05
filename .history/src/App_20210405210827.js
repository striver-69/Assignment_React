import React, { useState, useEffect } from 'react';
// import Posts from './components/Posts';
// import Pagination from './components/Pagination';
// import axios from 'axios';
import './App.css';

const App = () => {
  const [text,setText]=useState(0)
  // const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage] = useState(10);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     setLoading(true);
  //     const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  //     setPosts(res.data);
  //     setLoading(false);
  //   };

  //   fetchPosts();
  // }, []);

  const url=`https://api.spaceXdata.com/v3/launches?limit=${text}`

  useEffect(()=>{
    if(text=== null)
      setText(0)
    else if(text>100)
      setText(100)
    console.log(url)
  },[text])
  return (  
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>My Blog</h1>
      <input type="text"value={text} onChange={(e)=>setText(e.target.value)}/>
    </div>
  );
};

export default App;
