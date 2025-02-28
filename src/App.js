import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Services } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Cursor } from './components/Cursor';
import { useRef } from "react";

function App() {
  const contactRef = useRef(null); 

  return (
    <div className="App">
      <NavBar />
      <Banner scrollToContact={() => contactRef.current?.scrollIntoView({ behavior: "smooth" })} />
      <Services />
      <Projects />
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
      <Cursor />
    </div>
  );
}

export default App;
