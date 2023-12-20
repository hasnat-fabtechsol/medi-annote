
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './component/Layout';
import Testa from './component/Testa';
import Signin from './Pages/Signin';
import SignUp from './Pages/Signup';
import PasswordRecover from './Pages/PasswordRecover';
import NewPassword from './Pages/NewPassword';
import Passwordchanged from './Pages/Passwordchanged';
import DashboardLayout from './Dashboard/DashboardLayout' ;
import Project from './Pages/DashboardComponents/Project';
import Dataset from './Pages/DashboardComponents/Dataset';
import Members from './Pages/DashboardComponents/Members';
import MemberPerformance from './Pages/DashboardComponents/MemberPerformance';
import ToolLayout from './AnnotateLayout/ToolLayout';
import Annotate from './Pages/Annotate';
import Review from './Pages/Review';
import WebLayout from './WebPages/LayOut';
import LabelDataset from './WebPages/LabelDataset';
import EmailConfirmationPage from './Pages/EmailConfirmation';




function App() {
  return (
    <>
   <Router>
    <Routes>
      <Route path="/" element={<SignUp/>}/>

      <Route element={<Layout/>}>

      <Route path="/email-confirmation" element={<EmailConfirmationPage/>}/>
      <Route path="/sign-in" element={<Signin/>}/>
      <Route path="/password-recover" element={<PasswordRecover/>}/>
      <Route path="/new-password" element={<NewPassword/>}/>
      <Route path="/password-changed" element={<Passwordchanged/>}/>
      


      </Route>
      
      <Route element={<DashboardLayout/>}>
        <Route path="/project" element={<Project />}/>
        <Route path="/dataset/:id" element={<Dataset />}/>
        <Route path="/dataset/" element={<Dataset />}/>
        <Route path="/members" element={<Members />}/>
        <Route path="/memberperformance" element={<MemberPerformance />}/>
      </Route>

      <Route element={<ToolLayout/>}>
        <Route path="/tool" element={<Testa/>}/>
        <Route path="/annotate" element={<Annotate/>}/>
        <Route path="/review" element={<Review/>}/>
      </Route>

      <Route element={<WebLayout/>}>
        <Route path="/web" element={<Testa/>}/>
        <Route path="/search" element={<LabelDataset/>}/>
      </Route>
      
    </Routes>
   </Router>
{/* <Testa/> */}

    
   
  </>
  );
}

export default App;
