import React from "react";
import styled from "styled-components";

const Projects = () => {
  return (
    <Wrapper>
      <header>PROJECTS</header>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 5rem;
  height: 50rem;
  header {
    line-height: 2rem;
    background-color: var(--black);
    color: var(--white);
  }
`;

export default Projects;
