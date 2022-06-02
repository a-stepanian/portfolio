import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { experience } from "../../data";
import { Job, StateCube } from "../index";

const Experience = () => {
  const [showState, setShowState] = useState("oregon");

  // select the chamblee green info box
  // find distance from that box to top of viewport
  // when that distance equals a certain number, change showState state.

  //on scroll event check the distance between chamblee green box and top of viewport, if it meets the requirements, change the state
  useEffect(() => {
    const handleScroll = () => {
      const oregon = document.querySelectorAll(".title-company")[0];
      const oregonDistanceFromTop = oregon.getBoundingClientRect().top;
      if (oregonDistanceFromTop < 200 && oregonDistanceFromTop > 50) {
        setShowState("oregon");
      }
      const georgia = document.querySelectorAll(".title-company")[1];
      const georgiaDistanceFromTop = georgia.getBoundingClientRect().top;
      if (georgiaDistanceFromTop < 200 && georgiaDistanceFromTop > 50) {
        setShowState("georgia");
      }
      const maryland = document.querySelectorAll(".title-company")[2];
      const marylandDistanceFromTop = maryland.getBoundingClientRect().top;
      if (marylandDistanceFromTop < 200 && marylandDistanceFromTop > 50) {
        setShowState("maryland");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <Wrapper>
      <div className="experience-section-scroll-target" />
      <header className="background-sticky">
        <h2>BACKGROUND</h2>
        <p>2.0</p>
      </header>

      <section className="work-history-container">
        <div className="experience-wrapper">
          {experience.map((job, index) => {
            return <Job key={index} job={job} />;
          })}
        </div>

        <div className="cube-wrapper">
          <StateCube showState={showState} />
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

  .education-container {
    height: 50vh;
  }
`;

export default Experience;
