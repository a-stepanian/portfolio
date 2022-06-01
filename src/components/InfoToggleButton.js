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
  width: 4rem;
  height: 4rem;
  border: none;
  background-color: transparent;

  .line {
    position: absolute;
    right: 0rem;
    width: 1.5rem;
    height: 0.2rem;
    background-color: var(--black);
    transition: 0.5s;
  }

  .vertical {
    top: 1.7rem;
    transform: rotate(90deg);
  }
  .vertical-open {
    transform: rotate(270deg);
    width: 0;
    right: 0.75rem;
  }

  .horizontal {
    top: 1.7rem;
  }
  .horizontal-open {
    transform: rotate(180deg);
  }

  @media (min-width: 480px) {
    &:hover {
      cursor: pointer;
    }
  }
`;

export default InfoToggleButton;
