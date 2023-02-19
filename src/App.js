import './App.css';

import Main from './components/Main';
import Profile from './components/Profile';
import Header from './components/Header';

import { BrowserRouter,Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/header" element={<Header />} />
     </Routes>
    </BrowserRouter>
    
  );
}

export default App;
