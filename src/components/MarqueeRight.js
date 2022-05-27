import styled from "styled-components";

const MarqueeRight = () => {
  return <Wrapper>MarqueeRight</Wrapper>;
};

const Wrapper = styled.div`
  display: none;
  @media (min-width: 992px) {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 50px;
    height: calc(100% - 50px);
    border: 3px solid var(--black);
    border-top: none;
    background-color: var(--main-pale);
    display: flex;
  }
`;

export default MarqueeRight;
