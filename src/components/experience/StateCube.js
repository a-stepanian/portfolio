import styled from "styled-components";

const StateCube = ({ cubeFace }) => {
  return (
    <Wrapper>
      <div
        className={`${
          cubeFace === "oregon"
            ? "cube show-oregon"
            : cubeFace === null
            ? "cube show-oregon"
            : cubeFace === "georgia"
            ? "cube show-georgia"
            : cubeFace === "maryland"
            ? "cube show-maryland"
            : cubeFace === "pennsylvania"
            ? "cube show-pennsylvania"
            : cubeFace === "psu"
            ? "cube show-psu"
            : "cube show-washington"
        }`}
      >
        <div className="face oregon">
          <img src="or.png" alt={`Outline of the Oregon state map`} />
          <div className="location-date">
            <h5>Rainier, OR</h5>
            <h6>2020 - 2021</h6>
          </div>
        </div>
        <div className="face georgia">
          <img src="ga.png" alt={`Outline of the Georgia state map`} />
          <div className="location-date">
            <h5>Chamblee, GA</h5>
            <h6>2017 - 2020</h6>
          </div>
        </div>
        <div className="face maryland">
          <img src="md.png" alt={`Outline of the Maryland state map`} />
          <div className="location-date">
            <h5>Baltimore, MD</h5>
            <h6>2013 - 2017</h6>
          </div>
        </div>
        <div className="face pennsylvania">
          <img src="pa.png" alt={`Outline of the Pennsylvania state map`} />
          <div className="location-date">
            <h5>Shady Grove, PA</h5>
            <h6>2012</h6>
          </div>
        </div>

        <div className="face psu">
          <img src="psu.png" alt={`Penn State University Logo`} />
          <div className="location-date">
            <h5>State College, PA</h5>
            <h6>2008 - 2012</h6>
          </div>
        </div>
        <div className="face washington">
          <img src="wa.png" alt={`Outline of the Washington state map`} />
          <div className="location-date">
            <h5>Washington</h5>
            <h6>2021 - Present</h6>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: sticky;
  top: 7rem;
  z-index: 2;
  transform: translateX(-6.1rem);
  width: var(--cube-width);
  height: var(--cube-width);
  perspective: 8rem; //zoom in and out of cube
  padding-bottom: 6.55rem;

  .cube {
    width: 100%;
    height: 100%;
    position: relative;
    padding-top: 0.75rem;
    transform-style: preserve-3d;
    transition: transform 0.4s;
  }
  .face {
    position: absolute;
    width: var(--cube-width);
    height: var(--cube-width);
    background-color: var(--cube);
    border: 0.1rem solid var(--black);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      max-height: 50%;
    }
    .location-date {
      height: 30%;
    }
    h5,
    h6 {
      text-align: center;
      font-size: 0.5rem;
      font-weight: 900;
    }
  }

  /* ------------------------------------- */
  /* INITIAL STATIC POSITION OF CUBE FACES */
  /* ------------------------------------- */

  .oregon {
    transform: rotateY(0deg) translateZ(4.3rem);
  }
  .georgia {
    transform: rotateY(60deg) translateZ(4.3rem);
  }
  .maryland {
    transform: rotateY(120deg) translateZ(4.3rem);
  }
  .pennsylvania {
    transform: rotateY(180deg) translateZ(4.3rem);
  }
  .psu {
    transform: rotateY(240deg) translateZ(4.3rem);
  }
  .washington {
    transform: rotateY(300deg) translateZ(4.3rem);
  }

  /* ------------------------------------------------ */
  /* TRANSFORM OPTIONS FOR DISPLAYING A SPECIFIC FACE */
  /* ------------------------------------------------ */

  .show-oregon {
    transform: translateZ(-4.3rem) rotateY(0deg);
  }
  .show-georgia {
    transform: translateZ(-4.3rem) rotateY(-60deg);
  }
  .show-maryland {
    transform: translateZ(-4.3rem) rotateY(-120deg);
  }
  .show-pennsylvania {
    transform: translateZ(-4.3rem) rotateY(-180deg);
  }
  .show-psu {
    transform: translateZ(-4.3rem) rotateY(-240deg);
  }
  .show-washington {
    transform: translateZ(-4.3rem) rotateY(-300deg);
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export default StateCube;
