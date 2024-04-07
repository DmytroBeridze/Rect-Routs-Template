import "./App.css";
import Header from "../header/Header";
import AboutUs from "../pages/about-us/AboutUs";
import Home from "../pages/home/Home";
import Users from "../pages/users/Users";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users/*" element={<Users />} />
        <Route path="about-us/*" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
