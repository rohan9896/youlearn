import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Login, Navbar } from './components';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;