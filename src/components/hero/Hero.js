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
    }, 4100);
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
  overflow: hidden;

  .remove {
    display: none;
  }
`;

export default Hero;
