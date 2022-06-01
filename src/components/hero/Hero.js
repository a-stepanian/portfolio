import { useEffect } from "react";
import styled from "styled-components";
import {
  HeroLeftBox,
  HeroBottomBox,
  HeroRightBox,
  HeroTopBox,
  HeroIllusionBox,
  InnerBox,
  BigBlock,
} from "../index";

const Hero = () => {
  useEffect(() => {
    setTimeout(() => {
      const coloredBox = document.querySelector(".big-block");
      coloredBox.classList.add("remove");
    }, 4500);
  });
  return (
    <Wrapper>
      <HeroLeftBox />
      <HeroBottomBox />
      <HeroRightBox />
      <HeroTopBox />
      <HeroIllusionBox />
      <BigBlock />
      <InnerBox />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  .remove {
    display: none;
  }
`;

export default Hero;
