import styled from "styled-components";
import ScrollingText from "./ScrollingText";

const MarqueeTop = () => {
  return (
    <Wrapper>
      <ScrollingText />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 50px;
  border: 2px solid var(--black);
  background-color: var(--main-pale);
  @media (min-width: 992px) {
    border: 3px solid var(--black);
  }
`;

export default MarqueeTop;
