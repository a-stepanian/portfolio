import styled from "styled-components";

const HeroRightBox = () => {
  return <Wrapper />;
};

const Wrapper = styled.div`
  z-index: 4;
  position: absolute;
  right: 0;
  bottom: 0;
  height: 5rem;
  opacity: 0;
  width: 5.2rem;
  border: var(--small-border);
  background-color: var(--white-opaque);

  animation: stretch-up var(--hero) forwards var(--hero-delay);

  @keyframes stretch-up {
    0% {
      opacity: 0;
      height: 5rem;
    }
    49% {
      opacity: 0;
    }
    50% {
      opacity: 1;
      height: 5rem;
    }
    75% {
      height: 100%;
    }
    100% {
      height: 100%;
      opacity: 1;
    }
  }

  @media (min-width: 992px) {
    width: 15.2rem;
  }
`;

export default HeroRightBox;
