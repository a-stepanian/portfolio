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
        <p>
          I have spent the past decade solving problems of all shapes and sizes.
          I have worked on many teams, large and small, near and far, and I
          thrive working independently as well. I've had complete ownership and
          accountability of numerous projects and initiatives throughout my
          career. I look forward to bringing this experience to your company to
          help you achieve your goals!
        </p>
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
  background-color: var(--main-bg);
  /* BACKGROUND 2.0 BLACK STICKY BANNER*/
  .background-sticky {
    width: 100%;
    z-index: 3;
    position: sticky;
    top: 4.95rem;
    padding: 0 0.3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2rem;
    background-color: var(--black);
    color: var(--white);
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.3);

    h2,
    p {
      font-size: 0.7rem;
      font-weight: 500;
    }
  }

  .story {
    display: flex;
    justify-content: center;
    margin: 2.5rem 0;
    padding: 0 5%;
    p {
      font-size: 1rem;
      line-height: 2rem;
      color: var(--black);
      font-weight: 900;
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

  @media (min-width: 480px) {
    .background-sticky {
      h2,
      p {
        font-size: 0.8rem;
      }
    }
    .story {
      p {
        font-size: 1.2rem;
      }
    }
  }

  @media (min-width: 768px) {
    .background-sticky {
      h2,
      p {
        font-size: 1rem;
      }
    }
    .story {
      margin: 5rem 0;
      p {
        font-size: 1.5rem;
        line-height: 2.5rem;
        max-width: 60rem;
      }
    }
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
