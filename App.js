import React, { useState } from "react";
import './index.css';
import './App.css'



const App = () =>{
  let Time = setInterval((curtime) => {
    timer(new Date().toLocaleTimeString());
  }, 1000);
  const state = useState();
  const [count,setcount]= useState(0);
  const [time,timer] = useState(new Date().toLocaleTimeString());
  const IncNum=()=>{
    setcount(count+1);
  }; 
  const DecNum=()=>{
    count>0?setcount(count-1):setcount(0);
  }; 
  const AC=()=>{
    setcount(0);
  };
  const curtime=()=>{
    timer(new Date().toLocaleTimeString());
  };
return (<>
<header>Counter & Current Time</header>
<div id="center"><div className="center">
<h1> {count} </h1>
<h2>  {time} </h2>
<button onClick={IncNum}>Click Me</button>
<button onClick={DecNum}>Delete</button>
<button onClick={AC}>Clear All</button>
<button onClick={curtime}>Get Current Time</button>
</div></div>
</>);

};

export default App;
