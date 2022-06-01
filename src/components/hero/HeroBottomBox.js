import styled from "styled-components";

const HeroBottomBox = () => {
  return <Wrapper />;
};

const Wrapper = styled.div`
  z-index: 3;
  position: absolute;
  bottom: 0;
  left: 0;
  opacity: 0;
  height: 40%;
  width: 2.1rem;
  border: var(--small-border);
  background-color: var(--white-opaque);

  animation: stretch-right var(--hero) forwards var(--hero-delay);

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
      opacity: 1;
    }
  }
`;

export default HeroBottomBox;
