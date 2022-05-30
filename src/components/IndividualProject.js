import { useState } from "react";
import styled from "styled-components";
import InfoToggleButton from "./InfoToggleButton";
import { RiExternalLinkFill } from "react-icons/ri";

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
          <p>{site.description}</p>
          <p>{site.learnings}</p>

          {site.builtWith.map((tech, index) => {
            return <span key={index}>{tech}</span>;
          })}
          <a href={site.url} target="_blank" rel="noreferrer">
            <RiExternalLinkFill />
          </a>
        </div>
      </div>
      <footer onClick={toggleInfo}>
        <h3>{site.title}</h3>
        <InfoToggleButton
          isInfoOpen={isInfoOpen}
          setIsInfoOpen={setIsInfoOpen}
        />
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  position: relative;
  background-color: rgba(221, 255, 208, 0.1);
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
    background-color: var(--main);
    transition: height var(--info), padding var(--info);
    overflow: hidden;
    span {
      opacity: 0;
      padding: 0.2rem;
      color: var(--dark-gray);
      transition: opacity var(--info);
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
      font-size: 1.5rem;
      font-weight: 600;
    }
  }
`;

export default IndividualProject;
