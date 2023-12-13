
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './component/Layout';
import Testa from './component/Testa';


function App() {
  return (
    <>
   <Router>
    <Routes>

      <Route element={<Layout/>}>

      <Route path="/r" element={<Testa/>}/>
      </Route>
    </Routes>
   </Router>
{/* <Testa/> */}

    
   
  </>
  );
}

export default App;
