
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './component/Layout';
import Testa from './component/Testa';
import DashboardLayout from './Dashboard/DashboardLayout';
import Header from './Dashboard/Header';
import SideNav from './Dashboard/SideNav';
import Project from './Pages/DashboardComponents/Project';
import Dataset from './Pages/DashboardComponents/Dataset';
import Members from './Pages/DashboardComponents/Members';


function App() {
  return (
    <>
   <Router>
    <Routes>

      <Route element={<Layout/>}>
      <Route path="/" element={<Testa/>}/> 
      </Route>
      
      <Route element={<DashboardLayout/>}>
        <Route path="/project" element={<Project />}/>
        <Route path="/dataset" element={<Dataset />}/>
        <Route path="/members" element={<Members />}/>
        
  
       </Route>
      
    </Routes>
   </Router>
{/* <Testa/> */}

    
   
  </>
  );
}

export default App;
