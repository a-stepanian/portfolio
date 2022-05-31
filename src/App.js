import {
  Navbar,
  Sidebar,
  Projects,
  Experience,
  Contact,
  Hero,
} from "./components";
import styled from "styled-components";

function App() {
  return (
    <Wrapper>
      <Navbar />
      <Sidebar />
      <div className="spacer" />
      <div className="container">
        {/* <Hero /> */}
        <Projects />
        <Experience />
        <Contact />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .spacer {
    height: 5rem;
  }
`;

export default App;
