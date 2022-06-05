import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { experience, education } from "../../data";
import { Job, StateCube, BigCube, School } from "../index";

const Experience = () => {
  const [cubeFace, setCubeFace] = useState("oregon");

  useEffect(() => {
    const handleScroll = () => {
      const states = [
        "oregon",
        "georgia",
        "maryland",
        "pennsylvania",
        "psu",
        "washington1",
        "washington2",
        "washington3",
      ];

      for (let i = 0; i < 8; i++) {
        // select job title header element
        const jobHeader = document.querySelectorAll(".title-company")[i];
        // get distance from the top of the viewport
        const jobHeaderDistanceFromTop = jobHeader.getBoundingClientRect().top;
        // when that distance is between 80 and 170px, set the cube face state from the corresponding states array.
        if (jobHeaderDistanceFromTop < 150 && jobHeaderDistanceFromTop > 80) {
          setCubeFace(states[i]);
        }
      }

      //Set the state to null after scrolling above oregon section.
      const oregon = document.querySelector(".title-company");
      const oregonDistanceFromTop = oregon.getBoundingClientRect().top;
      if (oregonDistanceFromTop > 150) setCubeFace(null);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <Wrapper>
      <div className="experience-section-scroll-target" />
      <header className="background-sticky">
        <h2>BACKGROUND</h2>
        <p>{`${
          cubeFace === "oregon" ||
          cubeFace === "georgia" ||
          cubeFace === "maryland" ||
          cubeFace === "pennsylvania"
            ? "WORK HISTORY 2.1"
            : cubeFace === "psu" ||
              cubeFace === "washington1" ||
              cubeFace === "washington2" ||
              cubeFace === "washington3"
            ? "EDUCATION 2.2"
            : "2.0"
        }`}</p>
      </header>
      <div className="story">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
        cupiditate? Dicta distinctio asperiores ad earum incidunt ipsum ullam
        corrupti ratione, dolores quis aut voluptate quasi porro fugit
        quibusdam! Alias quo porro nisi veniam ea perferendis quidem debitis?
        Suscipit autem labore voluptas. Hic, assumenda explicabo. Laboriosam
        exercitationem placeat officia necessitatibus iusto.
      </div>
      <section className="work-history-container">
        <div className="experience-wrapper">
          {experience.map((job, index) => {
            return <Job key={index} job={job} />;
          })}
          {education.map((school, index) => {
            return <School key={index} school={school} />;
          })}
        </div>

        <div className="cube-wrapper">
          <StateCube cubeFace={cubeFace} />
          <BigCube cubeFace={cubeFace} />
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
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

  .work-history-container {
    display: flex;
    .experience-wrapper {
      width: 100vw;
    }
    .cube-wrapper {
      width: 0;
    }
  }

  @media (min-width: 768px) {
    .work-history-container {
      flex-direction: row-reverse;
      .experience-wrapper {
        width: calc(100vw - 20rem);
      }
      .cube-wrapper {
        width: 20rem;
      }
    }
  }
  @media (min-width: 992px) {
    .work-history-container {
      padding: 0 5%;
      justify-content: center;
      .experience-wrapper {
        max-width: 40rem;
      }
    }
  }
`;

export default Experience;
