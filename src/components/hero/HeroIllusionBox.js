import React from "react";
import styled from "styled-components";

const HeroIllusionBox = () => {
  return <Wrapper />;
};

const Wrapper = styled.div`
  z-index: 6;
  position: absolute;
  top: 0.2rem;
  left: 0.2rem;
  height: 4.8rem;
  width: 1.7rem;
  background-color: var(--white);
  animation: disappear var(--hero) forwards var(--hero-delay);

  @keyframes disappear {
    0% {
      height: 4.8rem;
    }
    99% {
      height: 4.8rem;
    }
    100% {
      height: 0;
    }
  }
`;

export default HeroIllusionBox;
