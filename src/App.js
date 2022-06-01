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

  useEffect(() => {
    setTimeout(() => {
      const wrap = document.querySelector(".app-wrapper");
      wrap.classList.remove("hide-overflow");
    }, 5000);
  });

  return (
    <Wrapper>
      <div className="app-wrapper hide-overflow">
        <Navbar />
        <Sidebar />
        <Hero />
        <div className="content-wrapper">
          <Projects />
          <Experience />
          <Contact />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .hide-overflow {
    height: 100vh;
    width: 100%;
    overflow: hidden;
  }

  .content-wrapper {
    border-left: var(--small-border);
    border-right: var(--small-border);
  }
`;

export default App;
