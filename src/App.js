import {
  Navbar,
  Sidebar,
  Projects,
  Experience,
  Contact,
  Hero,
} from "./components";
import styled from "styled-components";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Wrapper>
      <Navbar />
      <Sidebar />
      <Hero />
      <div className="spacer" />
      <div className="content-wrapper">
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
  .content-wrapper {
    border-left: var(--small-border);
    border-right: var(--small-border);
  }
`;

export default App;
