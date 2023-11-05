import Footer from "./footer/Footer";
import Main from "./main/Main";
import Navbar from "./navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
// import ParticleBackground from "./assets/background/Particles";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Main />
        <Footer />
      </>
    </Router>
  );
}

export default App;
