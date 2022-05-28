import styled from "styled-components";
import ScrollingText from "./ScrollingText";

const MarqueeBottom = () => {
  return (
    <Wrapper>
      <ScrollingText />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  border: 2px solid var(--black);
  background-color: var(--main-pale);
  overflow: hidden;
  @media (min-width: 992px) {
    border: 3px solid var(--black);
  }
`;

export default MarqueeBottom;
