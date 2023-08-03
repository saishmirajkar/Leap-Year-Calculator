import './App.css'
import Navbar from './Navbar';
import YearStruct from "./YearStruct" ; 
import Findquicky from './Findquicky';
import React, {useState} from 'react';


function App() {
  const [adding2, setAdding2] = useState(null);

  const adding = (data) => {
   // console.log(data);
    setAdding2(data);
  }

  return (
    <div>
      <Navbar/>  
      <YearStruct adding1={adding} />
      <Findquicky adding3={adding2} /> 
    </div> 
  );
}

export default App;

