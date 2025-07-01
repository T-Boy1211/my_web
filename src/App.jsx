import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import API from "./components/API";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dasboard" element={<Dashboard />} />
        <Route path="/api" element={<API />} />
        <Route path="/:username" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App