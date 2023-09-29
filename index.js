import React from 'react';

import ReactDOM from 'react-dom/client';
import './styles/index.css';

import Home from './pages/Home';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Single from './pages/Single';
 

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <React.StrictMode>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Single' element={<Single/>} />
        </Routes>
      </Router>
  </React.StrictMode>

);