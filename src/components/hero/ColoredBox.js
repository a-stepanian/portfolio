import React from "react";
import styled from "styled-components";

const ColoredBox = () => {
  return <Wrapper className="colored-box" />;
};

const Wrapper = styled.div`
  z-index: 6;
  position: absolute;
  top: 0;
  left: 0;
  height: 5rem;
  width: 2.1rem;
  border: var(--small-border);
  background-color: var(--main);
  animation: go-around-perimeter var(--hero) forwards;

  @keyframes go-around-perimeter {
    0% {
      top: 0;
      left: 0;
    }
    25% {
      top: calc(100% - 5rem);
      left: 0;
      width: 2.1rem;
    }
    50% {
      top: calc(100% - 5rem);
      left: calc(100vw - 6.2rem);
      width: 5.2rem;
    }
    75% {
      top: 0;
      left: calc(100vw - 6.2rem);
      width: 5.2rem;
    }
    99% {
      opacity: 1;
    }
    100% {
      top: 0;
      left: 0;
      width: 2.1rem;
      opacity: 0;
    }
  }
`;
export default ColoredBox;
