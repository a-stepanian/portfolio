import React from "react";
import styled from "styled-components";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";
import { useGlobalContext } from "../../context";

const SidebarIcons = () => {
  const { isSidebarOpen } = useGlobalContext();
  return (
    <Wrapper>
      <div
        className={`${
          isSidebarOpen
            ? "icon-container icon-container-open"
            : "icon-container"
        }`}
      >
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

const Wrapper = styled.div`
  .icon-container {
    display: none;
    position: absolute;
    top: 5rem;
    right: -5rem;
    width: 5rem;
    height: 0;
    border-bottom: var(--small-border);
    border-right: var(--small-border);
    background-color: var(--white);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    opacity: 0;
    transition: height var(--hamburger),
      opacity 0.2s calc(var(--hamburger) - 0.2s);

    a {
      opacity: 0;
      user-select: none;
      pointer-events: none;
      height: 2.5rem;
      width: 2.5rem;
      color: var(--black);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.1rem;
      transition: font-size var(--hamburger), opacity var(--hamburger),
        box-shadow var(--hamburger);
    }
  }

  .icon-container-open {
    height: 15rem;
    transition: height var(--hamburger) var(--hamburger),
      opacity 0.01s var(--hamburger),
      box-shadow var(--hamburger) var(--hamburger);
    opacity: 1;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);

    a {
      pointer-events: auto;
      opacity: 1;
      transition: font-size var(--hamburger) var(--hamburger),
        opacity var(--hamburger) var(--hamburger);
      &:nth-of-type(1) {
        font-size: 1.5rem;
      }
      &:nth-of-type(2) {
        font-size: 1.6rem;
      }
      &:nth-of-type(3) {
        font-size: 1.7rem;
      }
    }
  }
`;

export default SidebarIcons;
