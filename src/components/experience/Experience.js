import React from "react";
import styled from "styled-components";
import { experience } from "../../data";
import { Job, StateCube, JobCube } from "../index";

const Experience = () => {
  return (
    <Wrapper>
      <div className="experience-section-scroll-target" />
      <header className="background-sticky">
        <h2>BACKGROUND</h2>
        <p>2.0</p>
      </header>
      <section className="work-history-container">
        <div className="cube-wrapper">
          <StateCube />
        </div>
        <div className="experience-container">
          {experience.map((job, index) => {
            return <Job key={index} job={job} />;
          })}
        </div>
      </section>
      <section className="education-container">
        <h3>Education</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: var(--main);

  /* BACKGROUND 2.0 BLACK STICKY BANNER*/
  .background-sticky {
    z-index: 3;
    position: sticky;
    top: 4.95rem;
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

  /* WORK HISTORY & EDUCATION HEADER STICKY BANNERS*/
  section > h3 {
    padding: 0 0.3rem;
    line-height: 2rem;
    color: var(--black);
    background-color: var(--white);
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
  }

  .cube-wrapper {
    height: 6rem;
    padding-top: 0.5rem;
    padding-right: 0.5rem;
    width: 100%;
    position: sticky;
    top: 7rem;
    display: flex;
    justify-content: flex-end;
    z-index: 2;
  }

  .experience-container {
    transform: translateY(-6rem);
  }

  .education-container {
    height: 50vh;
  }
`;

export default Experience;
