
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './component/Layout';
import Testa from './component/Testa';
import { Signup } from './pages/Signup';
import EmailConfirmation from './pages/EmailConfirmation';
import Signin from './pages/Signin';
import PasswordRecover from './pages/PasswordRecover';
import NewPassword from './pages/NewPassword';
import Passwordchanged from './pages/Passwordchanged';
import DashboardLayout from './Dashboard/DashboardLayout' ;
import Project from './Pages/DashboardComponents/Project';
import Dataset from './Pages/DashboardComponents/Dataset';
import Members from './Pages/DashboardComponents/Members';
import MemberPerformance from './Pages/DashboardComponents/MemberPerformance';




function App() {
  return (
    <>
   <Router>
    <Routes>
      <Route path="/" element={<Signup/>}/>

      <Route element={<Layout/>}>

      <Route path="/email-confirmation" element={<EmailConfirmation/>}/>
      <Route path="/sign-in" element={<Signin/>}/>
      <Route path="/password-recover" element={<PasswordRecover/>}/>
      <Route path="/new-password" element={<NewPassword/>}/>
      <Route path="/password-changed" element={<Passwordchanged/>}/>
      


      </Route>
      
      <Route element={<DashboardLayout/>}>
        <Route path="/project" element={<Project />}/>
        <Route path="/dataset" element={<Dataset />}/>
        <Route path="/members" element={<Members />}/>
        <Route path="/memberperformance" element={<MemberPerformance />}/>

     


  
       </Route>
      
    </Routes>
   </Router>
{/* <Testa/> */}

    
   
  </>
  );
}

export default App;
