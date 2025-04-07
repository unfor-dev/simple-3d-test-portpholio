import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  background: url("./img/bgN.jpg") right center no-repeat;
  background-size: cover;
  color: white;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }  
`

function App() {
  return (
  <>
    <Container>
      <Hero />
      <Who />
      <Works />
      <Contact />
    </Container>
  </>

)}

export default App;
