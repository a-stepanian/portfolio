import React from "react";
import styled from "styled-components";

const Hero = () => {
  return (
    <Wrapper>
      <img
        src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
        alt="A computer with a programming application open"
      />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: calc(100vh - 5rem);
  display: flex;
  justify-content: center;
  img {
    width: 60%;
    height: 100%;
    object-fit: cover;
  }
`;

export default Hero;
