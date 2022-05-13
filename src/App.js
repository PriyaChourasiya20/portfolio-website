import "./App.css";
// import Profile from "./PortfolioContainer/Home/Profile.js";
// import Footer from "./PortfolioContainer/Home/Footer/Footer.js";
import Home from "./PortfolioContainer/Home/Home.js";
import AboutMe from "./PortfolioContainer/AboutMe/AboutMe.js";
import Resume from "./PortfolioContainer/Resume/Resume.js";
import Testimonial from "./PortfolioContainer/Testinmonial/Testimonial.js";
import Contact from "./PortfolioContainer/ContactMe/Contact.js";

function App() {
  return (
    <div className="App">
      <Home />
      <AboutMe />
      <Resume />
      <Testimonial />
      <Contact />
    </div>
  );
}

export default App;
