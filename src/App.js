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
  border-left: var(--small-border);
  border-right: var(--small-border);
  @media (min-width: 992px) {
    border-left: var(--large-border);
    border-right: var(--large-border);
  }
`;

export default App;
