import styled from "styled-components";
import {
  HeroLeftBox,
  ColoredBox,
  HeroBottomBox,
  HeroRightBox,
  HeroTopBox,
  HeroIllusionBox,
} from "../index";

const Hero = () => {
  return (
    <Wrapper>
      <HeroLeftBox />
      <HeroBottomBox />
      <HeroRightBox />
      <HeroTopBox />
      <HeroIllusionBox />
      <ColoredBox />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
`;

export default Hero;
