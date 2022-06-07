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
  background-color: var(--white);

  width: 1.7rem;
  animation: color-change var(--hero-delay),
    disappear var(--hero) forwards var(--hero-delay);

  @keyframes color-change {
    0% {
      background-color: white;
    }
    99% {
      background-color: white;
    }
    100% {
      background-color: var(--white);
    }
  }

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
