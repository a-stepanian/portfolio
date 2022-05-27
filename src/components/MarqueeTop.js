import styled from "styled-components";

const MarqueeTop = () => {
  return <Wrapper>MarqueeTop</Wrapper>;
};

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 50px;
  border: 2px solid var(--black);
  background-color: var(--white);
  @media (min-width: 992px) {
    width: calc(100% - 50px);
    left: 50px;
    border: 3px solid var(--black);
    border-left: none;
  }
`;

export default MarqueeTop;
