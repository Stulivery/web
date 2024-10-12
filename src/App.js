
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import SecondPage from './components/SecondPage';


function App() {
  return (
    <Router >
      <Routes>
         <Route exact path='/' element={<Home/>} />
       {/* <Route exact path='/started' element={<SecondPage/>} /> */}
        {/* <Route exact path='/register' element={<Register/>} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute> } />  */} 
      </Routes>
  

    </Router>
  

 
    
  );
}
export default App