import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
// import { FaCertificate } from "react-icons/fa";
// import Certificates from "./components/sections/Certifications";
import CertificatePage from "./pages/CertificatePage";

function App() {
  return (
    <Router>
      <div className="w-full  flex flex-col ">
        <Navbar />
        <main className="w-full flex-1 ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/certificates" element ={<CertificatePage/>} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
