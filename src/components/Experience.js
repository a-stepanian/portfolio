import React from "react";
import styled from "styled-components";

const Experience = () => {
  return (
    <Wrapper>
      <div className="experience-section-scroll-target" />
      <header>
        <h2>EXPERIENCE</h2>
        <p>2.0</p>
      </header>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 70rem;
  .experience-section-scroll-target {
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
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);

    h2,
    p {
      font-size: 1rem;
      font-weight: 500;
    }
  }
`;

export default Experience;
