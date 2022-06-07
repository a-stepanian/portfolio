import styled from "styled-components";

const HeroTopBox = () => {
  return <Wrapper />;
};

const Wrapper = styled.div`
  z-index: 6;
  position: absolute;
  top: 0;
  left: 2.1rem;
  height: 5rem;
  width: calc(100% - 2.1rem);
  background-color: white;

  animation: hide-full-nav var(--hero-delay),
    shrink-left var(--hero) forwards var(--hero-delay);

  @keyframes hide-full-nav {
    0% {
      left: 0;
      width: 100%;
    }
    99% {
      left: 0;
      width: 100%;
    }
    100% {
      left: 2.1rem;
      width: calc(100% - 2.1rem);
    }
  }

  @keyframes shrink-left {
    0% {
      width: calc(100% - 2.1rem);
    }
    75% {
      width: calc(100% - 2.1rem);
    }
    99% {
      width: 0;
    }
    100% {
      width: 0;
    }
  }
`;

export default HeroTopBox;
