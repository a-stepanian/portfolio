import styled from "styled-components";

const MarqueeBottom = () => {
  return <Wrapper>MarqueeBottom</Wrapper>;
};

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  border: 2px solid var(--black);
  background-color: var(--main-pale);
  @media (min-width: 992px) {
    width: calc(100% - 50px);
    right: 50px;
    border: 3px solid var(--black);
    border-right: none;
  }
`;

export default MarqueeBottom;
