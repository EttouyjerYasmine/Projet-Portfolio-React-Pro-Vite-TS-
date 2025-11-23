import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import RootLayout from "@/layouts/RootLayout";
import Home from "@/pages/Home";
import Experience from "@/pages/Experience";
import Education from "@/pages/Education";
import CertificationsPage from "@/pages/Certification";
import Projects from "@/pages/Projects";
import Contact from "@/pages/Contact"; // <-- Assure-toi que la page existe
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="experience" element={<Experience />} />
            <Route path="education" element={<Education />} />
            <Route path="certifications" element={<CertificationsPage />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} /> {/* <-- Correct */}
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
