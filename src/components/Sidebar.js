import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context";

const Sidebar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useGlobalContext();
  return (
    <Wrapper>
      <nav className={`${isSidebarOpen && "nav-open"}`}>
        <div
          className={`${
            isSidebarOpen ? "nav-links nav-links-open" : "nav-links"
          }`}
        >
          <a href="/" onClick={() => setIsSidebarOpen(false)}>
            Projects
          </a>
          <a href="/" onClick={() => setIsSidebarOpen(false)}>
            Resume
          </a>
          <a href="/" onClick={() => setIsSidebarOpen(false)}>
            Contact
          </a>
        </div>
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  nav {
    height: 5rem;
    width: 2.1rem;
    border: 0.1rem solid var(--black);
    background-color: var(--main);
    transition: width 0.3s 0.3s, height 0.3s;
  }

  .nav-open {
    width: calc(100vw - 6rem);
    height: 20rem;
    transition: width 0.3s, height 0.3s 0.3s;
  }

  .nav-links {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    font-size: 0.5rem;
    transition: font-size 0.3s;
    a {
      opacity: 0;
      transition: opacity 0.3s;
      color: var(--black);
      text-decoration: none;
    }
  }
  .nav-links-open {
    font-size: 1.2rem;
    transition: font-size 0.3s 0.3s;
    a {
      opacity: 1;
      transition: opacity 0.3s 0.3s;
    }
  }

  @media (min-width: 992px) {
    display: none;
  }
`;

export default Sidebar;
