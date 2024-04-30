import logo from './logo.svg';
import './App.css';
import './counter.css';
import Menu from './components/Menu';
import Header from './components/Header';
import Counter from './components/Counter';
import Home from './components/Home';
import About from './components/About';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
    <div className="main">
      <Header />
      <Counter />
    </div>
      
    </>
  );
}

export default App;
