import React, { useState } from 'react';
import data from './data';
import List from './List';
import './App.css';



const App = () => {

  const [aspect, setAspect] = useState(data);
  return (
    <main> 
      <section className = 'container'>
        <h3>{aspect.length} aspects of football</h3>
        <List aspect={aspect}/>
        <button onClick={() => setAspect([])} >Clear Aspects</button>
      </section>
    </main> 
  );
}

export default App;
