import styled from "styled-components";
import { HamburgerMenu } from "./index";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const {
    scrollToProjectsSection,
    scrollToExperienceSection,
    scrollToContactSection,
  } = useGlobalContext();
  return (
    <Wrapper>
      <div className="left-box" />
      <div className="logo">Alex Stepanian</div>
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
      <div className="right-box" />
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
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);

  .left-box {
    height: 100%;
    width: 2rem;
    border-right: 0.1rem solid var(--black);
    background-color: var(--main);
  }

  .logo {
    margin-left: 1rem;
    font-size: 1.2rem;
    font-weight: 400;
    white-space: nowrap;
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
      display: block;
      position: absolute;
      right: 0;
      height: 100%;
      width: 15rem;
      border-left: 0.15rem solid var(--black);
      background-color: var(--main);
    }
  }
`;

export default Navbar;
