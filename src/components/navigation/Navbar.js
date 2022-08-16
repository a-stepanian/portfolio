import styled from "styled-components";
import { HamburgerMenu } from "../index";
import { useGlobalContext } from "../../context";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";

const Navbar = () => {
  const { scrollToTargetAdjusted } = useGlobalContext();

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
        <button
          type="button"
          onClick={() =>
            scrollToTargetAdjusted(".portfolio-section-scroll-target")
          }
        >
          Portfolio
        </button>
        <button
          type="button"
          onClick={() =>
            scrollToTargetAdjusted(".experience-section-scroll-target")
          }
        >
          Background
        </button>
        <button
          type="button"
          onClick={() =>
            scrollToTargetAdjusted(".contact-section-scroll-target")
          }
        >
          Contact
        </button>
      </div>
      <HamburgerMenu />
      <div className="right-box">
        <a
          href="https://www.linkedin.com/in/alexander-stepanian/"
          target="_blank"
          rel="noreferrer"
          className="linkedin"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/a-stepanian"
          target="_blank"
          rel="noreferrer"
          className="github"
        >
          <BsGithub />
        </a>
        <button
          className="email-button"
          type="button"
          onClick={() =>
            scrollToTargetAdjusted(".contact-section-scroll-target")
          }
        >
          <AiTwotoneMail />
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  width: 100%;
  height: 5rem;
  border: var(--small-border);
  background-color: var(--white);
  display: flex;
  align-items: center;
  overflow-x: hidden;

  .left-box {
    height: 100%;
    width: 1.9rem;
    border-right: var(--small-border);
    background-color: var(--main);
  }

  .logo {
    border: none;
    margin-left: 1rem;
    background: transparent;
    h1 {
      color: var(--black);
      font-size: 1.2rem;
      font-weight: 500;
      white-space: nowrap;
    }
  }

  .nav-links {
    display: none;
  }

  .right-box {
    display: none;
  }

  /* for hamburger menu component when button is clicked*/
  .ham-open {
    background-color: var(--white);
    transition: background-color 0.5s;
  }

  @media (min-width: 992px) {
    @media (min-width: 480px) {
      .logo {
        h1:hover {
          cursor: pointer;
        }
      }
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
        font-weight: 500;
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
      border-left: var(--small-border);
      background-color: var(--main);
      justify-content: space-evenly;
      align-items: center;
      a,
      .email-button {
        border: none;
        background-color: transparent;
        height: 2.5rem;
        width: 2.5rem;
        color: var(--black);
        transition: 0.2s;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .linkedin {
        font-size: 1.5rem;
        &:hover {
          font-size: 2rem;
        }
      }
      .github {
        font-size: 1.6rem;
        &:hover {
          font-size: 2.2rem;
        }
      }
      .email-button {
        font-size: 1.7rem;
        &:hover {
          font-size: 2.3rem;
          cursor: pointer;
        }
      }
    }
  }
`;

export default Navbar;
