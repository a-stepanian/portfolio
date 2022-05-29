import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";

const Sidebar = () => {
  const {
    isSidebarOpen,
    scrollToProjectsSection,
    scrollToExperienceSection,
    scrollToContactSection,
  } = useGlobalContext();
  return (
    <Wrapper>
      <nav className={`${isSidebarOpen && "nav-open"}`}>
        <div
          className={`${
            isSidebarOpen ? "nav-links nav-links-open" : "nav-links"
          }`}
        >
          <button type="button" onClick={scrollToProjectsSection}>
            Projects
          </button>
          <div className="divider" />
          <button type="button" onClick={scrollToExperienceSection}>
            Experience
          </button>
          <div className="divider" />

          <button type="button" onClick={scrollToContactSection}>
            Contact
          </button>
          <div className="divider" />

          <div className="icon-container">
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
        </div>
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  nav {
    height: 5rem;
    width: 2.1rem;
    border: 0.1rem solid var(--black);
    background-color: var(--main);
    transition: width 0.3s 0.3s, height 0.3s;
  }

  .nav-open {
    width: calc(100vw - 5rem);
    height: 100vh;
    transition: width 0.3s, height 0.3s 0.3s;
  }

  .nav-links {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    button {
      border: none;
      background: transparent;
      font-size: 1.2rem;
      opacity: 0;
      transition: opacity 0.3s, font-size 0.3s;
      color: var(--black);
      text-decoration: none;
      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }
  .nav-links-open {
    button {
      font-size: 1.5rem;
      opacity: 1;
      transition: opacity 0.3s 0.3s, font-size 0.3s 0.3s;
    }
    .icon-container {
      transition: opacity 0.3s 0.3s;
      opacity: 1;
    }
    .divider {
      transition: opacity 0.3s 0.3s;
      opacity: 1;
    }
  }

  .divider {
    opacity: 0;
    width: 15rem;
    border-top: 0.15rem solid var(--black);
    transition: opacity 0.3s;
  }

  .icon-container {
    display: flex;
    width: 15rem;
    justify-content: space-evenly;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s;
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

  @media (min-width: 480px) {
    .nav-open {
      width: calc(100vw - 5.5rem);
    }
  }

  @media (min-width: 992px) {
    display: none;
  }
`;

export default Sidebar;
