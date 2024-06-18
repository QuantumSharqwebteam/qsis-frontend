import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Qsis-Components/Navbar";
import Footer from "./Qsis-Components/Footer";
import Home from "./Qsis-Components/Home";
import ContactForm from "./Qsis-Pages/Contact";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/projects" element={<Projects />} /> */}
            <Route path="/contact" element={<ContactForm />} />
            {/* <Route path="/career" element={<Career />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
