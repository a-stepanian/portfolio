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
            <h4>Built with:</h4>
            <div className="tech">
              {site.builtWith.map((tech, index) => {
                return <p key={index}>{tech}</p>;
              })}
            </div>
          </div>
          <div className="links">
            <a href={site.url} target="_blank" rel="noreferrer">
              <RiExternalLinkFill className="web" />
              <span>Website</span>
            </a>
            <a href={site.repo} target="_blank" rel="noreferrer">
              <BsGithub />
              <span>Git Repo</span>
            </a>
          </div>
        </div>
      </div>
      <footer onClick={toggleInfo}>
        <div>
          <h3 className="project-title">{site.title}</h3>
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
  color: var(--black);
  background-color: var(--main-bg);
  border: 3px solid var(--black);
  padding: 1rem;
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
    padding: 0 0.5rem;
    background-color: var(--main-muted);
    transition: height var(--info), padding var(--info);
    box-shadow: inset 0 3px 3px rgba(0, 0, 0, 0.1),
      inset 3px 0 3px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h4 {
      font-size: 0.8rem;
      font-weight: 900;
    }
    .tech {
      display: flex;
      flex-wrap: wrap;
      p {
        font-size: 0.7rem;
        margin: 0.2rem;
        background-color: var(--black);
        color: var(--white);
        padding: 0 0.3rem 0.2rem;
        white-space: nowrap;
      }
    }
    .links {
      display: flex;
      justify-content: space-evenly;
      margin-bottom: 1rem;
    }
    a {
      height: 4.2rem;
      width: 4.2rem;
      color: var(--black);
      font-size: 1.2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      .web {
        font-size: 1.3rem;
      }
      span {
        font-size: 0.8rem;
        font-weight: 900;
      }
    }
  }
  .info-open {
    height: 100%;
    padding: 0.5rem;
    span {
      opacity: 1;
    }
  }

  footer {
    margin-top: 0.8rem;
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .project-title {
        font-family: "Bebas Neue", cursive;
        font-size: 2rem;
        font-weight: 600;
        padding: 0;
      }
    }
    p {
      padding: 0.5rem 0;
    }
  }

  @media (min-width: 330px) {
    .info {
      .tech {
        p {
          font-size: 0.9rem;
        }
      }
    }
  }
  @media (min-width: 360px) {
    .info {
      .tech {
        p {
          font-size: 1rem;
        }
      }
    }
  }

  @media (min-width: 480px) {
    &:hover {
      cursor: pointer;
    }
    .info:hover {
      cursor: auto;
    }
    .info {
      h4 {
        font-size: 1rem;
      }
      .tech {
        display: flex;
        flex-wrap: wrap;
        p {
          padding: 0 0.3rem 0.2rem;
          font-size: 1.1rem;
        }
      }
      a {
        color: var(--black);
        font-size: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        .web {
          font-size: 2.3rem;
        }
        span {
          font-size: 1rem;
          font-weight: 900;
        }
      }
    }
    footer {
      div {
        .project-title {
          font-size: 2.8rem;
        }
      }
    }
  }
`;

export default IndividualProject;
