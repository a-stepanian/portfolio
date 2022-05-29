import styled from "styled-components";
import { HamburgerMenu } from "./index";
import { useGlobalContext } from "../context";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";

const Navbar = () => {
  const {
    scrollToProjectsSection,
    scrollToExperienceSection,
    scrollToContactSection,
  } = useGlobalContext();

  return (
    <Wrapper>
      <div className="left-box" />
      <button
        type="button"
        className="logo"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <h1>Alex Stepanian</h1>
      </button>
      <div className="nav-links">
        <button type="button" onClick={scrollToProjectsSection}>
          Projects
        </button>
        <button type="button" onClick={scrollToExperienceSection}>
          Experience
        </button>
        <button type="button" onClick={scrollToContactSection}>
          Contact
        </button>
      </div>
      <HamburgerMenu />
      <div className="right-box">
        <a href="/">
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/a-stepanian"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
        <a href="/">
          <AiTwotoneMail />
        </a>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 5rem;
  border: 0.1rem solid var(--black);
  background-color: var(--white);
  display: flex;
  align-items: center;
  overflow-x: hidden;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);

  .left-box {
    height: 100%;
    width: 2rem;
    border-right: 0.1rem solid var(--black);
    background-color: var(--main);
  }

  .logo {
    border: none;
    margin-left: 1rem;
    background: transparent;
    h1 {
      color: var(--black);
      font-size: 1.2rem;
      font-weight: 400;
      white-space: nowrap;
      &:hover {
        cursor: pointer;
      }
    }
  }

  .nav-links {
    display: none;
  }

  .right-box {
    display: none;
  }

  @media (min-width: 992px) {
    border: 0.15rem solid var(--black);

    .left-box {
      border-right: 0.15rem solid var(--black);
    }

    .nav-links {
      position: absolute;
      left: calc(50vw - 10rem);
      width: 20rem;
      display: flex;
      justify-content: space-between;
      button {
        padding: 0.5rem;
        border: none;
        background: transparent;
        font-size: 1rem;
        color: var(--black);
        text-decoration: none;
        &:hover {
          cursor: pointer;
          text-decoration: underline;
        }
      }
    }

    .right-box {
      display: flex;
      position: absolute;
      right: 0;
      height: 100%;
      width: 15rem;
      border-left: 0.15rem solid var(--black);
      background-color: var(--main);
      justify-content: space-evenly;
      align-items: center;
      a {
        height: 2.5rem;
        width: 2.5rem;
        color: var(--black);
        transition: 0.2s;
        display: flex;
        align-items: center;
        justify-content: center;
        &:nth-of-type(1) {
          font-size: 1.5rem;
          &:hover {
            font-size: 2rem;
          }
        }
        &:nth-of-type(2) {
          font-size: 1.6rem;
          &:hover {
            font-size: 2.2rem;
          }
        }
        &:nth-of-type(3) {
          font-size: 1.7rem;
          &:hover {
            font-size: 2.3rem;
          }
        }
      }
    }
  }
`;

export default Navbar;
