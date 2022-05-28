import {
  Navbar,
  Sidebar,
  Projects,
  Hero,
  Experience,
  Contact,
} from "./components";
import styled from "styled-components";

function App() {
  return (
    <Wrapper>
      <Navbar />
      <Sidebar />
      <Hero />
      <Projects />
      <Experience />
      <Contact />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border-right: 0.1rem solid var(--black);
  @media (min-width: 992px) {
    border-right: 0.15rem solid var(--black);
  }
`;

export default App;
