import * as React from "react";
import Logo from './Logo';
import { Link, Routes, Route, Outlet } from "react-router-dom";

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

function Home(){
  return (
      <div>
          <h2>Home</h2>
          <p>Home sweet home</p>
      </div>
  );
}

function About(){
  return (
      <Logo />
  );
}

function Login(){
  return (
      <Logo />
  );
}