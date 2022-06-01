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
  left: 0;
  height: 100%;
  width: calc(100% - 2.1rem);
  overflow: hidden;
  margin-left: 2.1rem;
  z-index: 4;
  display: flex;
  align-items: center;
  h1 {
    font-family: "Bebas Neue", cursive;
    font-size: 28vw;
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
      font-size: 29.3vw;
    }
  }
  @media (min-width: 600px) {
    h1 {
      font-size: 31vw;
    }
  }
  @media (min-width: 900px) {
    h1 {
      font-size: 32vw;
    }
  }
`;
const Wrapper1 = styled.div`
  height: 100%;
  opacity: 0;
  background: url("https://images.unsplash.com/photo-1598940603846-a1edd0ef2574?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80");
  background-size: cover;
  background-position: center;
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
