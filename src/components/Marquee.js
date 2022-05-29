import React from "react";
import styled from "styled-components";
const Marquee = () => {
  return (
    <Wrapper>
      <p>
        welcome to my portfolio. welcome to my portfolio. welcome to my
        portfolio. welcome to my portfolio. welcome to my portfolio. welcome to
        my portfolio. welcome to my portfolio. welcome to my portfolio.{" "}
      </p>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  white-space: nowrap;
  position: absolute;
  top: calc(50vh - 10rem);
  left: 0;
  color: var(--black);
  font-size: 10rem;
  font-weight: 300;
  text-shadow: 0.3rem 0.8rem 0.1rem var(--main-dark);
  animation: marquee 100s linear forwards;

  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;

export default Marquee;
