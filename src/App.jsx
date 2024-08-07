import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cakes from "./components/Cakes";
import Cupcakes from "./components/Cupcakes";
import Snacks from "./components/Snacks";
import aboutUs from "./pages/aboutUs";
import ContactUs from "./pages/contactUs";
import Services from "./pages/services";


function App() {

  
  return ( 
    <div className="Navbar">
      <Router>
        <Navbar />
      

          <Routes>
            <Route path="/aboutUs" element={<aboutUs />}/>
            <Route path="/contactUs" element={<ContactUs/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/" element={<Home />} />
            <Route path="/cakes" element={<Cakes />} />
            <Route path="/cupcakes" element={<Cupcakes />} />
            <Route path="/snacks" element={<Snacks />} />

            <Route path="*" element={<h1>404: Page not found, press home</h1>} />
          </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
