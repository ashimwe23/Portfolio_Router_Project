
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import ProjectsLayout from "./pages/ProjectsLayout";
import ProjectDetails from "./pages/ProjectDetails";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Parent route */}
        <Route path="/projects" element={<ProjectsLayout />}>

          {/* Default child route */}
          <Route index element={<Projects />} />

          {/* Dynamic child route */}
          <Route path=":id" element={<ProjectDetails />} />

        </Route>
      </Routes>

    </div>
  );
}

export default App;
