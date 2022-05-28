import { Navbar, Sidebar, Projects, Hero } from "./components";
import styled from "styled-components";

function App() {
  return (
    <Wrapper>
      <Navbar />
      <Sidebar />
      <Hero />
      <Projects />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border-right: 0.1rem solid var(--black);
`;

export default App;
