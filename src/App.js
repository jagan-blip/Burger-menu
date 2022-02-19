import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
function App() {
  const [open,setOpen] = useState(false)
  return (
    <div className="App">
      <div  className={`burgerbtn ${open ? "open" : ""}`}>
        
      </div>
      <div onClick={(e) => {
        e.preventDefault();
        setOpen(!open)
      }} className={`burgerbtn ${open ? "open" : ""}`}>
        <label className='spn'>
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      <div   className={`burgerbtn ${open ? "open" : ""}` } id="cross">
        <label onClick={(e) => {
        e.preventDefault();
        setOpen(!open)
      }} className='spn2'>
          <span></span>
          <span></span>
     
        </label>
      </div>
    </div>
  );
}

export default App;
