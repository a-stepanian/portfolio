import React from "react";
import styled from "styled-components";
import data from "../data";
import IndividualProject from "./IndividualProject";

const Projects = () => {
  return (
    <Wrapper>
      <div className="projects-section-scroll-target" />
      <header>
        <h2>PROJECTS</h2>
        <p>1.0</p>
      </header>
      <div className="project-wrapper">
        {data.map((site) => {
          return <IndividualProject key={site.id} site={site} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
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

  .project-wrapper {
    padding: 10rem 5%;
    display: grid;
    grid-gap: 2rem;
  }

  @media (min-width: 1200px) {
    .project-wrapper {
      padding: 10rem 20%;
      grid-template-columns: 1fr 1fr;
    }
  }
`;

export default Projects;
