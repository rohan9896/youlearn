import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Login, Navbar, Signup } from './components';
import { GenreScroller } from './components/GenreScroller/GenreScroller';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<GenreScroller />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;