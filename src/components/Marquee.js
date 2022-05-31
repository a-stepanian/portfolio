import styled from "styled-components";

const Marquee = ({ name }) => {
  return (
    <Wrapper>
      <p class="marquee">
        <span>
          &#9632; DEVELOPER PORTFOLIO &#9632; DEVELOPER PORTFOLIO &#9632;
          DEVELOPER PORTFOLIO &#9632; DEVELOPER PORTFOLIO &#9632; DEVELOPER
          PORTFOLIO &#9632; DEVELOPER PORTFOLIO &#9632; DEVELOPER PORTFOLIO{" "}
          &#9632; DEVELOPER PORTFOLIO &#9632; DEVELOPER PORTFOLIO &#9632;
          DEVELOPER PORTFOLIO &#9632; DEVELOPER PORTFOLIO &#9632; DEVELOPER
          PORTFOLIO &#9632; DEVELOPER PORTFOLIO &#9632; DEVELOPER PORTFOLIO{" "}
          &#9632; DEVELOPER PORTFOLIO &#9632; DEVELOPER PORTFOLIO &#9632;
          DEVELOPER PORTFOLIO &#9632; DEVELOPER PORTFOLIO &#9632; DEVELOPER
          PORTFOLIO &#9632; DEVELOPER PORTFOLIO &#9632; DEVELOPER PORTFOLIO{" "}
          &#9632; DEVELOPER PORTFOLIO &#9632; DEVELOPER PORTFOLIO{" "}
        </span>
      </p>
      <p class="marquee marquee2">
        <span>
          &#9632; DEVELOPER PORTFOLIO &#9632; DEVELOPER PORTFOLIO &#9632;
          DEVELOPER PORTFOLIO &#9632; DEVELOPER PORTFOLIO &#9632; DEVELOPER
          PORTFOLIO &#9632; DEVELOPER PORTFOLIO &#9632; DEVELOPER PORTFOLIO{" "}
          &#9632; DEVELOPER PORTFOLIO &#9632; DEVELOPER PORTFOLIO &#9632;
          DEVELOPER PORTFOLIO &#9632; DEVELOPER PORTFOLIO &#9632; DEVELOPER
          PORTFOLIO &#9632; DEVELOPER PORTFOLIO &#9632; DEVELOPER PORTFOLIO{" "}
          &#9632; DEVELOPER PORTFOLIO &#9632; DEVELOPER PORTFOLIO &#9632;
          DEVELOPER PORTFOLIO &#9632; DEVELOPER PORTFOLIO &#9632; DEVELOPER
          PORTFOLIO &#9632; DEVELOPER PORTFOLIO &#9632; DEVELOPER PORTFOLIO{" "}
          &#9632; DEVELOPER PORTFOLIO &#9632; DEVELOPER PORTFOLIO{" "}
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
    color: var(--black);
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
