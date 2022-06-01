import React from "react";
import styled from "styled-components";

const BigBlock = () => {
  return (
    <Wrapper className="big-block">
      <h1>welcome</h1>
    </Wrapper>
  );
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
  h1 {
    font-size: 0;
    font-weight: 400;
    color: var(--black);
    opacity: 0;
    animation: var(--hero-delay) h1-appear;
  }

  animation: var(--hero-delay) shrink,
    go-around-perimeter-small var(--hero) forwards var(--hero-delay);

  @keyframes h1-appear {
    0% {
      opacity: 0;
      font-size: 0;
    }
    50% {
      opacity: 1;
      font-size: 1.5rem;
    }
    100% {
      opacity: 0;
      font-size: 0;
    }
  }

  @keyframes shrink {
    0% {
      background-color: var(--main);
      height: 5rem;
      width: 2.1rem;
    }
    50% {
      background-color: var(--main-bright);
      height: 6rem;
      width: 8rem;
    }
    100% {
      background-color: var(--main);
      height: 5rem;
      width: 2.1rem;
    }
  }

  @keyframes go-around-perimeter-small {
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

  @media (min-width: 480px) {
    animation: var(--hero-delay) shrink,
      go-around-perimeter-large var(--hero) forwards var(--hero-delay);
  }

  @media (min-width: 992px) {
    animation: var(--hero-delay) shrink,
      go-around-perimeter-xl var(--hero) forwards var(--hero-delay);
  }

  @keyframes go-around-perimeter-large {
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
      left: calc(100vw - 6.2rem);
      width: 5.2rem;
    }
    75% {
      top: 0;
      height: 5rem;
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

  @keyframes go-around-perimeter-xl {
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
      left: calc(100vw - 16.2rem);
      width: 15.2rem;
    }
    75% {
      height: 5rem;
      top: 0;
      left: calc(100vw - 16.2rem);
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
`;
export default BigBlock;