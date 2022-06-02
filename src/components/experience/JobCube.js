import styled from "styled-components";

const JobCube = () => {
  return (
    <Wrapper className="cube-wrapper">
      <div className="cube">
        <div className="face front">
          <img src="or.png" alt={`Outline of the Georgia state map`} />
        </div>
        <div className="face back">
          <img src="wa.png" alt={`Outline of the Washington state map`} />
        </div>
        <div className="face right">
          <img src="ga.png" alt={`Outline of the Oregon state map`} />
        </div>
        <div className="face left">
          <img src="md.png" alt={`Outline of the Maryland state map`} />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  z-index: 2;
  width: var(--cube-width);
  height: 5rem;
  perspective: 20rem; //zoom in and out of cube
  transition: perspective 1s;
  .cube {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 4s;
    transform: translateZ(355deg) rotateY(180deg); //shifts to/from viewer
  }
  .face {
    position: absolute;
    width: var(--cube-width);
    height: 5rem;
    background-color: var(--cube);
    border: 0.1rem solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  .front {
    transform: rotateY(0deg) translateZ(calc(var(--cube-width) / 2));
  }
  .right {
    transform: rotateY(90deg) translateZ(calc(var(--cube-width) / 2));
  }
  .back {
    transform: rotateY(180deg) translateZ(calc(var(--cube-width) / 2));
  }
  .left {
    transform: rotateY(-90deg) translateZ(calc(var(--cube-width) / 2));
  }

  .cube.show-right {
    transform: translateZ(-10rem) rotateY(-90deg);
  }
  .cube.show-back {
    transform: translateZ(-10rem) rotateY(-180deg);
  }
  .cube.show-left {
    transform: translateZ(-10rem) rotateY(90deg);
  }
`;

export default JobCube;
