import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context";

const HamburgerMenu = () => {
  const { isSidebarOpen, toggleSidebar } = useGlobalContext();

  return (
    <Wrapper
      type="button"
      onClick={toggleSidebar}
      aria-label="Navigation Menu"
      className={`${isSidebarOpen ? "ham-open" : ""}`}
    >
      <div
        className={`${isSidebarOpen ? "line top open-top" : "line top"}`}
      ></div>
      <div
        className={`${
          isSidebarOpen ? "line middle open-middle" : "line middle"
        }`}
      ></div>
      <div
        className={`${
          isSidebarOpen ? "line bottom open-bottom" : "line bottom"
        }`}
      ></div>
    </Wrapper>
  );
};
const Wrapper = styled.button`
  position: absolute;
  right: 0;
  width: 5rem;
  height: 100%;
  border: none;
  border-left: var(--small-border);
  background-color: var(--main);
  transition: background-color 0.5s 0.5s;

  &:hover {
    cursor: pointer;
  }

  .line {
    position: absolute;
    left: 1.4rem;
    width: 2rem;
    height: 0.2rem;
    background-color: var(--black);
    transition: top var(--hamburger) var(--hamburger),
      transform var(--hamburger), width var(--hamburger) var(--hamburger),
      left var(--hamburger) var(--hamburger);
  }

  .top {
    top: 1.7rem;
  }
  .middle {
    top: 2.3rem;
  }
  .bottom {
    top: 2.9rem;
  }

  .open-top {
    top: 2.3rem;
    transform: rotate(-45deg);
    transition: top var(--hamburger),
      transform var(--hamburger) var(--hamburger);
  }
  .open-middle {
    width: 0;
    left: 2.3rem;
    transition: width var(--hamburger), left var(--hamburger);
  }
  .open-bottom {
    top: 2.3rem;
    transform: rotate(-135deg);
    transition: top var(--hamburger),
      transform var(--hamburger) var(--hamburger);
  }

  @media (min-width: 992px) {
    display: none;
  }
`;

export default HamburgerMenu;
