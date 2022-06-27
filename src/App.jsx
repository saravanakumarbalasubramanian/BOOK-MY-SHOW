import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Route , Routes} from "react-router-dom" ;
import DefaultHOC from './HOC/Default.HOC';
import Temp from './components/temp';
import DefaultLayout from './layouts/Default.layout';


// function Name() {
//   return <h1>Hello</h1>
// };
function App() {
  return (
  <>

   <Routes>
   <Route exact path='/' element={<DefaultLayout/>} />
   </Routes>
   
  
    
    </>
  );
}

export default App;

