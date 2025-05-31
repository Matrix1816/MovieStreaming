import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PopularMovies from "./pages/PopularMovies";
import { useAuth } from "./context/AuthContext";

function App() {
  const { user } = useAuth(); // assumes you're using context to store login state

  return (
    <Router>
      <Routes>
        {/* If user not logged in, redirect to login */}
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/popular" element={user ? <PopularMovies /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
