import React from "react";
import styled from "styled-components";
import { experience } from "../data";

const Experience = () => {
  return (
    <Wrapper>
      <div className="experience-section-scroll-target" />
      <header>
        <h2>BACKGROUND</h2>
        <p>2.0</p>
      </header>
      <h3>Work History</h3>
      {experience.map((job, index) => {
        return <div key={index}>{job.title}</div>;
      })}
      <h3>Education</h3>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 150rem;
  background-color: var(--white);
  header {
    position: sticky;
    top: 5rem;
    padding: 0 0.3rem;
    display: flex;
    justify-content: space-between;
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

export default Experience;
