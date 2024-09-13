import styled from "styled-components";

const BigCube = ({ bigCubeFace }) => {
  return (
    <Wrapper>
      <div
        className={`${
          bigCubeFace === "oregon"
            ? "cube show-oregon"
            : bigCubeFace === null
            ? "cube show-texas"
            : bigCubeFace === "texas"
            ? "cube show-texas"
            : bigCubeFace === "georgia"
            ? "cube show-georgia"
            : bigCubeFace === "maryland"
            ? "cube show-maryland"
            : bigCubeFace === "pennsylvania"
            ? "cube show-pennsylvania"
            : bigCubeFace === "psu"
            ? "cube show-psu"
            : "cube show-washington"
        }`}>
        <div className="face texas">
          <img src="tx.png" alt={`Outline of the Texas state map`} />
          <div className="location-date">
            <h5>Austin, TX (remote)</h5>
            <h6>2022 - present</h6>
          </div>
        </div>
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
  display: none;

  @media (min-width: 768px) {
    position: sticky;
    top: 9rem;
    z-index: 2;
    transform: translateX(5rem);
    width: var(--big-cube-width);
    height: var(--big-cube-width);
    perspective: calc(var(--big-cube-width) * 2); //zoom in and out of cube
    padding-bottom: 15.7rem;
    display: block;
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
      width: var(--big-cube-width);
      height: var(--big-cube-width);
      background-color: var(--big-cube);
      border: 0.1rem solid var(--black);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      img {
        max-height: 70%;
        max-width: 90%;
      }

      h5,
      h6 {
        text-align: center;
        font-size: 0.8rem;
        font-weight: 900;
      }
    }

    /* INITIAL STATIC POSITION OF CUBE FACES */
    .texas {
      --big-cube-z-move: ;
      transform: rotateY(0deg) translateZ(calc(var(--big-cube-width) / 2 / 0.485));
    }
    .oregon {
      --big-cube-z-move: ;
      transform: rotateY(51.43deg) translateZ(calc(var(--big-cube-width) / 2 / 0.485));
    }
    .georgia {
      transform: rotateY(102.86deg) translateZ(calc(var(--big-cube-width) / 2 / 0.485));
    }
    .maryland {
      transform: rotateY(154.29deg) translateZ(calc(var(--big-cube-width) / 2 / 0.485));
    }
    .pennsylvania {
      transform: rotateY(205.72deg) translateZ(calc(var(--big-cube-width) / 2 / 0.485));
    }
    .washington {
      transform: rotateY(257.15deg) translateZ(calc(var(--big-cube-width) / 2 / 0.485));
    }
    .psu {
      transform: rotateY(308.58deg) translateZ(calc(var(--big-cube-width) / 2 / 0.485));
    }

    /* TRANSFORM OPTIONS FOR DISPLAYING A SPECIFIC FACE */
    .show-texas {
      transform: translateZ(calc(var(--big-cube-width) / 2 / -0.485)) rotateY(0deg);
    }
    .show-oregon {
      transform: translateZ(calc(var(--big-cube-width) / 2 / -0.485)) rotateY(-51.43deg);
    }
    .show-georgia {
      transform: translateZ(calc(var(--big-cube-width) / 2 / -0.485)) rotateY(-102.86deg);
    }
    .show-maryland {
      transform: translateZ(calc(var(--big-cube-width) / 2 / -0.485)) rotateY(-154.29deg);
    }
    .show-pennsylvania {
      transform: translateZ(calc(var(--big-cube-width) / 2 / -0.485)) rotateY(-205.72deg);
    }
    .show-psu {
      transform: translateZ(calc(var(--big-cube-width) / 2 / -0.485)) rotateY(-257.15deg);
    }
    .show-washington {
      transform: translateZ(calc(var(--big-cube-width) / 2 / -0.485)) rotateY(-308.58deg);
    }
  }

  @media (min-width: 992px) {
    padding-bottom: 17.7rem;
    transform: translateX(1rem);
    .face {
      h5,
      h6 {
        font-size: 0.9rem;
      }
    }
  }

  @media (min-width: 1200px) {
    padding-bottom: 20.7rem;
    transform: translateX(-1rem);
    .face {
      h5,
      h6 {
        font-size: 1rem;
      }
    }
  }
`;

export default BigCube;
