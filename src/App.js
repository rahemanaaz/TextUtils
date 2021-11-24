//import { useState } from 'react/cjs/react.development';
import './App.css';
//import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import Alert from './Components/Alert.js';
//import React from "react";

// import {
//   BrowserRouter as Router,
//   Route,
//   Switch
// } from "react-router-dom";


function App() {
  const[mode, setMode]= useState("light");//whether dark mode is enable or not
  const [alert, setAlert] = useState(null); // this will set the alert
  const showAlert = (message , type)=>{                    // it helps to show alert function and basically it is a function
      setAlert({
        msg:message,
        type: type
    })             
    setTimeout(() =>{
      setAlert(null);
    },1500);
  }
 
  const toggleMode = () =>{
    if (mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = "#132e48"
    showAlert("Dark mode has been enabled", 'success');
    document.title= "TextUtils- Dark Mode- Enable";

    }
    else{
    setMode('light');
    document.body.style.backgroundColor = "White"
    showAlert("Light mode has been enabled", 'success');
    document.title= "TextUtils- Light Mode- Enable";
  }
}


  return (
    <>
  
    

    {/* <Router> */}
    <Navbar title ="TextUtils" mode = {mode} toggleMode = {toggleMode}/>
    <Alert alert =  {alert} />
      
    <div className="container my-3">
       {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route> */}
          
          {/* <Router exact path="/"> */}
           <TextForm showAlert={showAlert} heading=" Enter The Text to Analyse below" mode={mode}/>
          {/* </Router>
        </Switch>
     */}
    </div>
    {/* </Router> */}
  </> 
     
   
  
    
   
  );


}

export default App;