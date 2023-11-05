import React from "react";
import { Route, Routes } from 'react-router-dom';
import Contact from "../pages/contact/Contact";
import Home from "../pages/home/Home";
import AboutUs from "../pages/about/AboutUs";
import Careers from "../pages/careers/Careers";
import PrivacyPolicy from "../pages/privacyPolicy/PrivacyPolicy";
import JobDescription from "../pages/jobDescription/JobDescription";

const RootRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/about" exact element={<AboutUs />} />
      <Route path="/contact" exact element={<Contact />} />
      <Route path="/careers" exact element={<Careers />} />
      <Route path="/privacy-policy" exact element={<PrivacyPolicy />} />
      <Route path=":ApplyNow" exact element={<JobDescription />} />
    </Routes>
  );
}

export default RootRoutes;