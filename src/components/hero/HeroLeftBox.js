import React from "react";
import styled from "styled-components";

const HeroLeftBox = () => {
  return <Wrapper />;
};
const Wrapper = styled.div`
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  height: 5rem;
  width: 2.1rem;
  border: var(--small-border);
  background-color: var(--white);
  animation: stretch-down var(--hero) forwards;

  @keyframes stretch-down {
    0% {
      height: 5rem;
    }
    25% {
      height: 100%;
    }
    100% {
      height: 100%;
    }
  }
`;
export default HeroLeftBox;
