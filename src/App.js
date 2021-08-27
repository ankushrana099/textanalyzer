import React, {useState} from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Footer from "./components/Footer";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState('light');
const[alert, setAlert]= useState(null);
const showAlert =(message, type)=>{
  setAlert({
    message:message,
    type:type
  })

}

const toggleMode = ()=>{
  if(mode === 'light'){
    setMode('dark')
    document.body.style.backgroundColor ="#042743";
    showAlert("Dark mode has been enabled" , "success")
  }
  else{
    setMode('light')
    document.body.style.backgroundColor ="white";
    showAlert("Light mode has been enabled" , "success")
  }
}
  return (
    <>
    <Router>
      <Navbar title= "Text Analyzer"  mode = {mode} toggleMode = {toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Switch>
          <Route path="/about">
            <About />
            </Route>
          <Route path="/">
          <TextForm  mode = {mode}heading="Enter the Text to analyze"/>
          </Route>
        </Switch>
        <Footer/>
      </div>
      </Router>
    </>
  );
}

export default App;
