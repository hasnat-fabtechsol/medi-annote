
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './component/Layout';
import Testa from './component/Testa';
import Signin from './app-pages/Signin';
import SignUp from './app-pages/Signup';
import PasswordRecover from './app-pages/PasswordRecover';
import NewPassword from './app-pages/NewPassword';
import Passwordchanged from './app-pages/Passwordchanged';
import DashboardLayout from './Dashboard/DashboardLayout' ;
import Project from './app-pages/DashboardComponents/Project';
import Dataset from './app-pages/DashboardComponents/Dataset';
import Members from './app-pages/DashboardComponents/Members';
import MemberPerformance from './app-pages/DashboardComponents/MemberPerformance';
import ToolLayout from './AnnotateLayout/ToolLayout';
import Annotate from './app-pages/Annotate';
import Review from './app-pages/Review';
import WebLayout from './WebPages/LayOut';
import LabelDataset from './WebPages/LabelDataset';
import EmailConfirmationPage from './app-pages/EmailConfirmation';
import LabelFile from './component/LabelFile';




function App() {
  return (
    <>
   <Router>
    <Routes>
      <Route path="/" element={<SignUp/>}/>
      <Route path="/label" element={<LabelFile/>}/>

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
        <Route path="/annotate" element={<Annotate/>}/>
        <Route path="/review" element={<Review/>}/>
      </Route>

      <Route element={<WebLayout/>}>
        <Route path="/search" element={<LabelDataset/>}/>
      </Route>
      
    </Routes>
   </Router>
{/* <Testa/> */}

    
   
  </>
  );
}

export default App;
