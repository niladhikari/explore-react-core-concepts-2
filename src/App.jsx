// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter';
import Friends from './Friends';
import Team from './Team';
import User from './User';

function App() {
 
  const handleClick = ()=>{
    alert('You clicked me!')
  }

  const addToFive = (num) =>{
    alert(num + 5);
  }

  return (
    <>
      
      <h3 >React Core Concepts 2</h3>
       <Counter></Counter>
       <Team></Team>
       <User></User>
       <Friends></Friends>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => { alert('Click the button') }}>Click inside</button>

      <button onClick={() => addToFive(3)}>Add</button>
      
    </>
  )
}

export default App
