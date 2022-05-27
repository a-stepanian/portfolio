import { HomeMenu, MarqueeTop, MarqueeBottom } from "../components";
import styled from "styled-components";

const HomePage = () => {
  return (
    <Wrapper>
      <MarqueeTop />
      <HomeMenu />
      <MarqueeBottom />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export default HomePage;
