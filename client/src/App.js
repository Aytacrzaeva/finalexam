import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './pages/Add';
import Home from './pages/Home';
import Detail from './pages/Detail';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/add" element={<Add/>}></Route>
      <Route path="/:id" element={<Detail/>}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
