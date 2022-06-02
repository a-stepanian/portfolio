import styled from "styled-components";
import { useGlobalContext } from "../context";

const StateCube = () => {
  const { stateMap, setStateMap } = useGlobalContext();

  return (
    <Wrapper class="scene">
      <div class="cube">
        <div class="cube__face cube__face--front">
          <img src="or.png" alt={`Outline of the Georgia state map`} />
        </div>
        <div class="cube__face cube__face--back">
          <img src="or.png" alt={`Outline of the Georgia state map`} />
        </div>
        <div class="cube__face cube__face--right">
          <img src="ga.png" alt={`Outline of the Oregon state map`} />
        </div>
        <div class="cube__face cube__face--left">
          <img src="md.png" alt={`Outline of the Maryland state map`} />
        </div>
        <div class="cube__face cube__face--top"></div>
        <div class="cube__face cube__face--bottom"></div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: calc(var(--cube-width) / 2);
  width: var(--cube-width);
  height: var(--cube-width);
  perspective: 20rem; //zoom in and out of cube
  transition: perspective 1s;
  .cube {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 2s;
    transform: translateZ(-var(--cube-width)); //shifts to/from viewer
  }
  .cube__face {
    position: absolute;
    width: var(--cube-width);
    height: var(--cube-width);
    background-color: var(--cube);
    border: 0.15rem solid black;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  .cube__face--front {
    transform: rotateY(0deg) translateZ(calc(var(--cube-width) / 2));
  }
  .cube__face--right {
    transform: rotateY(90deg) translateZ(calc(var(--cube-width) / 2));
  }
  .cube__face--back {
    transform: rotateY(180deg) translateZ(calc(var(--cube-width) / 2));
  }
  .cube__face--left {
    transform: rotateY(-90deg) translateZ(calc(var(--cube-width) / 2));
  }
  .cube__face--top {
    transform: rotateX(90deg) translateZ(calc(var(--cube-width) / 2));
  }
  .cube__face--bottom {
    transform: rotateX(-90deg) translateZ(calc(var(--cube-width) / 2));
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

export default StateCube;
