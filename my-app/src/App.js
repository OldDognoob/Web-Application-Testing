import React,{useState} from 'react';

import Display from './components/Display';
import DashBoard from './components/Dashboard';


import './App.css';


function App(){
  // set up possible slices of states and setter functions
  const[balls, setBalls]=useState();
  const[strikes, setStrikes]=useState();
  const[hits,setHits]=useState();
  const[fouls,setFouls]=useState();

  const handleBalls = () =>{
    if(balls < 4){
      setBalls(+1);
    }else{
      setBalls(0);
      setStrikes(0);
    }
     
  }

  const handleStrikes = () =>{
    if (strikes < 3){
      setStrikes(+1);
    }else{
      setStrikes(0);
      setBalls(0);
    }
  }

   const handleHits = () =>{
     setBalls(0);
     setStrikes(0);
   }

   const handleFoul = () =>{
    if(strikes < 2){
      setFouls( fouls +1)
      setStrikes(+1)
    }else{
      setFouls( fouls +1)
    }
    }
   


    return (
      <div className="App">
        <h1>Baseball App</h1>
        <Display 
        balls={balls}
        strikes={strikes}
        fouls={fouls}
        hits={hits}
        />
        <DashBoard 
        handleBalls={handleBalls}
        handleStrikes={handleStrikes}
        handleHits={handleHits}
        handleFoul={handleFoul}
        />
      </div>
    );

}

export default App;