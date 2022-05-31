import styled from "styled-components";

const HeroBottomBox = () => {
  return <Wrapper />;
};

const Wrapper = styled.div`
  z-index: 3;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 5rem;
  width: 2.1rem;
  border: var(--small-border);
  background-color: var(--white);

  animation: stretch-right var(--hero) forwards;

  @keyframes stretch-right {
    0% {
      opacity: 0;
    }
    24% {
      opacity: 0;
    }
    25% {
      opacity: 1;
      left: 0;
      width: 2.1rem;
    }
    50% {
      width: 100%;
    }
    100% {
      width: 100%;
    }
  }
`;

export default HeroBottomBox;
