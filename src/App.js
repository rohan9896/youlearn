import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Login, Navbar, Signup } from './components';
import { GenreScroller } from './components/GenreScroller/GenreScroller';
import { Toaster } from 'react-hot-toast';
import { HeartIcon, HistoryIcon, HomeIcon, PlaylistIcon } from './assets/svg_components';

function App() {
  return (
    <div className="App">
      <Toaster />
      <Navbar />
      <HomeIcon labelText={'Home'} isSelected={false} />
      <HeartIcon labelText={'Liked'} isSelected={false} />
      <PlaylistIcon labelText={'Playlist'} isSelected={false} />
      <HistoryIcon labelText={'History'} isSelected={true} />
      <Routes>
        <Route path='/' element={<GenreScroller />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;