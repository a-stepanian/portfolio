import styled from "styled-components";

const HomeMenuSmallScreen = () => {
  return (
    <Wrapper>
      <a href="/" className="home-logo">
        Alex Stepanian <br /> Web Developer
      </a>
      <a href="/" className="projects">
        PROJECTS
      </a>
      <a href="/" className="resume">
        RESUME
      </a>
      <a href="/" className="about">
        ABOUT
      </a>
      <a href="/" className="contact">
        CONTACT
      </a>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 50px;
  width: 100%;
  height: calc(100vh - 100px);
  background-color: var(--white);
  a {
    color: var(--black);
    text-decoration: none;
    transition: 0.4s;
    &:hover {
      background-color: var(--main-light);
    }
  }
  .home-logo {
    height: 24%;
    background-color: var(--main-light);
    border: 2px solid var(--black);
    border-top: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-weight: 400;
  }
  .projects {
    height: 19%;
    background-color: var(--white);
    border: 2px solid var(--black);
    border-top: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-weight: 400;
  }
  .resume {
    height: 19%;
    border: 2px solid var(--black);
    border-top: none;
    background-color: var(--white);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-weight: 400;
  }
  .about {
    background-color: var(--white);
    height: 19%;
    border: 2px solid var(--black);
    border-top: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-weight: 400;
  }
  .contact {
    height: 19%;
    border: 2px solid var(--black);
    background-color: var(--white);
    border-top: none;
    border-bottom: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-weight: 400;
  }

  @media (min-width: 480px) {
    a {
      font-size: 3rem;
    }
  }
`;

export default HomeMenuSmallScreen;
