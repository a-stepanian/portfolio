import React from "react";
import styled from "styled-components";
import { experience } from "../data";
import { Job, StateCube } from "./index";

const Experience = () => {
  return (
    <Wrapper>
      <div className="experience-section-scroll-target" />
      <header>
        <h2>BACKGROUND</h2>
        <p>2.0</p>
      </header>
      <section className="work-history-container">
        <h3>Work History</h3>
        <div className="experience-container">
          <StateCube />
          {experience.map((job, index) => {
            return <Job key={index} job={job} />;
          })}
        </div>
      </section>
      <section className="education-container">
        <h3>Education</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, nisi
          accusamus inventore voluptatibus officia corrupti error officiis
          adipisci perspiciatis natus necessitatibus architecto repellendus odio
          quia sint molestias mollitia non nesciunt ratione pariatur
          exercitationem? Corporis, officia accusantium! Dolorem iste voluptatum
          facilis expedita non laborum quos numquam? Eius debitis consequuntur
          tempora voluptatibus, sapiente perferendis eligendi fuga maiores culpa
          hic aliquid repellat, quam minus dicta quidem sequi nam voluptas
          praesentium. Cupiditate consequuntur deleniti nam accusantium dolor
          doloremque sapiente dolorem pariatur quidem deserunt dolores nulla
          provident suscipit quisquam fugit minima dignissimos voluptate quos
          repellat tempore praesentium ullam veritatis, eum et. Tempore repellat
          laboriosam cumque.
        </p>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: var(--main);

  /* BACKGROUND 2.0 BLACK STICKY BANNER*/
  header {
    z-index: 1;
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
    position: sticky;
    top: 6.95rem;
    padding: 0 0.3rem;
    line-height: 2rem;
    color: var(--black);
    background-color: var(--white);
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
  }

  .experience-container {
    padding: 2.5rem 5%;
  }
`;

export default Experience;
