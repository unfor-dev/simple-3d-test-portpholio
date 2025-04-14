import './index.css'
import './normalize.css'
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import About from "./components/About";
import Works from "./components/Works";


function App() {
  return (
  <>
    <div className='container'>
      <Hero />
      <About />
      <Works />
      <Contact />
    </div>
  </>

)}

export default App;
