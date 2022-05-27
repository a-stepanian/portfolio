import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  HomeLogo,
  HomeProjects,
  HomeContact,
  HomeResume,
  HomeMenuSmallScreen,
} from "./index";

const HomeMenu = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [hoveredOver, setHoveredOver] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  if (innerWidth < 992) {
    return <HomeMenuSmallScreen />;
  }

  return (
    <Wrapper>
      <HomeLogo hoveredOver={hoveredOver} setHoveredOver={setHoveredOver} />
      <HomeProjects hoveredOver={hoveredOver} setHoveredOver={setHoveredOver} />
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
`;

export default HomeMenu;
