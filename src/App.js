import logo from './logo.svg';
import './App.css';
import Auth from './compmemt/Auth';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashbord from './compmemt/Dahbord';
import PdfRead from './compmemt/PdfRead';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Auth/>}/>
        <Route path='/dashbord' element={<Dashbord/>}/>
        <Route path='/pdf' element={<PdfRead/>}/>
        
      </Routes>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
