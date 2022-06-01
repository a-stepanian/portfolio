import { useState } from "react";
import styled from "styled-components";
import InfoToggleButton from "./InfoToggleButton";
import { RiExternalLinkFill } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";

const IndividualProject = ({ site }) => {
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  const toggleInfo = () => {
    if (isInfoOpen) setIsInfoOpen(false);
    if (!isInfoOpen) setIsInfoOpen(true);
  };

  return (
    <Wrapper>
      <div className="img-container">
        <img
          src={site.thumbnail}
          alt={`screenshot of ${site.title} website`}
          onClick={toggleInfo}
        />
        <div className={`${isInfoOpen ? "info info-open" : "info"}`}>
          <div>
            <h4>Technologies:</h4>
            <div className="tech">
              {site.builtWith.map((tech, index) => {
                return <p key={index}>{tech}</p>;
              })}
            </div>
          </div>
          <div className="links">
            <a href={site.url} target="_blank" rel="noreferrer">
              <span>Visit Website</span>
              <RiExternalLinkFill />
            </a>
            <a href={site.repo} target="_blank" rel="noreferrer">
              <span>View Repo</span>
              <BsGithub />
            </a>
          </div>
        </div>
      </div>
      <footer onClick={toggleInfo}>
        <div>
          <h3>{site.title}</h3>
          <InfoToggleButton
            isInfoOpen={isInfoOpen}
            setIsInfoOpen={setIsInfoOpen}
          />
        </div>
        <p>{site.description}</p>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  position: relative;
  background-color: rgba(221, 255, 208, 0.3);
  box-shadow: 0 2px 5px var(--main-dark);
  padding: 1rem;
  h3,
  p,
  span {
    font-family: "Lato", sans-serif;
  }
  max-width: 25rem;

  .img-container {
    position: relative;
    background-color: var(--black);
  }
  img {
    display: block;
    width: 100%;
    object-fit: cover;
  }

  .info {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 0;
    width: 100%;
    padding: 0 1rem;
    background-color: var(--main);
    transition: height var(--info), padding var(--info);
    box-shadow: inset 0 3px 3px rgba(0, 0, 0, 0.1),
      inset 3px 0 3px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h4 {
      font-size: 1.2rem;
      font-weight: 900;
    }
    .tech {
      display: flex;
      flex-wrap: wrap;
      p {
        margin: 0.2rem;
        border: 0.1rem solid var(--black);
        background-color: gray;
        padding: 0.2rem;
        white-space: nowrap;
      }
    }
    .links {
      display: flex;
      justify-content: space-between;
      margin: 0 1rem 2rem;
    }
    a {
      color: var(--black);
      font-size: 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      span {
        font-size: 1.2rem;
        font-weight: 900;
      }
    }
  }
  .info-open {
    height: 100%;
    padding: 1rem;
    span {
      opacity: 1;
    }
  }

  footer {
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      h3 {
        font-family: "Bebas Neue", cursive;
        font-size: 2rem;
        font-weight: 600;
      }
    }
    p {
      padding-bottom: 0.5rem;
    }
  }

  @media (min-width: 480px) {
    &:hover {
      cursor: pointer;
    }
    .info:hover {
      cursor: auto;
    }
  }
`;

export default IndividualProject;
