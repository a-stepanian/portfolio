import React from "react";
import styled from "styled-components";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";
import { useGlobalContext } from "../../context";
import { useEffect } from "react";

const SidebarIcons = () => {
  const { isSidebarOpen, setIsSidebarOpen, scrollToTargetAdjusted } =
    useGlobalContext();

  //Add hover class for menu buttons only once the menu is fully opened.
  useEffect(() => {
    const icon1 = document.querySelectorAll(".menu-icon")[0];
    const icon2 = document.querySelectorAll(".menu-icon")[1];
    const icon3 = document.querySelectorAll(".menu-icon")[2];
    if (isSidebarOpen) {
      setTimeout(() => {
        icon1.classList.add("grow");
        icon2.classList.add("grow");
        icon3.classList.add("grow");
      }, 1000);
    } else {
      icon1.classList.remove("grow");
      icon2.classList.remove("grow");
      icon3.classList.remove("grow");
    }
  }, [isSidebarOpen]);

  return (
    <Wrapper>
      <div
        className={`${
          isSidebarOpen
            ? "icon-container icon-container-open"
            : "icon-container"
        }`}
      >
        <a
          className="linkedin"
          href="https://www.linkedin.com/in/alexander-stepanian/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn Account"
        >
          <BsLinkedin className="menu-icon" />
        </a>
        <a
          className="github"
          href="https://github.com/a-stepanian"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub aria-label="Github Account" className="menu-icon" />
        </a>
        <button
          className="email-button"
          type="button"
          onClick={() =>
            scrollToTargetAdjusted(".contact-section-scroll-target")
          }
        >
          <AiTwotoneMail
            onClick={() => setIsSidebarOpen(false)}
            className="menu-icon"
          />
        </button>
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

    a,
    .email-button {
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
    .email-button {
      border: none;
      background: transparent;
    }
  }

  .icon-container-open {
    height: 15rem;
    transition: height var(--hamburger) var(--hamburger),
      opacity 0.01s var(--hamburger),
      box-shadow var(--hamburger) var(--hamburger);
    opacity: 1;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);

    a,
    .email-button {
      pointer-events: auto;
      opacity: 1;
      transition: font-size var(--hamburger) var(--hamburger),
        opacity var(--hamburger) var(--hamburger);
    }
    .linkedin {
      font-size: 1.5rem;
    }
    .github {
      font-size: 1.6rem;
    }
    .email-button {
      font-size: 1.7rem;
      &:hover {
        cursor: pointer;
      }
    }
    .grow {
      transition: 0.2s;
      &:hover {
        transform: scale(1.4);
      }
    }
  }
`;

export default SidebarIcons;
