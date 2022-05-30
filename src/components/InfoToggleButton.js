import styled from "styled-components";

const InfoToggleButton = ({ isInfoOpen, setIsInfoOpen }) => {
  return (
    <Wrapper>
      <div
        className={`${
          isInfoOpen ? "line vertical vertical-open" : "line vertical"
        }`}
      />
      <div
        className={`${
          isInfoOpen ? "line horizontal horizontal-open" : "line horizontal"
        }`}
      />
    </Wrapper>
  );
};

const Wrapper = styled.button`
  position: relative;
  width: 5rem;
  height: 5rem;
  border: none;
  background-color: transparent;
  margin: 1rem 0;

  .line {
    position: absolute;
    left: 1.3rem;
    width: 2rem;
    height: 0.2rem;
    border-radius: 0.1rem;
    background-color: var(--black);
    transition: 0.5s;
  }

  .vertical {
    top: 2.2rem;
    transform: rotate(90deg);
  }
  .vertical-open {
    transform: rotate(270deg);
    width: 0;
    left: 2.2rem;
  }

  .horizontal {
    top: 2.2rem;
  }
  .horizontal-open {
    top: 2.2rem;
    transform: rotate(180deg);
  }

  @media (min-width: 480px) {
    &:hover {
      cursor: pointer;
    }
  }
`;

export default InfoToggleButton;
