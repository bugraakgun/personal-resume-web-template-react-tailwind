import './App.css';

import Main from './components/Main';
import Profile from './components/Profile';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import BlogContent from './components/BlogContent';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/header" element={<Header />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id/:title" element={<BlogContent />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
