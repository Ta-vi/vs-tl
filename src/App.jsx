 
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Top10 from './components/Top10';
import Top10Pagini from './components/Top10Pagini';
import HomePage from './components/HomePage'
import Hoteluri from './components/Hoteluri'
 

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/top10" element={<Top10 />} />
        <Route path="/top10/:id" element={<Top10Pagini />} />
        <Route path="/Hoteluri" element={<Hoteluri />} />
 
      </Routes>
    </Router>
  );
}

export default App;
