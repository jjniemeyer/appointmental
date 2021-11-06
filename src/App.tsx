import { Link, Routes, Route, Outlet } from "react-router-dom";
import Home from "./components/Home"
import About from "./components/About"
import Login from "./components/Login"

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> {" "}
        <Link to="/about">About</Link> {" "}
        <Link to="/login">Login</Link>
      </nav>
      <Outlet />
    </div>
  );
}
