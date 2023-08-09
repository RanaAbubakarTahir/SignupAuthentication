import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login';
import Details from './Components/Details';
import Error from './Components/Error';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
const App = () => {
  return (
<>

      <Router>

      <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/Login' element={<Login />}/>
          <Route path='/details' element={<Details/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
        
         </Router>
       
      </>
      );
};

      export default App;