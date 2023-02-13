import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import Header from "./Header";
import Contact from "./Contact";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";

export function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Header />}></Route>
        <Route path="/about_me" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
