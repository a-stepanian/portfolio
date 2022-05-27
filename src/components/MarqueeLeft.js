import styled from "styled-components";

const MarqueeLeft = () => {
  return <Wrapper>MarqueeLeft</Wrapper>;
};

const Wrapper = styled.div`
  display: none;
  @media (min-width: 992px) {
    position: absolute;
    left: 0;
    width: 50px;
    height: calc(100% - 50px);
    border: 3px solid var(--black);
    border-bottom: none;
    background-color: var(--white);
    display: block;
  }
`;

export default MarqueeLeft;
