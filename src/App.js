import { Navigate, Route, Routes } from "react-router-dom";
import { Login, Navbar, Signup } from "./components";
import { GenreScroller } from "./components/GenreScroller/GenreScroller";
import { Toaster } from "react-hot-toast";
import "./App.css";
import {
  HeartIcon,
  HistoryIcon,
  HomeIcon,
  PlaylistIcon,
} from "./assets/svg_components";
import { useAuth } from "./context/authContext/AuthContext";

function App() {
  const { user } = useAuth();

  return (
    <div>
      <Toaster />
      <Navbar />
      {/* <HomeIcon labelText={'Home'} isSelected={false} />
      <HeartIcon labelText={'Liked'} isSelected={false} />
      <PlaylistIcon labelText={'Playlist'} isSelected={false} />
      <HistoryIcon labelText={'History'} isSelected={true} /> */}
      <Routes>
        <Route path="/" element={<GenreScroller />} />
        <Route
          path="/login"
          element={user ? <Navigate to={"/"} /> : <Login />}
        />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
