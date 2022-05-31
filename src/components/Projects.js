import React from "react";
import styled from "styled-components";
import data from "../data";
import IndividualProject from "./IndividualProject";

const Projects = () => {
  return (
    <Wrapper>
      <div className="projects-section-scroll-target" />
      <header>
        <h2>PORTFOLIO</h2>
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
    z-index: 1;
    position: sticky;
    top: 5rem;
    padding: 0 0.3rem;
    display: flex;
    justify-content: space-between;
    line-height: 2rem;
    background-color: var(--black);
    color: var(--white);
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.5);
    h2,
    p {
      font-size: 1rem;
      font-weight: 500;
    }
  }

  .project-wrapper {
    padding: 5rem 5%;
    display: grid;
    row-gap: 7rem;
    justify-items: center;
  }

  @media (min-width: 480px) {
    .project-wrapper {
      padding: 5rem 10%;
    }
  }

  @media (min-width: 768px) {
    .project-wrapper {
      padding: 5rem 5%;
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: 992px) {
    .project-wrapper {
      padding: 5rem 15%;
    }
  }
`;

export default Projects;
