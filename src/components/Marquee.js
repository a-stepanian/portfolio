import React from "react";
import styled from "styled-components";

const Marquee = ({ name }) => {
  return (
    <Wrapper>
      <p class="marquee">
        <span>
          {name}-{name}-{name}-{name}-{name}-{name}-{name}-{name}-{name}-{name}-
          {name}-{name}-{name}-{name}-{name}-{name}-{name}-{name}-{name}-{name}-
          {name}-{name}-{name}-{name}-{name}-{name}-{name}-{name}-{name}-{name}-
        </span>
      </p>
      <p class="marquee marquee2">
        <span>
          {name}-{name}-{name}-{name}-{name}-{name}-{name}-{name}-{name}-{name}-
          {name}-{name}-{name}-{name}-{name}-{name}-{name}-{name}-{name}-{name}-
          {name}-{name}-{name}-{name}-{name}-{name}-{name}-{name}-{name}-{name}-
        </span>
      </p>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .marquee {
    margin: 0 auto;
    white-space: nowrap;
    overflow: hidden;
    position: absolute;
    color: var(--white);
    font-size: 0.6rem;
    font-weight: 300;
    letter-spacing: 0.1rem;
  }

  .marquee span {
    display: inline-block;
    padding-left: 100%;
    animation: marquee 20s linear infinite;
  }

  .marquee2 span {
    animation-delay: 10s;
  }

  @keyframes marquee {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-100%, 0);
    }
  }
`;

export default Marquee;
