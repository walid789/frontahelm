import logo from './logo.svg';
import './App.css';
import Auth from './compmemt/Auth';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashbord from './compmemt/Dahbord';
import PdfRead from './compmemt/PdfRead';
import Addsentence from './compmemt/Add_sentence';
import UpdateChallenge from './compmemt/UpdateChallenge';
import AddChallenge from './compmemt/AddChallenge'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Auth/>}/>
        <Route path='/dashbord' element={<Dashbord/>}/>
        <Route path='/pdf' element={<PdfRead/>}/>
        <Route path='/addsent' element={<Addsentence/>}/>
        <Route path='/updatechallenge' element={<UpdateChallenge/>}/>
        <Route path='/addChallenge' element={<AddChallenge/>}/>
      </Routes>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
