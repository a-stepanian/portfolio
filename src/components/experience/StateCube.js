import styled from "styled-components";

const StateCube = ({ showState }) => {
  return (
    <Wrapper>
      <div
        className={`${
          showState === "oregon"
            ? "cube show-front"
            : showState === "georgia"
            ? "cube show-right"
            : "cube show-back"
        }`}
      >
        <div className="face front">
          <img src="or.png" alt={`Outline of the Oregon state map`} />
          <div className="location-date">
            <h5>Rainier, OR</h5>
            <h6>2020 - 2021</h6>
          </div>
        </div>
        <div className="face back">
          <img src="md.png" alt={`Outline of the Maryland state map`} />
          <div className="location-date">
            <h5>Baltimore, MD</h5>
            <h6>2013 - 2017</h6>
          </div>
        </div>
        <div className="face right">
          <img src="ga.png" alt={`Outline of the Georgia state map`} />
          <div className="location-date">
            <h5>Chamblee, GA</h5>
            <h6>2017 - 2020</h6>
          </div>
        </div>
        <div className="face left">
          <img src="wa.png" alt={`Outline of the Washington state map`} />
        </div>
        <div className="face top">
          <img src="pa.png" alt={`Outline of the Pennsylvania state map`} />
        </div>
        <div className="face bottom">
          <p>Work History</p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: sticky;
  top: 7rem;
  padding-top: 0.7rem;
  z-index: 2;
  transform: translateX(-6.1rem);
  width: var(--cube-width);
  height: var(--cube-width);
  perspective: 20rem; //zoom in and out of cube
  .cube {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.4s;
    transform: translateZ(0) rotateY(0); //shifts to/from viewer
  }
  .face {
    position: absolute;
    width: var(--cube-width);
    height: var(--cube-width);
    background-color: var(--cube);
    border: 0.1rem solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      max-width: 70%;
      max-height: 60%;
    }
    .location-date {
      height: 30%;
    }
    h5,
    h6 {
      text-align: center;
      font-size: 0.6rem;
      font-weight: 900;
    }
  }

  /* ------------------------------------- */
  /* INITIAL STATIC POSITION OF CUBE FACES */
  /* ------------------------------------- */

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
  .top {
    transform: rotateX(90deg) translateZ(calc(var(--cube-width) / 2));
  }
  .bottom {
    transform: rotateX(-90deg) translateZ(calc(var(--cube-width) / 2));
  }

  /* ------------------------------------------------ */
  /* TRANSFORM OPTIONS FOR DISPLAYING A SPECIFIC FACE */
  /* ------------------------------------------------ */

  .show-front {
    transform: rotateY(0deg);
  }
  .show-right {
    transform: rotateY(-90deg);
  }
  .show-back {
    transform: rotateY(-180deg);
  }
  .show-left {
    transform: rotateY(90deg);
  }
  .show-top {
    transform: rotateX(-90deg);
  }
  .show-bottom {
    transform: rotateX(90deg);
  }
`;

export default StateCube;
