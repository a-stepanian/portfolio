import {
  HomeMenu,
  MarqueeTop,
  MarqueeLeft,
  MarqueeRight,
  MarqueeBottom,
} from "../components";
import styled from "styled-components";

const HomePage = () => {
  return (
    <Wrapper>
      <MarqueeLeft />
      <MarqueeBottom />
      <MarqueeRight />
      <MarqueeTop />
      <HomeMenu />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export default HomePage;
