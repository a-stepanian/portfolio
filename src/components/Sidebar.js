import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context";

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
          <button type="button" onClick={scrollToExperienceSection}>
            Experience
          </button>
          <button type="button" onClick={scrollToContactSection}>
            Contact
          </button>
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
    height: 25rem;
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
