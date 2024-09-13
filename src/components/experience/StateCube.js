import styled from "styled-components";

const StateCube = ({ cubeFace }) => {
  return (
    <Wrapper>
      <div className="cube-positioner">
        <div className={`cube show-${cubeFace === null ? "texas" : cubeFace}`}>
          <div className="face texas">
            <img src="tx.png" alt={`Outline of the Texas state map`} />
            <div className="location-date">
              <h5>Austin, TX(remote)</h5>
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
          <div className="face washington">
            <img src="wa.png" alt={`Outline of the Washington state map`} />
            <div className="location-date">
              <h5>Longview, WA</h5>
              <h6>2021 - Present</h6>
            </div>
          </div>
          <div className="face psu">
            <img src="psu.png" alt={`Penn State University Logo`} />
            <div className="location-date">
              <h5 className="state-college">State College, PA</h5>
              <h6>2008 - 2012</h6>
            </div>
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
  width: 7rem;
  transform: translateX(-7rem);
  overflow: hidden;
  .cube-positioner {
    transform: translateX(0.9rem);
    width: var(--cube-width);
    height: var(--cube-width);
    perspective: 6rem; //zoom in and out of cube
    padding-bottom: 6.55rem;
  }

  .cube {
    width: 100%;
    height: 100%;
    position: relative;
    padding-top: 0.5rem;
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
      white-space: nowrap;
    }
    .state-college {
      font-size: 0.4rem;
    }
  }

  /* INITIAL STATIC POSITION OF CUBE FACES */
  .texas {
    --big-cube-z-move: ;
    transform: rotateY(0deg) translateZ(5.4rem);
  }
  .oregon {
    --big-cube-z-move: ;
    transform: rotateY(51.43deg) translateZ(5.4rem);
  }
  .georgia {
    transform: rotateY(102.86deg) translateZ(5.4rem);
  }
  .maryland {
    transform: rotateY(154.29deg) translateZ(5.4rem);
  }
  .pennsylvania {
    transform: rotateY(205.72deg) translateZ(5.4rem);
  }
  .washington {
    transform: rotateY(257.15deg) translateZ(5.4rem);
  }
  .psu {
    transform: rotateY(308.58deg) translateZ(5.4rem);
  }

  /* TRANSFORM OPTIONS FOR DISPLAYING A SPECIFIC FACE */
  .show-texas {
    transform: translateZ(-5.4rem) rotateY(0deg);
  }
  .show-oregon {
    transform: translateZ(-5.4rem) rotateY(-51.43deg);
  }
  .show-georgia {
    transform: translateZ(-5.4rem) rotateY(-102.86deg);
  }
  .show-maryland {
    transform: translateZ(-5.4rem) rotateY(-154.29deg);
  }
  .show-pennsylvania {
    transform: translateZ(-5.4rem) rotateY(-205.72deg);
  }
  .show-psu {
    transform: translateZ(-5.4rem) rotateY(-257.15deg);
  }
  .show-washington {
    transform: translateZ(-5.4rem) rotateY(-308.58deg);
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export default StateCube;
