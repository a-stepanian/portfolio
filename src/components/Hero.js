import React, { useEffect } from "react";
import styled from "styled-components";
import Marquee from "./Marquee";

const Hero = () => {
  useEffect(() => {});

  return (
    <Wrapper>
      {/* <img
        src="https://images.unsplash.com/photo-1617957796106-85f0e7ee9d0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
        alt="A computer with a programming application open"
      /> */}
      <Marquee />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  margin-top: 5rem;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(var(--white), var(--main));
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default Hero;
