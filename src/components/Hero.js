import React, { useEffect } from "react";
import styled from "styled-components";
import Marquee from "./Marquee";

const Hero = () => {
  useEffect(() => {});

  return (
    <Wrapper>
      <img
        src="https://images.unsplash.com/photo-1497384401032-2182d2687715?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        alt="A computer with a programming application open"
      />
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
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default Hero;
