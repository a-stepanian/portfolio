import React from "react";
import styled from "styled-components";

const BigBlock = () => {
  return <Wrapper className="big-block"></Wrapper>;
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
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  animation: var(--hero-delay) shrink,
    go-around-perimeter var(--hero) forwards var(--hero-delay);

  @keyframes shrink {
    0% {
      z-index: 0;
    }
    95% {
      z-index: 0;
    }
    100% {
      z-index: 7;
    }
  }

  @keyframes go-around-perimeter {
    0% {
      top: 0;
      left: 0;
      height: 5rem;
    }
    25% {
      top: calc(100% - 40%);
      height: 40%;
      left: 0;
      width: 2.1rem;
    }
    50% {
      top: calc(100% - 40%);
      height: 40%;
      left: calc(100vw - 5.2rem);
      width: 5.2rem;
    }
    75% {
      top: 0;
      height: 5rem;
      left: calc(100vw - 5.2rem);
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

  @media (min-width: 992px) {
    @keyframes go-around-perimeter {
      0% {
        top: 0;
        left: 0;
        height: 5rem;
      }
      25% {
        top: calc(100% - 40%);
        height: 40%;
        left: 0;
        width: 2.1rem;
      }
      50% {
        top: calc(100% - 40%);
        height: 40%;
        left: calc(100vw - 15.2rem);
        width: 15.2rem;
      }
      75% {
        height: 5rem;
        top: 0;
        left: calc(100vw - 15.2rem);
        width: 15.2rem;
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
  }
`;
export default BigBlock;
