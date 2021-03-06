import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context";
import SidebarIcons from "./SidebarIcons";

const Sidebar = () => {
  const { isSidebarOpen, scrollToTargetAdjusted } = useGlobalContext();

  return (
    <Wrapper>
      <nav className={`${isSidebarOpen ? "nav-open" : null}`}>
        <div
          className={`${
            isSidebarOpen ? "nav-links nav-links-open" : "nav-links"
          }`}
        >
          <button
            type="button"
            onClick={() =>
              scrollToTargetAdjusted(".portfolio-section-scroll-target")
            }
          >
            Portfolio
          </button>
          <div className="divider" />
          <button
            type="button"
            onClick={() =>
              scrollToTargetAdjusted(".experience-section-scroll-target")
            }
          >
            Background
          </button>
          <div className="divider" />

          <button
            type="button"
            onClick={() =>
              scrollToTargetAdjusted(".contact-section-scroll-target")
            }
          >
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
  z-index: 6;
  display: block;
  animation: appear var(--hero) forwards;

  @keyframes appear {
    0% {
      opacity: 0;
    }
    99% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  /* ---------------------------------- */
  /* GREEN NAV CONTAINER STYLING WHEN   */
  /* CLOSED AND OPEN                    */
  /* ---------------------------------- */

  nav {
    user-select: none;
    pointer-events: none;
    height: 5rem;
    width: 2.1rem;
    border: var(--small-border);
    background-color: var(--main);
    transition: width var(--hamburger) var(--hamburger), height var(--hamburger),
      box-shadow var(--hamburger);
    &::before {
      position: absolute;
      top: 0;
      left: 0;
      content: "";
      margin-top: 5rem;
      height: 100vh;
      width: 100vw;
      z-index: -1;
      background-color: transparent;
      transition: background-color var(--hamburger);
    }
  }

  .nav-open {
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
    pointer-events: auto;
    width: calc(100vw - 5rem);
    height: 20rem;
    transition: width var(--hamburger), height var(--hamburger) var(--hamburger),
      box-shadow var(--hamburger) var(--hamburger);
    &::before {
      background-color: var(--sidebar-hider);
      transition: background-color var(--hamburger) var(--hamburger);
    }
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
      font-size: 1.5rem;
      opacity: 0;
      transition: opacity var(--hamburger);
      color: var(--black);
      text-decoration: none;
    }
    .divider {
      opacity: 0;
      width: 100%;
      border-top: var(--small-border);
      transition: opacity var(--hamburger);
    }
  }

  /* ---------------------------------- */
  /* STYLING WHEN THE SIDEBAR IS OPEN   */
  /* ---------------------------------- */

  .nav-links-open {
    button,
    .divider {
      opacity: 1;
      transition: opacity var(--hamburger) var(--hamburger);
    }
  }

  /* ---------------------------------- */
  /* MEDIA QUERIES                      */
  /* ---------------------------------- */

  @media (min-width: 480px) {
    .nav-links {
      button:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
    .nav-open {
      width: calc(100vw - 6rem);
    }
  }

  @media (min-width: 992px) {
    display: none;
  }
`;

export default Sidebar;
