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
  line-height: 10rem;
  left: 0;
  color: var(--white);
  background-color: rgba(252, 217, 142, 0.2);
  font-size: 1.5rem;
  font-weight: 300;
  text-shadow: 0rem 0.15rem 0.1rem var(--main);
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
