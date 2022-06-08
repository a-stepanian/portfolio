import styled from "styled-components";

const InnerBox = () => {
  return (
    <>
      <Wrapper1></Wrapper1>
      <Wrapper2>
        <h1>WELCOME</h1>
      </Wrapper2>
    </>
  );
};

const Wrapper2 = styled.div`
  position: absolute;
  top: 0;
  left: 2.1rem;
  height: 100%;
  width: calc(100% - 2.1rem);
  overflow: hidden;
  z-index: 4;
  display: flex;
  align-items: center;
  h1 {
    font-family: "Bebas Neue", cursive;
    font-size: 24vw;
    font-weight: 900;
    color: var(--black);
    opacity: 0;
    transform: translateX(100%);
    animation: slide calc(var(--hero) / 4) forwards
      calc(var(--hero-delay) + var(--hero));
  }

  @keyframes slide {
    0% {
      opacity: 0;

      transform: translateX(100%);
    }
    100% {
      opacity: 1;

      transform: translateX(0);
    }
  }

  @media (min-width: 400px) {
    h1 {
      font-size: 27.3vw;
    }
  }
  @media (min-width: 600px) {
    h1 {
      font-size: 29vw;
    }
  }
  @media (min-width: 900px) {
    h1 {
      font-size: 30vw;
    }
  }
`;
const Wrapper1 = styled.div`
  height: 100%;
  opacity: 0;
  background-color: var(--main-bg);
  animation: appear calc(var(--hero) / 2) forwards
    calc(var(--hero-delay) + var(--hero));

  @keyframes appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default InnerBox;
