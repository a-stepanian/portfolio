import styled from "styled-components";

const BigCube = () => {
  return (
    <Wrapper>
      <div className="cube">
        <div className="face front"></div>
        <div className="face right"></div>
        <div className="face back"></div>
        <div className="face left"></div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: calc(50% - 5rem / 2);
  left: calc(50% - 5rem / 2);
  z-index: 7;
  width: 5rem;
  transform: translateZ(10rem);
  height: 5rem;
  perspective: 100rem; //zoom in and out of cube
  padding-bottom: 6.55rem;
  display: block;
  animation: move-wrapper-to-corner var(--hero-delay) forwards;

  .cube {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    animation: spin-cube var(--hero-delay) forwards;
  }
  .face {
    position: absolute;
    width: 5rem;
    height: 5rem;
    background-color: var(--main);
    border: var(--small-border);
    animation: skinny-face var(--hero-delay) forwards;
  }

  /* ------------------------------------- */
  /* INITIAL STATIC POSITION OF CUBE FACES */
  /* ------------------------------------- */

  .front {
    transform: rotateY(0deg) translateZ(2.5rem);
    animation: skinny-face var(--hero-delay) forwards,
      shrink-face-front var(--hero-delay) forwards;
  }
  .right {
    transform: rotateY(90deg) translateZ(2.5rem);
    animation: skinny-face var(--hero-delay) forwards,
      shrink-face-right var(--hero-delay) forwards;
  }
  .back {
    transform: rotateY(180deg) translateZ(2.5rem);
    animation: skinny-face var(--hero-delay) forwards,
      shrink-face-back var(--hero-delay) forwards;
  }
  .left {
    transform: rotateY(270deg) translateZ(2.5rem);
    animation: skinny-face var(--hero-delay) forwards,
      shrink-face-left var(--hero-delay) forwards;
  }

  @keyframes move-wrapper-to-corner {
    0% {
      top: calc(50% - 5rem / 2);
      left: calc(50% - 5rem / 2);
    }
    25% {
      top: calc(50% - 5rem / 2);
      left: calc(50% - 5rem / 2);
    }
    90% {
      top: 0;
      left: 0;
    }
    100% {
      top: 0;
      left: 0;
    }
  }
  @keyframes spin-cube {
    0% {
      transform: rotateY(-540deg);
    }
    90% {
      transform: rotateY(0);
    }
    100% {
      transform: rotateY(0);
    }
  }

  @keyframes skinny-face {
    0% {
      background-color: var(--main-transparent);
      opacity: 1;
      height: 20rem;
      width: 20rem;
    }
    20% {
      background-color: var(--main-transparent);
    }
    90% {
      height: 5rem;
      width: 2.1rem;
    }
    99% {
      background-color: var(--main);
      opacity: 1;
    }
    100% {
      opacity: 0;
      height: 5rem;
      width: 2.1rem;
    }
  }

  @keyframes shrink-face-front {
    0% {
      transform: rotateY(0deg) translateZ(10rem);
    }
    90% {
      transform: rotateY(0deg) translateZ(1rem);
    }
    100% {
      transform: rotateY(0deg) translateZ(1rem);
    }
  }
  @keyframes shrink-face-right {
    0% {
      transform: rotateY(90deg) translateZ(10rem);
    }
    90% {
      transform: rotateY(90deg) translateZ(1rem);
    }
    100% {
      transform: rotateY(90deg) translateZ(1rem);
    }
  }
  @keyframes shrink-face-back {
    0% {
      transform: rotateY(180deg) translateZ(10rem);
    }
    90% {
      transform: rotateY(180deg) translateZ(1rem);
    }
    100% {
      transform: rotateY(180deg) translateZ(1rem);
    }
  }
  @keyframes shrink-face-left {
    0% {
      transform: rotateY(270deg) translateZ(10rem);
    }
    90% {
      transform: rotateY(270deg) translateZ(1rem);
    }
    100% {
      transform: rotateY(270deg) translateZ(1rem);
    }
  }
`;

export default BigCube;
