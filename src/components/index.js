// src/components/index.js
import { EarthCanvas, BallCanvas, ComputersCanvas, StarsCanvas } from './canvas';
import Hero from "./Hero";
import Navbar from "./Navbar";
import About from "./About";
import Tech from "./Tech";
import Experience from "./Experience";
import WrappedCertifications from "./Feedbacks"; // Change this line to import WrappedCertifications
import Contact from "./Contact";
import CanvasLoader from "./Loader";
import Works from "./Works";
import Achievements from './Achievements';
import Footer from './footer';
import Resume from './Resume';

export {
  Hero,
  Navbar,
  About,
  Tech,
  Experience,
  Works,
  WrappedCertifications,
  Achievements,
  Footer, // Ensure this exports the wrapped certifications
  Contact,
  Resume,
  CanvasLoader,
  EarthCanvas, 
  BallCanvas, 
  ComputersCanvas, 
  StarsCanvas
};
