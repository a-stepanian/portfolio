import { useState } from "react";
import styled from "styled-components";
import {
  HomeAbout,
  HomeLogo,
  HomeProjects,
  HomeContact,
  HomeResume,
} from "./index";

const HomeMenu = () => {
  const [hoveredOver, setHoveredOver] = useState("");
  return (
    <Wrapper>
      <HomeLogo hoveredOver={hoveredOver} setHoveredOver={setHoveredOver} />
      <HomeProjects hoveredOver={hoveredOver} setHoveredOver={setHoveredOver} />
      <HomeAbout hoveredOver={hoveredOver} setHoveredOver={setHoveredOver} />
      <HomeResume hoveredOver={hoveredOver} setHoveredOver={setHoveredOver} />
      <HomeContact hoveredOver={hoveredOver} setHoveredOver={setHoveredOver} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 50px;
  width: 100%;
  height: calc(100vh - 100px);
  background-color: var(--white);
  @media (min-width: 992px) {
    width: calc(100% - 100px);
    left: 50px;
  }
`;

export default HomeMenu;
