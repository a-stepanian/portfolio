import React, { useEffect } from "react";
import styled from "styled-components";
import Marquee from "./Marquee";

const Hero = () => {
  useEffect(() => {
    let timer = 0;
    for (let i = 0; i < 5; i++) {
      let box = document.querySelectorAll(".box")[i];
      setTimeout(() => {
        box.classList.add("stretch");
      }, timer);
      timer += 100;
    }
  });

  return (
    <Wrapper>
      <Marquee />

      <div className="box" />
      <div className="box" />
      <div className="box" />
      <div className="box" />
      <div className="box" />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  .box {
    border: var(--small-border);
    position: absolute;
    background-color: var(--white);
    z-index: 4;
    width: 100%;
    height: 5rem;
    left: -100vw;
    &:nth-of-type(1) {
      top: 0;
    }
    &:nth-of-type(2) {
      top: 10rem;
    }
    &:nth-of-type(3) {
      top: 20rem;
    }
    &:nth-of-type(4) {
      top: 30rem;
    }
    &:nth-of-type(5) {
      top: 40rem;
    }
  }

  .stretch {
    animation: stretch 1.5s ease-out forwards;
  }

  @keyframes stretch {
    0% {
      width: 0;
      left: -100vw;
    }
    33% {
      width: 100%;
      left: 0;
    }
    50% {
      width: 100%;
      left: 0;
    }
    100% {
      width: 0;
      left: 100vw;
    }
  }

  /* styling when marquee was the only thing in the wrapper
  position: relative;
  margin-top: 5rem;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  overflow: hidden;

  background: linear-gradient(var(--white), var(--main));
  */
`;

export default Hero;
