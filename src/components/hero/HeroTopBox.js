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
  background-color: var(--white);

  animation: shrink-left var(--hero) forwards var(--hero-delay);

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
