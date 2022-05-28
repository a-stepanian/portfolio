import React from "react";
import styled from "styled-components";

const Projects = () => {
  return (
    <Wrapper>
      <div className="projects-section-scroll-target" />
      <header>
        <h2>PROJECTS</h2>
        <p>1.0</p>
      </header>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 50rem;
  .projects-section-scroll-target {
    height: 5rem;
    background-color: var(--black);
  }
  header {
    scroll-margin-top: 5rem;
    display: flex;
    justify-content: space-between;
    padding: 0 0.3rem;
    position: sticky;
    top: 5rem;
    line-height: 2rem;
    background-color: var(--black);
    color: var(--white);
    h2,
    p {
      font-size: 1rem;
      font-weight: 500;
    }
  }
`;

export default Projects;
