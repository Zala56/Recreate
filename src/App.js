import logo from './logo.svg';
import './App.css';
import Header from "./Component/Header";
import Home from './Component/Home';
import Work from './Component/Work';
import Contact from './Component/Contact';
import { Toaster } from "react-hot-toast";
import Time from './Component/Time';
import Footer from './Component/Footer';
import Ew from './Component/Ew';

import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';


function App() {
  return (
    <>
    
    
        <Header/>
        <Router>
          <Routes>
          <Route path="/ew" element={<Ew/>}></Route>
          <Route path="/" element={ <Home/>}></Route>
         
          <Route path="/" element={     <Work/>}></Route>
          <Route path="/" element={  <Contact/>}></Route>
            </Routes>
           
          </Router>
        
     
     
    

     
     
     
       
      
     
      <Toaster />
    </>
  );
}

export default App;
