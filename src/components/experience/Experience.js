import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { experience, education } from "../../data";
import { Job, StateCube, BigCube, School } from "../index";
import { MdFactCheck } from "react-icons/md";
import { FaPeopleCarry } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";

const Experience = () => {
  const [cubeFace, setCubeFace] = useState("oregon");
  const [bigCubeFace, setBigCubeFace] = useState("oregon");

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
        if (jobHeaderDistanceFromTop < 200 && jobHeaderDistanceFromTop > 100) {
          setBigCubeFace(states[i]);
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
      <div className="story-wrapper">
        <div className="story">
          <GiProgression className="background-icon" />
          <p>
            I have spent the past decade solving problems of all shapes and
            sizes.
          </p>
          <FaPeopleCarry className="background-icon" />
          <p>
            I have worked on many teams, large and small, near and far, and I
            thrive working independently as well.
          </p>
          <MdFactCheck className="background-icon" />
          <p>
            I've had complete ownership and accountability of numerous projects
            and initiatives throughout my career.
          </p>
        </div>
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
          <BigCube bigCubeFace={bigCubeFace} />
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: var(--main-bg);
  /* BACKGROUND 2.0 BLACK STICKY BANNER*/
  width: 100%;
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

  .story-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .story {
    display: grid;
    align-items: start;
    grid-template-columns: 3rem 1fr;
    row-gap: 1.8rem;
    margin: 2.5rem 0;
    padding: 0 5%;
    font-size: 1rem;
    line-height: 1.5rem;
    color: var(--black);
    font-weight: 900;

    .background-icon {
      margin-top: 0.3rem;
      color: var(--black);
      font-size: 2rem;
    }
  }

  .work-history-container {
    max-width: 100%;
    display: flex;

    .experience-wrapper {
      width: 100%;
    }

    .cube-wrapper {
      width: 0;
    }
  }

  /*---------------*/
  /* MEDIA QUERIES */
  /*---------------*/

  @media (min-width: 480px) {
    .background-sticky {
      h2,
      p {
        font-size: 0.8rem;
      }
    }

    .story {
      margin: 5rem 0;
      row-gap: 2rem;
      p {
        font-size: 1.2rem;
      }
      .background-icon {
        margin-top: 0.2rem;
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
      row-gap: 3rem;
      margin: 7rem 10%;
      p {
        font-size: 1.4rem;
        line-height: 2rem;
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
    .story {
      max-width: 50rem;
    }

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
