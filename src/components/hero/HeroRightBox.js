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
  width: 5.2rem;
  border: var(--small-border);
  background-color: var(--white);

  animation: stretch-up var(--hero) forwards;

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
    }
  }
`;

export default HeroRightBox;
