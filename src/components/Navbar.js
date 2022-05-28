import styled from "styled-components";
import { HamburgerMenu } from "./index";

const Navbar = () => {
  return (
    <Wrapper>
      <div className="left-box" />
      <div className="logo">Alex Stepanian</div>
      <div className="nav-links">
        <a href="/">Projects</a>
        <a href="/">Resume</a>
        <a href="/">Contact</a>
      </div>
      <HamburgerMenu />
      <div className="right-box" />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  position: relative;
  width: 100%;
  height: 5rem;
  border: 0.1rem solid var(--black);
  background-color: var(--white);
  display: flex;
  align-items: center;
  overflow-x: hidden;

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
      margin-left: 10rem;
      width: 20rem;
      display: flex;
      justify-content: space-between;
      a {
        color: var(--black);
        text-decoration: none;
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
