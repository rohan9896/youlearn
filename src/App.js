import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Login, Navbar, Signup } from './components';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;