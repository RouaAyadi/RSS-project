/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Article from './components/Article'

function App() {
  const [articles,setArticles] = useState([]);
  console.log(articles);

  const getArticles=async()=>{
    try{
        const res=await axios.get("http://localhost:4000");
        setArticles(res.data);
    }
    catch(err){
        console.log(err);
    }
  }

  useEffect(()=>{
    getArticles();
  },[]);

  return (
    <>
      <h1 className="text-3xl font-bold">Your RSS Feed</h1>
      <div className="flex flex-wrap justify-center">
        {articles.map((article,index)=>(
          <Article key={index} article={article}/>
        ))}
      </div>
    </>
  )
}

export default App
