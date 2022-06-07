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
  HeroCube,
} from "../index";

const Hero = () => {
  useEffect(() => {
    setTimeout(() => {
      const coloredBox = document.querySelector(".big-block");
      coloredBox.classList.add("remove");
    }, 5000);
  });
  return (
    <Wrapper>
      <HeroLeftBox />
      <HeroBottomBox />
      <HeroRightBox />
      <HeroTopBox />
      <HeroIllusionBox />
      <BigBlock />
      <HeroCube />
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
