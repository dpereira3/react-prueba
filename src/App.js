import logo from './logo.svg';
import './App.css';
import './counter.css';
import Menu from './components/Menu';
import Header from './components/Header';
import Counter from './components/Counter';
import Home from './components/Home';
import About from './components/About';
import Pokemon from './components/Pokemon';
import Calculator from './components/Calculator';
import ErrorPage from './components/ErrorPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<> <Header /> <Home /> </>} />
      <Route path="/counter" element={<> <Header /> <Counter /> </>} />
      <Route path="/calc" element={<> <Header /> <Calculator /> </>} />
      <Route path="/pokemon" element={<> <Header /> <Pokemon /> </>} />
      <Route path="/about" element={<> <Header /> <About /> </>} />
      <Route path="*" element={<> <Header /> <ErrorPage /> </>} />
    </Routes> 
    </>
  );
}

export default App;
