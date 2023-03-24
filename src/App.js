import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/home.js';
import PropertyDetailsPage from './components/pages/propertyDetailsPage';
import Properties from './components/pages/properties';
import AgencySearchBarPage from './components/pages/agencySearchPage'
import { Navigate } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/buy" element={<Home pathText = "buy"/>}/>
        <Route path="/rent" element={<Home pathText = "rent"/>}/>
        <Route path="/sell" element={<AgencySearchBarPage pathText="sell"/>}/>
        <Route path="/properties/:optionType/:propertyType/:destinationAddress/:fromDate/:toDate/:fromPrice/:toPrice" element={<Properties/>}/>
        <Route path="/property/:optionType/:propertyId" element={<PropertyDetailsPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/*" element={<Navigate to="/buy" />}/>
      </Routes>
    </Router>
  );
}

export default App;
