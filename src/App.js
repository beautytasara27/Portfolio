import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import Navbar from "./Layouts/Navbar";
import "./Assets/Styles/main.css";
import Projects from "./Pages/Projects";
import Blog from "./Pages/Blog";
import Project from "./Pages/Project";
function App() {
  return (
    <div className="App">
      <div id="wrapper" className="fade-in relative">
        <div className="bg fixed"></div>
        <Header />
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/project/:id" element={<Project />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
