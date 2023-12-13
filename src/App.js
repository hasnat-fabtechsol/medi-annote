
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './component/Layout';
import Testa from './component/Testa';
import DashboardLayout from './Dashboard/DashboardLayout';
import Header from './Dashboard/Header';
import SideNav from './Dashboard/SideNav';


function App() {
  return (
    <>
   <Router>
    <Routes>

      <Route element={<Layout/>}>

      <Route path="/" element={<Testa/>}/>
      <Route path="/dashboard" element={<DashboardLayout/>}>
        
      </Route>  
    

      </Route>
      
    </Routes>
   </Router>
{/* <Testa/> */}

    
   
  </>
  );
}

export default App;
