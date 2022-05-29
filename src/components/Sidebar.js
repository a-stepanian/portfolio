import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context";
import SidebarIcons from "./SidebarIcons";

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
        </div>
      </nav>
      <SidebarIcons />
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
    transition: width var(--hamburger) var(--hamburger), height var(--hamburger),
      box-shadow var(--hamburger);
  }

  .nav-open {
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
    pointer-events: auto;
    width: calc(100vw - 5rem);
    height: 25rem;
    transition: width var(--hamburger), height var(--hamburger) var(--hamburger),
      box-shadow var(--hamburger) var(--hamburger);
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
      width: 3rem;
      border-top: 0.15rem solid var(--black);
      transition: opacity var(--hamburger), width var(--hamburger);
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
    .divider {
      transition: opacity var(--hamburger) var(--hamburger),
        width var(--hamburger) var(--hamburger);
      opacity: 1;
      width: 12rem;
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
