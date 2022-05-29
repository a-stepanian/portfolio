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

  /* ---------------------------------- */
  /* ORANGE NAV CONTAINER STYLING WHEN  */
  /* CLOSED AND OPEN                    */
  /* ---------------------------------- */

  nav {
    user-select: none;
    pointer-events: none;
    height: 5rem;
    width: 2.1rem;
    border: 0.1rem solid var(--black);
    background-color: var(--main);
    transition: width var(--hamburger) var(--hamburger), height var(--hamburger);
  }

  .nav-open {
    pointer-events: auto;
    width: calc(100vw - 5rem);
    height: 25rem;
    transition: width var(--hamburger), height var(--hamburger) var(--hamburger);
  }

  /* ---------------------------------- */
  /* STYLING INSIDE THE NAV CONTAINER   */
  /* WHEN THE SIDEBAR IS CLOSED         */
  /* ---------------------------------- */

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
      font-size: 0.5rem;
      opacity: 0;
      transition: opacity var(--hamburger), font-size var(--hamburger);
      color: var(--black);
      text-decoration: none;
      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
    .divider {
      opacity: 0;
      width: 15rem;
      border-top: 0.15rem solid var(--black);
      transition: opacity var(--hamburger);
    }
    .icon-container {
      display: flex;
      width: 15rem;
      justify-content: space-evenly;
      align-items: center;
      opacity: 0;
      transition: opacity var(--hamburger);
      a {
        height: 2.5rem;
        width: 2.5rem;
        color: var(--black);
        transition: 0.2s;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.5rem;
      }
    }
  }

  /* ---------------------------------- */
  /* STYLING WHEN THE SIDEBAR IS OPEN   */
  /* ---------------------------------- */

  .nav-links-open {
    button {
      font-size: 1.5rem;
      opacity: 1;
      transition: opacity var(--hamburger) var(--hamburger),
        font-size var(--hamburger) var(--hamburger);
    }
    .icon-container {
      transition: opacity var(--hamburger) var(--hamburger);
      opacity: 1;
      a:nth-of-type(1) {
        font-size: 1.5rem;
        &:hover {
          font-size: 2rem;
        }
      }
      a:nth-of-type(2) {
        font-size: 1.6rem;
        &:hover {
          font-size: 2.2rem;
        }
      }
      a:nth-of-type(3) {
        font-size: 1.7rem;
        &:hover {
          font-size: 2.3rem;
        }
      }
    }
    .divider {
      transition: opacity var(--hamburger) var(--hamburger);
      opacity: 1;
    }
  }

  /* ---------------------------------- */
  /* MEDIA QUERIES                      */
  /* ---------------------------------- */

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
